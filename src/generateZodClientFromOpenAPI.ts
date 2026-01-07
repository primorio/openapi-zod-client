import path from "node:path";

import type { OpenAPIObject } from "openapi3-ts";
import { capitalize, pick, snakeToCamel } from "pastable/server";
import type { Options } from "prettier";
import { match } from "ts-pattern";

import { getHandlebars } from "./getHandlebars";
import { maybePretty } from "./maybePretty";
import type { TemplateContext } from "./template-context";
import { getZodClientTemplateContext } from "./template-context";

type GenerateZodClientFromOpenApiArgs<TOptions extends TemplateContext["options"] = TemplateContext["options"]> = {
    openApiDoc: OpenAPIObject;
    templatePath?: string;
    prettierConfig?: Options | null;
    options?: TOptions;
    handlebars?: ReturnType<typeof getHandlebars>;
} & (
    | {
          distPath?: never;
          /** when true, will only return the result rather than writing it to a file, mostly used for easier testing purpose */
          disableWriteToFile: true;
      }
    | { distPath: string; disableWriteToFile?: false }
);

/**
 * Converts snake_case property names to camelCase in both schemas and types
 */
const convertSnakeToCamelInSchemaAndTypes = (code: string): string => {
    // Convert property names in z.object({ snake_case: ... }) and TypeScript types
    // This regex matches property names in object literals (both quoted and unquoted)
    // It looks for patterns like: property_name: or "property_name": or property_name?:
    code = code.replace(
        /(['"]?)([a-z_][a-z0-9_]*)(['"]?)(\??\s*):/g,
        (match, quote1, propName, quote2, optional, offset, fullString) => {
            // Only convert if it contains underscores and is a property key (not in a string)
            if (!propName.includes("_")) {
                return match;
            }

            // Check if we're inside a string literal by looking at surrounding context
            // Skip conversion if this appears to be inside a template string or regular string
            const beforeMatch = fullString.substring(Math.max(0, offset - 50), offset);
            const inString = (beforeMatch.match(/[`"']/g) || []).length % 2 !== 0;
            if (inString) {
                return match;
            }

            const camelCase = snakeToCamel(propName);
            // Use quotes if the original had them or if the camelCase version needs them
            const needsQuotes = quote1 || quote2 || !/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(camelCase);
            return needsQuotes ? `"${camelCase}"${optional}:` : `${camelCase}${optional}:`;
        }
    );

    return code;
};

export const generateZodClientFromOpenAPI = async <TOptions extends TemplateContext["options"]>({
    openApiDoc,
    distPath,
    templatePath,
    prettierConfig,
    options,
    disableWriteToFile,
    handlebars,
}: GenerateZodClientFromOpenApiArgs<TOptions>): Promise<
    TOptions extends NonNullable<TemplateContext["options"]>
        ? undefined extends TOptions["groupStrategy"]
            ? string
            : TOptions["groupStrategy"] extends "none" | "tag" | "method"
            ? string
            : Record<string, string>
        : string
> => {
    const data = getZodClientTemplateContext(openApiDoc, options);
    const groupStrategy = options?.groupStrategy ?? "none";

    if (!templatePath) {
        templatePath = match(groupStrategy)
            .with("none", "tag-file", "method-file", () => path.join(__dirname, "../src/templates/default.hbs"))
            .with("tag", "method", () => path.join(__dirname, "../src/templates/grouped.hbs"))
            .exhaustive();
    }

    const fs = await import("@liuli-util/fs-extra");
    const source = await fs.readFile(templatePath, "utf8");
    const hbs = handlebars ?? getHandlebars();
    const template = hbs.compile(source);
    const willWriteToFile = !disableWriteToFile && distPath;
    // TODO parallel writes ? does it really matter here ?

    if (groupStrategy.includes("file")) {
        const outputByGroupName: Record<string, string> = {};

        if (willWriteToFile) {
            await fs.ensureDir(distPath);
        }

        const groupNames = Object.fromEntries(
            Object.keys(data.endpointsGroups).map((groupName) => [`${capitalize(groupName)}Api`, groupName])
        );

        const indexSource = await fs.readFile(path.join(__dirname, "../src/templates/grouped-index.hbs"), "utf8");
        const indexTemplate = hbs.compile(indexSource);
        const indexOutput = maybePretty(
            convertSnakeToCamelInSchemaAndTypes(indexTemplate({ groupNames })),
            prettierConfig
        );
        outputByGroupName["__index"] = indexOutput;

        if (willWriteToFile) {
            await fs.writeFile(path.join(distPath, "index.ts"), indexOutput);
        }

        const commonSource = await fs.readFile(path.join(__dirname, "../src/templates/grouped-common.hbs"), "utf8");
        const commonTemplate = hbs.compile(commonSource);
        const commonSchemaNames = [...(data.commonSchemaNames ?? [])];

        if (commonSchemaNames.length > 0) {
            const commonOutput = maybePretty(
                convertSnakeToCamelInSchemaAndTypes(
                    commonTemplate({
                        schemas: pick(data.schemas, commonSchemaNames),
                        types: pick(data.types, commonSchemaNames),
                    })
                ),
                prettierConfig
            );
            outputByGroupName["__common"] = commonOutput;

            if (willWriteToFile) {
                await fs.writeFile(path.join(distPath, "common.ts"), commonOutput);
            }
        }

        for (const groupName in data.endpointsGroups) {
            const groupOutput = template({
                ...data,
                ...data.endpointsGroups[groupName],
                options: {
                    ...options,
                    groupStrategy: "none",
                    apiClientName: `${capitalize(groupName)}Api`,
                },
            });
            const prettyGroupOutput = maybePretty(convertSnakeToCamelInSchemaAndTypes(groupOutput), prettierConfig);
            outputByGroupName[groupName] = prettyGroupOutput;

            if (willWriteToFile) {
                console.log("Writing to", path.join(distPath, `${groupName}.ts`));
                await fs.writeFile(path.join(distPath, `${groupName}.ts`), prettyGroupOutput);
            }
        }

        return outputByGroupName as any;
    }

    const output = template({ ...data, options: { ...options, apiClientName: options?.apiClientName ?? "api" } });
    const prettyOutput = maybePretty(convertSnakeToCamelInSchemaAndTypes(output), prettierConfig);

    if (willWriteToFile) {
        await fs.writeFile(distPath, prettyOutput);
    }

    return prettyOutput as any;
};
