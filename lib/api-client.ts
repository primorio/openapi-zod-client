import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

type AccountCategory = {
    /**
     * @minLength 1
     */
    name: string;
    /**
     * @pattern ^(coa)_[0-9a-f]{32}$
     */
    chart_of_accounts_id: string;
    type: AccountCategoryType;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(bsc)_[0-9a-f]{32}$
     */
    id: string;
};
type AccountCategoryType =
    /**
     * @enum ASSETS, LIABILITIES, INCOME, EXPENSES
     */
    "ASSETS" | "LIABILITIES" | "INCOME" | "EXPENSES";
type AccountCategoryCreateRequest = {
    /**
     * @minLength 1
     */
    name: string;
    type: AccountCategoryType;
};
type AccountCategoryPatchRequest = Partial<{
    name:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
    type: (AccountCategoryType | null) | Array<AccountCategoryType | null>;
}>;
type AccountCategoryTemplate = {
    /**
     * @minLength 1
     */
    name: string;
    /**
     * @pattern ^(cat)_[0-9a-f]{32}$
     */
    chart_of_accounts_template_id: string;
    type: AccountCategoryTypeTemplate;
    /**
     * @enum DEFAULT, CUSTOM
     */
    template_type: "DEFAULT" | "CUSTOM";
    tenant_id?:
        | (
              | /**
               * @pattern ^(tnt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(tnt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    /**
     * @pattern ^(cta)_[0-9a-f]{32}$
     */
    id: string;
};
type AccountCategoryTypeTemplate =
    /**
     * @enum ASSETS, LIABILITIES, INCOME, EXPENSES
     */
    "ASSETS" | "LIABILITIES" | "INCOME" | "EXPENSES";
type AccountCategoryTemplateCreateRequest = {
    /**
     * @minLength 1
     */
    name: string;
    type: AccountCategoryTypeTemplate;
};
type AccountCategoryTemplatePatchRequest = Partial<{
    name:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
    type: (AccountCategoryTypeTemplate | null) | Array<AccountCategoryTypeTemplate | null>;
}>;
type AccountingTenant = {
    name: string;
    company_name_full:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
    is_tax_exempt: boolean;
    is_vat_exempt: boolean;
    is_vat_actual_taxation: boolean;
    tax_id?:
        | (
              | /**
               * @minLength 10
               * @maxLength 15
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 10
                     * @maxLength 15
                     */
                    string | null
                >
          )
        | undefined;
    vat_id?:
        | (
              | /**
     * @pattern ^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|↵
    (CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|↵
    (EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|↵
    (FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|↵
    (HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|↵
    (LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|↵
    (NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|↵
    (SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$
     */
              (string | null)
              | Array<
                    /**
     * @pattern ^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|↵
    (CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|↵
    (EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|↵
    (FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|↵
    (HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|↵
    (LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|↵
    (NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|↵
    (SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$
     */
                    string | null
                >
          )
        | undefined;
    tax_office?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    address: AddressData_Output;
    /**
     * @pattern ^(coa)_[0-9a-f]{32}$
     */
    chart_of_accounts_id: string;
    fiscal_year_start?: ((string | null) | Array<string | null>) | undefined;
    default_invoice_journal_id?:
        | (
              | /**
               * @pattern ^(jrn)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(jrn)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(act)_[0-9a-f]{32}$
     */
    id: string;
};
type AddressData_Output = {
    /**
     * @minLength 1
     */
    street: string;
    /**
     * @minLength 1
     */
    house_number: string;
    /**
     * @minLength 1
     */
    country: string;
    address_addition?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    latitude?: ((string | null) | Array<string | null>) | undefined;
    longitude?: ((string | null) | Array<string | null>) | undefined;
    /**
     * @minLength 1
     */
    postal_code: string;
    /**
     * @minLength 1
     */
    city: string;
    /**
     * @minLength 1
     */
    state: string;
    name?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    care_of?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
};
type AccountingTenantCreateRequest = {
    name: string;
    company_name_full: (string | null) | Array<string | null>;
    is_tax_exempt: boolean;
    is_vat_exempt: boolean;
    is_vat_actual_taxation: boolean;
    tax_id?:
        | (
              | /**
               * @minLength 10
               * @maxLength 15
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 10
                     * @maxLength 15
                     */
                    string | null
                >
          )
        | undefined;
    vat_id?:
        | (
              | /**
     * @pattern ^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|↵
    (CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|↵
    (EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|↵
    (FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|↵
    (HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|↵
    (LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|↵
    (NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|↵
    (SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$
     */
              (string | null)
              | Array<
                    /**
     * @pattern ^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|↵
    (CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|↵
    (EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|↵
    (FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|↵
    (HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|↵
    (LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|↵
    (NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|↵
    (SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$
     */
                    string | null
                >
          )
        | undefined;
    tax_office?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    address: AddressData_Input;
    fiscal_year_start?: ((string | null) | Array<string | null>) | undefined;
    create_from_template?:
        | (
              | /**
               * @pattern ^(att)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(att)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
};
type AddressData_Input = {
    /**
     * @minLength 1
     */
    street: string;
    /**
     * @minLength 1
     */
    house_number: string;
    /**
     * @minLength 1
     */
    country: string;
    address_addition?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    latitude?: ((number | string | null) | Array<number | string | null>) | undefined;
    longitude?: ((number | string | null) | Array<number | string | null>) | undefined;
    /**
     * @minLength 1
     */
    postal_code: string;
    /**
     * @minLength 1
     */
    city: string;
    /**
     * @minLength 1
     */
    state: string;
    name?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    care_of?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
};
type AccountingTenantPatchRequest = Partial<{
    name: (string | null) | Array<string | null>;
    company_name_full: (string | null) | Array<string | null>;
    is_tax_exempt: (boolean | null) | Array<boolean | null>;
    is_vat_exempt: (boolean | null) | Array<boolean | null>;
    is_vat_actual_taxation: (boolean | null) | Array<boolean | null>;
    tax_id:
        | /**
         * @minLength 10
         * @maxLength 15
         */
        (string | null)
        | Array<
              /**
               * @minLength 10
               * @maxLength 15
               */
              string | null
          >;
    vat_id:
        | /**
     * @pattern ^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|↵
    (CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|↵
    (EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|↵
    (FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|↵
    (HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|↵
    (LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|↵
    (NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|↵
    (SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$
     */
        (string | null)
        | Array<
              /**
     * @pattern ^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|↵
    (CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|↵
    (EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|↵
    (FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|↵
    (HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|↵
    (LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|↵
    (NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|↵
    (SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$
     */
              string | null
          >;
    tax_office: (string | null) | Array<string | null>;
    address: (AddressData_Input | null) | Array<AddressData_Input | null>;
    chart_of_accounts_id:
        | /**
         * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              string | null
          >;
}>;
type AllocationKey = {
    name: string;
    /**
     * @pattern ^(pro)_[0-9a-f]{32}$
     */
    property_id: string;
    type: AllocationKeyType;
    /**
     * @pattern ^(art)_[0-9a-f]{32}$
     */
    accounting_report_tag_id: string;
    meter_type: (MeterType | null) | Array<MeterType | null>;
    unit_allocations:
        | (Array<AllocationKeyUnitRelation_Output> | null)
        | Array<Array<AllocationKeyUnitRelation_Output> | null>;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(alk)_[0-9a-f]{32}$
     */
    id: string;
};
type AllocationKeyType =
    /**
     * @enum CUSTOM_VALUE, CONDOMINIUM_OWNERSHIP_SHARES, LIVING_SPACE, NUMBER_OF_PERSONS, PER_UNIT, METER_READING
     */
    | "CUSTOM_VALUE"
    | "CONDOMINIUM_OWNERSHIP_SHARES"
    | "LIVING_SPACE"
    | "NUMBER_OF_PERSONS"
    | "PER_UNIT"
    | "METER_READING";
type MeterType =
    /**
     * @enum WATER, HEATING, ELECTRICITY, GAS, OTHER
     */
    "WATER" | "HEATING" | "ELECTRICITY" | "GAS" | "OTHER";
type AllocationKeyUnitRelation_Output = {
    /**
     * @pattern ^(unt)_[0-9a-f]{32}$
     */
    unit_id: string;
    custom_allocation_value: (string | null) | Array<string | null>;
};
type AllocationKeyCreateRequest = {
    name: string;
    type: AllocationKeyType;
    /**
     * @pattern ^(art)_[0-9a-f]{32}$
     */
    accounting_report_tag_id: string;
    meter_type?: ((MeterType | null) | Array<MeterType | null>) | undefined;
    unit_allocations?:
        | ((Array<AllocationKeyUnitRelation_Input> | null) | Array<Array<AllocationKeyUnitRelation_Input> | null>)
        | undefined;
};
type AllocationKeyUnitRelation_Input = {
    /**
     * @pattern ^(unt)_[0-9a-f]{32}$
     */
    unit_id: string;
    custom_allocation_value: (number | string | null) | Array<number | string | null>;
};
type AllocationKeyPatchRequest = Partial<{
    name: (string | null) | Array<string | null>;
    type: (AllocationKeyType | null) | Array<AllocationKeyType | null>;
    accounting_report_tag_id:
        | /**
         * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              string | null
          >;
    meter_type: (MeterType | null) | Array<MeterType | null>;
    unit_allocations:
        | (Array<AllocationKeyUnitRelation_Input> | null)
        | Array<Array<AllocationKeyUnitRelation_Input> | null>;
}>;
type AllocationKeyTemplate = {
    name: string;
    type: AllocationKeyTemplateType;
    /**
     * @pattern ^(rtt)_[0-9a-f]{32}$
     */
    accounting_report_tag_template_id: string;
    meter_type: (MeterTypeTemplate | null) | Array<MeterTypeTemplate | null>;
    /**
     * @enum DEFAULT, CUSTOM
     */
    template_type: "DEFAULT" | "CUSTOM";
    tenant_id?:
        | (
              | /**
               * @pattern ^(tnt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(tnt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    /**
     * @pattern ^(akt)_[0-9a-f]{32}$
     */
    id: string;
};
type AllocationKeyTemplateType =
    /**
     * @enum CUSTOM_VALUE, CONDOMINIUM_OWNERSHIP_SHARES, LIVING_SPACE, NUMBER_OF_PERSONS, PER_UNIT, METER_READING
     */
    | "CUSTOM_VALUE"
    | "CONDOMINIUM_OWNERSHIP_SHARES"
    | "LIVING_SPACE"
    | "NUMBER_OF_PERSONS"
    | "PER_UNIT"
    | "METER_READING";
type MeterTypeTemplate =
    /**
     * @enum WATER, HEATING, ELECTRICITY, GAS, OTHER
     */
    "WATER" | "HEATING" | "ELECTRICITY" | "GAS" | "OTHER";
type AllocationKeyTemplateCreateRequest = {
    name: string;
    type: AllocationKeyTemplateType;
    meter_type?: ((MeterTypeTemplate | null) | Array<MeterTypeTemplate | null>) | undefined;
};
type AllocationKeyTemplatePatchRequest = Partial<{
    name: (string | null) | Array<string | null>;
    type: (AllocationKeyTemplateType | null) | Array<AllocationKeyTemplateType | null>;
    accounting_report_tag_template_id:
        | /**
         * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              string | null
          >;
    meter_type: (MeterTypeTemplate | null) | Array<MeterTypeTemplate | null>;
}>;
type AuthRequest = {
    email: string;
    password: PasswordStr;
};
type PasswordStr =
    /**
     * @minLength 8
     * @maxLength 50
     * @pattern ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$
     */
    string;
type BankAccount = {
    account_name: (string | null) | Array<string | null>;
    iban:
        | /**
         * @pattern ^[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?:[ ]?[0-9]{1,2})?$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?:[ ]?[0-9]{1,2})?$
               */
              string | null
          >;
    account_holder_name: (string | null) | Array<string | null>;
    account_type: BankAccountType;
    balance: (string | null) | Array<string | null>;
    bank_connection_id:
        | /**
         * @pattern ^(bco)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(bco)_[0-9a-f]{32}$
               */
              string | null
          >;
    source_info:
        | (BankAccountSourceInfoFinApi | BankAccountSourceInfoManual)
        | Array<BankAccountSourceInfoFinApi | BankAccountSourceInfoManual>;
    accounting_tenant_id?:
        | (
              | /**
               * @pattern ^(act)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(act)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    account_id?:
        | (
              | /**
               * @pattern ^(acc)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(acc)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(baa)_[0-9a-f]{32}$
     */
    id: string;
};
type BankAccountType =
    /**
     * @enum BAUSPAREN, CHECKING, CREDITCARD, LOAN, MEMBERSHIP, SAVINGS, SECURITY
     */
    "BAUSPAREN" | "CHECKING" | "CREDITCARD" | "LOAN" | "MEMBERSHIP" | "SAVINGS" | "SECURITY";
type BankAccountSourceInfoFinApi = {
    source_type?:
        | /**
         * @default "FINAPI"
         * @enum FINAPI
         */
        "FINAPI"
        | undefined;
    fin_api_id: number;
    capabilities: Array<string>;
};
type BankAccountSourceInfoManual = Partial<{
    /**
     * @default "MANUAL"
     * @enum MANUAL
     */
    source_type: "MANUAL";
}>;
type BankAccountCreateManualRequest = {
    account_name: string;
    iban?:
        | (
              | /**
               * @pattern ^[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?:[ ]?[0-9]{1,2})?$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?:[ ]?[0-9]{1,2})?$
                     */
                    string | null
                >
          )
        | undefined;
    account_holder_name?: ((string | null) | Array<string | null>) | undefined;
    account_type?: BankAccountType | undefined;
    balance?:
        | /**
         * @default "0"
         */
        ((number | string) | Array<number | string>)
        | undefined;
};
type BankConnection = {
    name?: ((string | null) | Array<string | null>) | undefined;
    owner_names_full: Array<string>;
    bank_name: string;
    bank_city?: ((string | null) | Array<string | null>) | undefined;
    bank_icon_url?: ((string | null) | Array<string | null>) | undefined;
    bic?:
        | (
              | /**
               * @pattern ^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$
                     */
                    string | null
                >
          )
        | undefined;
    blz: string;
    last_sync_date?: ((string | null) | Array<string | null>) | undefined;
    source_info:
        | (BankConnectionSourceInfoFinApi | BankConnectionSourceInfoManual)
        | Array<BankConnectionSourceInfoFinApi | BankConnectionSourceInfoManual>;
    is_deleted_from_source?: /**
     * @default false
     */
    boolean | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(bco)_[0-9a-f]{32}$
     */
    id: string;
};
type BankConnectionSourceInfoFinApi = {
    source_type?:
        | /**
         * @default "FINAPI"
         * @enum FINAPI
         */
        "FINAPI"
        | undefined;
    categorization_status?: ((string | null) | Array<string | null>) | undefined;
    update_status?: ((string | null) | Array<string | null>) | undefined;
    fin_api_id: number;
};
type BankConnectionSourceInfoManual = Partial<{
    /**
     * @default "MANUAL"
     * @enum MANUAL
     */
    source_type: "MANUAL";
}>;
type CommittedPayment = {
    waiting_transaction_ids: Array</**
     * @pattern ^(wtr)_[0-9a-f]{32}$
     */
    string>;
    status: CommittedPaymentStatus;
    requested_at: (string | null) | Array<string | null>;
    executed_at: (string | null) | Array<string | null>;
    instructed_execution_date: (string | null) | Array<string | null>;
    source_info:
        | (CommittedPaymentSourceInfoFinApi | CommittedPaymentSourceInfoManual)
        | Array<CommittedPaymentSourceInfoFinApi | CommittedPaymentSourceInfoManual>;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(cpy)_[0-9a-f]{32}$
     */
    id: string;
};
type CommittedPaymentStatus =
    /**
     * @enum OPEN, PENDING, SUCCESSFUL, NOT_SUCCESSFUL, DISCARDED, UNKNOWN
     */
    "OPEN" | "PENDING" | "SUCCESSFUL" | "NOT_SUCCESSFUL" | "DISCARDED" | "UNKNOWN";
type CommittedPaymentSourceInfoFinApi = {
    source_type?:
        | /**
         * @default "FINAPI"
         * @enum FINAPI
         */
        "FINAPI"
        | undefined;
    fin_api_id: number;
};
type CommittedPaymentSourceInfoManual = Partial<{
    /**
     * @default "MANUAL"
     * @enum MANUAL
     */
    source_type: "MANUAL";
}>;
type CondominiumOwnership = {
    /**
     * @pattern ^(pro)_[0-9a-f]{32}$
     */
    property_id: string;
    sub_association_id?:
        | (
              | /**
               * @pattern ^(sub)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(sub)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    co_ownership_share: number;
    area?:
        | (
              | /**
               * @minimum 0
               */
              (number | null)
              | Array<
                    /**
                     * @minimum 0
                     */
                    number | null
                >
          )
        | undefined;
    area_heated?:
        | (
              | /**
               * @minimum 0
               */
              (number | null)
              | Array<
                    /**
                     * @minimum 0
                     */
                    number | null
                >
          )
        | undefined;
    related_units?:
        | ((Array<CondominiumOwnershipRelatedUnit> | null) | Array<Array<CondominiumOwnershipRelatedUnit> | null>)
        | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(cow)_[0-9a-f]{32}$
     */
    id: string;
};
type CondominiumOwnershipRelatedUnit = {
    /**
     * @pattern ^(unt)_[0-9a-f]{32}$
     */
    unit_id: string;
    type: CondominiumOwnershipRelatedUnitType;
};
type CondominiumOwnershipRelatedUnitType =
    /**
     * @enum OWNED, SPECIAL_USE
     */
    "OWNED" | "SPECIAL_USE";
type CondominiumOwnershipCreateRequest = {
    co_ownership_share: number;
    area?:
        | (
              | /**
               * @minimum 0
               */
              (number | null)
              | Array<
                    /**
                     * @minimum 0
                     */
                    number | null
                >
          )
        | undefined;
    area_heated?:
        | (
              | /**
               * @minimum 0
               */
              (number | null)
              | Array<
                    /**
                     * @minimum 0
                     */
                    number | null
                >
          )
        | undefined;
    sub_association_id?:
        | (
              | /**
               * @pattern ^(sub)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(sub)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    related_units?:
        | ((Array<CondominiumOwnershipRelatedUnit> | null) | Array<Array<CondominiumOwnershipRelatedUnit> | null>)
        | undefined;
};
type CondominiumOwnershipPatchRequest = Partial<{
    co_ownership_share: (number | null) | Array<number | null>;
    area:
        | /**
         * @minimum 0
         */
        (number | null)
        | Array<
              /**
               * @minimum 0
               */
              number | null
          >;
    area_heated:
        | /**
         * @minimum 0
         */
        (number | null)
        | Array<
              /**
               * @minimum 0
               */
              number | null
          >;
    sub_association_id:
        | /**
         * @pattern ^(sub)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(sub)_[0-9a-f]{32}$
               */
              string | null
          >;
    related_units:
        | (Array<CondominiumOwnershipRelatedUnit> | null)
        | Array<Array<CondominiumOwnershipRelatedUnit> | null>;
}>;
type Contact = {
    addresses: {};
    contact_options: Array<ContactOptionData>;
    info: (ContactIndividualData | ContactLegalEntityData) | Array<ContactIndividualData | ContactLegalEntityData>;
    bank_account_id?:
        | (
              | /**
               * @pattern ^(baa)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(baa)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(cnt)_[0-9a-f]{32}$
     */
    id: string;
};
type ContactOptionData = {
    type: ContactOptionType;
    /**
     * @minLength 1
     */
    value: string;
    contact_person_full_name?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
};
type ContactOptionType =
    /**
     * @enum EMAIL_PRIVATE, EMAIL_BUSINESS, PHONE_PRIVATE, PHONE_BUSINESS, MOBILE_PRIVATE, MOBILE_BUSINESS, FAX, OTHER
     */
    | "EMAIL_PRIVATE"
    | "EMAIL_BUSINESS"
    | "PHONE_PRIVATE"
    | "PHONE_BUSINESS"
    | "MOBILE_PRIVATE"
    | "MOBILE_BUSINESS"
    | "FAX"
    | "OTHER";
type ContactIndividualData = {
    type?:
        | /**
         * @default "INDIVIDUAL"
         * @enum INDIVIDUAL
         */
        "INDIVIDUAL"
        | undefined;
    /**
     * @minLength 1
     */
    first_name: string;
    /**
     * @minLength 1
     */
    last_name: string;
    gender: Gender;
    birth_date?: ((string | null) | Array<string | null>) | undefined;
    title?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    foreign_iban?:
        | (
              | /**
               * @pattern ^[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?:[ ]?[0-9]{1,2})?$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?:[ ]?[0-9]{1,2})?$
                     */
                    string | null
                >
          )
        | undefined;
};
type Gender =
    /**
     * @enum MALE, FEMALE, DIVERSE
     */
    "MALE" | "FEMALE" | "DIVERSE";
type ContactLegalEntityData = {
    type?:
        | /**
         * @default "LEGAL_ENTITY"
         * @enum LEGAL_ENTITY
         */
        "LEGAL_ENTITY"
        | undefined;
    /**
     * @minLength 1
     */
    name: string;
    tax_id?:
        | (
              | /**
               * @minLength 10
               * @maxLength 15
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 10
                     * @maxLength 15
                     */
                    string | null
                >
          )
        | undefined;
    vat_id?:
        | (
              | /**
     * @pattern ^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|↵
    (CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|↵
    (EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|↵
    (FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|↵
    (HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|↵
    (LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|↵
    (NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|↵
    (SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$
     */
              (string | null)
              | Array<
                    /**
     * @pattern ^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|↵
    (CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|↵
    (EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|↵
    (FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|↵
    (HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|↵
    (LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|↵
    (NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|↵
    (SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$
     */
                    string | null
                >
          )
        | undefined;
    commercial_register_number?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    website?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    entity_type?: ((LegalEntityType | null) | Array<LegalEntityType | null>) | undefined;
    foreign_iban?:
        | (
              | /**
               * @pattern ^[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?:[ ]?[0-9]{1,2})?$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?:[ ]?[0-9]{1,2})?$
                     */
                    string | null
                >
          )
        | undefined;
};
type LegalEntityType =
    /**
     * @enum CLIENT, SERVICE_PROVIDER
     */
    "CLIENT" | "SERVICE_PROVIDER";
type ContactCreateRequest = {
    addresses: {};
    contact_options: Array<ContactOptionData>;
    info: (ContactIndividualData | ContactLegalEntityData) | Array<ContactIndividualData | ContactLegalEntityData>;
    bank_account_id?:
        | (
              | /**
               * @pattern ^(baa)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(baa)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
};
type ContactIndividualDataPartial = {
    /**
     * @enum INDIVIDUAL
     */
    type: "INDIVIDUAL";
    first_name?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    last_name?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    gender?: ((Gender | null) | Array<Gender | null>) | undefined;
    birth_date?: ((string | null) | Array<string | null>) | undefined;
    title?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
};
type ContactLegalEntityDataPartial = {
    /**
     * @enum LEGAL_ENTITY
     */
    type: "LEGAL_ENTITY";
    name?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    tax_id?:
        | (
              | /**
               * @minLength 10
               * @maxLength 15
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 10
                     * @maxLength 15
                     */
                    string | null
                >
          )
        | undefined;
    vat_id?:
        | (
              | /**
     * @pattern ^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|↵
    (CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|↵
    (EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|↵
    (FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|↵
    (HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|↵
    (LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|↵
    (NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|↵
    (SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$
     */
              (string | null)
              | Array<
                    /**
     * @pattern ^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|↵
    (CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|↵
    (EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|↵
    (FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|↵
    (HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|↵
    (LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|↵
    (NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|↵
    (SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$
     */
                    string | null
                >
          )
        | undefined;
    commercial_register_number?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    website?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    entity_type?: ((LegalEntityType | null) | Array<LegalEntityType | null>) | undefined;
    contact_person_full_name?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
};
type ContactPatchRequest = Partial<{
    addresses: ({} | null) | Array<{} | null>;
    contact_options: (Array<ContactOptionData> | null) | Array<Array<ContactOptionData> | null>;
    info:
        | (ContactIndividualDataPartial | ContactLegalEntityDataPartial | null)
        | Array<ContactIndividualDataPartial | ContactLegalEntityDataPartial | null>;
}>;
type AddressDataPartial = Partial<{
    street:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
    house_number:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
    country:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
    address_addition:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
    latitude: (number | string | null) | Array<number | string | null>;
    longitude: (number | string | null) | Array<number | string | null>;
    postal_code:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
    city:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
    state:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
    name:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
    care_of:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
}>;
type Email = {
    /**
     * @pattern ^(eac)_[0-9a-f]{32}$
     */
    email_account_id: string;
    from_: Array<EmailAddressWithName>;
    to: Array<EmailAddressWithName>;
    cc: Array<EmailAddressWithName>;
    bcc: Array<EmailAddressWithName>;
    subject: string;
    body: string;
    date: string;
    content_type: EmailContentType;
    imap_uid?: ((number | null) | Array<number | null>) | undefined;
    imap_uidvalidity?: ((number | null) | Array<number | null>) | undefined;
    folder: string;
    flags: Array<EmailFlags>;
    ai_summary?: ((string | null) | Array<string | null>) | undefined;
    ai_severity?: ((EmailSeverity | null) | Array<EmailSeverity | null>) | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(eml)_[0-9a-f]{32}$
     */
    id: string;
};
type EmailAddressWithName = {
    email: string;
    name: (string | null) | Array<string | null>;
};
type EmailContentType =
    /**
     * @enum text/plain, text/html
     */
    "text/plain" | "text/html";
type EmailFlags =
    /**
     * @enum SEEN, ANSWERED, DELETED, DRAFT, FLAGGED, RECENT, FORWARDED
     */
    "SEEN" | "ANSWERED" | "DELETED" | "DRAFT" | "FLAGGED" | "RECENT" | "FORWARDED";
type EmailSeverity =
    /**
     * @enum LOW, MEDIUM, HIGH, CRITICAL
     */
    "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
type EmailSendRequest = {
    to: Array<EmailAddressWithName>;
    cc: Array<EmailAddressWithName>;
    bcc: Array<EmailAddressWithName>;
    subject: string;
    body: string;
    content_type: EmailContentType;
};
type File = {
    file_type: FileType;
    /**
     * @minLength 1
     */
    filename: string;
    mime_type: string;
    size_bytes: number;
    uploaded_at: string;
    metadata: {};
    related_entity_ids: Array</**
     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
     */
    string>;
    summary?: ((string | null) | Array<string | null>) | undefined;
    extraction_status: TextExtractionStatus;
    extracted_text?: ((string | null) | Array<string | null>) | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(fil)_[0-9a-f]{32}$
     */
    id: string;
};
type FileType =
    /**
     * @enum GENERIC_IMAGE, GENERIC_DOCUMENT, INVOICE, CONTRACT, RECEIPT, BANK_STATEMENT, IDENTIFICATION_DOCUMENT, LETTER
     */
    | "GENERIC_IMAGE"
    | "GENERIC_DOCUMENT"
    | "INVOICE"
    | "CONTRACT"
    | "RECEIPT"
    | "BANK_STATEMENT"
    | "IDENTIFICATION_DOCUMENT"
    | "LETTER";
type TextExtractionStatus =
    /**
     * @enum PENDING, OK, ENCRYPTED_PDF, PDFA_CONVERSION_FAILED, ALREADY_DONE_OCR, OTHER_ERROR
     */
    "PENDING" | "OK" | "ENCRYPTED_PDF" | "PDFA_CONVERSION_FAILED" | "ALREADY_DONE_OCR" | "OTHER_ERROR";
type FileUploadRequest = {
    file_type: FileType;
    filename: string;
    file_data: string;
    metadata?: /**
     * @default {}
     */
    {} | undefined;
    related_entity_ids?: /**
     * @default []
     */
    | Array</**
           * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
           */
          string>
        | undefined;
};
type FinApiWebform = {
    url: string;
    id: string;
    created_at: string;
    expires_at: string;
    type: FinApiWebFormType;
};
type FinApiWebFormType =
    /**
     * @enum BANK_CONNECTION_IMPORT, BANK_CONNECTION_UPDATE, DIRECT_DEBIT_WITH_ACCOUNT_ID, PAYMENT_WITH_ACCOUNT_ID, STANDALONE_PAYMENT, STANDING_ORDER
     */
    | "BANK_CONNECTION_IMPORT"
    | "BANK_CONNECTION_UPDATE"
    | "DIRECT_DEBIT_WITH_ACCOUNT_ID"
    | "PAYMENT_WITH_ACCOUNT_ID"
    | "STANDALONE_PAYMENT"
    | "STANDING_ORDER";
type HTTPValidationError = Partial<{
    detail: Array<ValidationError>;
}>;
type ValidationError = {
    loc: Array<(string | number) | Array<string | number>>;
    msg: string;
    type: string;
};
type InternalTenant = {
    /**
     * @minLength 1
     */
    name: string;
    company_name_full: string;
    tax_id?:
        | (
              | /**
               * @minLength 10
               * @maxLength 15
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 10
                     * @maxLength 15
                     */
                    string | null
                >
          )
        | undefined;
    vat_id?:
        | (
              | /**
     * @pattern ^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|↵
    (CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|↵
    (EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|↵
    (FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|↵
    (HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|↵
    (LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|↵
    (NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|↵
    (SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$
     */
              (string | null)
              | Array<
                    /**
     * @pattern ^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|↵
    (CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|↵
    (EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|↵
    (FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|↵
    (HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|↵
    (LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|↵
    (NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|↵
    (SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$
     */
                    string | null
                >
          )
        | undefined;
    tax_office?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    address: AddressData_Output;
    accounting_tenant_id?:
        | (
              | /**
               * @pattern ^(act)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(act)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    assigned_employees?: /**
     * @default []
     */
    | Array</**
           * @pattern ^(emp)_[0-9a-f]{32}$
           */
          string>
        | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(int)_[0-9a-f]{32}$
     */
    id: string;
};
type InternalTenantCreateRequest = {
    /**
     * @minLength 1
     */
    name: string;
    company_name_full: string;
    tax_id?:
        | (
              | /**
               * @minLength 10
               * @maxLength 15
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 10
                     * @maxLength 15
                     */
                    string | null
                >
          )
        | undefined;
    vat_id?:
        | (
              | /**
     * @pattern ^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|↵
    (CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|↵
    (EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|↵
    (FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|↵
    (HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|↵
    (LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|↵
    (NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|↵
    (SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$
     */
              (string | null)
              | Array<
                    /**
     * @pattern ^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|↵
    (CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|↵
    (EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|↵
    (FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|↵
    (HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|↵
    (LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|↵
    (NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|↵
    (SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$
     */
                    string | null
                >
          )
        | undefined;
    tax_office?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    address: AddressData_Input;
    assigned_employees?: /**
     * @default []
     */
    | Array</**
           * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
           */
          string>
        | undefined;
};
type Invoice = {
    /**
     * @pattern ^(act)_[0-9a-f]{32}$
     */
    accounting_tenant_id: string;
    property_id?:
        | (
              | /**
               * @pattern ^(pro)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(pro)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    unit_id?:
        | (
              | /**
               * @pattern ^(unt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    invoice_date: string;
    date_of_service: string;
    due_date: string;
    description?: ((string | null) | Array<string | null>) | undefined;
    file_id?:
        | (
              | /**
               * @pattern ^(fil)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(fil)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    /**
     * @pattern ^(jre)_[0-9a-f]{32}$
     */
    journal_entry_id: string;
    /**
     * @pattern ^(cnt)_[0-9a-f]{32}$
     */
    supplier_id: string;
    /**
     * @pattern ^(lbt)_[0-9a-f]{32}$
     */
    liability_id: string;
    items: Array<InvoiceItemData_Output>;
    notes: Array<InvoiceNoteData>;
    is_draft?:
        | /**
         * @default false
         * @enum false
         */
        false
        | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(inv)_[0-9a-f]{32}$
     */
    id: string;
};
type InvoiceItemData_Output = {
    /**
     * @pattern ^(acc)_[0-9a-f]{32}$
     */
    account_id: string;
    tax_rate_id?:
        | (
              | /**
               * @pattern ^(txr)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(txr)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    amount: string;
    description?: ((string | null) | Array<string | null>) | undefined;
};
type InvoiceNoteData = {
    /**
     * @minLength 1
     */
    note: string;
};
type InvoiceDraft = {
    is_draft?:
        | /**
         * @default true
         * @enum true
         */
        true
        | undefined;
    /**
     * @pattern ^(act)_[0-9a-f]{32}$
     */
    accounting_tenant_id: string;
    property_id?:
        | (
              | /**
               * @pattern ^(pro)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(pro)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    unit_id?:
        | (
              | /**
               * @pattern ^(unt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    invoice_date: string;
    date_of_service?: ((string | null) | Array<string | null>) | undefined;
    due_date?: ((string | null) | Array<string | null>) | undefined;
    description?: ((string | null) | Array<string | null>) | undefined;
    file_id?:
        | (
              | /**
               * @pattern ^(fil)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(fil)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    /**
     * @pattern ^(jre)_[0-9a-f]{32}$
     */
    journal_entry_id: string;
    liability_id?: /**
     * @enum
     */
    null | undefined;
    supplier_id?:
        | (
              | /**
               * @pattern ^(cnt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(cnt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    items?: /**
     * @default []
     */
    Array<InvoiceItemData_Output> | undefined;
    notes?: /**
     * @default []
     */
    Array<InvoiceNoteData> | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(inv)_[0-9a-f]{32}$
     */
    id: string;
};
type InvoiceDraftCreateRequest = {
    is_draft?:
        | /**
         * @default true
         * @enum true
         */
        true
        | undefined;
    property_id?:
        | (
              | /**
               * @pattern ^(pro)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(pro)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    unit_id?:
        | (
              | /**
               * @pattern ^(unt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    invoice_date: string;
    date_of_service?: ((string | null) | Array<string | null>) | undefined;
    due_date?: ((string | null) | Array<string | null>) | undefined;
    description?: ((string | null) | Array<string | null>) | undefined;
    file_id?:
        | (
              | /**
               * @pattern ^(fil)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(fil)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    supplier_id?:
        | (
              | /**
               * @pattern ^(cnt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(cnt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    items?: /**
     * @default []
     */
    Array<InvoiceItemData_Input> | undefined;
    notes?: /**
     * @default []
     */
    Array<InvoiceNoteData> | undefined;
};
type InvoiceItemData_Input = {
    /**
     * @pattern ^(acc)_[0-9a-f]{32}$
     */
    account_id: string;
    tax_rate_id?:
        | (
              | /**
               * @pattern ^(txr)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(txr)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    amount: (number | string) | Array<number | string>;
    description?: ((string | null) | Array<string | null>) | undefined;
};
type InvoiceNormalCreateRequest = {
    property_id:
        | /**
         * @pattern ^(pro)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(pro)_[0-9a-f]{32}$
               */
              string | null
          >;
    unit_id?:
        | (
              | /**
               * @pattern ^(unt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    invoice_date: string;
    date_of_service: string;
    due_date: string;
    description?: ((string | null) | Array<string | null>) | undefined;
    file_id:
        | /**
         * @pattern ^(fil)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(fil)_[0-9a-f]{32}$
               */
              string | null
          >;
    /**
     * @pattern ^(cnt)_[0-9a-f]{32}$
     */
    supplier_id: string;
    items: Array<InvoiceItemCreateRequest>;
    notes?: /**
     * @default []
     */
    Array<InvoiceNoteData> | undefined;
    is_draft?:
        | /**
         * @default false
         * @enum false
         */
        false
        | undefined;
};
type InvoiceItemCreateRequest = {
    /**
     * @pattern ^(acc)_[0-9a-f]{32}$
     */
    account_id: string;
    tax_rate_id?:
        | (
              | /**
               * @pattern ^(txr)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(txr)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    amount: (number | string) | Array<number | string>;
    description?: ((string | null) | Array<string | null>) | undefined;
};
type InvoicePatchRequest = Partial<{
    invoice_date: (string | null) | Array<string | null>;
    date_of_service: (string | null) | Array<string | null>;
    due_date: (string | null) | Array<string | null>;
    description: (string | null) | Array<string | null>;
    file_id:
        | /**
         * @pattern ^(fil)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(fil)_[0-9a-f]{32}$
               */
              string | null
          >;
    unit_id:
        | /**
         * @pattern ^(unt)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(unt)_[0-9a-f]{32}$
               */
              string | null
          >;
    property_id:
        | /**
         * @pattern ^(pro)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(pro)_[0-9a-f]{32}$
               */
              string | null
          >;
    is_draft: (boolean | null) | Array<boolean | null>;
    items: (Array<InvoiceItemData_Input> | null) | Array<Array<InvoiceItemData_Input> | null>;
    supplier_id:
        | /**
         * @pattern ^(cnt)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(cnt)_[0-9a-f]{32}$
               */
              string | null
          >;
}>;
type InvoiceUnion = (Invoice | InvoiceDraft) | Array<Invoice | InvoiceDraft>;
type JournalEntry = {
    /**
     * @pattern ^(jrn)_[0-9a-f]{32}$
     */
    journal_id: string;
    property_id?:
        | (
              | /**
               * @pattern ^(pro)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(pro)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    unit_id?:
        | (
              | /**
               * @pattern ^(unt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    date: string;
    description?: ((string | null) | Array<string | null>) | undefined;
    /**
     * @minLength 1
     */
    name: string;
    revenue_id?:
        | (
              | /**
               * @pattern ^(rev)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(rev)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    is_canceled: boolean;
    is_draft: boolean;
    items: Array<JournalEntryItemData_Output>;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(jre)_[0-9a-f]{32}$
     */
    id: string;
};
type JournalEntryItemData_Output = {
    /**
     * @pattern ^(acc)_[0-9a-f]{32}$
     */
    account_id: string;
    debit: string;
    credit: string;
};
type JournalEntryCreateRequest = {
    property_id?:
        | (
              | /**
               * @pattern ^(pro)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(pro)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    unit_id?:
        | (
              | /**
               * @pattern ^(unt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    date: string;
    name:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
    description?: ((string | null) | Array<string | null>) | undefined;
    revenue_id?:
        | (
              | /**
               * @pattern ^(rev)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(rev)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    is_canceled?: /**
     * @default false
     */
    boolean | undefined;
    items: Array<JournalEntryItemData_Input>;
    is_draft?: /**
     * @default false
     */
    boolean | undefined;
};
type JournalEntryItemData_Input = {
    /**
     * @pattern ^(acc)_[0-9a-f]{32}$
     */
    account_id: string;
    debit: (number | string) | Array<number | string>;
    credit: (number | string) | Array<number | string>;
};
type JournalEntryPatchRequest = Partial<{
    property_id:
        | /**
         * @pattern ^(pro)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(pro)_[0-9a-f]{32}$
               */
              string | null
          >;
    unit_id:
        | /**
         * @pattern ^(unt)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(unt)_[0-9a-f]{32}$
               */
              string | null
          >;
    date: (string | null) | Array<string | null>;
    name:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
    description: (string | null) | Array<string | null>;
    revenue_id:
        | /**
         * @pattern ^(rev)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(rev)_[0-9a-f]{32}$
               */
              string | null
          >;
    is_canceled: (boolean | null) | Array<boolean | null>;
    items: (Array<JournalEntryItemData_Input> | null) | Array<Array<JournalEntryItemData_Input> | null>;
    is_draft: (boolean | null) | Array<boolean | null>;
}>;
type JournalEntryWithDetails = {
    /**
     * @pattern ^(jrn)_[0-9a-f]{32}$
     */
    journal_id: string;
    property_id?:
        | (
              | /**
               * @pattern ^(pro)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(pro)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    unit_id?:
        | (
              | /**
               * @pattern ^(unt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    date: string;
    description?: ((string | null) | Array<string | null>) | undefined;
    /**
     * @minLength 1
     */
    name: string;
    revenue_id?:
        | (
              | /**
               * @pattern ^(rev)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(rev)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    is_canceled: boolean;
    is_draft: boolean;
    items: Array<JournalEntryItemData_Output>;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(jre)_[0-9a-f]{32}$
     */
    id: string;
    invoice_id?:
        | (
              | /**
               * @pattern ^(inv)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(inv)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
};
type Liability = {
    /**
     * @pattern ^(act)_[0-9a-f]{32}$
     */
    accounting_tenant_id: string;
    property_id?:
        | (
              | /**
               * @pattern ^(pro)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(pro)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    amount: string;
    due_date: string;
    description?: ((string | null) | Array<string | null>) | undefined;
    journal_entry_id?:
        | (
              | /**
               * @pattern ^(jre)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(jre)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    type: LiabilityType;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(lbt)_[0-9a-f]{32}$
     */
    id: string;
};
type LiabilityType =
    /**
     * @enum LIABILITY, RECEIVABLE
     */
    "LIABILITY" | "RECEIVABLE";
type LiabilityCreateRequest = {
    property_id?:
        | (
              | /**
               * @pattern ^(pro)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(pro)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    amount: (number | string) | Array<number | string>;
    due_date: string;
    description?: ((string | null) | Array<string | null>) | undefined;
    journal_entry_id?:
        | (
              | /**
               * @pattern ^(jre)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(jre)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    type: LiabilityType;
};
type LiabilityPatchRequest = Partial<{
    amount: (number | string | null) | Array<number | string | null>;
    due_date: (string | null) | Array<string | null>;
    description: (string | null) | Array<string | null>;
    journal_entry_id:
        | /**
         * @pattern ^(jre)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(jre)_[0-9a-f]{32}$
               */
              string | null
          >;
    type: (LiabilityType | null) | Array<LiabilityType | null>;
}>;
type LiabilityWithDetails = {
    /**
     * @pattern ^(act)_[0-9a-f]{32}$
     */
    accounting_tenant_id: string;
    property_id?:
        | (
              | /**
               * @pattern ^(pro)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(pro)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    amount: string;
    due_date: string;
    description?: ((string | null) | Array<string | null>) | undefined;
    journal_entry_id?:
        | (
              | /**
               * @pattern ^(jre)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(jre)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    type: LiabilityType;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(lbt)_[0-9a-f]{32}$
     */
    id: string;
    invoice_id:
        | /**
         * @pattern ^(inv)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(inv)_[0-9a-f]{32}$
               */
              string | null
          >;
    payments: Array<Payment>;
    is_paid: boolean;
};
type Payment = {
    /**
     * @pattern ^(lbt)_[0-9a-f]{32}$
     */
    liability_id: string;
    payment_date: string;
    revenue_id?:
        | (
              | /**
               * @pattern ^(rev)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(rev)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    amount: string;
    type: PaymentType;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(pay)_[0-9a-f]{32}$
     */
    id: string;
};
type PaymentType =
    /**
     * @enum INCOMING, OUTGOING
     */
    "INCOMING" | "OUTGOING";
type MailCreateIncoming = {
    type?:
        | /**
         * @default "INCOMING"
         * @enum INCOMING
         */
        "INCOMING"
        | undefined;
    from_contact_id?:
        | (
              | /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    from_address?: ((AddressData_Input | null) | Array<AddressData_Input | null>) | undefined;
    to_contact_id?:
        | (
              | /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    to_address?: ((AddressData_Input | null) | Array<AddressData_Input | null>) | undefined;
    assigned_employee_id?:
        | (
              | /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    /**
     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
     */
    file_id: string;
    received_date: string;
};
type MailCreateOutgoing = {
    type?:
        | /**
         * @default "OUTGOING"
         * @enum OUTGOING
         */
        "OUTGOING"
        | undefined;
    from_contact_id?:
        | (
              | /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    from_address?: ((AddressData_Input | null) | Array<AddressData_Input | null>) | undefined;
    to_contact_id?:
        | (
              | /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    to_address?: ((AddressData_Input | null) | Array<AddressData_Input | null>) | undefined;
    assigned_employee_id?:
        | (
              | /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    /**
     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
     */
    file_id: string;
    duplex?: /**
     * @default false
     */
    boolean | undefined;
    color?: /**
     * @default false
     */
    boolean | undefined;
};
type MailIncoming = {
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(mal)_[0-9a-f]{32}$
     */
    id: string;
    from_contact_id?:
        | (
              | /**
               * @pattern ^(cnt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(cnt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    from_address?: ((AddressData_Output | null) | Array<AddressData_Output | null>) | undefined;
    to_contact_id?:
        | (
              | /**
               * @pattern ^(cnt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(cnt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    to_address?: ((AddressData_Output | null) | Array<AddressData_Output | null>) | undefined;
    assigned_employee_id?:
        | (
              | /**
               * @pattern ^(emp)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(emp)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    /**
     * @pattern ^(fil)_[0-9a-f]{32}$
     */
    file_id: string;
    type?:
        | /**
         * @default "INCOMING"
         * @enum INCOMING
         */
        "INCOMING"
        | undefined;
    sent_date?: ((string | null) | Array<string | null>) | undefined;
    received_date?: ((string | null) | Array<string | null>) | undefined;
    imported_date: string;
};
type MailOutgoing = {
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(mal)_[0-9a-f]{32}$
     */
    id: string;
    from_contact_id?:
        | (
              | /**
               * @pattern ^(cnt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(cnt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    from_address?: ((AddressData_Output | null) | Array<AddressData_Output | null>) | undefined;
    to_contact_id?:
        | (
              | /**
               * @pattern ^(cnt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(cnt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    to_address?: ((AddressData_Output | null) | Array<AddressData_Output | null>) | undefined;
    assigned_employee_id?:
        | (
              | /**
               * @pattern ^(emp)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(emp)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    /**
     * @pattern ^(fil)_[0-9a-f]{32}$
     */
    file_id: string;
    type?:
        | /**
         * @default "OUTGOING"
         * @enum OUTGOING
         */
        "OUTGOING"
        | undefined;
    status?: MailOutgoingStatus | undefined;
    error_message?: ((string | null) | Array<string | null>) | undefined;
    duplex?: /**
     * @default false
     */
    boolean | undefined;
    color?: /**
     * @default false
     */
    boolean | undefined;
    transmitted_date?: ((string | null) | Array<string | null>) | undefined;
    sent_date?: ((string | null) | Array<string | null>) | undefined;
};
type MailOutgoingStatus =
    /**
     * @enum NOT_TRANSMITTED, TRANSMITTED, PENDING, PRINTING, SENT, ERROR
     */
    "NOT_TRANSMITTED" | "TRANSMITTED" | "PENDING" | "PRINTING" | "SENT" | "ERROR";
type MailPatchIncoming = Partial<{
    /**
     * @default "INCOMING"
     * @enum INCOMING
     */
    type: "INCOMING";
    from_contact_id:
        | /**
         * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              string | null
          >;
    from_address: (AddressData_Input | null) | Array<AddressData_Input | null>;
    to_contact_id:
        | /**
         * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              string | null
          >;
    to_address: (AddressData_Input | null) | Array<AddressData_Input | null>;
    assigned_employee_id:
        | /**
         * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              string | null
          >;
    received_date: (string | null) | Array<string | null>;
}>;
type MailPatchOutgoing = Partial<{
    /**
     * @default "OUTGOING"
     * @enum OUTGOING
     */
    type: "OUTGOING";
    from_contact_id:
        | /**
         * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              string | null
          >;
    from_address: (AddressData_Input | null) | Array<AddressData_Input | null>;
    to_contact_id:
        | /**
         * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              string | null
          >;
    to_address: (AddressData_Input | null) | Array<AddressData_Input | null>;
    assigned_employee_id:
        | /**
         * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              string | null
          >;
}>;
type MailUnion = (MailOutgoing | MailIncoming) | Array<MailOutgoing | MailIncoming>;
type Meter = {
    name: string;
    /**
     * @pattern ^(pro)_[0-9a-f]{32}$
     */
    property_id: string;
    /**
     * @pattern ^(unt)_[0-9a-f]{32}$
     */
    unit_id: string;
    type: MeterType;
    number: string;
    unit_of_measurement: UnitOfMeasurement;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(mtr)_[0-9a-f]{32}$
     */
    id: string;
};
type UnitOfMeasurement =
    /**
     * @enum CUBIC_METERS, KILOWATT_HOURS, LITERS, OTHER
     */
    "CUBIC_METERS" | "KILOWATT_HOURS" | "LITERS" | "OTHER";
type MeterCreateRequest = {
    name: string;
    /**
     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
     */
    property_id: string;
    /**
     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
     */
    unit_id: string;
    type: MeterType;
    number: string;
    unit_of_measurement: UnitOfMeasurement;
};
type MeterPatchRequest = Partial<{
    name: (string | null) | Array<string | null>;
    type: (MeterType | null) | Array<MeterType | null>;
    number: (string | null) | Array<string | null>;
    unit_of_measurement: (UnitOfMeasurement | null) | Array<UnitOfMeasurement | null>;
    property_id:
        | /**
         * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              string | null
          >;
    unit_id:
        | /**
         * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              string | null
          >;
}>;
type Paged_AccountTemplate_ = {
    items: Array<AccountTemplate>;
    total: number;
    offset: number;
    limit: number;
};
type AccountTemplate = {
    /**
     * @minLength 1
     */
    name: string;
    number: number;
    /**
     * @pattern ^(cta)_[0-9a-f]{32}$
     */
    account_category_template_id: string;
    /**
     * @pattern ^(cat)_[0-9a-f]{32}$
     */
    chart_of_accounts_template_id: string;
    percent_allocable: string;
    report_tags: Array</**
     * @pattern ^(rtt)_[0-9a-f]{32}$
     */
    string>;
    /**
     * @enum DEFAULT, CUSTOM
     */
    template_type: "DEFAULT" | "CUSTOM";
    tenant_id?:
        | (
              | /**
               * @pattern ^(tnt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(tnt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    /**
     * @pattern ^(atp)_[0-9a-f]{32}$
     */
    id: string;
};
type Paged_Account_ = {
    items: Array<Account>;
    total: number;
    offset: number;
    limit: number;
};
type Account = {
    /**
     * @minLength 1
     */
    name: string;
    number: number;
    /**
     * @pattern ^(bsc)_[0-9a-f]{32}$
     */
    account_category_id: string;
    /**
     * @pattern ^(coa)_[0-9a-f]{32}$
     */
    chart_of_accounts_id: string;
    percent_allocable: string;
    report_tags: Array</**
     * @pattern ^(art)_[0-9a-f]{32}$
     */
    string>;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(acc)_[0-9a-f]{32}$
     */
    id: string;
};
type Paged_CommittedPayment_ = {
    items: Array<CommittedPayment>;
    total: number;
    offset: number;
    limit: number;
};
type Paged_Contact_ = {
    items: Array<Contact>;
    total: number;
    offset: number;
    limit: number;
};
type Paged_InvoiceUnion_ = {
    items: Array<InvoiceUnion>;
    total: number;
    offset: number;
    limit: number;
};
type Paged_JournalEntryWithDetails_ = {
    items: Array<JournalEntryWithDetails>;
    total: number;
    offset: number;
    limit: number;
};
type Paged_LiabilityWithDetails_ = {
    items: Array<LiabilityWithDetails>;
    total: number;
    offset: number;
    limit: number;
};
type Paged_Liability_ = {
    items: Array<Liability>;
    total: number;
    offset: number;
    limit: number;
};
type Paged_MailUnion_ = {
    items: Array<MailUnion>;
    total: number;
    offset: number;
    limit: number;
};
type Paged_PastCall_ = {
    items: Array<PastCall>;
    total: number;
    offset: number;
    limit: number;
};
type PastCall = {
    /**
     * @pattern ^(cnt)_[0-9a-f]{32}$
     */
    contact_id: string;
    /**
     * @pattern ^(emp)_[0-9a-f]{32}$
     */
    employee_id: string;
    date: string;
    duration: number;
    summary: (string | null) | Array<string | null>;
    notes?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    transcript?: ((string | null) | Array<string | null>) | undefined;
    caller_telephone_number?:
        | (
              | /**
               * @pattern ^(\+|00)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(\+|00)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$
                     */
                    string | null
                >
          )
        | undefined;
    called_telephone_number?:
        | (
              | /**
               * @pattern ^(\+|00)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(\+|00)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$
                     */
                    string | null
                >
          )
        | undefined;
    direction: CallDirection;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(pcl)_[0-9a-f]{32}$
     */
    id: string;
};
type CallDirection =
    /**
     * @enum INCOMING, OUTGOING
     */
    "INCOMING" | "OUTGOING";
type Paged_Property_ = {
    items: Array<Property>;
    total: number;
    offset: number;
    limit: number;
};
type Property = {
    name: string;
    managing_type: PropertyManagingType;
    plot_area?: ((number | null) | Array<number | null>) | undefined;
    cluster_id:
        | /**
         * @pattern ^(spr)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(spr)_[0-9a-f]{32}$
               */
              string | null
          >;
    internal_tenant_id?:
        | (
              | /**
               * @pattern ^(int)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(int)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    floors?: ((number | null) | Array<number | null>) | undefined;
    construction_year?: ((number | null) | Array<number | null>) | undefined;
    renovation_year?: ((number | null) | Array<number | null>) | undefined;
    address: AddressData_Output;
    energy_certificate?: ((string | null) | Array<string | null>) | undefined;
    heater_type?: ((HeaterType | null) | Array<HeaterType | null>) | undefined;
    is_water_centrally_heated?: ((boolean | null) | Array<boolean | null>) | undefined;
    accounting_tenant_id?:
        | (
              | /**
               * @pattern ^(act)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(act)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(pro)_[0-9a-f]{32}$
     */
    id: string;
};
type PropertyManagingType =
    /**
     * @enum HOME_OWNER_ASSOCIATION, RENTAL_PROPERTY
     */
    "HOME_OWNER_ASSOCIATION" | "RENTAL_PROPERTY";
type HeaterType =
    /**
     * @enum OIL, GAS, WOOD, ELECTRICITY
     */
    "OIL" | "GAS" | "WOOD" | "ELECTRICITY";
type Paged_Revenue_ = {
    items: Array<Revenue>;
    total: number;
    offset: number;
    limit: number;
};
type Revenue = {
    amount: string;
    currency?: ((string | null) | Array<string | null>) | undefined;
    value_date: string;
    bank_booking_date?: ((string | null) | Array<string | null>) | undefined;
    purpose?: ((string | null) | Array<string | null>) | undefined;
    counterpart_name?: ((string | null) | Array<string | null>) | undefined;
    counterpart_iban?:
        | (
              | /**
               * @pattern ^[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?:[ ]?[0-9]{1,2})?$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?:[ ]?[0-9]{1,2})?$
                     */
                    string | null
                >
          )
        | undefined;
    counterpart_bank_name?: ((string | null) | Array<string | null>) | undefined;
    /**
     * @pattern ^(baa)_[0-9a-f]{32}$
     */
    bank_account_id: string;
    source_info:
        | (RevenueSourceInfoFinApi | RevenueSourceInfoManual)
        | Array<RevenueSourceInfoFinApi | RevenueSourceInfoManual>;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(rev)_[0-9a-f]{32}$
     */
    id: string;
};
type RevenueSourceInfoFinApi = {
    source_type?:
        | /**
         * @default "FINAPI"
         * @enum FINAPI
         */
        "FINAPI"
        | undefined;
    fin_api_id: number;
};
type RevenueSourceInfoManual = Partial<{
    /**
     * @default "MANUAL"
     * @enum MANUAL
     */
    source_type: "MANUAL";
}>;
type Paged_WaitingTransaction_ = {
    items: Array<WaitingTransaction>;
    total: number;
    offset: number;
    limit: number;
};
type WaitingTransaction = {
    amount: string;
    send_date: string;
    purpose?: ((string | null) | Array<string | null>) | undefined;
    /**
     * @pattern ^(baa)_[0-9a-f]{32}$
     */
    bank_account_id: string;
    /**
     * @pattern ^[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?:[ ]?[0-9]{1,2})?$
     */
    foreign_iban: string;
    foreign_name: string;
    is_committed?: /**
     * @default false
     */
    boolean | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(wtr)_[0-9a-f]{32}$
     */
    id: string;
};
type PastCallCreateRequest = {
    /**
     * @pattern ^(cnt)_[0-9a-f]{32}$
     */
    contact_id: string;
    /**
     * @pattern ^(emp)_[0-9a-f]{32}$
     */
    employee_id: string;
    date: string;
    duration: number;
    summary: (string | null) | Array<string | null>;
    notes?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    transcript?: ((string | null) | Array<string | null>) | undefined;
    caller_telephone_number?: ((string | null) | Array<string | null>) | undefined;
    called_telephone_number?: ((string | null) | Array<string | null>) | undefined;
    direction: CallDirection;
};
type PastCallPatchRequest = Partial<{
    summary: (string | null) | Array<string | null>;
    notes:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
    transcript: (string | null) | Array<string | null>;
    caller_telephone_number: (string | null) | Array<string | null>;
    called_telephone_number: (string | null) | Array<string | null>;
    direction: (CallDirection | null) | Array<CallDirection | null>;
}>;
type PaymentCreateRequest = {
    payment_date: string;
    revenue_id?:
        | (
              | /**
               * @pattern ^(rev)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(rev)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    amount: (number | string) | Array<number | string>;
    type: PaymentType;
};
type PaymentPatchRequest = Partial<{
    payment_date: (string | null) | Array<string | null>;
    amount: (number | string | null) | Array<number | string | null>;
    type: (PaymentType | null) | Array<PaymentType | null>;
    revenue_id:
        | /**
         * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              string | null
          >;
}>;
type Process = {
    parent_type: ProcessParentType;
    /**
     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
     */
    main_relation_id: string;
    created_by_type: ProcessCreatedByType;
    /**
     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
     */
    created_by_id: string;
    /**
     * @minLength 1
     */
    name: string;
    created_at: string;
    due_date?: ((string | null) | Array<string | null>) | undefined;
    description?: ((string | null) | Array<string | null>) | undefined;
    status: ProcessStatus;
    priority: ProcessPriority;
    completed_date?: ((string | null) | Array<string | null>) | undefined;
    related_contacts?: /**
     * @default []
     */
    | Array</**
           * @pattern ^(cnt)_[0-9a-f]{32}$
           */
          string>
        | undefined;
    related_properties?: /**
     * @default []
     */
    | Array</**
           * @pattern ^(pro)_[0-9a-f]{32}$
           */
          string>
        | undefined;
    related_units?: /**
     * @default []
     */
    | Array</**
           * @pattern ^(unt)_[0-9a-f]{32}$
           */
          string>
        | undefined;
    assigned_employee_id?:
        | (
              | /**
               * @pattern ^(emp)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(emp)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(prc)_[0-9a-f]{32}$
     */
    id: string;
};
type ProcessParentType =
    /**
     * @enum PROPERTY, UNIT, CONTACT
     */
    "PROPERTY" | "UNIT" | "CONTACT";
type ProcessCreatedByType =
    /**
     * @enum SYSTEM, USER, WORKFLOW
     */
    "SYSTEM" | "USER" | "WORKFLOW";
type ProcessStatus =
    /**
     * @enum OPEN, IN_PROGRESS, DONE, CANCELED
     */
    "OPEN" | "IN_PROGRESS" | "DONE" | "CANCELED";
type ProcessPriority =
    /**
     * @enum LOW, MEDIUM, HIGH
     */
    "LOW" | "MEDIUM" | "HIGH";
type ProcessCreateRequest = {
    parent_type: ProcessParentType;
    /**
     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
     */
    main_relation_id: string;
    /**
     * @minLength 1
     */
    name: string;
    description?: ((string | null) | Array<string | null>) | undefined;
    due_date?: ((string | null) | Array<string | null>) | undefined;
    priority: ProcessPriority;
    status?: ProcessStatus | undefined;
    completed_date?: ((string | null) | Array<string | null>) | undefined;
    related_contacts?: /**
     * @default []
     */
    | Array</**
           * @pattern ^(cnt)_[0-9a-f]{32}$
           */
          string>
        | undefined;
    related_properties?: /**
     * @default []
     */
    | Array</**
           * @pattern ^(pro)_[0-9a-f]{32}$
           */
          string>
        | undefined;
    related_units?: /**
     * @default []
     */
    | Array</**
           * @pattern ^(unt)_[0-9a-f]{32}$
           */
          string>
        | undefined;
    assigned_employee_id?:
        | (
              | /**
               * @pattern ^(emp)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(emp)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
};
type ProcessEventCall = {
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(pev)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @pattern ^(prc)_[0-9a-f]{32}$
     */
    process_id: string;
    created_at: string;
    summary?: ((string | null) | Array<string | null>) | undefined;
    title?: ((string | null) | Array<string | null>) | undefined;
    visibility: {};
    created_by_type: ProcessCreatedByType;
    created_by_id:
        | (
              | UserIdUnion
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          )
        | Array<
              | UserIdUnion
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          >;
    type?:
        | /**
         * @default "CALL"
         * @enum CALL
         */
        "CALL"
        | undefined;
    /**
     * @pattern ^(pcl)_[0-9a-f]{32}$
     */
    call_id: string;
};
type ProcessEventVisibilityData = {
    show_content: boolean;
};
type UserIdUnion =
    /**
     * @pattern ^(emp)_[0-9a-f]{32}$
     */
    string;
type ProcessEventCallEventCreateRequest = {
    summary?: ((string | null) | Array<string | null>) | undefined;
    title?: ((string | null) | Array<string | null>) | undefined;
    visibility: {};
    created_at?: /**
     * @default "2025-04-14T00:15:27.560739"
     */
    string | undefined;
    type?:
        | /**
         * @default "CALL"
         * @enum CALL
         */
        "CALL"
        | undefined;
    /**
     * @pattern ^(pcl)_[0-9a-f]{32}$
     */
    call_id: string;
};
type ProcessEventCallEventPatchRequest = Partial<{
    summary: (string | null) | Array<string | null>;
    title: (string | null) | Array<string | null>;
    visibility: ({} | null) | Array<{} | null>;
    /**
     * @default "CALL"
     * @enum CALL
     */
    type: "CALL";
}>;
type ProcessEventEmail = {
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(pev)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @pattern ^(prc)_[0-9a-f]{32}$
     */
    process_id: string;
    created_at: string;
    summary?: ((string | null) | Array<string | null>) | undefined;
    title?: ((string | null) | Array<string | null>) | undefined;
    visibility: {};
    created_by_type: ProcessCreatedByType;
    created_by_id:
        | (
              | UserIdUnion
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          )
        | Array<
              | UserIdUnion
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          >;
    type?:
        | /**
         * @default "EMAIL"
         * @enum EMAIL
         */
        "EMAIL"
        | undefined;
    /**
     * @pattern ^(eml)_[0-9a-f]{32}$
     */
    email_id: string;
};
type ProcessEventEmailEventCreateRequest = {
    summary?: ((string | null) | Array<string | null>) | undefined;
    title?: ((string | null) | Array<string | null>) | undefined;
    visibility: {};
    created_at?: /**
     * @default "2025-04-14T00:15:27.560739"
     */
    string | undefined;
    type?:
        | /**
         * @default "EMAIL"
         * @enum EMAIL
         */
        "EMAIL"
        | undefined;
    /**
     * @pattern ^(eml)_[0-9a-f]{32}$
     */
    email_id: string;
};
type ProcessEventEmailEventPatchRequest = Partial<{
    summary: (string | null) | Array<string | null>;
    title: (string | null) | Array<string | null>;
    visibility: ({} | null) | Array<{} | null>;
    /**
     * @default "EMAIL"
     * @enum EMAIL
     */
    type: "EMAIL";
}>;
type ProcessEventMail = {
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(pev)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @pattern ^(prc)_[0-9a-f]{32}$
     */
    process_id: string;
    created_at: string;
    summary?: ((string | null) | Array<string | null>) | undefined;
    title?: ((string | null) | Array<string | null>) | undefined;
    visibility: {};
    created_by_type: ProcessCreatedByType;
    created_by_id:
        | (
              | UserIdUnion
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          )
        | Array<
              | UserIdUnion
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          >;
    type?:
        | /**
         * @default "MAIL"
         * @enum MAIL
         */
        "MAIL"
        | undefined;
    /**
     * @pattern ^(mal)_[0-9a-f]{32}$
     */
    mail_id: string;
};
type ProcessEventMailEventCreateRequest = {
    summary?: ((string | null) | Array<string | null>) | undefined;
    title?: ((string | null) | Array<string | null>) | undefined;
    visibility: {};
    created_at?: /**
     * @default "2025-04-14T00:15:27.560739"
     */
    string | undefined;
    type?:
        | /**
         * @default "MAIL"
         * @enum MAIL
         */
        "MAIL"
        | undefined;
    /**
     * @pattern ^(mal)_[0-9a-f]{32}$
     */
    mail_id: string;
};
type ProcessEventMailEventPatchRequest = Partial<{
    summary: (string | null) | Array<string | null>;
    title: (string | null) | Array<string | null>;
    visibility: ({} | null) | Array<{} | null>;
    /**
     * @default "MAIL"
     * @enum MAIL
     */
    type: "MAIL";
}>;
type ProcessEventNote = {
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(pev)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @pattern ^(prc)_[0-9a-f]{32}$
     */
    process_id: string;
    created_at: string;
    summary?: ((string | null) | Array<string | null>) | undefined;
    title?: ((string | null) | Array<string | null>) | undefined;
    visibility: {};
    created_by_type: ProcessCreatedByType;
    created_by_id:
        | (
              | UserIdUnion
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          )
        | Array<
              | UserIdUnion
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          >;
    type?:
        | /**
         * @default "NOTE"
         * @enum NOTE
         */
        "NOTE"
        | undefined;
    content: string;
};
type ProcessEventNoteEventCreateRequest = {
    summary?: ((string | null) | Array<string | null>) | undefined;
    title?: ((string | null) | Array<string | null>) | undefined;
    visibility: {};
    created_at?: /**
     * @default "2025-04-14T00:15:27.560739"
     */
    string | undefined;
    type?:
        | /**
         * @default "NOTE"
         * @enum NOTE
         */
        "NOTE"
        | undefined;
    content: string;
};
type ProcessEventNoteEventPatchRequest = Partial<{
    summary: (string | null) | Array<string | null>;
    title: (string | null) | Array<string | null>;
    visibility: ({} | null) | Array<{} | null>;
    /**
     * @default "NOTE"
     * @enum NOTE
     */
    type: "NOTE";
    content: (string | null) | Array<string | null>;
}>;
type ProcessEventProcessTask = {
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(pev)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @pattern ^(prc)_[0-9a-f]{32}$
     */
    process_id: string;
    created_at: string;
    summary?: ((string | null) | Array<string | null>) | undefined;
    title?: ((string | null) | Array<string | null>) | undefined;
    visibility: {};
    created_by_type: ProcessCreatedByType;
    created_by_id:
        | (
              | UserIdUnion
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          )
        | Array<
              | UserIdUnion
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          >;
    type?:
        | /**
         * @default "PROCESS_TASK"
         * @enum PROCESS_TASK
         */
        "PROCESS_TASK"
        | undefined;
    /**
     * @pattern ^(ptk)_[0-9a-f]{32}$
     */
    process_task_id: string;
};
type ProcessEventProcessTaskEventCreateRequest = {
    summary?: ((string | null) | Array<string | null>) | undefined;
    title?: ((string | null) | Array<string | null>) | undefined;
    visibility: {};
    created_at?: /**
     * @default "2025-04-14T00:15:27.560739"
     */
    string | undefined;
    type?:
        | /**
         * @default "PROCESS_TASK"
         * @enum PROCESS_TASK
         */
        "PROCESS_TASK"
        | undefined;
    /**
     * @pattern ^(ptk)_[0-9a-f]{32}$
     */
    process_task_id: string;
};
type ProcessEventProcessTaskEventPatchRequest = Partial<{
    summary: (string | null) | Array<string | null>;
    title: (string | null) | Array<string | null>;
    visibility: ({} | null) | Array<{} | null>;
    /**
     * @default "PROCESS_TASK"
     * @enum PROCESS_TASK
     */
    type: "PROCESS_TASK";
}>;
type ProcessEventStatusChange = {
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(pev)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @pattern ^(prc)_[0-9a-f]{32}$
     */
    process_id: string;
    created_at: string;
    summary?: ((string | null) | Array<string | null>) | undefined;
    title?: ((string | null) | Array<string | null>) | undefined;
    visibility: {};
    created_by_type: ProcessCreatedByType;
    created_by_id:
        | (
              | UserIdUnion
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          )
        | Array<
              | UserIdUnion
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          >;
    type?:
        | /**
         * @default "STATUS_CHANGE"
         * @enum STATUS_CHANGE
         */
        "STATUS_CHANGE"
        | undefined;
    new_status: ProcessStatus;
};
type ProcessEventTask = {
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(pev)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @pattern ^(prc)_[0-9a-f]{32}$
     */
    process_id: string;
    created_at: string;
    summary?: ((string | null) | Array<string | null>) | undefined;
    title?: ((string | null) | Array<string | null>) | undefined;
    visibility: {};
    created_by_type: ProcessCreatedByType;
    created_by_id:
        | (
              | UserIdUnion
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          )
        | Array<
              | UserIdUnion
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          >;
    type?:
        | /**
         * @default "TASK"
         * @enum TASK
         */
        "TASK"
        | undefined;
    /**
     * @pattern ^(tsk)_[0-9a-f]{32}$
     */
    task_id: string;
};
type ProcessEventTaskEventCreateRequest = {
    summary?: ((string | null) | Array<string | null>) | undefined;
    title?: ((string | null) | Array<string | null>) | undefined;
    visibility: {};
    created_at?: /**
     * @default "2025-04-14T00:15:27.560739"
     */
    string | undefined;
    type?:
        | /**
         * @default "TASK"
         * @enum TASK
         */
        "TASK"
        | undefined;
    /**
     * @pattern ^(tsk)_[0-9a-f]{32}$
     */
    task_id: string;
};
type ProcessEventTaskEventPatchRequest = Partial<{
    summary: (string | null) | Array<string | null>;
    title: (string | null) | Array<string | null>;
    visibility: ({} | null) | Array<{} | null>;
    /**
     * @default "TASK"
     * @enum TASK
     */
    type: "TASK";
}>;
type ProcessEventUnion =
    | (
          | ProcessEventTask
          | ProcessEventMail
          | ProcessEventCall
          | ProcessEventEmail
          | ProcessEventProcessTask
          | ProcessEventNote
          | ProcessEventStatusChange
      )
    | Array<
          | ProcessEventTask
          | ProcessEventMail
          | ProcessEventCall
          | ProcessEventEmail
          | ProcessEventProcessTask
          | ProcessEventNote
          | ProcessEventStatusChange
      >;
type ProcessPatchRequest = Partial<{
    name:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
    due_date: (string | null) | Array<string | null>;
    description: (string | null) | Array<string | null>;
    status: (ProcessStatus | null) | Array<ProcessStatus | null>;
    priority: (ProcessPriority | null) | Array<ProcessPriority | null>;
    completed_date: (string | null) | Array<string | null>;
    /**
     * @default []
     */
    related_contacts:
        | (Array</**
           * @pattern ^(cnt)_[0-9a-f]{32}$
           */
          string> | null)
        | Array<Array</**
           * @pattern ^(cnt)_[0-9a-f]{32}$
           */
          string> | null>;
    /**
     * @default []
     */
    related_properties:
        | (Array</**
           * @pattern ^(pro)_[0-9a-f]{32}$
           */
          string> | null)
        | Array<Array</**
           * @pattern ^(pro)_[0-9a-f]{32}$
           */
          string> | null>;
    /**
     * @default []
     */
    related_units:
        | (Array</**
           * @pattern ^(unt)_[0-9a-f]{32}$
           */
          string> | null)
        | Array<Array</**
           * @pattern ^(unt)_[0-9a-f]{32}$
           */
          string> | null>;
    assigned_employee_id:
        | /**
         * @pattern ^(emp)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(emp)_[0-9a-f]{32}$
               */
              string | null
          >;
}>;
type ProcessTaskConfirm = {
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(ptk)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @pattern ^(prc)_[0-9a-f]{32}$
     */
    process_id: string;
    created_at: string;
    completed_at?: ((string | null) | Array<string | null>) | undefined;
    created_by_type: ProcessTaskCreatedByType;
    created_by_id:
        | /**
         * @pattern ^(emp)_[0-9a-f]{32}$
         */
        (| string
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          )
        | Array<
              /**
               * @pattern ^(emp)_[0-9a-f]{32}$
               */
              | string
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          >;
    assigned_to_id?:
        | (
              | /**
               * @pattern ^(emp)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(emp)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    type?:
        | /**
         * @default "CONFIRM"
         * @enum CONFIRM
         */
        "CONFIRM"
        | undefined;
    title: string;
    description?: ((string | null) | Array<string | null>) | undefined;
    confirm_button_text?: ((string | null) | Array<string | null>) | undefined;
    cancel_button_text?: ((string | null) | Array<string | null>) | undefined;
    confirmed?: /**
     * @default false
     */
    boolean | undefined;
};
type ProcessTaskCreatedByType =
    /**
     * @enum SYSTEM, USER, WORKFLOW
     */
    "SYSTEM" | "USER" | "WORKFLOW";
type ProcessTaskForm = {
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(ptk)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @pattern ^(prc)_[0-9a-f]{32}$
     */
    process_id: string;
    created_at: string;
    completed_at?: ((string | null) | Array<string | null>) | undefined;
    created_by_type: ProcessTaskCreatedByType;
    created_by_id:
        | /**
         * @pattern ^(emp)_[0-9a-f]{32}$
         */
        (| string
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          )
        | Array<
              /**
               * @pattern ^(emp)_[0-9a-f]{32}$
               */
              | string
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          >;
    assigned_to_id?:
        | (
              | /**
               * @pattern ^(emp)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(emp)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    type?:
        | /**
         * @default "FORM"
         * @enum FORM
         */
        "FORM"
        | undefined;
    json_schema: {};
    ui_schema: {};
    form_data: {};
};
type ProcessTaskSimpleTodo = {
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(ptk)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @pattern ^(prc)_[0-9a-f]{32}$
     */
    process_id: string;
    created_at: string;
    completed_at?: ((string | null) | Array<string | null>) | undefined;
    created_by_type: ProcessTaskCreatedByType;
    created_by_id:
        | /**
         * @pattern ^(emp)_[0-9a-f]{32}$
         */
        (| string
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          )
        | Array<
              /**
               * @pattern ^(emp)_[0-9a-f]{32}$
               */
              | string
              /**
               * @pattern ^(wfe)_[0-9a-f]{32}$
               */
              | string
          >;
    assigned_to_id?:
        | (
              | /**
               * @pattern ^(emp)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(emp)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    type?:
        | /**
         * @default "SIMPLE_TODO"
         * @enum SIMPLE_TODO
         */
        "SIMPLE_TODO"
        | undefined;
    title: string;
    description?: ((string | null) | Array<string | null>) | undefined;
};
type ProcessTaskUnion =
    | (ProcessTaskSimpleTodo | ProcessTaskConfirm | ProcessTaskForm)
    | Array<ProcessTaskSimpleTodo | ProcessTaskConfirm | ProcessTaskForm>;
type PropertyContract = {
    /**
     * @pattern ^(pro)_[0-9a-f]{32}$
     */
    property_id: string;
    type: PropertyContractType;
    name: string;
    start_date: string;
    end_date: string;
    /**
     * @pattern ^(fil)_[0-9a-f]{32}$
     */
    file_id: string;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(pco)_[0-9a-f]{32}$
     */
    id: string;
};
type PropertyContractType =
    /**
     * @enum INSURANCE, SERVICE_CONTRACT, OTHER
     */
    "INSURANCE" | "SERVICE_CONTRACT" | "OTHER";
type PropertyContractCreateRequest = {
    type: PropertyContractType;
    name: string;
    start_date: string;
    end_date: string;
    /**
     * @pattern ^(fil)_[0-9a-f]{32}$
     */
    file_id: string;
};
type PropertyContractPatchRequest = Partial<{
    type: (PropertyContractType | null) | Array<PropertyContractType | null>;
    name: (string | null) | Array<string | null>;
    start_date: (string | null) | Array<string | null>;
    end_date: (string | null) | Array<string | null>;
    file_id:
        | /**
         * @pattern ^(fil)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(fil)_[0-9a-f]{32}$
               */
              string | null
          >;
}>;
type PropertyCreateRequest = {
    name: string;
    managing_type: PropertyManagingType;
    plot_area?: ((number | null) | Array<number | null>) | undefined;
    floors?: ((number | null) | Array<number | null>) | undefined;
    construction_year?: ((number | null) | Array<number | null>) | undefined;
    renovation_year?: ((number | null) | Array<number | null>) | undefined;
    address: AddressData_Input;
    energy_certificate?: ((string | null) | Array<string | null>) | undefined;
    heater_type?: ((HeaterType | null) | Array<HeaterType | null>) | undefined;
    is_water_centrally_heated?: ((boolean | null) | Array<boolean | null>) | undefined;
};
type PropertyPatchRequest = Partial<{
    name: (string | null) | Array<string | null>;
    plot_area: (number | null) | Array<number | null>;
    floors: (number | null) | Array<number | null>;
    construction_year: (number | null) | Array<number | null>;
    renovation_year: (number | null) | Array<number | null>;
    address: (AddressDataPartial | null) | Array<AddressDataPartial | null>;
    energy_certificate: (string | null) | Array<string | null>;
    heater_type: (HeaterType | null) | Array<HeaterType | null>;
    is_water_centrally_heated: (boolean | null) | Array<boolean | null>;
}>;
type PropertySharedUnit = {
    /**
     * @pattern ^(pro)_[0-9a-f]{32}$
     */
    property_id: string;
    name: string;
    type: PropertySharedUnitType;
    special_use_by_id?:
        | (
              | /**
               * @pattern ^(cow)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(cow)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(psu)_[0-9a-f]{32}$
     */
    id: string;
};
type PropertySharedUnitType =
    /**
     * @enum GARAGE, GARDEN, STORAGE_ROOM, PARKING_SPACE
     */
    "GARAGE" | "GARDEN" | "STORAGE_ROOM" | "PARKING_SPACE";
type PropertySharedUnitCreateRequest = {
    name: string;
    type: PropertySharedUnitType;
    special_use_by_id?:
        | (
              | /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
};
type PropertySharedUnitPatchRequest = Partial<{
    name: (string | null) | Array<string | null>;
    type: (PropertySharedUnitType | null) | Array<PropertySharedUnitType | null>;
    special_use_by_id:
        | /**
         * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              string | null
          >;
}>;
type RecurringJournalEntry = {
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(jrn)_[0-9a-f]{32}$
     */
    journal_id: string;
    property_id?:
        | (
              | /**
               * @pattern ^(pro)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(pro)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    unit_id?:
        | (
              | /**
               * @pattern ^(unt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    name: string;
    description?: ((string | null) | Array<string | null>) | undefined;
    start_date: string;
    end_date?: ((string | null) | Array<string | null>) | undefined;
    interval_type: IntervalType;
    interval_value: number;
    items: Array<JournalEntryItemData_Output>;
    /**
     * @pattern ^(rje)_[0-9a-f]{32}$
     */
    id: string;
};
type IntervalType =
    /**
     * @enum DAILY, WEEKLY, MONTHLY, YEARLY
     */
    "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";
type RecurringJournalEntryCreateRequest = {
    property_id?:
        | (
              | /**
               * @pattern ^(pro)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(pro)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    unit_id?:
        | (
              | /**
               * @pattern ^(unt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    /**
     * @minLength 1
     */
    name: string;
    description?: ((string | null) | Array<string | null>) | undefined;
    start_date: string;
    end_date?: ((string | null) | Array<string | null>) | undefined;
    interval_type: IntervalType;
    interval_value: number;
    items: Array<JournalEntryItemData_Input>;
};
type RecurringLiability = {
    /**
     * @pattern ^(act)_[0-9a-f]{32}$
     */
    accounting_tenant_id: string;
    property_id?:
        | (
              | /**
               * @pattern ^(pro)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(pro)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    amount: string;
    name: string;
    description?: ((string | null) | Array<string | null>) | undefined;
    start_date: string;
    end_date?: ((string | null) | Array<string | null>) | undefined;
    due_day: number;
    interval_type: RecurringLiabilityIntervalType;
    interval_value: number;
    recurring_journal_entry_id?:
        | (
              | /**
               * @pattern ^(jre)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(jre)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(rcl)_[0-9a-f]{32}$
     */
    id: string;
};
type RecurringLiabilityIntervalType =
    /**
     * @enum DAILY, WEEKLY, MONTHLY, YEARLY
     */
    "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";
type RecurringLiabilityCreateRequest = {
    property_id?:
        | (
              | /**
               * @pattern ^(pro)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(pro)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    amount: (number | string) | Array<number | string>;
    name: string;
    description?: ((string | null) | Array<string | null>) | undefined;
    start_date: string;
    end_date?: ((string | null) | Array<string | null>) | undefined;
    due_day: number;
    interval_type: RecurringLiabilityIntervalType;
    interval_value: number;
    recurring_journal_entry_id?:
        | (
              | /**
               * @pattern ^(jre)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(jre)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
};
type ServiceProvider = {
    /**
     * @pattern ^(cnt)_[0-9a-f]{32}$
     */
    contact_id: string;
    rating?: ((number | null) | Array<number | null>) | undefined;
    sub_address?: ((AddressData_Output | null) | Array<AddressData_Output | null>) | undefined;
    service_radius_km: (string | null) | Array<string | null>;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(svp)_[0-9a-f]{32}$
     */
    id: string;
};
type ServiceProviderCreateRequest = Partial<{
    rating: (number | null) | Array<number | null>;
    sub_address: (AddressData_Input | null) | Array<AddressData_Input | null>;
    service_radius_km: (number | string | null) | Array<number | string | null>;
}>;
type ServiceProviderPatchRequest = Partial<{
    rating: (number | null) | Array<number | null>;
    sub_address_id: (AddressData_Input | null) | Array<AddressData_Input | null>;
    service_radius_km: (number | string | null) | Array<number | string | null>;
}>;
type ServiceProviderService = {
    /**
     * @pattern ^(svp)_[0-9a-f]{32}$
     */
    service_provider_id: string;
    default_contact_option?: ((ContactOptionData | null) | Array<ContactOptionData | null>) | undefined;
    /**
     * @pattern ^(ser)_[0-9a-f]{32}$
     */
    service: string;
    service_radius_km?: ((string | null) | Array<string | null>) | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(sps)_[0-9a-f]{32}$
     */
    id: string;
};
type ServiceProviderServiceCreateRequest = {
    default_contact_option?: ((ContactOptionData | null) | Array<ContactOptionData | null>) | undefined;
    /**
     * @pattern ^(ser)_[0-9a-f]{32}$
     */
    service: string;
    service_radius_km?: ((number | string | null) | Array<number | string | null>) | undefined;
};
type ServiceProviderServicePatchRequest = Partial<{
    default_contact_option: (ContactOptionData | null) | Array<ContactOptionData | null>;
    service_radius_km: (number | string | null) | Array<number | string | null>;
}>;
type Task = {
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(tsk)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @minLength 1
     */
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    linked_object_type: LinkedObjectType;
    linked_object_id:
        | /**
         * @pattern ^(pro)_[0-9a-f]{32}$
         */
        (| string
              /**
               * @pattern ^(unt)_[0-9a-f]{32}$
               */
              | string
              /**
               * @pattern ^(cnt)_[0-9a-f]{32}$
               */
              | string
          )
        | Array<
              /**
               * @pattern ^(pro)_[0-9a-f]{32}$
               */
              | string
              /**
               * @pattern ^(unt)_[0-9a-f]{32}$
               */
              | string
              /**
               * @pattern ^(cnt)_[0-9a-f]{32}$
               */
              | string
          >;
    assigned_to: Array</**
     * @pattern ^(emp)_[0-9a-f]{32}$
     */
    string>;
    created_by: UserIdUnion;
    created_at: string;
    updated_at: string;
    due_date?: ((string | null) | Array<string | null>) | undefined;
    completed_at?: ((string | null) | Array<string | null>) | undefined;
    tags?: /**
     * @default []
     */
    Array<string> | undefined;
};
type TaskStatus =
    /**
     * @enum OPEN, IN_PROGRESS, COMPLETED, CANCELLED
     */
    "OPEN" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
type TaskPriority =
    /**
     * @enum LOW, MEDIUM, HIGH, URGENT
     */
    "LOW" | "MEDIUM" | "HIGH" | "URGENT";
type LinkedObjectType =
    /**
     * @enum PROPERTY, UNIT, CONTACT
     */
    "PROPERTY" | "UNIT" | "CONTACT";
type TaskComment = {
    /**
     * @pattern ^(tsk)_[0-9a-f]{32}$
     */
    task_id: string;
    date: string;
    /**
     * @pattern ^(emp)_[0-9a-f]{32}$
     */
    employee_id: string;
    comment?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    linked_object_type: TaskCommentLinkedObjectType;
    linked_object_id?:
        | (
              | /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(tcm)_[0-9a-f]{32}$
     */
    id: string;
};
type TaskCommentLinkedObjectType =
    /**
     * @enum FILE, CONTACT, UNIT, PROPERTY, MAIL, TASK, EMAIL
     */
    "FILE" | "CONTACT" | "UNIT" | "PROPERTY" | "MAIL" | "TASK" | "EMAIL";
type TaskCommentCreateRequest = {
    comment?:
        | (
              | /**
               * @minLength 1
               */
              (string | null)
              | Array<
                    /**
                     * @minLength 1
                     */
                    string | null
                >
          )
        | undefined;
    linked_object_type: TaskCommentLinkedObjectType;
    linked_object_id?:
        | (
              | /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
};
type TaskCommentPatchRequest = Partial<{
    comment:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
    linked_object_type: (TaskCommentLinkedObjectType | null) | Array<TaskCommentLinkedObjectType | null>;
    linked_object_id:
        | /**
         * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
               */
              string | null
          >;
}>;
type TaskCreateRequest = {
    /**
     * @minLength 1
     */
    title: string;
    description: string;
    priority: TaskPriority;
    linked_object_type: LinkedObjectType;
    /**
     * @pattern ^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$
     */
    linked_object_id: string;
    assigned_to: Array</**
     * @pattern ^(emp)_[0-9a-f]{32}$
     */
    string>;
    due_date?: ((string | null) | Array<string | null>) | undefined;
    tags?: /**
     * @default []
     */
    Array<string> | undefined;
};
type TaskPatchRequest = Partial<{
    title:
        | /**
         * @minLength 1
         */
        (string | null)
        | Array<
              /**
               * @minLength 1
               */
              string | null
          >;
    description: (string | null) | Array<string | null>;
    status: (TaskStatus | null) | Array<TaskStatus | null>;
    priority: (TaskPriority | null) | Array<TaskPriority | null>;
    assigned_to:
        | (Array</**
           * @pattern ^(emp)_[0-9a-f]{32}$
           */
          string> | null)
        | Array<Array</**
           * @pattern ^(emp)_[0-9a-f]{32}$
           */
          string> | null>;
    due_date: (string | null) | Array<string | null>;
    tags: (Array<string> | null) | Array<Array<string> | null>;
}>;
type TaxGridEntry = {
    /**
     * @pattern ^(txr)_[0-9a-f]{32}$
     */
    tax_rate_id: string;
    share: string;
    based_on: TaxGridEntryBasedOn;
    /**
     * @pattern ^(acc)_[0-9a-f]{32}$
     */
    account_id: string;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(tge)_[0-9a-f]{32}$
     */
    id: string;
};
type TaxGridEntryBasedOn =
    /**
     * @enum TOTAL, TAX
     */
    "TOTAL" | "TAX";
type TaxGridEntryCreateRequest = {
    share: (number | string) | Array<number | string>;
    based_on: TaxGridEntryBasedOn;
    /**
     * @pattern ^(acc)_[0-9a-f]{32}$
     */
    account_id: string;
};
type TaxGridEntryPatchRequest = Partial<{
    share:
        | /**
         * @minimum 0
         */
        (number | null)
        | Array<
              /**
               * @minimum 0
               */
              number | null
          >;
    based_on: (TaxGridEntryBasedOn | null) | Array<TaxGridEntryBasedOn | null>;
    account_id:
        | /**
         * @pattern ^(acc)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(acc)_[0-9a-f]{32}$
               */
              string | null
          >;
}>;
type TaxGridEntryTemplate = {
    /**
     * @pattern ^(trt)_[0-9a-f]{32}$
     */
    tax_rate_template_id: string;
    share: string;
    based_on: TaxGridEntryTemplateBasedOn;
    /**
     * @pattern ^(atp)_[0-9a-f]{32}$
     */
    account_template_id: string;
    /**
     * @enum DEFAULT, CUSTOM
     */
    template_type: "DEFAULT" | "CUSTOM";
    tenant_id?:
        | (
              | /**
               * @pattern ^(tnt)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(tnt)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
    /**
     * @pattern ^(tgt)_[0-9a-f]{32}$
     */
    id: string;
};
type TaxGridEntryTemplateBasedOn =
    /**
     * @enum TOTAL, TAX
     */
    "TOTAL" | "TAX";
type TaxGridEntryTemplateCreateRequest = {
    share: (number | string) | Array<number | string>;
    based_on: TaxGridEntryTemplateBasedOn;
    /**
     * @pattern ^(atp)_[0-9a-f]{32}$
     */
    account_template_id: string;
};
type TaxGridEntryTemplatePatchRequest = Partial<{
    share:
        | /**
         * @minimum 0
         */
        (number | null)
        | Array<
              /**
               * @minimum 0
               */
              number | null
          >;
    based_on: (TaxGridEntryTemplateBasedOn | null) | Array<TaxGridEntryTemplateBasedOn | null>;
    account_template_id:
        | /**
         * @pattern ^(atp)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(atp)_[0-9a-f]{32}$
               */
              string | null
          >;
}>;
type Unit = {
    /**
     * @pattern ^(pro)_[0-9a-f]{32}$
     */
    property_id: string;
    name: string;
    location: string;
    type: UnitType;
    area?:
        | (
              | /**
               * @minimum 0
               */
              (number | null)
              | Array<
                    /**
                     * @minimum 0
                     */
                    number | null
                >
          )
        | undefined;
    area_heated?:
        | (
              | /**
               * @minimum 0
               */
              (number | null)
              | Array<
                    /**
                     * @minimum 0
                     */
                    number | null
                >
          )
        | undefined;
    rooms?:
        | (
              | /**
               * @minimum 0
               */
              (number | null)
              | Array<
                    /**
                     * @minimum 0
                     */
                    number | null
                >
          )
        | undefined;
    is_vacant: boolean;
    heating_type?: ((HeatingType | null) | Array<HeatingType | null>) | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(unt)_[0-9a-f]{32}$
     */
    id: string;
};
type UnitType =
    /**
     * @enum APARTMENT, GARAGE, PARKING_SPACE, BASEMENT, GARDEN, COMMERCIAL, TERRACE
     */
    "APARTMENT" | "GARAGE" | "PARKING_SPACE" | "BASEMENT" | "GARDEN" | "COMMERCIAL" | "TERRACE";
type HeatingType =
    /**
     * @enum OIL, GAS, WOOD, ELECTRICITY
     */
    "OIL" | "GAS" | "WOOD" | "ELECTRICITY";
type UnitCreateRequest = {
    name: string;
    location: string;
    type: UnitType;
    area?:
        | (
              | /**
               * @minimum 0
               */
              (number | null)
              | Array<
                    /**
                     * @minimum 0
                     */
                    number | null
                >
          )
        | undefined;
    area_heated?:
        | (
              | /**
               * @minimum 0
               */
              (number | null)
              | Array<
                    /**
                     * @minimum 0
                     */
                    number | null
                >
          )
        | undefined;
    rooms?:
        | (
              | /**
               * @minimum 0
               */
              (number | null)
              | Array<
                    /**
                     * @minimum 0
                     */
                    number | null
                >
          )
        | undefined;
    is_vacant: boolean;
    heating_type?: ((HeatingType | null) | Array<HeatingType | null>) | undefined;
};
type UnitPatchRequest = Partial<{
    name: (string | null) | Array<string | null>;
    location: (string | null) | Array<string | null>;
    type: (UnitType | null) | Array<UnitType | null>;
    area:
        | /**
         * @minimum 0
         */
        (number | null)
        | Array<
              /**
               * @minimum 0
               */
              number | null
          >;
    area_heated:
        | /**
         * @minimum 0
         */
        (number | null)
        | Array<
              /**
               * @minimum 0
               */
              number | null
          >;
    rooms:
        | /**
         * @minimum 0
         */
        (number | null)
        | Array<
              /**
               * @minimum 0
               */
              number | null
          >;
    is_vacant: (boolean | null) | Array<boolean | null>;
    heating_type: (HeatingType | null) | Array<HeatingType | null>;
}>;
type Usage = {
    /**
     * @pattern ^(unt)_[0-9a-f]{32}$
     */
    unit_id: string;
    from_date: string;
    to_date?: ((string | null) | Array<string | null>) | undefined;
    type: UsageType;
    notice_period?: ((number | null) | Array<number | null>) | undefined;
    minimum_use_until?: ((string | null) | Array<string | null>) | undefined;
    deposit_amount?: ((string | null) | Array<string | null>) | undefined;
    deposit_type?: ((DepositType | null) | Array<DepositType | null>) | undefined;
    deposit_due_date?: ((string | null) | Array<string | null>) | undefined;
    extra_information?: ((string | null) | Array<string | null>) | undefined;
    onetime_small_repair_limit?: ((string | null) | Array<string | null>) | undefined;
    annual_small_repair_limit?: ((string | null) | Array<string | null>) | undefined;
    is_furnished: boolean;
    rent_payment_interval: RentPaymentInterval;
    rent_increase_type: RentIncreaseType;
    rent_increase_rate?: ((string | null) | Array<string | null>) | undefined;
    rent_index?: ((string | null) | Array<string | null>) | undefined;
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    /**
     * @pattern ^(usg)_[0-9a-f]{32}$
     */
    id: string;
};
type UsageType =
    /**
     * @enum RENT_PRIVATE, RENT_COMMERCIAL
     */
    "RENT_PRIVATE" | "RENT_COMMERCIAL";
type DepositType =
    /**
     * @enum BANK_TRANSFER, CASH, BANK_GUARANTEE, PLEDGED_SAVING_ACCOUNT
     */
    "BANK_TRANSFER" | "CASH" | "BANK_GUARANTEE" | "PLEDGED_SAVING_ACCOUNT";
type RentPaymentInterval =
    /**
     * @enum MONTHLY, QUARTERLY, HALF_YEARLY, YEARLY
     */
    "MONTHLY" | "QUARTERLY" | "HALF_YEARLY" | "YEARLY";
type RentIncreaseType =
    /**
     * @enum FIXED, INDEXED, CUSTOM
     */
    "FIXED" | "INDEXED" | "CUSTOM";
type UsageCreateRequest = {
    from_date: string;
    to_date?: ((string | null) | Array<string | null>) | undefined;
    type: UsageType;
    notice_period?: ((number | null) | Array<number | null>) | undefined;
    minimum_use_until?: ((string | null) | Array<string | null>) | undefined;
    deposit_amount?: ((number | null) | Array<number | null>) | undefined;
    deposit_type?: ((DepositType | null) | Array<DepositType | null>) | undefined;
    deposit_due_date?: ((string | null) | Array<string | null>) | undefined;
    extra_information?: ((string | null) | Array<string | null>) | undefined;
    onetime_small_repair_limit?: ((number | null) | Array<number | null>) | undefined;
    annual_small_repair_limit?: ((number | null) | Array<number | null>) | undefined;
    is_furnished: boolean;
    rent_amount: (number | string) | Array<number | string>;
    rent_payment_interval: RentPaymentInterval;
    rent_increase_type: RentIncreaseType;
    rent_increase_rate?: ((number | string | null) | Array<number | string | null>) | undefined;
    rent_index?: ((number | string | null) | Array<number | string | null>) | undefined;
    rent_recurring_liability_id?:
        | (
              | /**
               * @pattern ^(rcl)_[0-9a-f]{32}$
               */
              (string | null)
              | Array<
                    /**
                     * @pattern ^(rcl)_[0-9a-f]{32}$
                     */
                    string | null
                >
          )
        | undefined;
};
type UsagePatchRequest = Partial<{
    from_date: (string | null) | Array<string | null>;
    to_date: (string | null) | Array<string | null>;
    type: (UsageType | null) | Array<UsageType | null>;
    notice_period: (number | null) | Array<number | null>;
    minimum_use_until: (string | null) | Array<string | null>;
    deposit_amount: (number | null) | Array<number | null>;
    deposit_type: (DepositType | null) | Array<DepositType | null>;
    deposit_due_date: (string | null) | Array<string | null>;
    extra_information: (string | null) | Array<string | null>;
    onetime_small_repair_limit: (number | null) | Array<number | null>;
    annual_small_repair_limit: (number | null) | Array<number | null>;
    is_furnished: (boolean | null) | Array<boolean | null>;
    rent_amount: (number | string | null) | Array<number | string | null>;
    rent_payment_interval: (RentPaymentInterval | null) | Array<RentPaymentInterval | null>;
    rent_increase_type: (RentIncreaseType | null) | Array<RentIncreaseType | null>;
    rent_increase_rate: (number | string | null) | Array<number | string | null>;
    rent_index: (number | string | null) | Array<number | string | null>;
    rent_recurring_liability_id:
        | /**
         * @pattern ^(rcl)_[0-9a-f]{32}$
         */
        (string | null)
        | Array<
              /**
               * @pattern ^(rcl)_[0-9a-f]{32}$
               */
              string | null
          >;
}>;
type UserStore = {};
type UserStoreAtom = (string | number | number | boolean) | Array<string | number | number | boolean>;
type WorkflowNodeUnion =
    | (
          | WorkflowNodeTriggerProcessCreated
          | WorkflowNodeTriggerProcessEventCreated
          | WorkflowNodeManualConfirm
          | WorkflowNodeManualForm
          | WorkflowNodeAutoCreateProcessEventManualNote
          | WorkflowNodeAutoAiBooleanEvaluator
          | WorkflowNodeAutoIf
          | WorkflowNodeStaticString
          | WorkflowNodeStaticInt
          | WorkflowNodeStaticBool
      )
    | Array<
          | WorkflowNodeTriggerProcessCreated
          | WorkflowNodeTriggerProcessEventCreated
          | WorkflowNodeManualConfirm
          | WorkflowNodeManualForm
          | WorkflowNodeAutoCreateProcessEventManualNote
          | WorkflowNodeAutoAiBooleanEvaluator
          | WorkflowNodeAutoIf
          | WorkflowNodeStaticString
          | WorkflowNodeStaticInt
          | WorkflowNodeStaticBool
      >;
type WorkflowNodeTriggerProcessCreated = {
    /**
     * @pattern ^(wno)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @enum TRIGGER_PROCESS_CREATED
     */
    type: "TRIGGER_PROCESS_CREATED";
};
type WorkflowNodeTriggerProcessEventCreated = {
    /**
     * @pattern ^(wno)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @enum TRIGGER_PROCESS_EVENT_CREATED
     */
    type: "TRIGGER_PROCESS_EVENT_CREATED";
};
type WorkflowNodeManualConfirm = {
    /**
     * @pattern ^(wno)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @enum MANUAL_CONFIRM
     */
    type: "MANUAL_CONFIRM";
};
type WorkflowNodeManualForm = {
    /**
     * @pattern ^(wno)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @enum MANUAL_FORM
     */
    type: "MANUAL_FORM";
    json_schema: {};
    ui_schema: {};
};
type WorkflowNodeAutoCreateProcessEventManualNote = {
    /**
     * @pattern ^(wno)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @enum AUTO_CREATE_PROCESS_EVENT_MANUAL_NOTE
     */
    type: "AUTO_CREATE_PROCESS_EVENT_MANUAL_NOTE";
};
type WorkflowNodeAutoAiBooleanEvaluator = {
    /**
     * @pattern ^(wno)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @enum AUTO_AI_BOOLEAN_EVALUATOR
     */
    type: "AUTO_AI_BOOLEAN_EVALUATOR";
};
type WorkflowNodeAutoIf = {
    /**
     * @pattern ^(wno)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @enum AUTO_IF
     */
    type: "AUTO_IF";
};
type WorkflowNodeStaticString = {
    /**
     * @pattern ^(wno)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @enum STATIC_STRING
     */
    type: "STATIC_STRING";
    value: string;
};
type WorkflowNodeStaticInt = {
    /**
     * @pattern ^(wno)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @enum STATIC_INT
     */
    type: "STATIC_INT";
    value: number;
};
type WorkflowNodeStaticBool = {
    /**
     * @pattern ^(wno)_[0-9a-f]{32}$
     */
    id: string;
    /**
     * @enum STATIC_BOOL
     */
    type: "STATIC_BOOL";
    value: boolean;
};
type WorkflowVersion = {
    tenant_id?: /**
     * @pattern ^(tnt)_[0-9a-f]{32}$
     */
    string | undefined;
    version: string;
    nodes: Array<WorkflowNodeUnion>;
    edges: Array<WorkflowEdge>;
    /**
     * @pattern ^(wfl)_[0-9a-f]{32}$
     */
    workflow_id: string;
    last_deployed_at: (string | null) | Array<string | null>;
};
type WorkflowEdge = {
    /**
     * @pattern ^(wno)_[0-9a-f]{32}$
     */
    source_node_id: string;
    source_port: string;
    /**
     * @pattern ^(wno)_[0-9a-f]{32}$
     */
    target_node_id: string;
    target_port: string;
};
type WorkflowVersionCreateRequest = {
    version: string;
    nodes: Array<WorkflowNodeUnion>;
    edges: Array<WorkflowEdge>;
};
type WorkflowVersionPatchRequest = Partial<{
    version: (string | null) | Array<string | null>;
    nodes: (Array<WorkflowNodeUnion> | null) | Array<Array<WorkflowNodeUnion> | null>;
    edges: (Array<WorkflowEdge> | null) | Array<Array<WorkflowEdge> | null>;
}>;

const CommittedPaymentStatus = z.enum(["OPEN", "PENDING", "SUCCESSFUL", "NOT_SUCCESSFUL", "DISCARDED", "UNKNOWN"]);
const CommittedPaymentSourceInfoFinApi: z.ZodType<CommittedPaymentSourceInfoFinApi> = z
    .object({ source_type: z.literal("FINAPI").optional().default("FINAPI"), fin_api_id: z.number().int() })
    .passthrough();
const CommittedPaymentSourceInfoManual: z.ZodType<CommittedPaymentSourceInfoManual> = z
    .object({ source_type: z.literal("MANUAL").default("MANUAL") })
    .partial()
    .passthrough();
const CommittedPayment: z.ZodType<CommittedPayment> = z
    .object({
        waiting_transaction_ids: z.array(z.string().regex(/^(wtr)_[0-9a-f]{32}$/)),
        status: CommittedPaymentStatus,
        requested_at: z.union([z.string(), z.null()]),
        executed_at: z.union([z.string(), z.null()]),
        instructed_execution_date: z.union([z.string(), z.null()]),
        source_info: z.union([CommittedPaymentSourceInfoFinApi, CommittedPaymentSourceInfoManual]),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(cpy)_[0-9a-f]{32}$/),
    })
    .passthrough();
const Paged_CommittedPayment_: z.ZodType<Paged_CommittedPayment_> = z
    .object({
        items: z.array(CommittedPayment),
        total: z.number().int(),
        offset: z.number().int(),
        limit: z.number().int(),
    })
    .passthrough();
const ErrorWithDetail = z.object({ detail: z.string() }).passthrough();
const ValidationError: z.ZodType<ValidationError> = z
    .object({ loc: z.array(z.union([z.string(), z.number()])), msg: z.string(), type: z.string() })
    .passthrough();
const HTTPValidationError: z.ZodType<HTTPValidationError> = z
    .object({ detail: z.array(ValidationError) })
    .partial()
    .passthrough();
const CondominiumOwnershipRelatedUnitType = z.enum(["OWNED", "SPECIAL_USE"]);
const CondominiumOwnershipRelatedUnit: z.ZodType<CondominiumOwnershipRelatedUnit> = z
    .object({ unit_id: z.string().regex(/^(unt)_[0-9a-f]{32}$/), type: CondominiumOwnershipRelatedUnitType })
    .passthrough();
const CondominiumOwnership: z.ZodType<CondominiumOwnership> = z
    .object({
        property_id: z.string().regex(/^(pro)_[0-9a-f]{32}$/),
        sub_association_id: z.union([z.string(), z.null()]).optional(),
        co_ownership_share: z.number().gt(0),
        area: z.union([z.number(), z.null()]).optional(),
        area_heated: z.union([z.number(), z.null()]).optional(),
        related_units: z.union([z.array(CondominiumOwnershipRelatedUnit), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(cow)_[0-9a-f]{32}$/),
    })
    .passthrough();
const CondominiumOwnershipPatchRequest: z.ZodType<CondominiumOwnershipPatchRequest> = z
    .object({
        co_ownership_share: z.union([z.number(), z.null()]),
        area: z.union([z.number(), z.null()]),
        area_heated: z.union([z.number(), z.null()]),
        sub_association_id: z.union([z.string(), z.null()]),
        related_units: z.union([z.array(CondominiumOwnershipRelatedUnit), z.null()]),
    })
    .partial()
    .passthrough();
const CondominiumOwnershipOwner = z
    .object({
        id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        contact_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        condominium_ownership_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        from_date: z.string(),
        to_date: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const CondominiumOwnershipOwnerCreateRequest = z
    .object({
        contact_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        from_date: z.string(),
        to_date: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const HomeOwnerAssociationFeeCreateRequest = z
    .object({
        amount: z.union([z.number(), z.string()]),
        from_date: z.string(),
        to_date: z.string(),
        recurring_liability_id: z.string().regex(/^(rcl)_[0-9a-f]{32}$/),
    })
    .passthrough();
const HomeOwnerAssociationFee = z
    .object({
        condominium_ownership_id: z.string().regex(/^(cow)_[0-9a-f]{32}$/),
        amount: z.string(),
        from_date: z.string(),
        to_date: z.string(),
        recurring_liability_id: z.string().regex(/^(rcl)_[0-9a-f]{32}$/),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(hof)_[0-9a-f]{32}$/),
    })
    .passthrough();
const CondominiumOwnershipOwnerPatchRequest = z
    .object({ from_date: z.union([z.string(), z.null()]), to_date: z.union([z.string(), z.null()]) })
    .partial()
    .passthrough();
const ContactContract = z
    .object({
        contact_id: z.string().regex(/^(cnt)_[0-9a-f]{32}$/),
        contract_file_id: z.string().regex(/^(fil)_[0-9a-f]{32}$/),
        start_date: z.string(),
        end_date: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(cct)_[0-9a-f]{32}$/),
    })
    .passthrough();
const ContactContractPatchRequest = z
    .object({
        start_date: z.union([z.string(), z.null()]),
        end_date: z.union([z.string(), z.null()]),
        contract_file_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const AddressData_Output: z.ZodType<AddressData_Output> = z
    .object({
        street: z.string().min(1),
        house_number: z.string().min(1),
        country: z.string().min(1),
        address_addition: z.union([z.string(), z.null()]).optional(),
        latitude: z.union([z.string(), z.null()]).optional(),
        longitude: z.union([z.string(), z.null()]).optional(),
        postal_code: z.string().min(1),
        city: z.string().min(1),
        state: z.string().min(1),
        name: z.union([z.string(), z.null()]).optional(),
        care_of: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const ContactOptionType = z.enum([
    "EMAIL_PRIVATE",
    "EMAIL_BUSINESS",
    "PHONE_PRIVATE",
    "PHONE_BUSINESS",
    "MOBILE_PRIVATE",
    "MOBILE_BUSINESS",
    "FAX",
    "OTHER",
]);
const ContactOptionData: z.ZodType<ContactOptionData> = z
    .object({
        type: ContactOptionType,
        value: z.string().min(1),
        contact_person_full_name: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const Gender = z.enum(["MALE", "FEMALE", "DIVERSE"]);
const ContactIndividualData: z.ZodType<ContactIndividualData> = z
    .object({
        type: z.literal("INDIVIDUAL").optional().default("INDIVIDUAL"),
        first_name: z.string().min(1),
        last_name: z.string().min(1),
        gender: Gender,
        birth_date: z.union([z.string(), z.null()]).optional(),
        title: z.union([z.string(), z.null()]).optional(),
        foreign_iban: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const LegalEntityType = z.enum(["CLIENT", "SERVICE_PROVIDER"]);
const ContactLegalEntityData: z.ZodType<ContactLegalEntityData> = z
    .object({
        type: z.literal("LEGAL_ENTITY").optional().default("LEGAL_ENTITY"),
        name: z.string().min(1),
        tax_id: z.union([z.string(), z.null()]).optional(),
        vat_id: z.union([z.string(), z.null()]).optional(),
        commercial_register_number: z.union([z.string(), z.null()]).optional(),
        website: z.union([z.string(), z.null()]).optional(),
        entity_type: z.union([LegalEntityType, z.null()]).optional(),
        foreign_iban: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const Contact: z.ZodType<Contact> = z
    .object({
        addresses: z.record(AddressData_Output),
        contact_options: z.array(ContactOptionData),
        info: z.union([ContactIndividualData, ContactLegalEntityData]),
        bank_account_id: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(cnt)_[0-9a-f]{32}$/),
    })
    .passthrough();
const Paged_Contact_: z.ZodType<Paged_Contact_> = z
    .object({ items: z.array(Contact), total: z.number().int(), offset: z.number().int(), limit: z.number().int() })
    .passthrough();
const AddressData_Input: z.ZodType<AddressData_Input> = z
    .object({
        street: z.string().min(1),
        house_number: z.string().min(1),
        country: z.string().min(1),
        address_addition: z.union([z.string(), z.null()]).optional(),
        latitude: z.union([z.number(), z.string(), z.null()]).optional(),
        longitude: z.union([z.number(), z.string(), z.null()]).optional(),
        postal_code: z.string().min(1),
        city: z.string().min(1),
        state: z.string().min(1),
        name: z.union([z.string(), z.null()]).optional(),
        care_of: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const ContactCreateRequest: z.ZodType<ContactCreateRequest> = z
    .object({
        addresses: z.record(AddressData_Input),
        contact_options: z.array(ContactOptionData),
        info: z.union([ContactIndividualData, ContactLegalEntityData]),
        bank_account_id: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const AddressDataPartial: z.ZodType<AddressDataPartial> = z
    .object({
        street: z.union([z.string(), z.null()]),
        house_number: z.union([z.string(), z.null()]),
        country: z.union([z.string(), z.null()]),
        address_addition: z.union([z.string(), z.null()]),
        latitude: z.union([z.number(), z.string(), z.null()]),
        longitude: z.union([z.number(), z.string(), z.null()]),
        postal_code: z.union([z.string(), z.null()]),
        city: z.union([z.string(), z.null()]),
        state: z.union([z.string(), z.null()]),
        name: z.union([z.string(), z.null()]),
        care_of: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const ContactIndividualDataPartial: z.ZodType<ContactIndividualDataPartial> = z
    .object({
        type: z.literal("INDIVIDUAL"),
        first_name: z.union([z.string(), z.null()]).optional(),
        last_name: z.union([z.string(), z.null()]).optional(),
        gender: z.union([Gender, z.null()]).optional(),
        birth_date: z.union([z.string(), z.null()]).optional(),
        title: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const ContactLegalEntityDataPartial: z.ZodType<ContactLegalEntityDataPartial> = z
    .object({
        type: z.literal("LEGAL_ENTITY"),
        name: z.union([z.string(), z.null()]).optional(),
        tax_id: z.union([z.string(), z.null()]).optional(),
        vat_id: z.union([z.string(), z.null()]).optional(),
        commercial_register_number: z.union([z.string(), z.null()]).optional(),
        website: z.union([z.string(), z.null()]).optional(),
        entity_type: z.union([LegalEntityType, z.null()]).optional(),
        contact_person_full_name: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const ContactPatchRequest: z.ZodType<ContactPatchRequest> = z
    .object({
        addresses: z.union([z.record(z.union([AddressDataPartial, z.null()])), z.null()]),
        contact_options: z.union([z.array(ContactOptionData), z.null()]),
        info: z.union([ContactIndividualDataPartial, ContactLegalEntityDataPartial, z.null()]),
    })
    .partial()
    .passthrough();
const UsageTenant = z
    .object({
        id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        contact_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        usage_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
    })
    .passthrough();
const PropertyOwner = z
    .object({
        id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        contact_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        property_owner_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        from_date: z.string(),
        to_date: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const ContactContractCreateRequest = z
    .object({
        contract_file_id: z.string().regex(/^(fil)_[0-9a-f]{32}$/),
        start_date: z.string(),
        end_date: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const ServiceProviderCreateRequest: z.ZodType<ServiceProviderCreateRequest> = z
    .object({
        rating: z.union([z.number(), z.null()]),
        sub_address: z.union([AddressData_Input, z.null()]),
        service_radius_km: z.union([z.number(), z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const ServiceProvider: z.ZodType<ServiceProvider> = z
    .object({
        contact_id: z.string().regex(/^(cnt)_[0-9a-f]{32}$/),
        rating: z.union([z.number(), z.null()]).optional(),
        sub_address: z.union([AddressData_Output, z.null()]).optional(),
        service_radius_km: z.union([z.string(), z.null()]),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(svp)_[0-9a-f]{32}$/),
    })
    .passthrough();
const MailOutgoingStatus = z.enum(["NOT_TRANSMITTED", "TRANSMITTED", "PENDING", "PRINTING", "SENT", "ERROR"]);
const MailOutgoing: z.ZodType<MailOutgoing> = z
    .object({
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(mal)_[0-9a-f]{32}$/),
        from_contact_id: z.union([z.string(), z.null()]).optional(),
        from_address: z.union([AddressData_Output, z.null()]).optional(),
        to_contact_id: z.union([z.string(), z.null()]).optional(),
        to_address: z.union([AddressData_Output, z.null()]).optional(),
        assigned_employee_id: z.union([z.string(), z.null()]).optional(),
        file_id: z.string().regex(/^(fil)_[0-9a-f]{32}$/),
        type: z.literal("OUTGOING").optional().default("OUTGOING"),
        status: MailOutgoingStatus.optional(),
        error_message: z.union([z.string(), z.null()]).optional(),
        duplex: z.boolean().optional().default(false),
        color: z.boolean().optional().default(false),
        transmitted_date: z.union([z.string(), z.null()]).optional(),
        sent_date: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const MailIncoming: z.ZodType<MailIncoming> = z
    .object({
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(mal)_[0-9a-f]{32}$/),
        from_contact_id: z.union([z.string(), z.null()]).optional(),
        from_address: z.union([AddressData_Output, z.null()]).optional(),
        to_contact_id: z.union([z.string(), z.null()]).optional(),
        to_address: z.union([AddressData_Output, z.null()]).optional(),
        assigned_employee_id: z.union([z.string(), z.null()]).optional(),
        file_id: z.string().regex(/^(fil)_[0-9a-f]{32}$/),
        type: z.literal("INCOMING").optional().default("INCOMING"),
        sent_date: z.union([z.string(), z.null()]).optional(),
        received_date: z.union([z.string(), z.null()]).optional(),
        imported_date: z.string(),
    })
    .passthrough();
const MailUnion: z.ZodType<MailUnion> = z.union([MailOutgoing, MailIncoming]);
const Paged_MailUnion_: z.ZodType<Paged_MailUnion_> = z
    .object({ items: z.array(MailUnion), total: z.number().int(), offset: z.number().int(), limit: z.number().int() })
    .passthrough();
const EconomicPlan = z
    .object({
        accounting_tenant_id: z.string().regex(/^(act)_[0-9a-f]{32}$/),
        year: z.number().int(),
        from_date: z.string(),
        to_date: z.string(),
        file_id: z.string().regex(/^(fil)_[0-9a-f]{32}$/),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(ecp)_[0-9a-f]{32}$/),
    })
    .passthrough();
const EmailAccount = z
    .object({
        email_address: z.string().email(),
        sender_name: z.string(),
        imap_server: z.string(),
        imap_port: z.number().int().gte(1).lte(65535),
        imap_use_ssl: z.boolean(),
        imap_username: z.string(),
        imap_password: z.string(),
        smtp_server: z.string(),
        smtp_port: z.number().int().gte(1).lte(65535),
        smtp_use_ssl: z.boolean(),
        smtp_username: z.string(),
        smtp_password: z.string(),
        is_general_mailbox: z.boolean(),
        assigned_employees: z.array(z.string().regex(/^(emp)_[0-9a-f]{32}$/)),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(eac)_[0-9a-f]{32}$/),
    })
    .passthrough();
const EmailAccountCreateRequest = z
    .object({
        email_address: z.string().email(),
        sender_name: z.string(),
        imap_server: z.string(),
        imap_port: z.number().int().gte(1).lte(65535),
        imap_use_ssl: z.boolean(),
        imap_username: z.string(),
        imap_password: z.string(),
        smtp_server: z.string(),
        smtp_port: z.number().int().gte(1).lte(65535),
        smtp_use_ssl: z.boolean(),
        smtp_username: z.string(),
        smtp_password: z.string(),
        is_general_mailbox: z.boolean(),
        assigned_employees: z.array(z.string().regex(/^(emp)_[0-9a-f]{32}$/)),
    })
    .passthrough();
const EmailAccountPatchRequest = z
    .object({
        email_address: z.union([z.string(), z.null()]),
        sender_name: z.union([z.string(), z.null()]),
        imap_server: z.union([z.string(), z.null()]),
        imap_port: z.union([z.number(), z.null()]),
        imap_use_ssl: z.union([z.boolean(), z.null()]),
        imap_username: z.union([z.string(), z.null()]),
        imap_password: z.union([z.string(), z.null()]),
        smtp_server: z.union([z.string(), z.null()]),
        smtp_port: z.union([z.number(), z.null()]),
        smtp_use_ssl: z.union([z.boolean(), z.null()]),
        smtp_username: z.union([z.string(), z.null()]),
        smtp_password: z.union([z.string(), z.null()]),
        is_general_mailbox: z.union([z.boolean(), z.null()]),
        assigned_users: z.union([z.array(z.string().regex(/^(emp)_[0-9a-f]{32}$/)), z.null()]),
    })
    .partial()
    .passthrough();
const EmailAddressWithName: z.ZodType<EmailAddressWithName> = z
    .object({ email: z.string().email(), name: z.union([z.string(), z.null()]) })
    .passthrough();
const EmailContentType = z.enum(["text/plain", "text/html"]);
const EmailSendRequest: z.ZodType<EmailSendRequest> = z
    .object({
        to: z.array(EmailAddressWithName),
        cc: z.array(EmailAddressWithName),
        bcc: z.array(EmailAddressWithName),
        subject: z.string(),
        body: z.string(),
        content_type: EmailContentType,
    })
    .passthrough();
const EmailFlags = z.enum(["SEEN", "ANSWERED", "DELETED", "DRAFT", "FLAGGED", "RECENT", "FORWARDED"]);
const EmailSeverity = z.enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"]);
const Email: z.ZodType<Email> = z
    .object({
        email_account_id: z.string().regex(/^(eac)_[0-9a-f]{32}$/),
        from_: z.array(EmailAddressWithName),
        to: z.array(EmailAddressWithName),
        cc: z.array(EmailAddressWithName),
        bcc: z.array(EmailAddressWithName),
        subject: z.string(),
        body: z.string(),
        date: z.string().datetime({ offset: true }),
        content_type: EmailContentType,
        imap_uid: z.union([z.number(), z.null()]).optional(),
        imap_uidvalidity: z.union([z.number(), z.null()]).optional(),
        folder: z.string(),
        flags: z.array(EmailFlags),
        ai_summary: z.union([z.string(), z.null()]).optional(),
        ai_severity: z.union([EmailSeverity, z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(eml)_[0-9a-f]{32}$/),
    })
    .passthrough();
const EmailFolder = z.object({ name: z.string(), total_emails: z.number().int() }).passthrough();
const FileType = z.enum([
    "GENERIC_IMAGE",
    "GENERIC_DOCUMENT",
    "INVOICE",
    "CONTRACT",
    "RECEIPT",
    "BANK_STATEMENT",
    "IDENTIFICATION_DOCUMENT",
    "LETTER",
]);
const TextExtractionStatus = z.enum([
    "PENDING",
    "OK",
    "ENCRYPTED_PDF",
    "PDFA_CONVERSION_FAILED",
    "ALREADY_DONE_OCR",
    "OTHER_ERROR",
]);
const File: z.ZodType<File> = z
    .object({
        file_type: FileType,
        filename: z.string().min(1),
        mime_type: z.string(),
        size_bytes: z.number().int(),
        uploaded_at: z.string().datetime({ offset: true }),
        metadata: z.record(z.union([z.string(), z.number(), z.number(), z.boolean(), z.null()])),
        related_entity_ids: z.array(
            z
                .string()
                .regex(
                    /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                )
        ),
        summary: z.union([z.string(), z.null()]).optional(),
        extraction_status: TextExtractionStatus,
        extracted_text: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(fil)_[0-9a-f]{32}$/),
    })
    .passthrough();
const FilePatchRequest = z
    .object({
        metadata: z.union([z.record(z.union([z.string(), z.number(), z.number(), z.boolean(), z.null()])), z.null()]),
        related_entity_ids: z.union([
            z.array(
                z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    )
            ),
            z.null(),
        ]),
    })
    .partial()
    .passthrough();
const FileUploadRequest: z.ZodType<FileUploadRequest> = z
    .object({
        file_type: FileType,
        filename: z.string(),
        file_data: z.string(),
        metadata: z
            .record(z.union([z.string(), z.number(), z.number(), z.boolean(), z.null()]))
            .optional()
            .default({}),
        related_entity_ids: z
            .array(
                z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    )
            )
            .optional()
            .default([]),
    })
    .passthrough();
const InternalTenant: z.ZodType<InternalTenant> = z
    .object({
        name: z.string().min(1),
        company_name_full: z.string(),
        tax_id: z.union([z.string(), z.null()]).optional(),
        vat_id: z.union([z.string(), z.null()]).optional(),
        tax_office: z.union([z.string(), z.null()]).optional(),
        address: AddressData_Output,
        accounting_tenant_id: z.union([z.string(), z.null()]).optional(),
        assigned_employees: z
            .array(z.string().regex(/^(emp)_[0-9a-f]{32}$/))
            .optional()
            .default([]),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(int)_[0-9a-f]{32}$/),
    })
    .passthrough();
const InternalTenantPatchRequest = z
    .object({
        name: z.union([z.string(), z.null()]),
        company_name_full: z.union([z.string(), z.null()]),
        tax_id: z.union([z.string(), z.null()]),
        vat_id: z.union([z.string(), z.null()]),
        tax_office: z.union([z.string(), z.null()]),
        address_id: z.union([z.string(), z.null()]),
        assigned_employees: z.union([
            z.array(
                z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    )
            ),
            z.null(),
        ]),
    })
    .partial()
    .passthrough();
const InternalTenantCreateRequest: z.ZodType<InternalTenantCreateRequest> = z
    .object({
        name: z.string().min(1),
        company_name_full: z.string(),
        tax_id: z.union([z.string(), z.null()]).optional(),
        vat_id: z.union([z.string(), z.null()]).optional(),
        tax_office: z.union([z.string(), z.null()]).optional(),
        address: AddressData_Input,
        assigned_employees: z
            .array(
                z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    )
            )
            .optional()
            .default([]),
    })
    .passthrough();
const ClusterCreateRequest = z
    .object({ name: z.string(), owner_id: z.string().regex(/^(cnt)_[0-9a-f]{32}$/) })
    .passthrough();
const Cluster = z
    .object({
        name: z.string(),
        owner_id: z.string().regex(/^(cnt)_[0-9a-f]{32}$/),
        internal_tenant_id: z.string().regex(/^(int)_[0-9a-f]{32}$/),
        accounting_tenant_id: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(spr)_[0-9a-f]{32}$/),
    })
    .passthrough();
const PropertyManagingType = z.enum(["HOME_OWNER_ASSOCIATION", "RENTAL_PROPERTY"]);
const HeaterType = z.enum(["OIL", "GAS", "WOOD", "ELECTRICITY"]);
const PropertyCreateRequest: z.ZodType<PropertyCreateRequest> = z
    .object({
        name: z.string(),
        managing_type: PropertyManagingType,
        plot_area: z.union([z.number(), z.null()]).optional(),
        floors: z.union([z.number(), z.null()]).optional(),
        construction_year: z.union([z.number(), z.null()]).optional(),
        renovation_year: z.union([z.number(), z.null()]).optional(),
        address: AddressData_Input,
        energy_certificate: z.union([z.string(), z.null()]).optional(),
        heater_type: z.union([HeaterType, z.null()]).optional(),
        is_water_centrally_heated: z.union([z.boolean(), z.null()]).optional(),
    })
    .passthrough();
const Property: z.ZodType<Property> = z
    .object({
        name: z.string(),
        managing_type: PropertyManagingType,
        plot_area: z.union([z.number(), z.null()]).optional(),
        cluster_id: z.union([z.string(), z.null()]),
        internal_tenant_id: z.union([z.string(), z.null()]).optional(),
        floors: z.union([z.number(), z.null()]).optional(),
        construction_year: z.union([z.number(), z.null()]).optional(),
        renovation_year: z.union([z.number(), z.null()]).optional(),
        address: AddressData_Output,
        energy_certificate: z.union([z.string(), z.null()]).optional(),
        heater_type: z.union([HeaterType, z.null()]).optional(),
        is_water_centrally_heated: z.union([z.boolean(), z.null()]).optional(),
        accounting_tenant_id: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(pro)_[0-9a-f]{32}$/),
    })
    .passthrough();
const MeterType = z.enum(["WATER", "HEATING", "ELECTRICITY", "GAS", "OTHER"]);
const UnitOfMeasurement = z.enum(["CUBIC_METERS", "KILOWATT_HOURS", "LITERS", "OTHER"]);
const Meter: z.ZodType<Meter> = z
    .object({
        name: z.string(),
        property_id: z.string().regex(/^(pro)_[0-9a-f]{32}$/),
        unit_id: z.string().regex(/^(unt)_[0-9a-f]{32}$/),
        type: MeterType,
        number: z.string(),
        unit_of_measurement: UnitOfMeasurement,
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(mtr)_[0-9a-f]{32}$/),
    })
    .passthrough();
const MeterPatchRequest: z.ZodType<MeterPatchRequest> = z
    .object({
        name: z.union([z.string(), z.null()]),
        type: z.union([MeterType, z.null()]),
        number: z.union([z.string(), z.null()]),
        unit_of_measurement: z.union([UnitOfMeasurement, z.null()]),
        property_id: z.union([z.string(), z.null()]),
        unit_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const MeterReadingCreateRequest = z
    .object({
        meter_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        date: z.string(),
        value: z.union([z.number(), z.string()]),
    })
    .passthrough();
const MeterReading = z
    .object({
        meter_id: z.string().regex(/^(mtr)_[0-9a-f]{32}$/),
        date: z.string(),
        value: z.string(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(mrd)_[0-9a-f]{32}$/),
    })
    .passthrough();
const MeterReadingPatchRequest = z
    .object({
        date: z.union([z.string(), z.null()]),
        value: z.union([z.number(), z.string(), z.null()]),
        meter_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const MailCreateIncoming: z.ZodType<MailCreateIncoming> = z
    .object({
        type: z.literal("INCOMING").optional().default("INCOMING"),
        from_contact_id: z.union([z.string(), z.null()]).optional(),
        from_address: z.union([AddressData_Input, z.null()]).optional(),
        to_contact_id: z.union([z.string(), z.null()]).optional(),
        to_address: z.union([AddressData_Input, z.null()]).optional(),
        assigned_employee_id: z.union([z.string(), z.null()]).optional(),
        file_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        received_date: z.string(),
    })
    .passthrough();
const MailCreateOutgoing: z.ZodType<MailCreateOutgoing> = z
    .object({
        type: z.literal("OUTGOING").optional().default("OUTGOING"),
        from_contact_id: z.union([z.string(), z.null()]).optional(),
        from_address: z.union([AddressData_Input, z.null()]).optional(),
        to_contact_id: z.union([z.string(), z.null()]).optional(),
        to_address: z.union([AddressData_Input, z.null()]).optional(),
        assigned_employee_id: z.union([z.string(), z.null()]).optional(),
        file_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        duplex: z.boolean().optional().default(false),
        color: z.boolean().optional().default(false),
    })
    .passthrough();
const createMail_Body = z.union([MailCreateIncoming, MailCreateOutgoing]);
const MailPatchIncoming: z.ZodType<MailPatchIncoming> = z
    .object({
        type: z.literal("INCOMING").default("INCOMING"),
        from_contact_id: z.union([z.string(), z.null()]),
        from_address: z.union([AddressData_Input, z.null()]),
        to_contact_id: z.union([z.string(), z.null()]),
        to_address: z.union([AddressData_Input, z.null()]),
        assigned_employee_id: z.union([z.string(), z.null()]),
        received_date: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const MailPatchOutgoing: z.ZodType<MailPatchOutgoing> = z
    .object({
        type: z.literal("OUTGOING").default("OUTGOING"),
        from_contact_id: z.union([z.string(), z.null()]),
        from_address: z.union([AddressData_Input, z.null()]),
        to_contact_id: z.union([z.string(), z.null()]),
        to_address: z.union([AddressData_Input, z.null()]),
        assigned_employee_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const patchMail_Body = z.union([MailPatchIncoming, MailPatchOutgoing]);
const ProcessEventVisibilityData: z.ZodType<ProcessEventVisibilityData> = z
    .object({ show_content: z.boolean() })
    .passthrough();
const ProcessCreatedByType = z.enum(["SYSTEM", "USER", "WORKFLOW"]);
const UserIdUnion = z.string();
const ProcessEventTask: z.ZodType<ProcessEventTask> = z
    .object({
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(pev)_[0-9a-f]{32}$/),
        process_id: z.string().regex(/^(prc)_[0-9a-f]{32}$/),
        created_at: z.string().datetime({ offset: true }),
        summary: z.union([z.string(), z.null()]).optional(),
        title: z.union([z.string(), z.null()]).optional(),
        visibility: z.record(ProcessEventVisibilityData),
        created_by_type: ProcessCreatedByType,
        created_by_id: z.union([UserIdUnion, z.string()]),
        type: z.literal("TASK").optional().default("TASK"),
        task_id: z.string().regex(/^(tsk)_[0-9a-f]{32}$/),
    })
    .passthrough();
const ProcessEventMail: z.ZodType<ProcessEventMail> = z
    .object({
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(pev)_[0-9a-f]{32}$/),
        process_id: z.string().regex(/^(prc)_[0-9a-f]{32}$/),
        created_at: z.string().datetime({ offset: true }),
        summary: z.union([z.string(), z.null()]).optional(),
        title: z.union([z.string(), z.null()]).optional(),
        visibility: z.record(ProcessEventVisibilityData),
        created_by_type: ProcessCreatedByType,
        created_by_id: z.union([UserIdUnion, z.string()]),
        type: z.literal("MAIL").optional().default("MAIL"),
        mail_id: z.string().regex(/^(mal)_[0-9a-f]{32}$/),
    })
    .passthrough();
const ProcessEventCall: z.ZodType<ProcessEventCall> = z
    .object({
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(pev)_[0-9a-f]{32}$/),
        process_id: z.string().regex(/^(prc)_[0-9a-f]{32}$/),
        created_at: z.string().datetime({ offset: true }),
        summary: z.union([z.string(), z.null()]).optional(),
        title: z.union([z.string(), z.null()]).optional(),
        visibility: z.record(ProcessEventVisibilityData),
        created_by_type: ProcessCreatedByType,
        created_by_id: z.union([UserIdUnion, z.string()]),
        type: z.literal("CALL").optional().default("CALL"),
        call_id: z.string().regex(/^(pcl)_[0-9a-f]{32}$/),
    })
    .passthrough();
const ProcessEventEmail: z.ZodType<ProcessEventEmail> = z
    .object({
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(pev)_[0-9a-f]{32}$/),
        process_id: z.string().regex(/^(prc)_[0-9a-f]{32}$/),
        created_at: z.string().datetime({ offset: true }),
        summary: z.union([z.string(), z.null()]).optional(),
        title: z.union([z.string(), z.null()]).optional(),
        visibility: z.record(ProcessEventVisibilityData),
        created_by_type: ProcessCreatedByType,
        created_by_id: z.union([UserIdUnion, z.string()]),
        type: z.literal("EMAIL").optional().default("EMAIL"),
        email_id: z.string().regex(/^(eml)_[0-9a-f]{32}$/),
    })
    .passthrough();
const ProcessEventProcessTask: z.ZodType<ProcessEventProcessTask> = z
    .object({
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(pev)_[0-9a-f]{32}$/),
        process_id: z.string().regex(/^(prc)_[0-9a-f]{32}$/),
        created_at: z.string().datetime({ offset: true }),
        summary: z.union([z.string(), z.null()]).optional(),
        title: z.union([z.string(), z.null()]).optional(),
        visibility: z.record(ProcessEventVisibilityData),
        created_by_type: ProcessCreatedByType,
        created_by_id: z.union([UserIdUnion, z.string()]),
        type: z.literal("PROCESS_TASK").optional().default("PROCESS_TASK"),
        process_task_id: z.string().regex(/^(ptk)_[0-9a-f]{32}$/),
    })
    .passthrough();
const ProcessEventNote: z.ZodType<ProcessEventNote> = z
    .object({
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(pev)_[0-9a-f]{32}$/),
        process_id: z.string().regex(/^(prc)_[0-9a-f]{32}$/),
        created_at: z.string().datetime({ offset: true }),
        summary: z.union([z.string(), z.null()]).optional(),
        title: z.union([z.string(), z.null()]).optional(),
        visibility: z.record(ProcessEventVisibilityData),
        created_by_type: ProcessCreatedByType,
        created_by_id: z.union([UserIdUnion, z.string()]),
        type: z.literal("NOTE").optional().default("NOTE"),
        content: z.string(),
    })
    .passthrough();
const ProcessStatus = z.enum(["OPEN", "IN_PROGRESS", "DONE", "CANCELED"]);
const ProcessEventStatusChange: z.ZodType<ProcessEventStatusChange> = z
    .object({
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(pev)_[0-9a-f]{32}$/),
        process_id: z.string().regex(/^(prc)_[0-9a-f]{32}$/),
        created_at: z.string().datetime({ offset: true }),
        summary: z.union([z.string(), z.null()]).optional(),
        title: z.union([z.string(), z.null()]).optional(),
        visibility: z.record(ProcessEventVisibilityData),
        created_by_type: ProcessCreatedByType,
        created_by_id: z.union([UserIdUnion, z.string()]),
        type: z.literal("STATUS_CHANGE").optional().default("STATUS_CHANGE"),
        new_status: ProcessStatus,
    })
    .passthrough();
const ProcessEventUnion: z.ZodType<ProcessEventUnion> = z.union([
    ProcessEventTask,
    ProcessEventMail,
    ProcessEventCall,
    ProcessEventEmail,
    ProcessEventProcessTask,
    ProcessEventNote,
    ProcessEventStatusChange,
]);
const ProcessEventTaskEventPatchRequest: z.ZodType<ProcessEventTaskEventPatchRequest> = z
    .object({
        summary: z.union([z.string(), z.null()]),
        title: z.union([z.string(), z.null()]),
        visibility: z.union([z.record(ProcessEventVisibilityData), z.null()]),
        type: z.literal("TASK").default("TASK"),
    })
    .partial()
    .passthrough();
const ProcessEventMailEventPatchRequest: z.ZodType<ProcessEventMailEventPatchRequest> = z
    .object({
        summary: z.union([z.string(), z.null()]),
        title: z.union([z.string(), z.null()]),
        visibility: z.union([z.record(ProcessEventVisibilityData), z.null()]),
        type: z.literal("MAIL").default("MAIL"),
    })
    .partial()
    .passthrough();
const ProcessEventCallEventPatchRequest: z.ZodType<ProcessEventCallEventPatchRequest> = z
    .object({
        summary: z.union([z.string(), z.null()]),
        title: z.union([z.string(), z.null()]),
        visibility: z.union([z.record(ProcessEventVisibilityData), z.null()]),
        type: z.literal("CALL").default("CALL"),
    })
    .partial()
    .passthrough();
const ProcessEventEmailEventPatchRequest: z.ZodType<ProcessEventEmailEventPatchRequest> = z
    .object({
        summary: z.union([z.string(), z.null()]),
        title: z.union([z.string(), z.null()]),
        visibility: z.union([z.record(ProcessEventVisibilityData), z.null()]),
        type: z.literal("EMAIL").default("EMAIL"),
    })
    .partial()
    .passthrough();
const ProcessEventProcessTaskEventPatchRequest: z.ZodType<ProcessEventProcessTaskEventPatchRequest> = z
    .object({
        summary: z.union([z.string(), z.null()]),
        title: z.union([z.string(), z.null()]),
        visibility: z.union([z.record(ProcessEventVisibilityData), z.null()]),
        type: z.literal("PROCESS_TASK").default("PROCESS_TASK"),
    })
    .partial()
    .passthrough();
const ProcessEventNoteEventPatchRequest: z.ZodType<ProcessEventNoteEventPatchRequest> = z
    .object({
        summary: z.union([z.string(), z.null()]),
        title: z.union([z.string(), z.null()]),
        visibility: z.union([z.record(ProcessEventVisibilityData), z.null()]),
        type: z.literal("NOTE").default("NOTE"),
        content: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const patchProcessEvent_Body = z.union([
    ProcessEventTaskEventPatchRequest,
    ProcessEventMailEventPatchRequest,
    ProcessEventCallEventPatchRequest,
    ProcessEventEmailEventPatchRequest,
    ProcessEventProcessTaskEventPatchRequest,
    ProcessEventNoteEventPatchRequest,
]);
const ProcessTaskCreatedByType = z.enum(["SYSTEM", "USER", "WORKFLOW"]);
const ProcessTaskSimpleTodo: z.ZodType<ProcessTaskSimpleTodo> = z
    .object({
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(ptk)_[0-9a-f]{32}$/),
        process_id: z.string().regex(/^(prc)_[0-9a-f]{32}$/),
        created_at: z.string().datetime({ offset: true }),
        completed_at: z.union([z.string(), z.null()]).optional(),
        created_by_type: ProcessTaskCreatedByType,
        created_by_id: z.union([z.string(), z.string()]),
        assigned_to_id: z.union([z.string(), z.null()]).optional(),
        type: z.literal("SIMPLE_TODO").optional().default("SIMPLE_TODO"),
        title: z.string(),
        description: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const ProcessTaskConfirm: z.ZodType<ProcessTaskConfirm> = z
    .object({
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(ptk)_[0-9a-f]{32}$/),
        process_id: z.string().regex(/^(prc)_[0-9a-f]{32}$/),
        created_at: z.string().datetime({ offset: true }),
        completed_at: z.union([z.string(), z.null()]).optional(),
        created_by_type: ProcessTaskCreatedByType,
        created_by_id: z.union([z.string(), z.string()]),
        assigned_to_id: z.union([z.string(), z.null()]).optional(),
        type: z.literal("CONFIRM").optional().default("CONFIRM"),
        title: z.string(),
        description: z.union([z.string(), z.null()]).optional(),
        confirm_button_text: z.union([z.string(), z.null()]).optional(),
        cancel_button_text: z.union([z.string(), z.null()]).optional(),
        confirmed: z.boolean().optional().default(false),
    })
    .passthrough();
const ProcessTaskForm: z.ZodType<ProcessTaskForm> = z
    .object({
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(ptk)_[0-9a-f]{32}$/),
        process_id: z.string().regex(/^(prc)_[0-9a-f]{32}$/),
        created_at: z.string().datetime({ offset: true }),
        completed_at: z.union([z.string(), z.null()]).optional(),
        created_by_type: ProcessTaskCreatedByType,
        created_by_id: z.union([z.string(), z.string()]),
        assigned_to_id: z.union([z.string(), z.null()]).optional(),
        type: z.literal("FORM").optional().default("FORM"),
        json_schema: z.object({}).partial().passthrough(),
        ui_schema: z.object({}).partial().passthrough(),
        form_data: z.object({}).partial().passthrough(),
    })
    .passthrough();
const ProcessTaskUnion: z.ZodType<ProcessTaskUnion> = z.union([
    ProcessTaskSimpleTodo,
    ProcessTaskConfirm,
    ProcessTaskForm,
]);
const ProcessTaskPatchSimpleTodo = z
    .object({ type: z.literal("SIMPLE_TODO").optional().default("SIMPLE_TODO"), completed: z.boolean() })
    .passthrough();
const ProcessTaskPatchConfirm = z
    .object({ type: z.literal("CONFIRM").optional().default("CONFIRM"), confirmed: z.boolean() })
    .passthrough();
const ProcessTaskPatchForm = z
    .object({ type: z.literal("FORM").optional().default("FORM"), form_data: z.object({}).partial().passthrough() })
    .passthrough();
const patchProcessTask_Body = z.union([ProcessTaskPatchSimpleTodo, ProcessTaskPatchConfirm, ProcessTaskPatchForm]);
const parent_id = z.union([z.string(), z.null()]).optional();
const ProcessParentType = z.enum(["PROPERTY", "UNIT", "CONTACT"]);
const ProcessPriority = z.enum(["LOW", "MEDIUM", "HIGH"]);
const Process: z.ZodType<Process> = z
    .object({
        parent_type: ProcessParentType,
        main_relation_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        created_by_type: ProcessCreatedByType,
        created_by_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        name: z.string().min(1),
        created_at: z.string(),
        due_date: z.union([z.string(), z.null()]).optional(),
        description: z.union([z.string(), z.null()]).optional(),
        status: ProcessStatus,
        priority: ProcessPriority,
        completed_date: z.union([z.string(), z.null()]).optional(),
        related_contacts: z
            .array(z.string().regex(/^(cnt)_[0-9a-f]{32}$/))
            .optional()
            .default([]),
        related_properties: z
            .array(z.string().regex(/^(pro)_[0-9a-f]{32}$/))
            .optional()
            .default([]),
        related_units: z
            .array(z.string().regex(/^(unt)_[0-9a-f]{32}$/))
            .optional()
            .default([]),
        assigned_employee_id: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(prc)_[0-9a-f]{32}$/),
    })
    .passthrough();
const ProcessCreateRequest: z.ZodType<ProcessCreateRequest> = z
    .object({
        parent_type: ProcessParentType,
        main_relation_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        name: z.string().min(1),
        description: z.union([z.string(), z.null()]).optional(),
        due_date: z.union([z.string(), z.null()]).optional(),
        priority: ProcessPriority,
        status: ProcessStatus.optional(),
        completed_date: z.union([z.string(), z.null()]).optional(),
        related_contacts: z
            .array(z.string().regex(/^(cnt)_[0-9a-f]{32}$/))
            .optional()
            .default([]),
        related_properties: z
            .array(z.string().regex(/^(pro)_[0-9a-f]{32}$/))
            .optional()
            .default([]),
        related_units: z
            .array(z.string().regex(/^(unt)_[0-9a-f]{32}$/))
            .optional()
            .default([]),
        assigned_employee_id: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const ProcessPatchRequest: z.ZodType<ProcessPatchRequest> = z
    .object({
        name: z.union([z.string(), z.null()]),
        due_date: z.union([z.string(), z.null()]),
        description: z.union([z.string(), z.null()]),
        status: z.union([ProcessStatus, z.null()]),
        priority: z.union([ProcessPriority, z.null()]),
        completed_date: z.union([z.string(), z.null()]),
        related_contacts: z.union([z.array(z.string().regex(/^(cnt)_[0-9a-f]{32}$/)), z.null()]).default([]),
        related_properties: z.union([z.array(z.string().regex(/^(pro)_[0-9a-f]{32}$/)), z.null()]).default([]),
        related_units: z.union([z.array(z.string().regex(/^(unt)_[0-9a-f]{32}$/)), z.null()]).default([]),
        assigned_employee_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const ProcessEventTaskEventCreateRequest: z.ZodType<ProcessEventTaskEventCreateRequest> = z
    .object({
        summary: z.union([z.string(), z.null()]).optional(),
        title: z.union([z.string(), z.null()]).optional(),
        visibility: z.record(ProcessEventVisibilityData),
        created_at: z.string().datetime({ offset: true }).optional().default("2025-04-14T00:15:27.560739"),
        type: z.literal("TASK").optional().default("TASK"),
        task_id: z.string().regex(/^(tsk)_[0-9a-f]{32}$/),
    })
    .passthrough();
const ProcessEventMailEventCreateRequest: z.ZodType<ProcessEventMailEventCreateRequest> = z
    .object({
        summary: z.union([z.string(), z.null()]).optional(),
        title: z.union([z.string(), z.null()]).optional(),
        visibility: z.record(ProcessEventVisibilityData),
        created_at: z.string().datetime({ offset: true }).optional().default("2025-04-14T00:15:27.560739"),
        type: z.literal("MAIL").optional().default("MAIL"),
        mail_id: z.string().regex(/^(mal)_[0-9a-f]{32}$/),
    })
    .passthrough();
const ProcessEventCallEventCreateRequest: z.ZodType<ProcessEventCallEventCreateRequest> = z
    .object({
        summary: z.union([z.string(), z.null()]).optional(),
        title: z.union([z.string(), z.null()]).optional(),
        visibility: z.record(ProcessEventVisibilityData),
        created_at: z.string().datetime({ offset: true }).optional().default("2025-04-14T00:15:27.560739"),
        type: z.literal("CALL").optional().default("CALL"),
        call_id: z.string().regex(/^(pcl)_[0-9a-f]{32}$/),
    })
    .passthrough();
const ProcessEventEmailEventCreateRequest: z.ZodType<ProcessEventEmailEventCreateRequest> = z
    .object({
        summary: z.union([z.string(), z.null()]).optional(),
        title: z.union([z.string(), z.null()]).optional(),
        visibility: z.record(ProcessEventVisibilityData),
        created_at: z.string().datetime({ offset: true }).optional().default("2025-04-14T00:15:27.560739"),
        type: z.literal("EMAIL").optional().default("EMAIL"),
        email_id: z.string().regex(/^(eml)_[0-9a-f]{32}$/),
    })
    .passthrough();
const ProcessEventProcessTaskEventCreateRequest: z.ZodType<ProcessEventProcessTaskEventCreateRequest> = z
    .object({
        summary: z.union([z.string(), z.null()]).optional(),
        title: z.union([z.string(), z.null()]).optional(),
        visibility: z.record(ProcessEventVisibilityData),
        created_at: z.string().datetime({ offset: true }).optional().default("2025-04-14T00:15:27.560739"),
        type: z.literal("PROCESS_TASK").optional().default("PROCESS_TASK"),
        process_task_id: z.string().regex(/^(ptk)_[0-9a-f]{32}$/),
    })
    .passthrough();
const ProcessEventNoteEventCreateRequest: z.ZodType<ProcessEventNoteEventCreateRequest> = z
    .object({
        summary: z.union([z.string(), z.null()]).optional(),
        title: z.union([z.string(), z.null()]).optional(),
        visibility: z.record(ProcessEventVisibilityData),
        created_at: z.string().datetime({ offset: true }).optional().default("2025-04-14T00:15:27.560739"),
        type: z.literal("NOTE").optional().default("NOTE"),
        content: z.string(),
    })
    .passthrough();
const createProcessEvent_Body = z.union([
    ProcessEventTaskEventCreateRequest,
    ProcessEventMailEventCreateRequest,
    ProcessEventCallEventCreateRequest,
    ProcessEventEmailEventCreateRequest,
    ProcessEventProcessTaskEventCreateRequest,
    ProcessEventNoteEventCreateRequest,
]);
const ProcessTaskCreateSimpleTodo = z
    .object({
        type: z.literal("SIMPLE_TODO").optional().default("SIMPLE_TODO"),
        title: z.string(),
        description: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const ProcessTaskCreateConfirm = z
    .object({
        type: z.literal("CONFIRM").optional().default("CONFIRM"),
        title: z.string(),
        description: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const ProcessTaskCreateForm = z
    .object({
        type: z.literal("FORM").optional().default("FORM"),
        json_schema: z.object({}).partial().passthrough(),
        ui_schema: z.object({}).partial().passthrough(),
        form_data: z.object({}).partial().passthrough().optional().default({}),
    })
    .passthrough();
const createProcessTask_Body = z.union([ProcessTaskCreateSimpleTodo, ProcessTaskCreateConfirm, ProcessTaskCreateForm]);
const Paged_Property_: z.ZodType<Paged_Property_> = z
    .object({ items: z.array(Property), total: z.number().int(), offset: z.number().int(), limit: z.number().int() })
    .passthrough();
const PropertyPatchRequest: z.ZodType<PropertyPatchRequest> = z
    .object({
        name: z.union([z.string(), z.null()]),
        plot_area: z.union([z.number(), z.null()]),
        floors: z.union([z.number(), z.null()]),
        construction_year: z.union([z.number(), z.null()]),
        renovation_year: z.union([z.number(), z.null()]),
        address: z.union([AddressDataPartial, z.null()]),
        energy_certificate: z.union([z.string(), z.null()]),
        heater_type: z.union([HeaterType, z.null()]),
        is_water_centrally_heated: z.union([z.boolean(), z.null()]),
    })
    .partial()
    .passthrough();
const CondominiumOwnershipCreateRequest: z.ZodType<CondominiumOwnershipCreateRequest> = z
    .object({
        co_ownership_share: z.number().gt(0),
        area: z.union([z.number(), z.null()]).optional(),
        area_heated: z.union([z.number(), z.null()]).optional(),
        sub_association_id: z.union([z.string(), z.null()]).optional(),
        related_units: z.union([z.array(CondominiumOwnershipRelatedUnit), z.null()]).optional(),
    })
    .passthrough();
const PropertyOwnerCreateRequest = z
    .object({
        contact_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        from_date: z.string(),
        to_date: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const PropertyServiceProvider = z
    .object({
        service_provider_id: z.string().regex(/^(svp)_[0-9a-f]{32}$/),
        property_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        from_date: z.string(),
        to_date: z.union([z.string(), z.null()]).optional(),
        service_id: z.string().regex(/^(sps)_[0-9a-f]{32}$/),
        contract_file_id: z.union([z.string(), z.null()]).optional(),
        price_per_hour: z.union([z.string(), z.null()]).optional(),
        price_per_km: z.union([z.string(), z.null()]).optional(),
        standard_fee: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(psp)_[0-9a-f]{32}$/),
    })
    .passthrough();
const PropertyServiceProviderCreateRequest = z
    .object({
        service_provider_id: z.string().regex(/^(svp)_[0-9a-f]{32}$/),
        from_date: z.string(),
        to_date: z.union([z.string(), z.null()]).optional(),
        service_id: z.string().regex(/^(sps)_[0-9a-f]{32}$/),
        contract_file_id: z.union([z.string(), z.null()]).optional(),
        price_per_hour: z.union([z.number(), z.string(), z.null()]).optional(),
        price_per_km: z.union([z.number(), z.string(), z.null()]).optional(),
        standard_fee: z.union([z.number(), z.string(), z.null()]).optional(),
    })
    .passthrough();
const PropertySharedUnitType = z.enum(["GARAGE", "GARDEN", "STORAGE_ROOM", "PARKING_SPACE"]);
const PropertySharedUnit: z.ZodType<PropertySharedUnit> = z
    .object({
        property_id: z.string().regex(/^(pro)_[0-9a-f]{32}$/),
        name: z.string(),
        type: PropertySharedUnitType,
        special_use_by_id: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(psu)_[0-9a-f]{32}$/),
    })
    .passthrough();
const PropertySharedUnitCreateRequest: z.ZodType<PropertySharedUnitCreateRequest> = z
    .object({
        name: z.string(),
        type: PropertySharedUnitType,
        special_use_by_id: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const AccountingTenantCreateRequest: z.ZodType<AccountingTenantCreateRequest> = z
    .object({
        name: z.string(),
        company_name_full: z.union([z.string(), z.null()]),
        is_tax_exempt: z.boolean(),
        is_vat_exempt: z.boolean(),
        is_vat_actual_taxation: z.boolean(),
        tax_id: z.union([z.string(), z.null()]).optional(),
        vat_id: z.union([z.string(), z.null()]).optional(),
        tax_office: z.union([z.string(), z.null()]).optional(),
        address: AddressData_Input,
        fiscal_year_start: z.union([z.string(), z.null()]).optional(),
        create_from_template: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const AccountingTenant: z.ZodType<AccountingTenant> = z
    .object({
        name: z.string(),
        company_name_full: z.union([z.string(), z.null()]),
        is_tax_exempt: z.boolean(),
        is_vat_exempt: z.boolean(),
        is_vat_actual_taxation: z.boolean(),
        tax_id: z.union([z.string(), z.null()]).optional(),
        vat_id: z.union([z.string(), z.null()]).optional(),
        tax_office: z.union([z.string(), z.null()]).optional(),
        address: AddressData_Output,
        chart_of_accounts_id: z.string().regex(/^(coa)_[0-9a-f]{32}$/),
        fiscal_year_start: z.union([z.string(), z.null()]).optional(),
        default_invoice_journal_id: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(act)_[0-9a-f]{32}$/),
    })
    .passthrough();
const AllocationKeyType = z.enum([
    "CUSTOM_VALUE",
    "CONDOMINIUM_OWNERSHIP_SHARES",
    "LIVING_SPACE",
    "NUMBER_OF_PERSONS",
    "PER_UNIT",
    "METER_READING",
]);
const AllocationKeyUnitRelation_Input: z.ZodType<AllocationKeyUnitRelation_Input> = z
    .object({
        unit_id: z.string().regex(/^(unt)_[0-9a-f]{32}$/),
        custom_allocation_value: z.union([z.number(), z.string(), z.null()]),
    })
    .passthrough();
const AllocationKeyCreateRequest: z.ZodType<AllocationKeyCreateRequest> = z
    .object({
        name: z.string(),
        type: AllocationKeyType,
        accounting_report_tag_id: z.string().regex(/^(art)_[0-9a-f]{32}$/),
        meter_type: z.union([MeterType, z.null()]).optional(),
        unit_allocations: z.union([z.array(AllocationKeyUnitRelation_Input), z.null()]).optional(),
    })
    .passthrough();
const AllocationKeyUnitRelation_Output: z.ZodType<AllocationKeyUnitRelation_Output> = z
    .object({
        unit_id: z.string().regex(/^(unt)_[0-9a-f]{32}$/),
        custom_allocation_value: z.union([z.string(), z.null()]),
    })
    .passthrough();
const AllocationKey: z.ZodType<AllocationKey> = z
    .object({
        name: z.string(),
        property_id: z.string().regex(/^(pro)_[0-9a-f]{32}$/),
        type: AllocationKeyType,
        accounting_report_tag_id: z.string().regex(/^(art)_[0-9a-f]{32}$/),
        meter_type: z.union([MeterType, z.null()]),
        unit_allocations: z.union([z.array(AllocationKeyUnitRelation_Output), z.null()]),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(alk)_[0-9a-f]{32}$/),
    })
    .passthrough();
const UnitType = z.enum(["APARTMENT", "GARAGE", "PARKING_SPACE", "BASEMENT", "GARDEN", "COMMERCIAL", "TERRACE"]);
const HeatingType = z.enum(["OIL", "GAS", "WOOD", "ELECTRICITY"]);
const UnitCreateRequest: z.ZodType<UnitCreateRequest> = z
    .object({
        name: z.string(),
        location: z.string(),
        type: UnitType,
        area: z.union([z.number(), z.null()]).optional(),
        area_heated: z.union([z.number(), z.null()]).optional(),
        rooms: z.union([z.number(), z.null()]).optional(),
        is_vacant: z.boolean(),
        heating_type: z.union([HeatingType, z.null()]).optional(),
    })
    .passthrough();
const Unit: z.ZodType<Unit> = z
    .object({
        property_id: z.string().regex(/^(pro)_[0-9a-f]{32}$/),
        name: z.string(),
        location: z.string(),
        type: UnitType,
        area: z.union([z.number(), z.null()]).optional(),
        area_heated: z.union([z.number(), z.null()]).optional(),
        rooms: z.union([z.number(), z.null()]).optional(),
        is_vacant: z.boolean(),
        heating_type: z.union([HeatingType, z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(unt)_[0-9a-f]{32}$/),
    })
    .passthrough();
const HomeOwnerAssociationResolutionCreateRequest = z
    .object({
        number: z.string(),
        title: z.union([z.string(), z.null()]).optional(),
        description: z.union([z.string(), z.null()]).optional(),
        date: z.string(),
        resolution_document_id: z.union([z.string(), z.null()]).optional(),
        sub_association_id: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const HomeOwnerAssociationResolution = z
    .object({
        home_owner_association_property_id: z.string().regex(/^(pro)_[0-9a-f]{32}$/),
        number: z.string(),
        title: z.union([z.string(), z.null()]).optional(),
        description: z.union([z.string(), z.null()]).optional(),
        date: z.string(),
        resolution_document_id: z.union([z.string(), z.null()]).optional(),
        sub_association_id: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(hor)_[0-9a-f]{32}$/),
    })
    .passthrough();
const MeterCreateRequest: z.ZodType<MeterCreateRequest> = z
    .object({
        name: z.string(),
        property_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        unit_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        type: MeterType,
        number: z.string(),
        unit_of_measurement: UnitOfMeasurement,
    })
    .passthrough();
const PropertyContractType = z.enum(["INSURANCE", "SERVICE_CONTRACT", "OTHER"]);
const PropertyContractCreateRequest: z.ZodType<PropertyContractCreateRequest> = z
    .object({
        type: PropertyContractType,
        name: z.string(),
        start_date: z.string(),
        end_date: z.string(),
        file_id: z.string().regex(/^(fil)_[0-9a-f]{32}$/),
    })
    .passthrough();
const PropertyContract: z.ZodType<PropertyContract> = z
    .object({
        property_id: z.string().regex(/^(pro)_[0-9a-f]{32}$/),
        type: PropertyContractType,
        name: z.string(),
        start_date: z.string(),
        end_date: z.string(),
        file_id: z.string().regex(/^(fil)_[0-9a-f]{32}$/),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(pco)_[0-9a-f]{32}$/),
    })
    .passthrough();
const SubAssociationCreateRequest = z.object({ name: z.string().min(1) }).passthrough();
const SubAssociation = z
    .object({
        name: z.string().min(1),
        property_id: z.string().regex(/^(pro)_[0-9a-f]{32}$/),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(sub)_[0-9a-f]{32}$/),
    })
    .passthrough();
const PropertySharedUnitPatchRequest: z.ZodType<PropertySharedUnitPatchRequest> = z
    .object({
        name: z.union([z.string(), z.null()]),
        type: z.union([PropertySharedUnitType, z.null()]),
        special_use_by_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const PropertyOwnerPatchRequest = z
    .object({ from_date: z.union([z.string(), z.null()]), to_date: z.union([z.string(), z.null()]) })
    .partial()
    .passthrough();
const PropertyServiceProviderPatchRequest = z
    .object({
        service_provider_id: z.union([z.string(), z.null()]),
        from_date: z.union([z.string(), z.null()]),
        to_date: z.union([z.string(), z.null()]),
        service_id: z.union([z.string(), z.null()]),
        contract_file_id: z.union([z.string(), z.null()]),
        price_per_hour: z.union([z.number(), z.string(), z.null()]),
        price_per_km: z.union([z.number(), z.string(), z.null()]),
        standard_fee: z.union([z.number(), z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const type = z.union([z.enum(["property", "contact"]), z.null()]).optional();
const SearchEngineResult = z
    .object({
        type: z.enum(["property", "contact"]),
        id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        score: z.number(),
        title: z.string().min(1),
        description: z.string(),
    })
    .passthrough();
const LinkedObjectType = z.enum(["PROPERTY", "UNIT", "CONTACT"]);
const linked_object_type = z.union([LinkedObjectType, z.null()]).optional();
const TaskStatus = z.enum(["OPEN", "IN_PROGRESS", "COMPLETED", "CANCELLED"]);
const status = z.union([TaskStatus, z.null()]).optional();
const TaskPriority = z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]);
const priority = z.union([TaskPriority, z.null()]).optional();
const Task: z.ZodType<Task> = z
    .object({
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(tsk)_[0-9a-f]{32}$/),
        title: z.string().min(1),
        description: z.string(),
        status: TaskStatus,
        priority: TaskPriority,
        linked_object_type: LinkedObjectType,
        linked_object_id: z.union([z.string(), z.string(), z.string()]),
        assigned_to: z.array(z.string().regex(/^(emp)_[0-9a-f]{32}$/)),
        created_by: UserIdUnion.regex(/^(emp)_[0-9a-f]{32}$/),
        created_at: z.string().datetime({ offset: true }),
        updated_at: z.string().datetime({ offset: true }),
        due_date: z.union([z.string(), z.null()]).optional(),
        completed_at: z.union([z.string(), z.null()]).optional(),
        tags: z.array(z.string()).optional().default([]),
    })
    .passthrough();
const TaskCreateRequest: z.ZodType<TaskCreateRequest> = z
    .object({
        title: z.string().min(1),
        description: z.string(),
        priority: TaskPriority,
        linked_object_type: LinkedObjectType,
        linked_object_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        assigned_to: z.array(z.string().regex(/^(emp)_[0-9a-f]{32}$/)),
        due_date: z.union([z.string(), z.null()]).optional(),
        tags: z.array(z.string()).optional().default([]),
    })
    .passthrough();
const TaskPatchRequest: z.ZodType<TaskPatchRequest> = z
    .object({
        title: z.union([z.string(), z.null()]),
        description: z.union([z.string(), z.null()]),
        status: z.union([TaskStatus, z.null()]),
        priority: z.union([TaskPriority, z.null()]),
        assigned_to: z.union([z.array(z.string().regex(/^(emp)_[0-9a-f]{32}$/)), z.null()]),
        due_date: z.union([z.string(), z.null()]),
        tags: z.union([z.array(z.string()), z.null()]),
    })
    .partial()
    .passthrough();
const TaskCommentLinkedObjectType = z.enum(["FILE", "CONTACT", "UNIT", "PROPERTY", "MAIL", "TASK", "EMAIL"]);
const TaskComment: z.ZodType<TaskComment> = z
    .object({
        task_id: z.string().regex(/^(tsk)_[0-9a-f]{32}$/),
        date: z.string().datetime({ offset: true }),
        employee_id: z.string().regex(/^(emp)_[0-9a-f]{32}$/),
        comment: z.union([z.string(), z.null()]).optional(),
        linked_object_type: TaskCommentLinkedObjectType,
        linked_object_id: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(tcm)_[0-9a-f]{32}$/),
    })
    .passthrough();
const TaskCommentCreateRequest: z.ZodType<TaskCommentCreateRequest> = z
    .object({
        comment: z.union([z.string(), z.null()]).optional(),
        linked_object_type: TaskCommentLinkedObjectType,
        linked_object_id: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const TaskCommentPatchRequest: z.ZodType<TaskCommentPatchRequest> = z
    .object({
        comment: z.union([z.string(), z.null()]),
        linked_object_type: z.union([TaskCommentLinkedObjectType, z.null()]),
        linked_object_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const UnitPatchRequest: z.ZodType<UnitPatchRequest> = z
    .object({
        name: z.union([z.string(), z.null()]),
        location: z.union([z.string(), z.null()]),
        type: z.union([UnitType, z.null()]),
        area: z.union([z.number(), z.null()]),
        area_heated: z.union([z.number(), z.null()]),
        rooms: z.union([z.number(), z.null()]),
        is_vacant: z.union([z.boolean(), z.null()]),
        heating_type: z.union([HeatingType, z.null()]),
    })
    .partial()
    .passthrough();
const UsageType = z.enum(["RENT_PRIVATE", "RENT_COMMERCIAL"]);
const DepositType = z.enum(["BANK_TRANSFER", "CASH", "BANK_GUARANTEE", "PLEDGED_SAVING_ACCOUNT"]);
const RentPaymentInterval = z.enum(["MONTHLY", "QUARTERLY", "HALF_YEARLY", "YEARLY"]);
const RentIncreaseType = z.enum(["FIXED", "INDEXED", "CUSTOM"]);
const Usage: z.ZodType<Usage> = z
    .object({
        unit_id: z.string().regex(/^(unt)_[0-9a-f]{32}$/),
        from_date: z.string(),
        to_date: z.union([z.string(), z.null()]).optional(),
        type: UsageType,
        notice_period: z.union([z.number(), z.null()]).optional(),
        minimum_use_until: z.union([z.string(), z.null()]).optional(),
        deposit_amount: z.union([z.string(), z.null()]).optional(),
        deposit_type: z.union([DepositType, z.null()]).optional(),
        deposit_due_date: z.union([z.string(), z.null()]).optional(),
        extra_information: z.union([z.string(), z.null()]).optional(),
        onetime_small_repair_limit: z.union([z.string(), z.null()]).optional(),
        annual_small_repair_limit: z.union([z.string(), z.null()]).optional(),
        is_furnished: z.boolean(),
        rent_payment_interval: RentPaymentInterval,
        rent_increase_type: RentIncreaseType,
        rent_increase_rate: z.union([z.string(), z.null()]).optional(),
        rent_index: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(usg)_[0-9a-f]{32}$/),
    })
    .passthrough();
const UsageCreateRequest: z.ZodType<UsageCreateRequest> = z
    .object({
        from_date: z.string(),
        to_date: z.union([z.string(), z.null()]).optional(),
        type: UsageType,
        notice_period: z.union([z.number(), z.null()]).optional(),
        minimum_use_until: z.union([z.string(), z.null()]).optional(),
        deposit_amount: z.union([z.number(), z.null()]).optional(),
        deposit_type: z.union([DepositType, z.null()]).optional(),
        deposit_due_date: z.union([z.string(), z.null()]).optional(),
        extra_information: z.union([z.string(), z.null()]).optional(),
        onetime_small_repair_limit: z.union([z.number(), z.null()]).optional(),
        annual_small_repair_limit: z.union([z.number(), z.null()]).optional(),
        is_furnished: z.boolean(),
        rent_amount: z.union([z.number(), z.string()]),
        rent_payment_interval: RentPaymentInterval,
        rent_increase_type: RentIncreaseType,
        rent_increase_rate: z.union([z.number(), z.string(), z.null()]).optional(),
        rent_index: z.union([z.number(), z.string(), z.null()]).optional(),
        rent_recurring_liability_id: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const UsagePatchRequest: z.ZodType<UsagePatchRequest> = z
    .object({
        from_date: z.union([z.string(), z.null()]),
        to_date: z.union([z.string(), z.null()]),
        type: z.union([UsageType, z.null()]),
        notice_period: z.union([z.number(), z.null()]),
        minimum_use_until: z.union([z.string(), z.null()]),
        deposit_amount: z.union([z.number(), z.null()]),
        deposit_type: z.union([DepositType, z.null()]),
        deposit_due_date: z.union([z.string(), z.null()]),
        extra_information: z.union([z.string(), z.null()]),
        onetime_small_repair_limit: z.union([z.number(), z.null()]),
        annual_small_repair_limit: z.union([z.number(), z.null()]),
        is_furnished: z.union([z.boolean(), z.null()]),
        rent_amount: z.union([z.number(), z.string(), z.null()]),
        rent_payment_interval: z.union([RentPaymentInterval, z.null()]),
        rent_increase_type: z.union([RentIncreaseType, z.null()]),
        rent_increase_rate: z.union([z.number(), z.string(), z.null()]),
        rent_index: z.union([z.number(), z.string(), z.null()]),
        rent_recurring_liability_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const UsageTenantCreateRequest = z
    .object({
        contact_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
    })
    .passthrough();
const UsageRentCreateRequest = z
    .object({
        amount: z.union([z.number(), z.string()]),
        from_date: z.string(),
        rent_recurring_liability_id: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const UsageRent = z
    .object({
        usage_id: z.string().regex(/^(usg)_[0-9a-f]{32}$/),
        amount: z.string(),
        from_date: z.string(),
        rent_recurring_liability_id: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(urn)_[0-9a-f]{32}$/),
    })
    .passthrough();
const UsageRentPatchRequest = z
    .object({
        amount: z.union([z.number(), z.string(), z.null()]),
        from_date: z.union([z.string(), z.null()]),
        rent_recurring_liability_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const UserStoreAtom = z.union([z.string(), z.number(), z.number(), z.boolean()]);
const UserStore: z.ZodType<UserStore> = z.record(z.union([UserStoreAtom, z.array(UserStoreAtom)]));
const updateMyStore_Body = z.record(z.union([UserStoreAtom, z.array(UserStoreAtom), z.null()]));
const is_committed = z.union([z.boolean(), z.null()]).optional();
const WaitingTransaction: z.ZodType<WaitingTransaction> = z
    .object({
        amount: z.string(),
        send_date: z.string().datetime({ offset: true }),
        purpose: z.union([z.string(), z.null()]).optional(),
        bank_account_id: z.string().regex(/^(baa)_[0-9a-f]{32}$/),
        foreign_iban: z.string().regex(/^[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?:[ ]?[0-9]{1,2})?$/),
        foreign_name: z.string(),
        is_committed: z.boolean().optional().default(false),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(wtr)_[0-9a-f]{32}$/),
    })
    .passthrough();
const Paged_WaitingTransaction_: z.ZodType<Paged_WaitingTransaction_> = z
    .object({
        items: z.array(WaitingTransaction),
        total: z.number().int(),
        offset: z.number().int(),
        limit: z.number().int(),
    })
    .passthrough();
const WaitingTransactionCreateRequest = z
    .object({
        amount: z.union([z.number(), z.string()]),
        purpose: z.union([z.string(), z.null()]).optional(),
        bank_account_id: z
            .string()
            .regex(
                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
            ),
        foreign_iban: z.string().regex(/^[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?:[ ]?[0-9]{1,2})?$/),
        foreign_name: z.string(),
        send_date: z.string().datetime({ offset: true }),
    })
    .passthrough();
const waiting_transaction_ids = z
    .union([
        z.array(
            z
                .string()
                .regex(
                    /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                )
        ),
        z.null(),
    ])
    .optional();
const FinApiWebFormType = z.enum([
    "BANK_CONNECTION_IMPORT",
    "BANK_CONNECTION_UPDATE",
    "DIRECT_DEBIT_WITH_ACCOUNT_ID",
    "PAYMENT_WITH_ACCOUNT_ID",
    "STANDALONE_PAYMENT",
    "STANDING_ORDER",
]);
const FinApiWebform: z.ZodType<FinApiWebform> = z
    .object({
        url: z.string(),
        id: z.string(),
        created_at: z.string().datetime({ offset: true }),
        expires_at: z.string().datetime({ offset: true }),
        type: FinApiWebFormType,
    })
    .passthrough();
const Workflow = z
    .object({
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(wfl)_[0-9a-f]{32}$/),
        name: z.string().min(1),
        current_version: z.union([z.string(), z.null()]),
    })
    .passthrough();
const WorkflowCreateRequest = z.object({ name: z.string().min(1) }).passthrough();
const WorkflowPatchRequest = z
    .object({ name: z.union([z.string(), z.null()]), current_version: z.union([z.string(), z.null()]) })
    .partial()
    .passthrough();
const WorkflowNodeTriggerProcessCreated: z.ZodType<WorkflowNodeTriggerProcessCreated> = z
    .object({ id: z.string().regex(/^(wno)_[0-9a-f]{32}$/), type: z.literal("TRIGGER_PROCESS_CREATED") })
    .passthrough();
const WorkflowNodeTriggerProcessEventCreated: z.ZodType<WorkflowNodeTriggerProcessEventCreated> = z
    .object({ id: z.string().regex(/^(wno)_[0-9a-f]{32}$/), type: z.literal("TRIGGER_PROCESS_EVENT_CREATED") })
    .passthrough();
const WorkflowNodeManualConfirm: z.ZodType<WorkflowNodeManualConfirm> = z
    .object({ id: z.string().regex(/^(wno)_[0-9a-f]{32}$/), type: z.literal("MANUAL_CONFIRM") })
    .passthrough();
const WorkflowNodeManualForm: z.ZodType<WorkflowNodeManualForm> = z
    .object({
        id: z.string().regex(/^(wno)_[0-9a-f]{32}$/),
        type: z.literal("MANUAL_FORM"),
        json_schema: z.object({}).partial().passthrough(),
        ui_schema: z.object({}).partial().passthrough(),
    })
    .passthrough();
const WorkflowNodeAutoCreateProcessEventManualNote: z.ZodType<WorkflowNodeAutoCreateProcessEventManualNote> = z
    .object({ id: z.string().regex(/^(wno)_[0-9a-f]{32}$/), type: z.literal("AUTO_CREATE_PROCESS_EVENT_MANUAL_NOTE") })
    .passthrough();
const WorkflowNodeAutoAiBooleanEvaluator: z.ZodType<WorkflowNodeAutoAiBooleanEvaluator> = z
    .object({ id: z.string().regex(/^(wno)_[0-9a-f]{32}$/), type: z.literal("AUTO_AI_BOOLEAN_EVALUATOR") })
    .passthrough();
const WorkflowNodeAutoIf: z.ZodType<WorkflowNodeAutoIf> = z
    .object({ id: z.string().regex(/^(wno)_[0-9a-f]{32}$/), type: z.literal("AUTO_IF") })
    .passthrough();
const WorkflowNodeStaticString: z.ZodType<WorkflowNodeStaticString> = z
    .object({ id: z.string().regex(/^(wno)_[0-9a-f]{32}$/), type: z.literal("STATIC_STRING"), value: z.string() })
    .passthrough();
const WorkflowNodeStaticInt: z.ZodType<WorkflowNodeStaticInt> = z
    .object({ id: z.string().regex(/^(wno)_[0-9a-f]{32}$/), type: z.literal("STATIC_INT"), value: z.number().int() })
    .passthrough();
const WorkflowNodeStaticBool: z.ZodType<WorkflowNodeStaticBool> = z
    .object({ id: z.string().regex(/^(wno)_[0-9a-f]{32}$/), type: z.literal("STATIC_BOOL"), value: z.boolean() })
    .passthrough();
const WorkflowNodeUnion: z.ZodType<WorkflowNodeUnion> = z.union([
    WorkflowNodeTriggerProcessCreated,
    WorkflowNodeTriggerProcessEventCreated,
    WorkflowNodeManualConfirm,
    WorkflowNodeManualForm,
    WorkflowNodeAutoCreateProcessEventManualNote,
    WorkflowNodeAutoAiBooleanEvaluator,
    WorkflowNodeAutoIf,
    WorkflowNodeStaticString,
    WorkflowNodeStaticInt,
    WorkflowNodeStaticBool,
]);
const WorkflowEdge: z.ZodType<WorkflowEdge> = z
    .object({
        source_node_id: z.string().regex(/^(wno)_[0-9a-f]{32}$/),
        source_port: z.string(),
        target_node_id: z.string().regex(/^(wno)_[0-9a-f]{32}$/),
        target_port: z.string(),
    })
    .passthrough();
const WorkflowVersionCreateRequest: z.ZodType<WorkflowVersionCreateRequest> = z
    .object({ version: z.string(), nodes: z.array(WorkflowNodeUnion), edges: z.array(WorkflowEdge) })
    .passthrough();
const WorkflowVersion: z.ZodType<WorkflowVersion> = z
    .object({
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        version: z.string(),
        nodes: z.array(WorkflowNodeUnion),
        edges: z.array(WorkflowEdge),
        workflow_id: z.string().regex(/^(wfl)_[0-9a-f]{32}$/),
        last_deployed_at: z.union([z.string(), z.null()]),
    })
    .passthrough();
const WorkflowVersionPatchRequest: z.ZodType<WorkflowVersionPatchRequest> = z
    .object({
        version: z.union([z.string(), z.null()]),
        nodes: z.union([z.array(WorkflowNodeUnion), z.null()]),
        edges: z.union([z.array(WorkflowEdge), z.null()]),
    })
    .partial()
    .passthrough();
const ClusterPatchRequest = z
    .object({ name: z.union([z.string(), z.null()]), owner_id: z.union([z.string(), z.null()]) })
    .partial()
    .passthrough();
const Service = z
    .object({
        name: z.string(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(ser)_[0-9a-f]{32}$/),
    })
    .passthrough();
const ServiceCreateRequest = z.object({ name: z.string() }).passthrough();
const ServicePatchRequest = z.object({ name: z.string() }).passthrough();
const ServiceProviderPatchRequest: z.ZodType<ServiceProviderPatchRequest> = z
    .object({
        rating: z.union([z.number(), z.null()]),
        sub_address_id: z.union([AddressData_Input, z.null()]),
        service_radius_km: z.union([z.number(), z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const ServiceProviderService: z.ZodType<ServiceProviderService> = z
    .object({
        service_provider_id: z.string().regex(/^(svp)_[0-9a-f]{32}$/),
        default_contact_option: z.union([ContactOptionData, z.null()]).optional(),
        service: z.string().regex(/^(ser)_[0-9a-f]{32}$/),
        service_radius_km: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(sps)_[0-9a-f]{32}$/),
    })
    .passthrough();
const ServiceProviderServiceCreateRequest: z.ZodType<ServiceProviderServiceCreateRequest> = z
    .object({
        default_contact_option: z.union([ContactOptionData, z.null()]).optional(),
        service: z.string().regex(/^(ser)_[0-9a-f]{32}$/),
        service_radius_km: z.union([z.number(), z.string(), z.null()]).optional(),
    })
    .passthrough();
const ServiceProviderServicePatchRequest: z.ZodType<ServiceProviderServicePatchRequest> = z
    .object({
        default_contact_option: z.union([ContactOptionData, z.null()]),
        service_radius_km: z.union([z.number(), z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const HomeOwnerAssociationResolutionPatchRequest = z
    .object({
        number: z.union([z.string(), z.null()]),
        title: z.union([z.string(), z.null()]),
        description: z.union([z.string(), z.null()]),
        date: z.union([z.string(), z.null()]),
        resolution_document_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const PropertyContractPatchRequest: z.ZodType<PropertyContractPatchRequest> = z
    .object({
        type: z.union([PropertyContractType, z.null()]),
        name: z.union([z.string(), z.null()]),
        start_date: z.union([z.string(), z.null()]),
        end_date: z.union([z.string(), z.null()]),
        file_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const SubAssociationPatchRequest = z
    .object({ name: z.union([z.string(), z.null()]) })
    .partial()
    .passthrough();
const DocumentTemplate = z
    .object({
        file_id: z.string().regex(/^(fil)_[0-9a-f]{32}$/),
        name: z.string().min(1),
        description: z.string(),
        variables: z.array(z.string()),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(dtp)_[0-9a-f]{32}$/),
    })
    .passthrough();
const DocumentTemplateCreateRequest = z
    .object({ name: z.string().min(1), description: z.string(), file_id: z.string().regex(/^(fil)_[0-9a-f]{32}$/) })
    .passthrough();
const DocumentTemplatePatchRequest = z
    .object({
        name: z.union([z.string(), z.null()]),
        description: z.union([z.string(), z.null()]),
        file_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const DocumentTemplateFillRequest = z.object({ variables: z.record(z.string()) }).passthrough();
const CallDirection = z.enum(["INCOMING", "OUTGOING"]);
const PastCall: z.ZodType<PastCall> = z
    .object({
        contact_id: z.string().regex(/^(cnt)_[0-9a-f]{32}$/),
        employee_id: z.string().regex(/^(emp)_[0-9a-f]{32}$/),
        date: z.string().datetime({ offset: true }),
        duration: z.number().int(),
        summary: z.union([z.string(), z.null()]),
        notes: z.union([z.string(), z.null()]).optional(),
        transcript: z.union([z.string(), z.null()]).optional(),
        caller_telephone_number: z.union([z.string(), z.null()]).optional(),
        called_telephone_number: z.union([z.string(), z.null()]).optional(),
        direction: CallDirection,
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(pcl)_[0-9a-f]{32}$/),
    })
    .passthrough();
const Paged_PastCall_: z.ZodType<Paged_PastCall_> = z
    .object({ items: z.array(PastCall), total: z.number().int(), offset: z.number().int(), limit: z.number().int() })
    .passthrough();
const PastCallCreateRequest: z.ZodType<PastCallCreateRequest> = z
    .object({
        contact_id: z.string().regex(/^(cnt)_[0-9a-f]{32}$/),
        employee_id: z.string().regex(/^(emp)_[0-9a-f]{32}$/),
        date: z.string().datetime({ offset: true }),
        duration: z.number().int(),
        summary: z.union([z.string(), z.null()]),
        notes: z.union([z.string(), z.null()]).optional(),
        transcript: z.union([z.string(), z.null()]).optional(),
        caller_telephone_number: z.union([z.string(), z.null()]).optional(),
        called_telephone_number: z.union([z.string(), z.null()]).optional(),
        direction: CallDirection,
    })
    .passthrough();
const PastCallPatchRequest: z.ZodType<PastCallPatchRequest> = z
    .object({
        summary: z.union([z.string(), z.null()]),
        notes: z.union([z.string(), z.null()]),
        transcript: z.union([z.string(), z.null()]),
        caller_telephone_number: z.union([z.string(), z.null()]),
        called_telephone_number: z.union([z.string(), z.null()]),
        direction: z.union([CallDirection, z.null()]),
    })
    .partial()
    .passthrough();
const AccountingReportTag = z
    .object({
        name: z.string().min(1),
        chart_of_accounts_id: z.string().regex(/^(coa)_[0-9a-f]{32}$/),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(art)_[0-9a-f]{32}$/),
    })
    .passthrough();
const AccountingReportTagPatchRequest = z
    .object({ name: z.union([z.string(), z.null()]) })
    .partial()
    .passthrough();
const AccountingReport = z
    .object({
        accounting_tenant_id: z.string().regex(/^(act)_[0-9a-f]{32}$/),
        property_id: z.string().regex(/^(pro)_[0-9a-f]{32}$/),
        year: z.number().int(),
        from_date: z.string(),
        to_date: z.string(),
        file_id: z.string().regex(/^(fil)_[0-9a-f]{32}$/),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(afs)_[0-9a-f]{32}$/),
    })
    .passthrough();
const AccountingReportPatchRequest = z
    .object({
        year: z.union([z.number(), z.null()]),
        from_date: z.union([z.string(), z.null()]),
        to_date: z.union([z.string(), z.null()]),
        file_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const AccountingTenantPatchRequest: z.ZodType<AccountingTenantPatchRequest> = z
    .object({
        name: z.union([z.string(), z.null()]),
        company_name_full: z.union([z.string(), z.null()]),
        is_tax_exempt: z.union([z.boolean(), z.null()]),
        is_vat_exempt: z.union([z.boolean(), z.null()]),
        is_vat_actual_taxation: z.union([z.boolean(), z.null()]),
        tax_id: z.union([z.string(), z.null()]),
        vat_id: z.union([z.string(), z.null()]),
        tax_office: z.union([z.string(), z.null()]),
        address: z.union([AddressData_Input, z.null()]),
        chart_of_accounts_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const AccountingReportCreateRequest = z
    .object({
        accounting_tenant_id: z.string().regex(/^(act)_[0-9a-f]{32}$/),
        property_id: z.string().regex(/^(pro)_[0-9a-f]{32}$/),
        year: z.number().int(),
        from_date: z.string(),
        to_date: z.string(),
        file_id: z.string().regex(/^(fil)_[0-9a-f]{32}$/),
    })
    .passthrough();
const LiabilityType = z.enum(["LIABILITY", "RECEIVABLE"]);
const LiabilityCreateRequest: z.ZodType<LiabilityCreateRequest> = z
    .object({
        property_id: z.union([z.string(), z.null()]).optional(),
        amount: z.union([z.number(), z.string()]),
        due_date: z.string(),
        description: z.union([z.string(), z.null()]).optional(),
        journal_entry_id: z.union([z.string(), z.null()]).optional(),
        type: LiabilityType,
    })
    .passthrough();
const Liability: z.ZodType<Liability> = z
    .object({
        accounting_tenant_id: z.string().regex(/^(act)_[0-9a-f]{32}$/),
        property_id: z.union([z.string(), z.null()]).optional(),
        amount: z.string(),
        due_date: z.string(),
        description: z.union([z.string(), z.null()]).optional(),
        journal_entry_id: z.union([z.string(), z.null()]).optional(),
        type: LiabilityType,
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(lbt)_[0-9a-f]{32}$/),
    })
    .passthrough();
const Paged_Liability_: z.ZodType<Paged_Liability_> = z
    .object({ items: z.array(Liability), total: z.number().int(), offset: z.number().int(), limit: z.number().int() })
    .passthrough();
const RecurringLiabilityIntervalType = z.enum(["DAILY", "WEEKLY", "MONTHLY", "YEARLY"]);
const RecurringLiabilityCreateRequest: z.ZodType<RecurringLiabilityCreateRequest> = z
    .object({
        property_id: z.union([z.string(), z.null()]).optional(),
        amount: z.union([z.number(), z.string()]),
        name: z.string(),
        description: z.union([z.string(), z.null()]).optional(),
        start_date: z.string(),
        end_date: z.union([z.string(), z.null()]).optional(),
        due_day: z.number().int(),
        interval_type: RecurringLiabilityIntervalType,
        interval_value: z.number().int(),
        recurring_journal_entry_id: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const RecurringLiability: z.ZodType<RecurringLiability> = z
    .object({
        accounting_tenant_id: z.string().regex(/^(act)_[0-9a-f]{32}$/),
        property_id: z.union([z.string(), z.null()]).optional(),
        amount: z.string(),
        name: z.string(),
        description: z.union([z.string(), z.null()]).optional(),
        start_date: z.string(),
        end_date: z.union([z.string(), z.null()]).optional(),
        due_day: z.number().int(),
        interval_type: RecurringLiabilityIntervalType,
        interval_value: z.number().int(),
        recurring_journal_entry_id: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(rcl)_[0-9a-f]{32}$/),
    })
    .passthrough();
const EconomicPlanCreateRequest = z
    .object({
        year: z.number().int(),
        from_date: z.string(),
        to_date: z.string(),
        file_id: z.string().regex(/^(fil)_[0-9a-f]{32}$/),
    })
    .passthrough();
const Journal = z
    .object({
        name: z.string().min(1),
        naming_template: z.string().min(1),
        accounting_tenant_id: z.string().regex(/^(act)_[0-9a-f]{32}$/),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(jrn)_[0-9a-f]{32}$/),
    })
    .passthrough();
const JournalCreateRequest = z
    .object({
        name: z.string().min(1),
        naming_template: z.string().optional().default("Buchung {year}-{month}-{day} {counter}"),
    })
    .passthrough();
const InvoiceItemCreateRequest: z.ZodType<InvoiceItemCreateRequest> = z
    .object({
        account_id: z.string().regex(/^(acc)_[0-9a-f]{32}$/),
        tax_rate_id: z.union([z.string(), z.null()]).optional(),
        amount: z.union([z.number(), z.string()]),
        description: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const InvoiceNoteData: z.ZodType<InvoiceNoteData> = z.object({ note: z.string().min(1) }).passthrough();
const InvoiceNormalCreateRequest: z.ZodType<InvoiceNormalCreateRequest> = z
    .object({
        property_id: z.union([z.string(), z.null()]),
        unit_id: z.union([z.string(), z.null()]).optional(),
        invoice_date: z.string(),
        date_of_service: z.string(),
        due_date: z.string(),
        description: z.union([z.string(), z.null()]).optional(),
        file_id: z.union([z.string(), z.null()]),
        supplier_id: z.string().regex(/^(cnt)_[0-9a-f]{32}$/),
        items: z.array(InvoiceItemCreateRequest),
        notes: z.array(InvoiceNoteData).optional().default([]),
        is_draft: z.literal(false).optional().default(false),
    })
    .passthrough();
const InvoiceItemData_Input: z.ZodType<InvoiceItemData_Input> = z
    .object({
        account_id: z.string().regex(/^(acc)_[0-9a-f]{32}$/),
        tax_rate_id: z.union([z.string(), z.null()]).optional(),
        amount: z.union([z.number(), z.string()]),
        description: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const InvoiceDraftCreateRequest: z.ZodType<InvoiceDraftCreateRequest> = z
    .object({
        is_draft: z.literal(true).optional().default(true),
        property_id: z.union([z.string(), z.null()]).optional(),
        unit_id: z.union([z.string(), z.null()]).optional(),
        invoice_date: z.string(),
        date_of_service: z.union([z.string(), z.null()]).optional(),
        due_date: z.union([z.string(), z.null()]).optional(),
        description: z.union([z.string(), z.null()]).optional(),
        file_id: z.union([z.string(), z.null()]).optional(),
        supplier_id: z.union([z.string(), z.null()]).optional(),
        items: z.array(InvoiceItemData_Input).optional().default([]),
        notes: z.array(InvoiceNoteData).optional().default([]),
    })
    .passthrough();
const createInvoice_Body = z.union([InvoiceNormalCreateRequest, InvoiceDraftCreateRequest]);
const InvoiceItemData_Output: z.ZodType<InvoiceItemData_Output> = z
    .object({
        account_id: z.string().regex(/^(acc)_[0-9a-f]{32}$/),
        tax_rate_id: z.union([z.string(), z.null()]).optional(),
        amount: z.string(),
        description: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const Invoice: z.ZodType<Invoice> = z
    .object({
        accounting_tenant_id: z.string().regex(/^(act)_[0-9a-f]{32}$/),
        property_id: z.union([z.string(), z.null()]).optional(),
        unit_id: z.union([z.string(), z.null()]).optional(),
        invoice_date: z.string(),
        date_of_service: z.string(),
        due_date: z.string(),
        description: z.union([z.string(), z.null()]).optional(),
        file_id: z.union([z.string(), z.null()]).optional(),
        journal_entry_id: z.string().regex(/^(jre)_[0-9a-f]{32}$/),
        supplier_id: z.string().regex(/^(cnt)_[0-9a-f]{32}$/),
        liability_id: z.string().regex(/^(lbt)_[0-9a-f]{32}$/),
        items: z.array(InvoiceItemData_Output),
        notes: z.array(InvoiceNoteData),
        is_draft: z.literal(false).optional().default(false),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(inv)_[0-9a-f]{32}$/),
    })
    .passthrough();
const InvoiceDraft: z.ZodType<InvoiceDraft> = z
    .object({
        is_draft: z.literal(true).optional().default(true),
        accounting_tenant_id: z.string().regex(/^(act)_[0-9a-f]{32}$/),
        property_id: z.union([z.string(), z.null()]).optional(),
        unit_id: z.union([z.string(), z.null()]).optional(),
        invoice_date: z.string(),
        date_of_service: z.union([z.string(), z.null()]).optional(),
        due_date: z.union([z.string(), z.null()]).optional(),
        description: z.union([z.string(), z.null()]).optional(),
        file_id: z.union([z.string(), z.null()]).optional(),
        journal_entry_id: z.string().regex(/^(jre)_[0-9a-f]{32}$/),
        liability_id: z.null().optional(),
        supplier_id: z.union([z.string(), z.null()]).optional(),
        items: z.array(InvoiceItemData_Output).optional().default([]),
        notes: z.array(InvoiceNoteData).optional().default([]),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(inv)_[0-9a-f]{32}$/),
    })
    .passthrough();
const InvoiceUnion: z.ZodType<InvoiceUnion> = z.union([Invoice, InvoiceDraft]);
const Paged_InvoiceUnion_: z.ZodType<Paged_InvoiceUnion_> = z
    .object({
        items: z.array(InvoiceUnion),
        total: z.number().int(),
        offset: z.number().int(),
        limit: z.number().int(),
    })
    .passthrough();
const JournalEntryItemData_Output: z.ZodType<JournalEntryItemData_Output> = z
    .object({ account_id: z.string().regex(/^(acc)_[0-9a-f]{32}$/), debit: z.string(), credit: z.string() })
    .passthrough();
const JournalEntryWithDetails: z.ZodType<JournalEntryWithDetails> = z
    .object({
        journal_id: z.string().regex(/^(jrn)_[0-9a-f]{32}$/),
        property_id: z.union([z.string(), z.null()]).optional(),
        unit_id: z.union([z.string(), z.null()]).optional(),
        date: z.string(),
        description: z.union([z.string(), z.null()]).optional(),
        name: z.string().min(1),
        revenue_id: z.union([z.string(), z.null()]).optional(),
        is_canceled: z.boolean(),
        is_draft: z.boolean(),
        items: z.array(JournalEntryItemData_Output),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(jre)_[0-9a-f]{32}$/),
        invoice_id: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const Paged_JournalEntryWithDetails_: z.ZodType<Paged_JournalEntryWithDetails_> = z
    .object({
        items: z.array(JournalEntryWithDetails),
        total: z.number().int(),
        offset: z.number().int(),
        limit: z.number().int(),
    })
    .passthrough();
const AccountCategoryType = z.enum(["ASSETS", "LIABILITIES", "INCOME", "EXPENSES"]);
const AccountCategory: z.ZodType<AccountCategory> = z
    .object({
        name: z.string().min(1),
        chart_of_accounts_id: z.string().regex(/^(coa)_[0-9a-f]{32}$/),
        type: AccountCategoryType,
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(bsc)_[0-9a-f]{32}$/),
    })
    .passthrough();
const AccountCategoryPatchRequest: z.ZodType<AccountCategoryPatchRequest> = z
    .object({ name: z.union([z.string(), z.null()]), type: z.union([AccountCategoryType, z.null()]) })
    .partial()
    .passthrough();
const Account: z.ZodType<Account> = z
    .object({
        name: z.string().min(1),
        number: z.number().int(),
        account_category_id: z.string().regex(/^(bsc)_[0-9a-f]{32}$/),
        chart_of_accounts_id: z.string().regex(/^(coa)_[0-9a-f]{32}$/),
        percent_allocable: z.string(),
        report_tags: z.array(z.string().regex(/^(art)_[0-9a-f]{32}$/)),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(acc)_[0-9a-f]{32}$/),
    })
    .passthrough();
const AccountBalance = z.object({ credit: z.string(), debit: z.string(), balance: z.string() }).passthrough();
const BankAccountType = z.enum(["BAUSPAREN", "CHECKING", "CREDITCARD", "LOAN", "MEMBERSHIP", "SAVINGS", "SECURITY"]);
const BankAccountSourceInfoFinApi: z.ZodType<BankAccountSourceInfoFinApi> = z
    .object({
        source_type: z.literal("FINAPI").optional().default("FINAPI"),
        fin_api_id: z.number().int(),
        capabilities: z.array(z.string()),
    })
    .passthrough();
const BankAccountSourceInfoManual: z.ZodType<BankAccountSourceInfoManual> = z
    .object({ source_type: z.literal("MANUAL").default("MANUAL") })
    .partial()
    .passthrough();
const BankAccount: z.ZodType<BankAccount> = z
    .object({
        account_name: z.union([z.string(), z.null()]),
        iban: z.union([z.string(), z.null()]),
        account_holder_name: z.union([z.string(), z.null()]),
        account_type: BankAccountType,
        balance: z.union([z.string(), z.null()]),
        bank_connection_id: z.union([z.string(), z.null()]),
        source_info: z.union([BankAccountSourceInfoFinApi, BankAccountSourceInfoManual]),
        accounting_tenant_id: z.union([z.string(), z.null()]).optional(),
        account_id: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(baa)_[0-9a-f]{32}$/),
    })
    .passthrough();
const BankConnectionSourceInfoFinApi: z.ZodType<BankConnectionSourceInfoFinApi> = z
    .object({
        source_type: z.literal("FINAPI").optional().default("FINAPI"),
        categorization_status: z.union([z.string(), z.null()]).optional(),
        update_status: z.union([z.string(), z.null()]).optional(),
        fin_api_id: z.number().int(),
    })
    .passthrough();
const BankConnectionSourceInfoManual: z.ZodType<BankConnectionSourceInfoManual> = z
    .object({ source_type: z.literal("MANUAL").default("MANUAL") })
    .partial()
    .passthrough();
const BankConnection: z.ZodType<BankConnection> = z
    .object({
        name: z.union([z.string(), z.null()]).optional(),
        owner_names_full: z.array(z.string()),
        bank_name: z.string(),
        bank_city: z.union([z.string(), z.null()]).optional(),
        bank_icon_url: z.union([z.string(), z.null()]).optional(),
        bic: z.union([z.string(), z.null()]).optional(),
        blz: z.string(),
        last_sync_date: z.union([z.string(), z.null()]).optional(),
        source_info: z.union([BankConnectionSourceInfoFinApi, BankConnectionSourceInfoManual]),
        is_deleted_from_source: z.boolean().optional().default(false),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(bco)_[0-9a-f]{32}$/),
    })
    .passthrough();
const BankConnectionAddRequestFinApi = z.object({ type: z.literal("FINAPI") }).passthrough();
const BankConnectionAddRequestManual = z
    .object({
        type: z.literal("MANUAL"),
        name: z.string(),
        owner_names_full: z.array(z.string()),
        bank_name: z.string(),
        bank_city: z.union([z.string(), z.null()]).optional(),
        bank_icon_url: z.union([z.string(), z.null()]).optional(),
        bic: z.union([z.string(), z.null()]).optional(),
        blz: z.string(),
    })
    .passthrough();
const addBankConnection_Body = z.union([BankConnectionAddRequestFinApi, BankConnectionAddRequestManual]);
const BankAccountCreateManualRequest: z.ZodType<BankAccountCreateManualRequest> = z
    .object({
        account_name: z.string(),
        iban: z.union([z.string(), z.null()]).optional(),
        account_holder_name: z.union([z.string(), z.null()]).optional(),
        account_type: BankAccountType.optional(),
        balance: z.union([z.number(), z.string()]).optional().default("0"),
    })
    .passthrough();
const ChartOfAccounts = z
    .object({
        name: z.string(),
        default_liabilities_account_id: z.union([z.string(), z.null()]).optional(),
        default_receivables_account_id: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(coa)_[0-9a-f]{32}$/),
    })
    .passthrough();
const ChartOfAccountsCreateRequest = z
    .object({
        name: z.string(),
        default_liabilities_account_id: z.union([z.string(), z.null()]).optional(),
        default_receivables_account_id: z.union([z.string(), z.null()]).optional(),
    })
    .passthrough();
const ChartOfAccountsPatchRequest = z
    .object({
        name: z.union([z.string(), z.null()]),
        default_liabilities_account_id: z.union([z.string(), z.null()]),
        default_receivables_account_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const AccountCreateRequest = z
    .object({
        name: z.string().min(1),
        number: z.number().int(),
        account_category_id: z.string().regex(/^(bsc)_[0-9a-f]{32}$/),
        percent_allocable: z.union([z.number(), z.string()]),
        report_tags: z.array(z.string().regex(/^(art)_[0-9a-f]{32}$/)),
    })
    .passthrough();
const AccountingReportTagCreateRequest = z.object({ name: z.string().min(1) }).passthrough();
const AccountCategoryCreateRequest: z.ZodType<AccountCategoryCreateRequest> = z
    .object({ name: z.string().min(1), type: AccountCategoryType })
    .passthrough();
const Paged_Account_: z.ZodType<Paged_Account_> = z
    .object({ items: z.array(Account), total: z.number().int(), offset: z.number().int(), limit: z.number().int() })
    .passthrough();
const TaxRateCreateRequest = z
    .object({ name: z.string().min(1), rate: z.union([z.number(), z.string()]) })
    .passthrough();
const TaxRate = z
    .object({
        name: z.string(),
        rate: z.string(),
        chart_of_accounts_id: z.string().regex(/^(coa)_[0-9a-f]{32}$/),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(txr)_[0-9a-f]{32}$/),
    })
    .passthrough();
const AccountPatchRequest = z
    .object({
        name: z.union([z.string(), z.null()]),
        account_category_id: z.union([z.string(), z.null()]),
        percent_allocable: z.union([z.number(), z.string(), z.null()]),
        report_tags: z.union([z.array(z.string().regex(/^(art)_[0-9a-f]{32}$/)), z.null()]),
    })
    .partial()
    .passthrough();
const AllocationKeyPatchRequest: z.ZodType<AllocationKeyPatchRequest> = z
    .object({
        name: z.union([z.string(), z.null()]),
        type: z.union([AllocationKeyType, z.null()]),
        accounting_report_tag_id: z.union([z.string(), z.null()]),
        meter_type: z.union([MeterType, z.null()]),
        unit_allocations: z.union([z.array(AllocationKeyUnitRelation_Input), z.null()]),
    })
    .partial()
    .passthrough();
const PaymentType = z.enum(["INCOMING", "OUTGOING"]);
const Payment: z.ZodType<Payment> = z
    .object({
        liability_id: z.string().regex(/^(lbt)_[0-9a-f]{32}$/),
        payment_date: z.string(),
        revenue_id: z.union([z.string(), z.null()]).optional(),
        amount: z.string(),
        type: PaymentType,
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(pay)_[0-9a-f]{32}$/),
    })
    .passthrough();
const PaymentPatchRequest: z.ZodType<PaymentPatchRequest> = z
    .object({
        payment_date: z.union([z.string(), z.null()]),
        amount: z.union([z.number(), z.string(), z.null()]),
        type: z.union([PaymentType, z.null()]),
        revenue_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const RevenueSourceInfoFinApi: z.ZodType<RevenueSourceInfoFinApi> = z
    .object({ source_type: z.literal("FINAPI").optional().default("FINAPI"), fin_api_id: z.number().int() })
    .passthrough();
const RevenueSourceInfoManual: z.ZodType<RevenueSourceInfoManual> = z
    .object({ source_type: z.literal("MANUAL").default("MANUAL") })
    .partial()
    .passthrough();
const Revenue: z.ZodType<Revenue> = z
    .object({
        amount: z.string(),
        currency: z.union([z.string(), z.null()]).optional(),
        value_date: z.string(),
        bank_booking_date: z.union([z.string(), z.null()]).optional(),
        purpose: z.union([z.string(), z.null()]).optional(),
        counterpart_name: z.union([z.string(), z.null()]).optional(),
        counterpart_iban: z.union([z.string(), z.null()]).optional(),
        counterpart_bank_name: z.union([z.string(), z.null()]).optional(),
        bank_account_id: z.string().regex(/^(baa)_[0-9a-f]{32}$/),
        source_info: z.union([RevenueSourceInfoFinApi, RevenueSourceInfoManual]),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(rev)_[0-9a-f]{32}$/),
    })
    .passthrough();
const Paged_Revenue_: z.ZodType<Paged_Revenue_> = z
    .object({ items: z.array(Revenue), total: z.number().int(), offset: z.number().int(), limit: z.number().int() })
    .passthrough();
const RevenueImportRequestSingle = z
    .object({
        amount: z.union([z.number(), z.string()]),
        currency: z.union([z.string(), z.null()]).optional(),
        value_date: z.string(),
        bank_booking_date: z.union([z.string(), z.null()]).optional(),
        purpose: z.union([z.string(), z.null()]).optional(),
        counterpart_name: z.union([z.string(), z.null()]).optional(),
        counterpart_iban: z.union([z.string(), z.null()]).optional(),
        counterpart_bank_name: z.union([z.string(), z.null()]).optional(),
        bank_account_id: z.string().regex(/^(baa)_[0-9a-f]{32}$/),
    })
    .passthrough();
const importRevenues_Body = z.union([RevenueImportRequestSingle, z.array(RevenueImportRequestSingle)]);
const JournalPatchRequest = z
    .object({ name: z.union([z.string(), z.null()]), naming_template: z.union([z.string(), z.null()]) })
    .partial()
    .passthrough();
const JournalEntryItemData_Input: z.ZodType<JournalEntryItemData_Input> = z
    .object({
        account_id: z.string().regex(/^(acc)_[0-9a-f]{32}$/),
        debit: z.union([z.number(), z.string()]),
        credit: z.union([z.number(), z.string()]),
    })
    .passthrough();
const JournalEntryCreateRequest: z.ZodType<JournalEntryCreateRequest> = z
    .object({
        property_id: z.union([z.string(), z.null()]).optional(),
        unit_id: z.union([z.string(), z.null()]).optional(),
        date: z.string(),
        name: z.union([z.string(), z.null()]),
        description: z.union([z.string(), z.null()]).optional(),
        revenue_id: z.union([z.string(), z.null()]).optional(),
        is_canceled: z.boolean().optional().default(false),
        items: z.array(JournalEntryItemData_Input),
        is_draft: z.boolean().optional().default(false),
    })
    .passthrough();
const JournalEntry: z.ZodType<JournalEntry> = z
    .object({
        journal_id: z.string().regex(/^(jrn)_[0-9a-f]{32}$/),
        property_id: z.union([z.string(), z.null()]).optional(),
        unit_id: z.union([z.string(), z.null()]).optional(),
        date: z.string(),
        description: z.union([z.string(), z.null()]).optional(),
        name: z.string().min(1),
        revenue_id: z.union([z.string(), z.null()]).optional(),
        is_canceled: z.boolean(),
        is_draft: z.boolean(),
        items: z.array(JournalEntryItemData_Output),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(jre)_[0-9a-f]{32}$/),
    })
    .passthrough();
const IntervalType = z.enum(["DAILY", "WEEKLY", "MONTHLY", "YEARLY"]);
const RecurringJournalEntry: z.ZodType<RecurringJournalEntry> = z
    .object({
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        journal_id: z.string().regex(/^(jrn)_[0-9a-f]{32}$/),
        property_id: z.union([z.string(), z.null()]).optional(),
        unit_id: z.union([z.string(), z.null()]).optional(),
        name: z.string(),
        description: z.union([z.string(), z.null()]).optional(),
        start_date: z.string(),
        end_date: z.union([z.string(), z.null()]).optional(),
        interval_type: IntervalType,
        interval_value: z.number().int(),
        items: z.array(JournalEntryItemData_Output),
        id: z.string().regex(/^(rje)_[0-9a-f]{32}$/),
    })
    .passthrough();
const RecurringJournalEntryCreateRequest: z.ZodType<RecurringJournalEntryCreateRequest> = z
    .object({
        property_id: z.union([z.string(), z.null()]).optional(),
        unit_id: z.union([z.string(), z.null()]).optional(),
        name: z.string().min(1),
        description: z.union([z.string(), z.null()]).optional(),
        start_date: z.string(),
        end_date: z.union([z.string(), z.null()]).optional(),
        interval_type: IntervalType,
        interval_value: z.number().int(),
        items: z.array(JournalEntryItemData_Input),
    })
    .passthrough();
const LiabilityPatchRequest: z.ZodType<LiabilityPatchRequest> = z
    .object({
        amount: z.union([z.number(), z.string(), z.null()]),
        due_date: z.union([z.string(), z.null()]),
        description: z.union([z.string(), z.null()]),
        journal_entry_id: z.union([z.string(), z.null()]),
        type: z.union([LiabilityType, z.null()]),
    })
    .partial()
    .passthrough();
const PaymentCreateRequest: z.ZodType<PaymentCreateRequest> = z
    .object({
        payment_date: z.string(),
        revenue_id: z.union([z.string(), z.null()]).optional(),
        amount: z.union([z.number(), z.string()]),
        type: PaymentType,
    })
    .passthrough();
const JournalEntryPatchRequest: z.ZodType<JournalEntryPatchRequest> = z
    .object({
        property_id: z.union([z.string(), z.null()]),
        unit_id: z.union([z.string(), z.null()]),
        date: z.union([z.string(), z.null()]),
        name: z.union([z.string(), z.null()]),
        description: z.union([z.string(), z.null()]),
        revenue_id: z.union([z.string(), z.null()]),
        is_canceled: z.union([z.boolean(), z.null()]),
        items: z.union([z.array(JournalEntryItemData_Input), z.null()]),
        is_draft: z.union([z.boolean(), z.null()]),
    })
    .partial()
    .passthrough();
const InvoicePatchRequest: z.ZodType<InvoicePatchRequest> = z
    .object({
        invoice_date: z.union([z.string(), z.null()]),
        date_of_service: z.union([z.string(), z.null()]),
        due_date: z.union([z.string(), z.null()]),
        description: z.union([z.string(), z.null()]),
        file_id: z.union([z.string(), z.null()]),
        unit_id: z.union([z.string(), z.null()]),
        property_id: z.union([z.string(), z.null()]),
        is_draft: z.union([z.boolean(), z.null()]),
        items: z.union([z.array(InvoiceItemData_Input), z.null()]),
        supplier_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const TaxGridEntryBasedOn = z.enum(["TOTAL", "TAX"]);
const TaxGridEntry: z.ZodType<TaxGridEntry> = z
    .object({
        tax_rate_id: z.string().regex(/^(txr)_[0-9a-f]{32}$/),
        share: z.string(),
        based_on: TaxGridEntryBasedOn,
        account_id: z.string().regex(/^(acc)_[0-9a-f]{32}$/),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(tge)_[0-9a-f]{32}$/),
    })
    .passthrough();
const TaxGridEntryPatchRequest: z.ZodType<TaxGridEntryPatchRequest> = z
    .object({
        share: z.union([z.number(), z.null()]),
        based_on: z.union([TaxGridEntryBasedOn, z.null()]),
        account_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const TaxRatePatchRequest = z
    .object({ name: z.union([z.string(), z.null()]), rate: z.union([z.number(), z.string(), z.null()]) })
    .partial()
    .passthrough();
const TaxGridEntryCreateRequest: z.ZodType<TaxGridEntryCreateRequest> = z
    .object({
        share: z.union([z.number(), z.string()]),
        based_on: TaxGridEntryBasedOn,
        account_id: z.string().regex(/^(acc)_[0-9a-f]{32}$/),
    })
    .passthrough();
const RecurringLiabilityPatchRequest = z
    .object({ description: z.union([z.string(), z.null()]), end_date: z.union([z.string(), z.null()]) })
    .partial()
    .passthrough();
const RecurringLiabilityChangedDateCreateRequest = z
    .object({ date: z.string(), replacement_liability_id: z.union([z.string(), z.null()]).optional() })
    .passthrough();
const RecurringLiabilityChangedDate = z
    .object({
        recurring_liability_id: z.string().regex(/^(rcl)_[0-9a-f]{32}$/),
        date: z.string(),
        replacement_liability_id: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(rld)_[0-9a-f]{32}$/),
    })
    .passthrough();
const RecurringLiabilityChangedDatePatchRequest = z
    .object({ date: z.union([z.string(), z.null()]), replacement_liability_id: z.union([z.string(), z.null()]) })
    .partial()
    .passthrough();
const HomeOwnerAssociationFeePatchRequest = z
    .object({
        from_date: z.union([z.string(), z.null()]),
        to_date: z.union([z.string(), z.null()]),
        amount: z.union([z.number(), z.null()]),
    })
    .partial()
    .passthrough();
const RecurringJournalEntryPatchRequest = z
    .object({ description: z.union([z.string(), z.null()]), end_date: z.union([z.string(), z.null()]) })
    .partial()
    .passthrough();
const RecurringJournalEntryChangedDateCreateRequest = z
    .object({ date: z.string(), replacement_journal_entry_id: z.union([z.string(), z.null()]).optional() })
    .passthrough();
const RecurringJournalEntryChangedDate = z
    .object({
        recurring_journal_entry_id: z.string().regex(/^(rje)_[0-9a-f]{32}$/),
        date: z.string(),
        replacement_journal_entry_id: z.union([z.string(), z.null()]).optional(),
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(rjd)_[0-9a-f]{32}$/),
    })
    .passthrough();
const RecurringJournalEntryChangedDatePatchRequest = z
    .object({ date: z.union([z.string(), z.null()]), replacement_journal_entry_id: z.union([z.string(), z.null()]) })
    .partial()
    .passthrough();
const AccountingReportTagTemplate = z
    .object({
        name: z.string().min(1),
        chart_of_accounts_template_id: z.string().regex(/^(cat)_[0-9a-f]{32}$/),
        template_type: z.enum(["DEFAULT", "CUSTOM"]),
        tenant_id: z.union([z.string(), z.null()]).optional(),
        id: z.string().regex(/^(rtt)_[0-9a-f]{32}$/),
    })
    .passthrough();
const AccountingReportTagTemplatePatchRequest = z
    .object({ name: z.union([z.string(), z.null()]) })
    .partial()
    .passthrough();
const AllocationKeyTemplateType = z.enum([
    "CUSTOM_VALUE",
    "CONDOMINIUM_OWNERSHIP_SHARES",
    "LIVING_SPACE",
    "NUMBER_OF_PERSONS",
    "PER_UNIT",
    "METER_READING",
]);
const MeterTypeTemplate = z.enum(["WATER", "HEATING", "ELECTRICITY", "GAS", "OTHER"]);
const AllocationKeyTemplateCreateRequest: z.ZodType<AllocationKeyTemplateCreateRequest> = z
    .object({
        name: z.string(),
        type: AllocationKeyTemplateType,
        meter_type: z.union([MeterTypeTemplate, z.null()]).optional(),
    })
    .passthrough();
const AllocationKeyTemplate: z.ZodType<AllocationKeyTemplate> = z
    .object({
        name: z.string(),
        type: AllocationKeyTemplateType,
        accounting_report_tag_template_id: z.string().regex(/^(rtt)_[0-9a-f]{32}$/),
        meter_type: z.union([MeterTypeTemplate, z.null()]),
        template_type: z.enum(["DEFAULT", "CUSTOM"]),
        tenant_id: z.union([z.string(), z.null()]).optional(),
        id: z.string().regex(/^(akt)_[0-9a-f]{32}$/),
    })
    .passthrough();
const AccountingTenantTemplate = z
    .object({
        name: z.string().min(1),
        is_tax_exempt: z.boolean(),
        is_vat_exempt: z.boolean(),
        is_vat_actual_taxation: z.boolean(),
        chart_of_accounts_template_id: z.string().regex(/^(cat)_[0-9a-f]{32}$/),
        fiscal_year_start: z.union([z.string(), z.null()]).optional(),
        default_invoice_journal_template_id: z.union([z.string(), z.null()]).optional(),
        template_type: z.enum(["DEFAULT", "CUSTOM"]),
        tenant_id: z.union([z.string(), z.null()]).optional(),
        id: z.string().regex(/^(att)_[0-9a-f]{32}$/),
    })
    .passthrough();
const AccountingTenantTemplateCreateRequest = z
    .object({
        name: z.string().min(1),
        is_tax_exempt: z.boolean(),
        is_vat_exempt: z.boolean(),
        is_vat_actual_taxation: z.boolean(),
    })
    .passthrough();
const AccountingTenantTemplatePatchRequest = z
    .object({
        name: z.union([z.string(), z.null()]),
        is_tax_exempt: z.union([z.boolean(), z.null()]),
        is_vat_exempt: z.union([z.boolean(), z.null()]),
        is_vat_actual_taxation: z.union([z.boolean(), z.null()]),
        chart_of_accounts_template_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const JournalTemplate = z
    .object({
        name: z.string().min(1),
        naming_template: z.string(),
        accounting_tenant_template_id: z.string().regex(/^(att)_[0-9a-f]{32}$/),
        template_type: z.enum(["DEFAULT", "CUSTOM"]),
        tenant_id: z.union([z.string(), z.null()]).optional(),
        id: z.string().regex(/^(jtp)_[0-9a-f]{32}$/),
    })
    .passthrough();
const JournalTemplateCreateRequest = z
    .object({
        name: z.string().min(1),
        naming_template: z.string().optional().default("Buchung {year}-{month}-{day} {counter}"),
    })
    .passthrough();
const AccountCategoryTypeTemplate = z.enum(["ASSETS", "LIABILITIES", "INCOME", "EXPENSES"]);
const AccountCategoryTemplate: z.ZodType<AccountCategoryTemplate> = z
    .object({
        name: z.string().min(1),
        chart_of_accounts_template_id: z.string().regex(/^(cat)_[0-9a-f]{32}$/),
        type: AccountCategoryTypeTemplate,
        template_type: z.enum(["DEFAULT", "CUSTOM"]),
        tenant_id: z.union([z.string(), z.null()]).optional(),
        id: z.string().regex(/^(cta)_[0-9a-f]{32}$/),
    })
    .passthrough();
const AccountCategoryTemplatePatchRequest: z.ZodType<AccountCategoryTemplatePatchRequest> = z
    .object({ name: z.union([z.string(), z.null()]), type: z.union([AccountCategoryTypeTemplate, z.null()]) })
    .partial()
    .passthrough();
const AccountTemplate: z.ZodType<AccountTemplate> = z
    .object({
        name: z.string().min(1),
        number: z.number().int(),
        account_category_template_id: z.string().regex(/^(cta)_[0-9a-f]{32}$/),
        chart_of_accounts_template_id: z.string().regex(/^(cat)_[0-9a-f]{32}$/),
        percent_allocable: z.string(),
        report_tags: z.array(z.string().regex(/^(rtt)_[0-9a-f]{32}$/)),
        template_type: z.enum(["DEFAULT", "CUSTOM"]),
        tenant_id: z.union([z.string(), z.null()]).optional(),
        id: z.string().regex(/^(atp)_[0-9a-f]{32}$/),
    })
    .passthrough();
const AccountTemplatePatchRequest = z
    .object({
        name: z.union([z.string(), z.null()]),
        number: z.union([z.number(), z.null()]),
        account_category_template_id: z.union([z.string(), z.null()]),
        percent_allocable: z.union([z.number(), z.string(), z.null()]),
        report_tags: z.union([z.array(z.string().regex(/^(rtt)_[0-9a-f]{32}$/)), z.null()]),
    })
    .partial()
    .passthrough();
const AllocationKeyTemplatePatchRequest: z.ZodType<AllocationKeyTemplatePatchRequest> = z
    .object({
        name: z.union([z.string(), z.null()]),
        type: z.union([AllocationKeyTemplateType, z.null()]),
        accounting_report_tag_template_id: z.union([z.string(), z.null()]),
        meter_type: z.union([MeterTypeTemplate, z.null()]),
    })
    .partial()
    .passthrough();
const ChartOfAccountsTemplate = z
    .object({
        name: z.string(),
        default_liabilities_account_template_id: z.union([z.string(), z.null()]).optional(),
        default_receivables_account_template_id: z.union([z.string(), z.null()]).optional(),
        template_type: z.enum(["DEFAULT", "CUSTOM"]),
        tenant_id: z.union([z.string(), z.null()]).optional(),
        id: z.string().regex(/^(cat)_[0-9a-f]{32}$/),
    })
    .passthrough();
const ChartOfAccountsTemplatePatchRequest = z
    .object({
        name: z.union([z.string(), z.null()]),
        default_liabilities_account_template_id: z.union([z.string(), z.null()]),
        default_receivables_account_template_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const AccountTemplateCreateRequest = z
    .object({
        name: z.string().min(1),
        number: z.number().int(),
        account_category_template_id: z.string().regex(/^(cta)_[0-9a-f]{32}$/),
        percent_allocable: z.union([z.number(), z.string()]),
        report_tags: z.array(z.string().regex(/^(rtt)_[0-9a-f]{32}$/)),
    })
    .passthrough();
const AccountingReportTagTemplateCreateRequest = z.object({ name: z.string().min(1) }).passthrough();
const AccountCategoryTemplateCreateRequest: z.ZodType<AccountCategoryTemplateCreateRequest> = z
    .object({ name: z.string().min(1), type: AccountCategoryTypeTemplate })
    .passthrough();
const Paged_AccountTemplate_: z.ZodType<Paged_AccountTemplate_> = z
    .object({
        items: z.array(AccountTemplate),
        total: z.number().int(),
        offset: z.number().int(),
        limit: z.number().int(),
    })
    .passthrough();
const TaxRateTemplateCreateRequest = z
    .object({ name: z.string().min(1), rate: z.union([z.number(), z.string()]) })
    .passthrough();
const TaxRateTemplate = z
    .object({
        name: z.string().min(1),
        rate: z.string(),
        chart_of_accounts_template_id: z.string().regex(/^(cat)_[0-9a-f]{32}$/),
        template_type: z.enum(["DEFAULT", "CUSTOM"]),
        tenant_id: z.union([z.string(), z.null()]).optional(),
        id: z.string().regex(/^(trt)_[0-9a-f]{32}$/),
    })
    .passthrough();
const JournalTemplatePatchRequest = z
    .object({ name: z.union([z.string(), z.null()]), naming_template: z.union([z.string(), z.null()]) })
    .partial()
    .passthrough();
const TaxGridEntryTemplateBasedOn = z.enum(["TOTAL", "TAX"]);
const TaxGridEntryTemplate: z.ZodType<TaxGridEntryTemplate> = z
    .object({
        tax_rate_template_id: z.string().regex(/^(trt)_[0-9a-f]{32}$/),
        share: z.string(),
        based_on: TaxGridEntryTemplateBasedOn,
        account_template_id: z.string().regex(/^(atp)_[0-9a-f]{32}$/),
        template_type: z.enum(["DEFAULT", "CUSTOM"]),
        tenant_id: z.union([z.string(), z.null()]).optional(),
        id: z.string().regex(/^(tgt)_[0-9a-f]{32}$/),
    })
    .passthrough();
const TaxGridEntryTemplatePatchRequest: z.ZodType<TaxGridEntryTemplatePatchRequest> = z
    .object({
        share: z.union([z.number(), z.null()]),
        based_on: z.union([TaxGridEntryTemplateBasedOn, z.null()]),
        account_template_id: z.union([z.string(), z.null()]),
    })
    .partial()
    .passthrough();
const TaxRateTemplatePatchRequest = z
    .object({ name: z.union([z.string(), z.null()]), rate: z.union([z.number(), z.string(), z.null()]) })
    .partial()
    .passthrough();
const TaxGridEntryTemplateCreateRequest: z.ZodType<TaxGridEntryTemplateCreateRequest> = z
    .object({
        share: z.union([z.number(), z.string()]),
        based_on: TaxGridEntryTemplateBasedOn,
        account_template_id: z.string().regex(/^(atp)_[0-9a-f]{32}$/),
    })
    .passthrough();
const PasswordStr = z.string();
const AuthRequest: z.ZodType<AuthRequest> = z
    .object({
        email: z.string().email(),
        password: PasswordStr.min(8)
            .max(50)
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$/),
    })
    .passthrough();
const Token = z.object({ access_token: z.string(), token_type: z.string() }).passthrough();
const ContactAddressType = z.enum(["RESIDENTIAL_ADDRESS", "BUSINESS_ADDRESS", "POSTAL_ADDRESS"]);
const LiabilityWithDetails: z.ZodType<LiabilityWithDetails> = z
    .object({
        accounting_tenant_id: z.string().regex(/^(act)_[0-9a-f]{32}$/),
        property_id: z.union([z.string(), z.null()]).optional(),
        amount: z.string(),
        due_date: z.string(),
        description: z.union([z.string(), z.null()]).optional(),
        journal_entry_id: z.union([z.string(), z.null()]).optional(),
        type: LiabilityType,
        tenant_id: z
            .string()
            .regex(/^(tnt)_[0-9a-f]{32}$/)
            .optional(),
        id: z.string().regex(/^(lbt)_[0-9a-f]{32}$/),
        invoice_id: z.union([z.string(), z.null()]),
        payments: z.array(Payment),
        is_paid: z.boolean(),
    })
    .passthrough();
const Paged_LiabilityWithDetails_: z.ZodType<Paged_LiabilityWithDetails_> = z
    .object({
        items: z.array(LiabilityWithDetails),
        total: z.number().int(),
        offset: z.number().int(),
        limit: z.number().int(),
    })
    .passthrough();
const ProcessEventVisibilityType = z.enum([
    "INDIVIDUAL",
    "PROPERTY_OWNERS",
    "UNIT_OWNERS",
    "UNIT_TENANTS",
    "PROPERTY_TENANTS",
]);

export const schemas = {
    CommittedPaymentStatus,
    CommittedPaymentSourceInfoFinApi,
    CommittedPaymentSourceInfoManual,
    CommittedPayment,
    Paged_CommittedPayment_,
    ErrorWithDetail,
    ValidationError,
    HTTPValidationError,
    CondominiumOwnershipRelatedUnitType,
    CondominiumOwnershipRelatedUnit,
    CondominiumOwnership,
    CondominiumOwnershipPatchRequest,
    CondominiumOwnershipOwner,
    CondominiumOwnershipOwnerCreateRequest,
    HomeOwnerAssociationFeeCreateRequest,
    HomeOwnerAssociationFee,
    CondominiumOwnershipOwnerPatchRequest,
    ContactContract,
    ContactContractPatchRequest,
    AddressData_Output,
    ContactOptionType,
    ContactOptionData,
    Gender,
    ContactIndividualData,
    LegalEntityType,
    ContactLegalEntityData,
    Contact,
    Paged_Contact_,
    AddressData_Input,
    ContactCreateRequest,
    AddressDataPartial,
    ContactIndividualDataPartial,
    ContactLegalEntityDataPartial,
    ContactPatchRequest,
    UsageTenant,
    PropertyOwner,
    ContactContractCreateRequest,
    ServiceProviderCreateRequest,
    ServiceProvider,
    MailOutgoingStatus,
    MailOutgoing,
    MailIncoming,
    MailUnion,
    Paged_MailUnion_,
    EconomicPlan,
    EmailAccount,
    EmailAccountCreateRequest,
    EmailAccountPatchRequest,
    EmailAddressWithName,
    EmailContentType,
    EmailSendRequest,
    EmailFlags,
    EmailSeverity,
    Email,
    EmailFolder,
    FileType,
    TextExtractionStatus,
    File,
    FilePatchRequest,
    FileUploadRequest,
    InternalTenant,
    InternalTenantPatchRequest,
    InternalTenantCreateRequest,
    ClusterCreateRequest,
    Cluster,
    PropertyManagingType,
    HeaterType,
    PropertyCreateRequest,
    Property,
    MeterType,
    UnitOfMeasurement,
    Meter,
    MeterPatchRequest,
    MeterReadingCreateRequest,
    MeterReading,
    MeterReadingPatchRequest,
    MailCreateIncoming,
    MailCreateOutgoing,
    createMail_Body,
    MailPatchIncoming,
    MailPatchOutgoing,
    patchMail_Body,
    ProcessEventVisibilityData,
    ProcessCreatedByType,
    UserIdUnion,
    ProcessEventTask,
    ProcessEventMail,
    ProcessEventCall,
    ProcessEventEmail,
    ProcessEventProcessTask,
    ProcessEventNote,
    ProcessStatus,
    ProcessEventStatusChange,
    ProcessEventUnion,
    ProcessEventTaskEventPatchRequest,
    ProcessEventMailEventPatchRequest,
    ProcessEventCallEventPatchRequest,
    ProcessEventEmailEventPatchRequest,
    ProcessEventProcessTaskEventPatchRequest,
    ProcessEventNoteEventPatchRequest,
    patchProcessEvent_Body,
    ProcessTaskCreatedByType,
    ProcessTaskSimpleTodo,
    ProcessTaskConfirm,
    ProcessTaskForm,
    ProcessTaskUnion,
    ProcessTaskPatchSimpleTodo,
    ProcessTaskPatchConfirm,
    ProcessTaskPatchForm,
    patchProcessTask_Body,
    parent_id,
    ProcessParentType,
    ProcessPriority,
    Process,
    ProcessCreateRequest,
    ProcessPatchRequest,
    ProcessEventTaskEventCreateRequest,
    ProcessEventMailEventCreateRequest,
    ProcessEventCallEventCreateRequest,
    ProcessEventEmailEventCreateRequest,
    ProcessEventProcessTaskEventCreateRequest,
    ProcessEventNoteEventCreateRequest,
    createProcessEvent_Body,
    ProcessTaskCreateSimpleTodo,
    ProcessTaskCreateConfirm,
    ProcessTaskCreateForm,
    createProcessTask_Body,
    Paged_Property_,
    PropertyPatchRequest,
    CondominiumOwnershipCreateRequest,
    PropertyOwnerCreateRequest,
    PropertyServiceProvider,
    PropertyServiceProviderCreateRequest,
    PropertySharedUnitType,
    PropertySharedUnit,
    PropertySharedUnitCreateRequest,
    AccountingTenantCreateRequest,
    AccountingTenant,
    AllocationKeyType,
    AllocationKeyUnitRelation_Input,
    AllocationKeyCreateRequest,
    AllocationKeyUnitRelation_Output,
    AllocationKey,
    UnitType,
    HeatingType,
    UnitCreateRequest,
    Unit,
    HomeOwnerAssociationResolutionCreateRequest,
    HomeOwnerAssociationResolution,
    MeterCreateRequest,
    PropertyContractType,
    PropertyContractCreateRequest,
    PropertyContract,
    SubAssociationCreateRequest,
    SubAssociation,
    PropertySharedUnitPatchRequest,
    PropertyOwnerPatchRequest,
    PropertyServiceProviderPatchRequest,
    type,
    SearchEngineResult,
    LinkedObjectType,
    linked_object_type,
    TaskStatus,
    status,
    TaskPriority,
    priority,
    Task,
    TaskCreateRequest,
    TaskPatchRequest,
    TaskCommentLinkedObjectType,
    TaskComment,
    TaskCommentCreateRequest,
    TaskCommentPatchRequest,
    UnitPatchRequest,
    UsageType,
    DepositType,
    RentPaymentInterval,
    RentIncreaseType,
    Usage,
    UsageCreateRequest,
    UsagePatchRequest,
    UsageTenantCreateRequest,
    UsageRentCreateRequest,
    UsageRent,
    UsageRentPatchRequest,
    UserStoreAtom,
    UserStore,
    updateMyStore_Body,
    is_committed,
    WaitingTransaction,
    Paged_WaitingTransaction_,
    WaitingTransactionCreateRequest,
    waiting_transaction_ids,
    FinApiWebFormType,
    FinApiWebform,
    Workflow,
    WorkflowCreateRequest,
    WorkflowPatchRequest,
    WorkflowNodeTriggerProcessCreated,
    WorkflowNodeTriggerProcessEventCreated,
    WorkflowNodeManualConfirm,
    WorkflowNodeManualForm,
    WorkflowNodeAutoCreateProcessEventManualNote,
    WorkflowNodeAutoAiBooleanEvaluator,
    WorkflowNodeAutoIf,
    WorkflowNodeStaticString,
    WorkflowNodeStaticInt,
    WorkflowNodeStaticBool,
    WorkflowNodeUnion,
    WorkflowEdge,
    WorkflowVersionCreateRequest,
    WorkflowVersion,
    WorkflowVersionPatchRequest,
    ClusterPatchRequest,
    Service,
    ServiceCreateRequest,
    ServicePatchRequest,
    ServiceProviderPatchRequest,
    ServiceProviderService,
    ServiceProviderServiceCreateRequest,
    ServiceProviderServicePatchRequest,
    HomeOwnerAssociationResolutionPatchRequest,
    PropertyContractPatchRequest,
    SubAssociationPatchRequest,
    DocumentTemplate,
    DocumentTemplateCreateRequest,
    DocumentTemplatePatchRequest,
    DocumentTemplateFillRequest,
    CallDirection,
    PastCall,
    Paged_PastCall_,
    PastCallCreateRequest,
    PastCallPatchRequest,
    AccountingReportTag,
    AccountingReportTagPatchRequest,
    AccountingReport,
    AccountingReportPatchRequest,
    AccountingTenantPatchRequest,
    AccountingReportCreateRequest,
    LiabilityType,
    LiabilityCreateRequest,
    Liability,
    Paged_Liability_,
    RecurringLiabilityIntervalType,
    RecurringLiabilityCreateRequest,
    RecurringLiability,
    EconomicPlanCreateRequest,
    Journal,
    JournalCreateRequest,
    InvoiceItemCreateRequest,
    InvoiceNoteData,
    InvoiceNormalCreateRequest,
    InvoiceItemData_Input,
    InvoiceDraftCreateRequest,
    createInvoice_Body,
    InvoiceItemData_Output,
    Invoice,
    InvoiceDraft,
    InvoiceUnion,
    Paged_InvoiceUnion_,
    JournalEntryItemData_Output,
    JournalEntryWithDetails,
    Paged_JournalEntryWithDetails_,
    AccountCategoryType,
    AccountCategory,
    AccountCategoryPatchRequest,
    Account,
    AccountBalance,
    BankAccountType,
    BankAccountSourceInfoFinApi,
    BankAccountSourceInfoManual,
    BankAccount,
    BankConnectionSourceInfoFinApi,
    BankConnectionSourceInfoManual,
    BankConnection,
    BankConnectionAddRequestFinApi,
    BankConnectionAddRequestManual,
    addBankConnection_Body,
    BankAccountCreateManualRequest,
    ChartOfAccounts,
    ChartOfAccountsCreateRequest,
    ChartOfAccountsPatchRequest,
    AccountCreateRequest,
    AccountingReportTagCreateRequest,
    AccountCategoryCreateRequest,
    Paged_Account_,
    TaxRateCreateRequest,
    TaxRate,
    AccountPatchRequest,
    AllocationKeyPatchRequest,
    PaymentType,
    Payment,
    PaymentPatchRequest,
    RevenueSourceInfoFinApi,
    RevenueSourceInfoManual,
    Revenue,
    Paged_Revenue_,
    RevenueImportRequestSingle,
    importRevenues_Body,
    JournalPatchRequest,
    JournalEntryItemData_Input,
    JournalEntryCreateRequest,
    JournalEntry,
    IntervalType,
    RecurringJournalEntry,
    RecurringJournalEntryCreateRequest,
    LiabilityPatchRequest,
    PaymentCreateRequest,
    JournalEntryPatchRequest,
    InvoicePatchRequest,
    TaxGridEntryBasedOn,
    TaxGridEntry,
    TaxGridEntryPatchRequest,
    TaxRatePatchRequest,
    TaxGridEntryCreateRequest,
    RecurringLiabilityPatchRequest,
    RecurringLiabilityChangedDateCreateRequest,
    RecurringLiabilityChangedDate,
    RecurringLiabilityChangedDatePatchRequest,
    HomeOwnerAssociationFeePatchRequest,
    RecurringJournalEntryPatchRequest,
    RecurringJournalEntryChangedDateCreateRequest,
    RecurringJournalEntryChangedDate,
    RecurringJournalEntryChangedDatePatchRequest,
    AccountingReportTagTemplate,
    AccountingReportTagTemplatePatchRequest,
    AllocationKeyTemplateType,
    MeterTypeTemplate,
    AllocationKeyTemplateCreateRequest,
    AllocationKeyTemplate,
    AccountingTenantTemplate,
    AccountingTenantTemplateCreateRequest,
    AccountingTenantTemplatePatchRequest,
    JournalTemplate,
    JournalTemplateCreateRequest,
    AccountCategoryTypeTemplate,
    AccountCategoryTemplate,
    AccountCategoryTemplatePatchRequest,
    AccountTemplate,
    AccountTemplatePatchRequest,
    AllocationKeyTemplatePatchRequest,
    ChartOfAccountsTemplate,
    ChartOfAccountsTemplatePatchRequest,
    AccountTemplateCreateRequest,
    AccountingReportTagTemplateCreateRequest,
    AccountCategoryTemplateCreateRequest,
    Paged_AccountTemplate_,
    TaxRateTemplateCreateRequest,
    TaxRateTemplate,
    JournalTemplatePatchRequest,
    TaxGridEntryTemplateBasedOn,
    TaxGridEntryTemplate,
    TaxGridEntryTemplatePatchRequest,
    TaxRateTemplatePatchRequest,
    TaxGridEntryTemplateCreateRequest,
    PasswordStr,
    AuthRequest,
    Token,
    ContactAddressType,
    LiabilityWithDetails,
    Paged_LiabilityWithDetails_,
    ProcessEventVisibilityType,
};

const endpoints = makeApi([
    {
        method: "get",
        path: "/accounting/account-categories/:id",
        alias: "getAccountCategory",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountCategory,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Category not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/account-categories/:id",
        alias: "patchAccountCategory",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AccountCategoryPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountCategory,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Category not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/account-categories/:id",
        alias: "deleteAccountCategory",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Category not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/account-categories/:id/accounts",
        alias: "getAccountsByCategory",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(Account),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Category not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/account-categories/:id/balance",
        alias: "getAccountCategoryBalance",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
            {
                name: "as_of_date",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "property_id",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "unit_id",
                type: "Query",
                schema: parent_id,
            },
        ],
        response: AccountBalance,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Category not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/accounts/:id",
        alias: "getAccount",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Account,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Account not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/accounts/:id",
        alias: "patchAccount",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AccountPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Account,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Account not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/accounts/:id",
        alias: "deleteAccount",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Account not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/accounts/:id/balance",
        alias: "getAccountBalance",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
            {
                name: "as_of_date",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "property_id",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "unit_id",
                type: "Query",
                schema: parent_id,
            },
        ],
        response: AccountBalance,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Account not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/allocation-keys/:id",
        alias: "getAllocationKey",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AllocationKey,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/allocation-keys/:id",
        alias: "patchAllocationKey",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AllocationKeyPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AllocationKey,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/allocation-keys/:id",
        alias: "deleteAllocationKey",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/bank-accounts/",
        alias: "listBankAccounts",
        requestFormat: "json",
        response: z.array(BankAccount),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/bank-connections/",
        alias: "listBankConnections",
        requestFormat: "json",
        response: z.array(BankConnection),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/bank-connections/",
        alias: "addBankConnection",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: addBankConnection_Body,
            },
        ],
        response: z.union([FinApiWebform, BankConnection, FinApiWebform, BankConnection]),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/bank-connections/:id",
        alias: "getBankConnection",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: BankConnection,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Bank connection not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/bank-connections/:id",
        alias: "removeBankConnection",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: BankConnection,
        errors: [
            {
                status: 400,
                description: `Bank connection is not a FinAPI connection`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Bank connection not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Failed to communicate with FinAPI`,
                schema: z.void(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/bank-connections/:id/bank-accounts",
        alias: "listBankConnectionAccounts",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(BankAccount),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Bank connection not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/bank-connections/:id/bank-accounts",
        alias: "createBankAccount",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: BankAccountCreateManualRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: BankAccount,
        errors: [
            {
                status: 400,
                description: `Invalid IBAN provided or bank connection is not manual`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Bank connection not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/chart-of-accounts",
        alias: "listChartsOfAccounts",
        requestFormat: "json",
        response: z.array(ChartOfAccounts),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/chart-of-accounts",
        alias: "createChartOfAccounts",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: ChartOfAccountsCreateRequest,
            },
        ],
        response: ChartOfAccounts,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/chart-of-accounts/:chart_of_accounts_id/account-categories",
        alias: "createAccountCategory",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AccountCategoryCreateRequest,
            },
            {
                name: "chart_of_accounts_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountCategory,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/chart-of-accounts/:chart_of_accounts_id/account-categories",
        alias: "listChartOfAccountsAccountCategories",
        requestFormat: "json",
        parameters: [
            {
                name: "chart_of_accounts_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
            {
                name: "offset",
                type: "Query",
                schema: z.number().int().gte(0).optional().default(0),
            },
            {
                name: "limit",
                type: "Query",
                schema: z.number().int().gte(1).lte(100).optional().default(20),
            },
        ],
        response: Paged_Account_,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Chart of accounts not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/chart-of-accounts/:chart_of_accounts_id/accounting-report-tags",
        alias: "createAccountingReportTag",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: z.object({ name: z.string().min(1) }).passthrough(),
            },
            {
                name: "chart_of_accounts_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Account,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/chart-of-accounts/:chart_of_accounts_id/accounting-report-tags",
        alias: "listChartOfAccountsAccountingReportTags",
        requestFormat: "json",
        parameters: [
            {
                name: "chart_of_accounts_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(AccountingReportTag),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Chart of accounts not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/chart-of-accounts/:chart_of_accounts_id/accounts",
        alias: "createAccount",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AccountCreateRequest,
            },
            {
                name: "chart_of_accounts_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Account,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Chart of accounts not found or balance sheet category not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/chart-of-accounts/:chart_of_accounts_id/accounts",
        alias: "listChartOfAccountsAccounts",
        requestFormat: "json",
        parameters: [
            {
                name: "chart_of_accounts_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
            {
                name: "offset",
                type: "Query",
                schema: z.number().int().gte(0).optional().default(0),
            },
            {
                name: "limit",
                type: "Query",
                schema: z.number().int().gte(1).lte(100).optional().default(20),
            },
        ],
        response: z.array(Account),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Chart of accounts not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/chart-of-accounts/:chart_of_accounts_id/tax-rates",
        alias: "createTaxRate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: TaxRateCreateRequest,
            },
            {
                name: "chart_of_accounts_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: TaxRate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/chart-of-accounts/:chart_of_accounts_id/tax-rates",
        alias: "listChartOfAccountsTaxRates",
        requestFormat: "json",
        parameters: [
            {
                name: "chart_of_accounts_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(TaxRate),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Chart of accounts not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/chart-of-accounts/:id",
        alias: "getChartOfAccounts",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ChartOfAccounts,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Chart of accounts not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/chart-of-accounts/:id",
        alias: "patchChartOfAccounts",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: ChartOfAccountsPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ChartOfAccounts,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Chart of accounts not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/chart-of-accounts/:id",
        alias: "deleteChartOfAccounts",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Chart of accounts not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/home-owner-association-fees/:id",
        alias: "patchHomeOwnerAssociationFee",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: HomeOwnerAssociationFeePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: HomeOwnerAssociationFee,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Home owner association fee not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/home-owner-association-fees/:id",
        alias: "deleteHomeOwnerAssociationFee",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Home owner association fee not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/home-owner-association-fees/:id",
        alias: "getHomeOwnerAssociationFeeById",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: HomeOwnerAssociationFee,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Home owner association fee not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/invoices/:id",
        alias: "getInvoice",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: InvoiceUnion,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Invoice not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/invoices/:id",
        alias: "patchInvoice",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: InvoicePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: InvoiceUnion,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Invoice not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/invoices/:id",
        alias: "deleteInvoice",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Invoice not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/journal-entries/:id",
        alias: "getJournalEntry",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: JournalEntryWithDetails,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Journal entry not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/journal-entries/:id",
        alias: "patchJournalEntry",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: JournalEntryPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: JournalEntry,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Journal entry not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/journal-entries/:id",
        alias: "deleteJournalEntry",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Journal entry not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/journals/:id",
        alias: "getJournal",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Journal,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Journal not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/journals/:id",
        alias: "patchJournal",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: JournalPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Journal,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Journal not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/journals/:id",
        alias: "deleteJournal",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Journal not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/journals/:id/recurring-entries",
        alias: "getRecurringJournalEntries",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
            {
                name: "from_date",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "to_date",
                type: "Query",
                schema: parent_id,
            },
        ],
        response: z.array(RecurringJournalEntry),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Journal not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/journals/:id/recurring-entries",
        alias: "createRecurringJournalEntry",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: RecurringJournalEntryCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: RecurringJournalEntry,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Journal not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/journals/:journal_id/entries",
        alias: "createJournalEntry",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: JournalEntryCreateRequest,
            },
            {
                name: "journal_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: JournalEntry,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Journal not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/journals/:journal_id/entries",
        alias: "getJournalEntries",
        requestFormat: "json",
        parameters: [
            {
                name: "journal_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
            {
                name: "from_date",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "to_date",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "is_draft",
                type: "Query",
                schema: is_committed,
            },
            {
                name: "offset",
                type: "Query",
                schema: z.number().int().gte(0).optional().default(0),
            },
            {
                name: "limit",
                type: "Query",
                schema: z.number().int().gte(1).lte(100).optional().default(20),
            },
        ],
        response: Paged_JournalEntryWithDetails_,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Journal not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Invalid date range`,
                schema: z.void(),
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/liabilities/:id",
        alias: "getLiability",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Liability,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Liability not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/liabilities/:id",
        alias: "patchLiability",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: LiabilityPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Liability,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Liability not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/liabilities/:id",
        alias: "deleteLiability",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Liability not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/liabilities/:id/payments",
        alias: "getPaymentsByLiability",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(Payment),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Liability not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/liabilities/:id/payments",
        alias: "createPayment",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: PaymentCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Payment,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Liability or revenue not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/payments/:id",
        alias: "getPayment",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Payment,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Payment not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/payments/:id",
        alias: "patchPayment",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: PaymentPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Payment,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Payment not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/payments/:id",
        alias: "deletePayment",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Payment not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/recurring-journal-entries/:id",
        alias: "getRecurringJournalEntry",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: RecurringJournalEntry,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Recurring journal entry not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/recurring-journal-entries/:id",
        alias: "patchRecurringJournalEntry",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: RecurringJournalEntryPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: RecurringJournalEntry,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Recurring journal entry not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/recurring-journal-entries/:id",
        alias: "deleteRecurringJournalEntry",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Recurring journal entry not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/recurring-journal-entries/:id/changed-dates",
        alias: "createRecurringJournalEntryChangedDate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: RecurringJournalEntryChangedDateCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: RecurringJournalEntryChangedDate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Recurring journal entry not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/recurring-journal-entries/:id/changed-dates",
        alias: "listRecurringJournalEntryChangedDates",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(RecurringJournalEntryChangedDate),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Recurring journal entry not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/recurring-journal-entry-changed-dates/:id",
        alias: "getRecurringJournalEntryChangedDate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: RecurringJournalEntryChangedDate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Changed date not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/recurring-journal-entry-changed-dates/:id",
        alias: "patchRecurringJournalEntryChangedDate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: RecurringJournalEntryChangedDatePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: RecurringJournalEntryChangedDate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Changed date not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/recurring-journal-entry-changed-dates/:id",
        alias: "deleteRecurringJournalEntryChangedDate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Changed date not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/recurring-liabilities/:id",
        alias: "getRecurringLiability",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: RecurringLiability,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Recurring liability not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/recurring-liabilities/:id",
        alias: "deleteRecurringLiability",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Recurring liability not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/recurring-liabilities/:id",
        alias: "patchRecurringLiability",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: RecurringLiabilityPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: RecurringLiability,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Recurring liability not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/recurring-liabilities/:id/changed-dates",
        alias: "createRecurringLiabilityChangedDate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: RecurringLiabilityChangedDateCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: RecurringLiabilityChangedDate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Recurring liability not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/recurring-liabilities/:id/changed-dates",
        alias: "listRecurringLiabilityChangedDates",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(RecurringLiabilityChangedDate),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Recurring liability not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/recurring-liability-changed-dates/:id",
        alias: "getRecurringLiabilityChangedDate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: RecurringLiabilityChangedDate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Changed date not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/recurring-liability-changed-dates/:id",
        alias: "patchRecurringLiabilityChangedDate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: RecurringLiabilityChangedDatePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: RecurringLiabilityChangedDate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Changed date not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/recurring-liability-changed-dates/:id",
        alias: "deleteRecurringLiabilityChangedDate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Changed date not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/report-tags/:id",
        alias: "getAccountingReportTag",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountingReportTag,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/report-tags/:id",
        alias: "patchAccountingReportTag",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AccountingReportTagPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountingReportTag,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/report-tags/:id",
        alias: "deleteAccountingReportTag",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/report-tags/:id/accounts",
        alias: "getAccountsByTag",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.unknown(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/report-tags/:id/balance",
        alias: "getAccountingReportTagBalance",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
            {
                name: "as_of_date",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "property_id",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "unit_id",
                type: "Query",
                schema: parent_id,
            },
        ],
        response: z.unknown(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Report tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/reports/:id",
        alias: "getAccountingReport",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountingReport,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/reports/:id",
        alias: "patchAccountingReport",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AccountingReportPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountingReport,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/reports/:id",
        alias: "deleteAccountingReport",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/revenues/",
        alias: "listRevenuesPaginated",
        requestFormat: "json",
        parameters: [
            {
                name: "from_date",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "to_date",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "bank_account_id",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "offset",
                type: "Query",
                schema: z.number().int().gte(0).optional().default(0),
            },
            {
                name: "limit",
                type: "Query",
                schema: z.number().int().gte(1).lte(100).optional().default(20),
            },
        ],
        response: Paged_Revenue_,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/revenues/",
        alias: "importRevenues",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: importRevenues_Body,
            },
        ],
        response: Revenue,
        errors: [
            {
                status: 400,
                description: `Bad request, e.g. trying to create revenue for FINAPI account`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Bank account not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/tax-grid-entries/:id",
        alias: "getTaxGridEntry",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: TaxGridEntry,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tax grid entry not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/tax-grid-entries/:id",
        alias: "patchTaxGridEntry",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: TaxGridEntryPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: TaxGridEntry,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tax grid entry not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/tax-grid-entries/:id",
        alias: "deleteTaxGridEntry",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tax grid entry not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/tax-rates/:id",
        alias: "getTaxRate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: TaxRate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tax rate not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/tax-rates/:id",
        alias: "patchTaxRate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: TaxRatePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: TaxRate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tax rate not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Tax rate rate cannot be negative`,
                schema: z.void(),
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/tax-rates/:id",
        alias: "deleteTaxRate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tax rate not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/tax-rates/:id/tax-grid-entries",
        alias: "getTaxRateGridEntries",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(TaxGridEntry),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tax rate not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/tax-rates/:id/tax-grid-entries",
        alias: "createTaxRateGridEntry",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: TaxGridEntryCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: TaxGridEntry,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tax rate not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/account-categories/:id",
        alias: "getAccountCategoryTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountCategoryTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Category not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/templates/account-categories/:id",
        alias: "patchAccountCategoryTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AccountCategoryTemplatePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountCategoryTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Category not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/templates/account-categories/:id",
        alias: "deleteAccountCategoryTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Category not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/account-categories/:id/accounts",
        alias: "getAccountsByCategoryTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(AccountTemplate),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Category not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/accounts/:id",
        alias: "getAccountTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `AccountTemplate not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/templates/accounts/:id",
        alias: "patchAccountTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AccountTemplatePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `AccountTemplate not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/templates/accounts/:id",
        alias: "deleteAccountTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `AccountTemplate not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/allocation-keys/:id",
        alias: "getAllocationKeyTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AllocationKeyTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/templates/allocation-keys/:id",
        alias: "patchAllocationKeyTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AllocationKeyTemplatePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AllocationKeyTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/templates/allocation-keys/:id",
        alias: "deleteAllocationKeyTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/chart-of-accounts/",
        alias: "listChartsOfAccountsTemplates",
        requestFormat: "json",
        response: z.array(ChartOfAccountsTemplate),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/templates/chart-of-accounts/:chart_of_accounts_id/account-categories",
        alias: "createAccountCategoryTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AccountCategoryTemplateCreateRequest,
            },
            {
                name: "chart_of_accounts_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountCategoryTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/chart-of-accounts/:chart_of_accounts_id/account-categories",
        alias: "listChartOfAccountsAccountCategoryTemplates",
        requestFormat: "json",
        parameters: [
            {
                name: "chart_of_accounts_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
            {
                name: "offset",
                type: "Query",
                schema: z.number().int().gte(0).optional().default(0),
            },
            {
                name: "limit",
                type: "Query",
                schema: z.number().int().gte(1).lte(100).optional().default(20),
            },
        ],
        response: Paged_AccountTemplate_,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Chart of accounts not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/templates/chart-of-accounts/:chart_of_accounts_id/accounts",
        alias: "createAccountTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AccountTemplateCreateRequest,
            },
            {
                name: "chart_of_accounts_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Chart of accounts not found or balance sheet category not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/chart-of-accounts/:chart_of_accounts_id/accounts",
        alias: "listChartOfAccountsAccountTemplates",
        requestFormat: "json",
        parameters: [
            {
                name: "chart_of_accounts_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(AccountTemplate),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Chart of accounts not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/templates/chart-of-accounts/:chart_of_accounts_id/report-tags",
        alias: "createAccountingReportTagTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: z.object({ name: z.string().min(1) }).passthrough(),
            },
            {
                name: "chart_of_accounts_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/chart-of-accounts/:chart_of_accounts_id/report-tags",
        alias: "listChartOfAccountsAccountingReportTagTemplates",
        requestFormat: "json",
        parameters: [
            {
                name: "chart_of_accounts_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(AccountingReportTagTemplate),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Chart of accounts not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/templates/chart-of-accounts/:chart_of_accounts_id/tax-rates",
        alias: "createTaxRateTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: TaxRateTemplateCreateRequest,
            },
            {
                name: "chart_of_accounts_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: TaxRateTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/chart-of-accounts/:chart_of_accounts_id/tax-rates",
        alias: "listChartOfAccountsTaxRateTemplates",
        requestFormat: "json",
        parameters: [
            {
                name: "chart_of_accounts_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(TaxRateTemplate),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Chart of accounts not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/chart-of-accounts/:id",
        alias: "getChartOfAccountsTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ChartOfAccountsTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Chart of accounts not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/templates/chart-of-accounts/:id",
        alias: "patchChartOfAccountsTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: ChartOfAccountsTemplatePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ChartOfAccountsTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Chart of accounts not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/journals/:id",
        alias: "getJournalTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: JournalTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `JournalTemplate not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/templates/journals/:id",
        alias: "patchJournalTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: JournalTemplatePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: JournalTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `JournalTemplate not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/templates/journals/:id",
        alias: "deleteJournalTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `JournalTemplate not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/report-tags/:id",
        alias: "getAccountingReportTagTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountingReportTagTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/templates/report-tags/:id",
        alias: "patchAccountingReportTagTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AccountingReportTagTemplatePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountingReportTagTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/templates/report-tags/:id",
        alias: "deleteAccountingReportTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/report-tags/:id/accounts",
        alias: "getAccountsByTagTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.unknown(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/templates/report-tags/:id/allocation-keys",
        alias: "createAllocationKeyTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AllocationKeyTemplateCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AllocationKeyTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/report-tags/:id/allocation-keys",
        alias: "getAllocationKeysByTagTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(AllocationKeyTemplate),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/tax-grid-entries/:id",
        alias: "getTaxGridEntryTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: TaxGridEntryTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tax grid entry not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/templates/tax-grid-entries/:id",
        alias: "patchTaxGridEntryTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: TaxGridEntryTemplatePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: TaxGridEntryTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tax grid entry not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/templates/tax-grid-entries/:id",
        alias: "deleteTaxGridEntryTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tax grid entry not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/tax-rates/:id",
        alias: "getTaxRateTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: TaxRateTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tax rate not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/templates/tax-rates/:id",
        alias: "patchTaxRateTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: TaxRateTemplatePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: TaxRateTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tax rate not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Tax rate rate cannot be negative`,
                schema: z.void(),
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/accounting/templates/tax-rates/:id",
        alias: "deleteTaxRateTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tax rate not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/tax-rates/:id/tax-grid-entries",
        alias: "getTaxRateGridEntryTemplates",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(TaxGridEntryTemplate),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tax rate not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/templates/tax-rates/:id/tax-grid-entries",
        alias: "createTaxRateGridEntryTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: TaxGridEntryTemplateCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: TaxGridEntryTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tax rate not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/tenants/",
        alias: "listAccountingTenantTemplates",
        requestFormat: "json",
        response: z.array(AccountingTenantTemplate),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `User not found`,
                schema: z.void(),
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/templates/tenants/",
        alias: "createAccountingTenantTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AccountingTenantTemplateCreateRequest,
            },
        ],
        response: AccountingTenantTemplate,
        errors: [
            {
                status: 400,
                description: `Bad request`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/tenants/:id",
        alias: "getAccountingTenantTemplateById",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountingTenantTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `User not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/templates/tenants/:id",
        alias: "patchAccountingTenantTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AccountingTenantTemplatePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountingTenantTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `User not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/templates/tenants/:id/create-custom",
        alias: "createCustomFromDefault",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountingTenantTemplate,
        errors: [
            {
                status: 400,
                description: `Bad request`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/templates/tenants/:id/journals",
        alias: "listJournalTemplates",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(JournalTemplate),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Accounting tenant not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/templates/tenants/:id/journals",
        alias: "createJournalTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: JournalTemplateCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: JournalTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Accounting tenant not found, could mean that it&#x27;s a default template and not editable for a tenant / accessible from a custom template`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/tenants/:id",
        alias: "getAccountingTenantById",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountingTenant,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `User not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/accounting/tenants/:id",
        alias: "patchAccountingTenant",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AccountingTenantPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountingTenant,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `User not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/tenants/:id/accounting-reports",
        alias: "createAccountingReport",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AccountingReportCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountingReport,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `User not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/tenants/:id/accounting-reports",
        alias: "getAccountingTenantAccountingReports",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(AccountingReport),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Accounting tenant not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/tenants/:id/economic-plans",
        alias: "createEconomicPlan",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: EconomicPlanCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: EconomicPlan,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Accounting tenant not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/tenants/:id/economic-plans",
        alias: "getAccountingTenantEconomicPlans",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(EconomicPlan),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Accounting tenant not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/tenants/:id/invoices",
        alias: "createInvoice",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: createInvoice_Body,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: InvoiceUnion,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Referenced entity not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/tenants/:id/invoices",
        alias: "getInvoices",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
            {
                name: "is_draft",
                type: "Query",
                schema: is_committed,
            },
            {
                name: "offset",
                type: "Query",
                schema: z.number().int().gte(0).optional().default(0),
            },
            {
                name: "limit",
                type: "Query",
                schema: z.number().int().gte(1).lte(100).optional().default(20),
            },
        ],
        response: Paged_InvoiceUnion_,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Accounting tenant not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/tenants/:id/journal-entries",
        alias: "getJournalEntriesByTenant",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
            {
                name: "is_draft",
                type: "Query",
                schema: is_committed,
            },
            {
                name: "from_date",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "to_date",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "offset",
                type: "Query",
                schema: z.number().int().gte(0).optional().default(0),
            },
            {
                name: "limit",
                type: "Query",
                schema: z.number().int().gte(1).lte(100).optional().default(20),
            },
        ],
        response: Paged_JournalEntryWithDetails_,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Accounting tenant not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/tenants/:id/journals",
        alias: "listJournals",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(Journal),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Accounting tenant not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/tenants/:id/journals",
        alias: "createJournal",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: JournalCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Journal,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Accounting tenant not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/tenants/:id/liabilities",
        alias: "createLiability",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: LiabilityCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Liability,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Accounting tenant not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/tenants/:id/liabilities",
        alias: "getAccountingTenantLiabilities",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
            {
                name: "offset",
                type: "Query",
                schema: z.number().int().gte(0).optional().default(0),
            },
            {
                name: "limit",
                type: "Query",
                schema: z.number().int().gte(1).lte(100).optional().default(20),
            },
        ],
        response: Paged_Liability_,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Accounting tenant not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/accounting/tenants/:id/recurring-liabilities",
        alias: "createRecurringLiability",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: RecurringLiabilityCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: RecurringLiability,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Accounting tenant not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/accounting/tenants/:id/recurring-liabilities",
        alias: "getAccountingTenantRecurringLiabilities",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(RecurringLiability),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Accounting tenant not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/auth/login",
        alias: "login",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AuthRequest,
            },
        ],
        response: Token,
        errors: [
            {
                status: 401,
                description: `Invalid username or password`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/clusters/:id",
        alias: "getCluster",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Cluster,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Cluster not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/clusters/:id",
        alias: "patchCluster",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: ClusterPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Cluster,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Cluster not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/clusters/:id",
        alias: "deleteCluster",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Cluster not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/clusters/:id/properties",
        alias: "getClusterProperties",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(Property),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Cluster not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/clusters/:id/properties",
        alias: "createClusterProperty",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: PropertyCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Property,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Cluster not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/clusters/:id/set-as-accounting-tenant",
        alias: "setClusterAsAccountingTenant",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AccountingTenantCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountingTenant,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/committed-payments/",
        alias: "listCommittedPaymentsPaginated",
        requestFormat: "json",
        parameters: [
            {
                name: "offset",
                type: "Query",
                schema: z.number().int().gte(0).optional().default(0),
            },
            {
                name: "limit",
                type: "Query",
                schema: z.number().int().gte(1).lte(100).optional().default(20),
            },
        ],
        response: Paged_CommittedPayment_,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/condominium-ownership-owners/:owner_id",
        alias: "deleteCondominiumOwnershipOwner",
        requestFormat: "json",
        parameters: [
            {
                name: "owner_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Condominium ownership owner not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/condominium-ownership-owners/:owner_id",
        alias: "patchCondominiumOwnershipOwner",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: CondominiumOwnershipOwnerPatchRequest,
            },
            {
                name: "owner_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: CondominiumOwnershipOwner,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Condominium ownership owner not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/condominium-ownerships/:id",
        alias: "getCondominiumOwnership",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: CondominiumOwnership,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Condominium ownership not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/condominium-ownerships/:id",
        alias: "patchCondominiumOwnership",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: CondominiumOwnershipPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: CondominiumOwnership,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Condominium ownership not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/condominium-ownerships/:id",
        alias: "deleteCondominiumOwnership",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Condominium ownership not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/condominium-ownerships/:id/home-owner-association-fees",
        alias: "createHomeOwnerAssociationFee",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: HomeOwnerAssociationFeeCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: HomeOwnerAssociationFee,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `home owner association fee not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/condominium-ownerships/:id/home-owner-association-fees",
        alias: "getHomeOwnerAssociationFeesByCondominiumOwnership",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(HomeOwnerAssociationFee),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `home owner association fee not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/condominium-ownerships/:id/owners",
        alias: "getCondominiumOwnershipOwners",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(CondominiumOwnershipOwner),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Condominium ownership not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/condominium-ownerships/:id/owners",
        alias: "createCondominiumOwnershipOwner",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: CondominiumOwnershipOwnerCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: CondominiumOwnershipOwner,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Condominium ownership not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/contact-contracts/:id",
        alias: "getContactContract",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ContactContract,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/contact-contracts/:id",
        alias: "patchContactContract",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: ContactContractPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ContactContract,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/contact-contracts/:id",
        alias: "deleteContactContract",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Tag not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/contacts/",
        alias: "listContactsPaginated",
        requestFormat: "json",
        parameters: [
            {
                name: "offset",
                type: "Query",
                schema: z.number().int().gte(0).optional().default(0),
            },
            {
                name: "limit",
                type: "Query",
                schema: z.number().int().gte(1).lte(100).optional().default(20),
            },
        ],
        response: Paged_Contact_,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/contacts/",
        alias: "createContact",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: ContactCreateRequest,
            },
        ],
        response: Contact,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/contacts/:id",
        alias: "getContact",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Contact,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Contact not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/contacts/:id",
        alias: "patchContact",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: ContactPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Contact,
        errors: [
            {
                status: 400,
                description: `Cannot change contact type`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Contact not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/contacts/:id",
        alias: "deleteContact",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Contact not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/contacts/:id/contracts",
        alias: "createContactContract",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: ContactContractCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ContactContract,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Contact not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/contacts/:id/contracts",
        alias: "getContactContracts",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(ContactContract),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Contact not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/contacts/:id/mails",
        alias: "listContactMails",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
            {
                name: "offset",
                type: "Query",
                schema: z.number().int().gte(0).optional().default(0),
            },
            {
                name: "limit",
                type: "Query",
                schema: z.number().int().gte(1).lte(100).optional().default(20),
            },
        ],
        response: Paged_MailUnion_,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Contact not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/contacts/:id/owned-condominium-ownerships",
        alias: "getContactOwnedCondominiumOwnerships",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(CondominiumOwnershipOwner),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Contact not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/contacts/:id/owned-properties",
        alias: "getContactOwnedProperties",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(PropertyOwner),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Contact not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/contacts/:id/service-providers",
        alias: "createContactServiceProvider",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: ServiceProviderCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ServiceProvider,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Contact not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/contacts/:id/service-providers",
        alias: "getContactServiceProviders",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(ServiceProvider),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Contact not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/contacts/:id/usages",
        alias: "getContactPropertyUsages",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(UsageTenant),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Contact not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/document-templates/",
        alias: "listDocumentTemplates",
        requestFormat: "json",
        response: z.array(DocumentTemplate),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/document-templates/",
        alias: "createDocumentTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: DocumentTemplateCreateRequest,
            },
        ],
        response: DocumentTemplate,
        errors: [
            {
                status: 400,
                description: `Invalid file type`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/document-templates/:id",
        alias: "patchDocumentTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: DocumentTemplatePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: DocumentTemplate,
        errors: [
            {
                status: 400,
                description: `Error extracting variables from template`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Document template not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/document-templates/:id",
        alias: "deleteDocumentTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Document template not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/document-templates/:id",
        alias: "getDocumentTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: DocumentTemplate,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Document template not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/document-templates/:id/fill",
        alias: "fillDocumentTemplate",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: DocumentTemplateFillRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: File,
        errors: [
            {
                status: 400,
                description: `Resulting file too large, unmapped variables or unsupported file type`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Document template not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Failed to get file or convert document to PDF`,
                schema: z.void(),
            },
        ],
    },
    {
        method: "get",
        path: "/economic-plans/:id",
        alias: "getEconomicPlan",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: EconomicPlan,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Economic plan not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/economic-plans/:id",
        alias: "deleteEconomicPlan",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Economic plan not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/email/accounts",
        alias: "getEmailAccounts",
        requestFormat: "json",
        response: z.array(EmailAccount),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/email/accounts",
        alias: "createEmailAccount",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: EmailAccountCreateRequest,
            },
        ],
        response: EmailAccount,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/email/accounts/:account_id",
        alias: "getEmailAccount",
        requestFormat: "json",
        parameters: [
            {
                name: "account_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: EmailAccount,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Email account not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/email/accounts/:account_id",
        alias: "patchEmailAccount",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: EmailAccountPatchRequest,
            },
            {
                name: "account_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: EmailAccount,
        errors: [
            {
                status: 400,
                description: `One or more assigned users not found`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Email account not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/email/accounts/:account_id",
        alias: "deleteEmailAccount",
        requestFormat: "json",
        parameters: [
            {
                name: "account_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Email account not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/email/accounts/:account_id/folders",
        alias: "getAccountFolders",
        requestFormat: "json",
        parameters: [
            {
                name: "account_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(EmailFolder),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Email account not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/email/accounts/:account_id/folders/:folder/mails",
        alias: "getAccountFolderMails",
        requestFormat: "json",
        parameters: [
            {
                name: "account_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
            {
                name: "folder",
                type: "Path",
                schema: z.string(),
            },
        ],
        response: z.array(Email),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Email account not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/email/accounts/:account_id/mails",
        alias: "sendEmail",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: EmailSendRequest,
            },
            {
                name: "account_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Email,
        errors: [
            {
                status: 400,
                description: `Failed to send email`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Email account not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/email/accounts/:account_id/mails/:mail_id",
        alias: "markEmailAsDeleted",
        requestFormat: "json",
        parameters: [
            {
                name: "account_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
            {
                name: "mail_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Email,
        errors: [
            {
                status: 400,
                description: `Email already deleted`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Email account or email not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/files/",
        alias: "listFiles",
        requestFormat: "json",
        parameters: [
            {
                name: "related_entity_id",
                type: "Query",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(File),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/files/",
        alias: "uploadFile",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: FileUploadRequest,
            },
        ],
        response: File,
        errors: [
            {
                status: 400,
                description: `Related entity not found or related entity type not allowed or unsupported file type`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 413,
                description: `File too large`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/files/:id",
        alias: "getFile",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: File,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `File not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/files/:id",
        alias: "patchFile",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: FilePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: File,
        errors: [
            {
                status: 400,
                description: `Related entity not found or type not allowed`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `File not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/files/:id",
        alias: "deleteFile",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `File not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/files/:id/download",
        alias: "downloadFile",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.unknown(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `File not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/files/:id/download-annotated",
        alias: "downloadFilesAnnotatedPdf",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.unknown(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `File not found or does not have an annotated PDF`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/home-owner-association-resolutions/:id",
        alias: "getHomeOwnerAssociationResolution",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: HomeOwnerAssociationResolution,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Resolution not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/home-owner-association-resolutions/:id",
        alias: "patchHomeOwnerAssociationResolution",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: HomeOwnerAssociationResolutionPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: HomeOwnerAssociationResolution,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Resolution not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/home-owner-association-resolutions/:id",
        alias: "deleteHomeOwnerAssociationResolution",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Resolution not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/internal-tenants/",
        alias: "listInternalTenants",
        requestFormat: "json",
        response: z.array(InternalTenant),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/internal-tenants/",
        alias: "createInternalTenant",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: InternalTenantCreateRequest,
            },
        ],
        response: InternalTenant,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Address not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/internal-tenants/:id",
        alias: "getInternalTenant",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: InternalTenant,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Internal tenant not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/internal-tenants/:id",
        alias: "patchInternalTenant",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: InternalTenantPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: InternalTenant,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Internal tenant not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/internal-tenants/:id",
        alias: "deleteInternalTenant",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Internal tenant not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/internal-tenants/:id/clusters",
        alias: "getInternalTenantClusters",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(Cluster),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/internal-tenants/:id/properties",
        alias: "createProperty",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: PropertyCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Property,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/internal-tenants/:internal_tenant_id/clusters",
        alias: "createCluster",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: ClusterCreateRequest,
            },
            {
                name: "internal_tenant_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Cluster,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/mails/",
        alias: "listMailsPaginated",
        requestFormat: "json",
        parameters: [
            {
                name: "offset",
                type: "Query",
                schema: z.number().int().gte(0).optional().default(0),
            },
            {
                name: "limit",
                type: "Query",
                schema: z.number().int().gte(1).lte(100).optional().default(20),
            },
        ],
        response: Paged_MailUnion_,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/mails/",
        alias: "createMail",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: createMail_Body,
            },
        ],
        response: MailUnion,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/mails/:id",
        alias: "getMail",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: MailUnion,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Mail not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/mails/:id",
        alias: "patchMail",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: patchMail_Body,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: MailUnion,
        errors: [
            {
                status: 400,
                description: `Cannot change mail type or patch after sending`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Mail not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/mails/:id",
        alias: "deleteMail",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Mail not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/mails/:id/transmit",
        alias: "transmitMail",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: MailUnion,
        errors: [
            {
                status: 400,
                description: `Mail already transmitted, not an outgoing mail, address not set, name not set in address`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Mail not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/meter-readings/:id",
        alias: "getMeterReading",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: MeterReading,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Meter reading not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/meter-readings/:id",
        alias: "patchMeterReading",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: MeterReadingPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: MeterReading,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Meter reading not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/meter-readings/:id",
        alias: "deleteMeterReading",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Meter reading not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/meters/:id",
        alias: "getMeter",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Meter,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Meter not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/meters/:id",
        alias: "patchMeter",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: MeterPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Meter,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Meter not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/meters/:id",
        alias: "deleteMeter",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Meter not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/meters/:id/readings",
        alias: "createMeterReading",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: MeterReadingCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: MeterReading,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Meter not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/meters/:id/readings",
        alias: "getMeterReadings",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(MeterReading),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/past-calls/",
        alias: "listPastCallsPaginated",
        requestFormat: "json",
        parameters: [
            {
                name: "offset",
                type: "Query",
                schema: z.number().int().gte(0).optional().default(0),
            },
            {
                name: "limit",
                type: "Query",
                schema: z.number().int().gte(1).lte(100).optional().default(20),
            },
        ],
        response: Paged_PastCall_,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/past-calls/",
        alias: "createPastCall",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: PastCallCreateRequest,
            },
        ],
        response: PastCall,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Contact or employee not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/past-calls/:id",
        alias: "getPastCall",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: PastCall,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Past call not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/past-calls/:id",
        alias: "patchPastCall",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: PastCallPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: PastCall,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Past call not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/past-calls/:id",
        alias: "deletePastCall",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Past call not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/past-calls/by-contact/:contact_id",
        alias: "getPastCallsByContact",
        requestFormat: "json",
        parameters: [
            {
                name: "contact_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(PastCall),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Contact not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/past-calls/by-employee/:employee_id",
        alias: "getPastCallsByEmployee",
        requestFormat: "json",
        parameters: [
            {
                name: "employee_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(PastCall),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Employee not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/process-events/:id",
        alias: "getProcessEvent",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ProcessEventUnion,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Process event not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/process-events/:id",
        alias: "patchProcessEvent",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: patchProcessEvent_Body,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ProcessEventUnion,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Process event not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Cannot change the type of a process event`,
                schema: z.void(),
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/process-events/:id",
        alias: "deleteProcessEvent",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Process event not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/process-tasks/:id",
        alias: "getProcessTask",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ProcessTaskUnion,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Process task not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/process-tasks/:id",
        alias: "patchProcessTask",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: patchProcessTask_Body,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ProcessTaskUnion,
        errors: [
            {
                status: 400,
                description: `Cannot change the type of a process task or invalid form data / schema`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Process task not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/processes/",
        alias: "listProcesses",
        requestFormat: "json",
        parameters: [
            {
                name: "parent_id",
                type: "Query",
                schema: parent_id,
            },
        ],
        response: z.array(Process),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/processes/",
        alias: "createProcess",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: ProcessCreateRequest,
            },
        ],
        response: Process,
        errors: [
            {
                status: 400,
                description: `Parent entity not found`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/processes/:id",
        alias: "getProcess",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Process,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Process not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/processes/:id",
        alias: "patchProcess",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: ProcessPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Process,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Process not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/processes/:id",
        alias: "deleteProcess",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Process not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/processes/:id/events",
        alias: "listProcessEvents",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(ProcessEventUnion),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Process not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/processes/:id/events",
        alias: "createProcessEvent",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: createProcessEvent_Body,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ProcessEventUnion,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/processes/:id/tasks",
        alias: "listProcessTasks",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(ProcessTaskUnion),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Process not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/processes/:id/tasks",
        alias: "createProcessTask",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: createProcessTask_Body,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ProcessTaskUnion,
        errors: [
            {
                status: 400,
                description: `Invalid form schema or form data`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/properties/",
        alias: "listPropertiesPaginated",
        requestFormat: "json",
        parameters: [
            {
                name: "offset",
                type: "Query",
                schema: z.number().int().gte(0).optional().default(0),
            },
            {
                name: "limit",
                type: "Query",
                schema: z.number().int().gte(1).lte(100).optional().default(20),
            },
        ],
        response: Paged_Property_,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/properties/:id",
        alias: "getProperty",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Property,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/properties/:id",
        alias: "patchProperty",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: PropertyPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Property,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/properties/:id",
        alias: "deleteProperty",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/properties/:id/allocation-keys",
        alias: "createAllocationKey",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AllocationKeyCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AllocationKey,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/properties/:id/allocation-keys",
        alias: "listPropertyAllocationKeys",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(AllocationKey),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/properties/:id/condominium-ownerships",
        alias: "listPropertyCondominiumOwnerships",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(CondominiumOwnership),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/properties/:id/condominium-ownerships",
        alias: "createCondominiumOwnership",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: CondominiumOwnershipCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: CondominiumOwnership,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/properties/:id/contracts",
        alias: "createPropertyContract",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: PropertyContractCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: PropertyContract,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found or file not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/properties/:id/contracts",
        alias: "getPropertyContracts",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(PropertyContract),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/properties/:id/home-owner-association-resolutions",
        alias: "createHomeOwnerAssociationResolution",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: HomeOwnerAssociationResolutionCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: HomeOwnerAssociationResolution,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found or file not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/properties/:id/home-owner-association-resolutions",
        alias: "getHomeOwnerAssociationResolutions",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(HomeOwnerAssociationResolution),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/properties/:id/meters",
        alias: "createPropertyMeter",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: MeterCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Meter,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property or unit not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/properties/:id/meters",
        alias: "listPropertyMeters",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(Meter),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/properties/:id/owners",
        alias: "getPropertyOwners",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(PropertyOwner),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/properties/:id/owners",
        alias: "createPropertyOwner",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: PropertyOwnerCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: PropertyOwner,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/properties/:id/service-providers",
        alias: "getPropertyServiceProviders",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(PropertyServiceProvider),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/properties/:id/service-providers",
        alias: "createPropertyServiceProvider",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: PropertyServiceProviderCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: PropertyServiceProvider,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/properties/:id/set-as-accounting-tenant",
        alias: "setPropertyAsAccountingTenant",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: AccountingTenantCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: AccountingTenant,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/properties/:id/shared-units",
        alias: "listPropertySharedUnits",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(PropertySharedUnit),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/properties/:id/shared-units",
        alias: "createPropertySharedUnit",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: PropertySharedUnitCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: PropertySharedUnit,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/properties/:id/sub-associations",
        alias: "createSubAssociation",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: z.object({ name: z.string().min(1) }).passthrough(),
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: SubAssociation,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/properties/:id/sub-associations",
        alias: "getPropertySubAssociations",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(SubAssociation),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/properties/:id/units",
        alias: "createPropertyUnit",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: UnitCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Unit,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/properties/:id/units",
        alias: "listPropertyUnits",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(Unit),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/property-contracts/:id",
        alias: "getPropertyContract",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: PropertyContract,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property contract not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/property-contracts/:id",
        alias: "patchPropertyContract",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: PropertyContractPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: PropertyContract,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property contract not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/property-contracts/:id",
        alias: "deletePropertyContract",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property contract not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/property-owners/:owner_id",
        alias: "deletePropertyOwner",
        requestFormat: "json",
        parameters: [
            {
                name: "owner_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property owner not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/property-owners/:owner_id",
        alias: "patchPropertyOwner",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: PropertyOwnerPatchRequest,
            },
            {
                name: "owner_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: PropertyOwner,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Property owner not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/property-service-providers/:provider_id",
        alias: "deletePropertyServiceProvider",
        requestFormat: "json",
        parameters: [
            {
                name: "provider_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Service provider not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/property-service-providers/:provider_id",
        alias: "patchPropertyServiceProvider",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: PropertyServiceProviderPatchRequest,
            },
            {
                name: "provider_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: PropertyServiceProvider,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Service provider not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/property-shared-units/:id",
        alias: "getPropertySharedUnit",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: PropertySharedUnit,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Shared unit not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/property-shared-units/:id",
        alias: "patchPropertySharedUnit",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: PropertySharedUnitPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: PropertySharedUnit,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Shared unit not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/property-shared-units/:id",
        alias: "deletePropertySharedUnit",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Shared unit not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/search-engine/",
        alias: "search",
        requestFormat: "json",
        parameters: [
            {
                name: "query",
                type: "Query",
                schema: z.string().min(1),
            },
            {
                name: "type",
                type: "Query",
                schema: type,
            },
        ],
        response: z.array(SearchEngineResult),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Error when searching`,
                schema: z.void(),
            },
        ],
    },
    {
        method: "post",
        path: "/search-engine/initialize",
        alias: "initializeIndices",
        requestFormat: "json",
        response: z.unknown(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 500,
                description: `Error when initializing indices`,
                schema: z.void(),
            },
        ],
    },
    {
        method: "get",
        path: "/service-provider-services/",
        alias: "listServiceProviderServices",
        requestFormat: "json",
        response: z.array(ServiceProviderService),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/service-provider-services/:id",
        alias: "getServiceProviderService",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ServiceProviderService,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Service provider service not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/service-provider-services/:id",
        alias: "patchServiceProviderService",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: ServiceProviderServicePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ServiceProviderService,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Service provider service not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/service-provider-services/:id",
        alias: "deleteServiceProviderService",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Service provider service not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/service-providers/:id",
        alias: "getServiceProvider",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ServiceProvider,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Service provider not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/service-providers/:id",
        alias: "patchServiceProvider",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: ServiceProviderPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ServiceProvider,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Service provider not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/service-providers/:id",
        alias: "deleteServiceProvider",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Service provider not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/service-providers/:id/services",
        alias: "getServiceProviderServices",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(ServiceProviderService),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Service provider not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/service-providers/:id/services",
        alias: "createServiceProviderService",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: ServiceProviderServiceCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: ServiceProviderService,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Service provider not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/services/",
        alias: "listServices",
        requestFormat: "json",
        response: z.array(Service),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/services/",
        alias: "createService",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: z.object({ name: z.string() }).passthrough(),
            },
        ],
        response: Service,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/services/:id",
        alias: "getService",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Service,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Service not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/services/:id",
        alias: "patchService",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: z.object({ name: z.string() }).passthrough(),
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Service,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Service not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/services/:id",
        alias: "deleteService",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Service not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/sub-associations/:id",
        alias: "getSubAssociation",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: SubAssociation,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Sub association not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/sub-associations/:id",
        alias: "patchSubAssociation",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: SubAssociationPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: SubAssociation,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Sub association not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/sub-associations/:id",
        alias: "deleteSubAssociation",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Sub association not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/task-comments/:id",
        alias: "getTaskComment",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: TaskComment,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Task comment not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/task-comments/:id",
        alias: "patchTaskComment",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: TaskCommentPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: TaskComment,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Task comment not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/task-comments/:id",
        alias: "deleteTaskComment",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Task comment not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/tasks/",
        alias: "listTasks",
        requestFormat: "json",
        parameters: [
            {
                name: "linked_object_type",
                type: "Query",
                schema: linked_object_type,
            },
            {
                name: "linked_object_id",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "assigned_to",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "status",
                type: "Query",
                schema: status,
            },
            {
                name: "priority",
                type: "Query",
                schema: priority,
            },
        ],
        response: z.array(Task),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/tasks/",
        alias: "createTask",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: TaskCreateRequest,
            },
        ],
        response: Task,
        errors: [
            {
                status: 400,
                description: `Property, unit, contact, building, or user not found`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/tasks/:id",
        alias: "getTask",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Task,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Task not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/tasks/:id",
        alias: "patchTask",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: TaskPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Task,
        errors: [
            {
                status: 400,
                description: `One or more assigned users not found`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Task not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/tasks/:id",
        alias: "deleteTask",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Task not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/tasks/:id/comments",
        alias: "listTaskComments",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(TaskComment),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Task not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/tasks/:id/comments",
        alias: "createTaskComment",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: TaskCommentCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: TaskComment,
        errors: [
            {
                status: 400,
                description: `Employee not found`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Task not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/units/:id",
        alias: "getUnit",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Unit,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Unit not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/units/:id",
        alias: "patchUnit",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: UnitPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Unit,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Unit not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/units/:id",
        alias: "deleteUnit",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Unit not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/units/:id/usages",
        alias: "listUnitUsages",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(Usage),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Unit not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/units/:id/usages",
        alias: "createUnitUsage",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: UsageCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Usage,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Unit not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/usage-rents/:id",
        alias: "patchUsageRent",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: UsageRentPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: UsageRent,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Usage rent not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/usage-tenants/:tenant_id",
        alias: "deleteUsageTenant",
        requestFormat: "json",
        parameters: [
            {
                name: "tenant_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Usage tenant not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/usages/:id",
        alias: "getUsage",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Usage,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Usage not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/usages/:id",
        alias: "patchUsage",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: UsagePatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Usage,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Usage not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/usages/:id",
        alias: "deleteUsage",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Usage not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/usages/:id/tenants",
        alias: "getUsageTenants",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(UsageTenant),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Usage not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/usages/:id/tenants",
        alias: "createUsageTenant",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: z
                    .object({
                        contact_id: z
                            .string()
                            .regex(
                                /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                            ),
                    })
                    .passthrough(),
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: UsageTenant,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Usage not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/usages/:usage_id/rents",
        alias: "createUsageRent",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: UsageRentCreateRequest,
            },
            {
                name: "usage_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: UsageRent,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Usage not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/usages/:usage_id/rents",
        alias: "listUsageRents",
        requestFormat: "json",
        parameters: [
            {
                name: "usage_id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(UsageRent),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Usage not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/users/@me/store",
        alias: "getMyStore",
        requestFormat: "json",
        response: UserStore,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/users/@me/store",
        alias: "updateMyStore",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: updateMyStore_Body,
            },
        ],
        response: UserStore,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/waiting-transactions/",
        alias: "listWaitingTransactionsPaginated",
        requestFormat: "json",
        parameters: [
            {
                name: "bank_account_id",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "is_committed",
                type: "Query",
                schema: is_committed,
            },
            {
                name: "offset",
                type: "Query",
                schema: z.number().int().gte(0).optional().default(0),
            },
            {
                name: "limit",
                type: "Query",
                schema: z.number().int().gte(1).lte(100).optional().default(20),
            },
        ],
        response: Paged_WaitingTransaction_,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/waiting-transactions/",
        alias: "createWaitingTransaction",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: WaitingTransactionCreateRequest,
            },
        ],
        response: WaitingTransaction,
        errors: [
            {
                status: 400,
                description: `Invalid IBAN`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Bank account not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/waiting-transactions/commit",
        alias: "commitWaitingTransactions",
        requestFormat: "json",
        parameters: [
            {
                name: "bank_account_id",
                type: "Query",
                schema: parent_id,
            },
            {
                name: "waiting_transaction_ids",
                type: "Query",
                schema: waiting_transaction_ids,
            },
        ],
        response: z.array(FinApiWebform),
        errors: [
            {
                status: 400,
                description: `No waiting transactions found`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Bank account not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/workflows/",
        alias: "listWorkflows",
        requestFormat: "json",
        response: z.array(Workflow),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/workflows/",
        alias: "createWorkflow",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: z.object({ name: z.string().min(1) }).passthrough(),
            },
        ],
        response: Workflow,
        errors: [
            {
                status: 400,
                description: `Workflow with the same name already exists`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/workflows/:id",
        alias: "getWorkflow",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Workflow,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Workflow not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/workflows/:id",
        alias: "patchWorkflow",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: WorkflowPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Workflow,
        errors: [
            {
                status: 400,
                description: `Workflow version not found`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Workflow not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/workflows/:id",
        alias: "deleteWorkflow",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 400,
                description: `A workflow version of this workflow was previously deployed and cannot be deleted.`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Workflow not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "post",
        path: "/workflows/:id/versions",
        alias: "createWorkflowVersion",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: WorkflowVersionCreateRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: Workflow,
        errors: [
            {
                status: 400,
                description: `Workflow version already exists or workflow validation error`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Workflow not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/workflows/:id/versions",
        alias: "listWorkflowVersions",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
        ],
        response: z.array(WorkflowVersion),
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Workflow not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "get",
        path: "/workflows/:id/versions/:version",
        alias: "getWorkflowVersion",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
            {
                name: "version",
                type: "Path",
                schema: z.string(),
            },
        ],
        response: WorkflowVersion,
        errors: [
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Workflow version not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "delete",
        path: "/workflows/:id/versions/:version",
        alias: "deleteWorkflowVersion",
        requestFormat: "json",
        parameters: [
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
            {
                name: "version",
                type: "Path",
                schema: z.string(),
            },
        ],
        response: z.void(),
        errors: [
            {
                status: 400,
                description: `Workflow version was previously deployed and cannot be deleted`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Workflow version not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
    {
        method: "patch",
        path: "/workflows/:id/versions/:version",
        alias: "patchWorkflowVersion",
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: WorkflowVersionPatchRequest,
            },
            {
                name: "id",
                type: "Path",
                schema: z
                    .string()
                    .regex(
                        /^(unt|cnt|ctr|fil|usg|prc|pev|ptk|wfl|wfe|wno|eml|eac|cow|psu|rev|wtr|tsk|tnt|baa|int|spr|acc|art|act|alk|afs|coa|cct|ecp|emp|hof|hor|inv|jrn|jre|lbt|mal|mtr|mrd|pcl|pay|pco|rcl|sps|svp|sub|tcm|tge|txr|bsc|ser|psp|pro|bco|rje|urn|rjd|rld|cpy|dtp|akt|att|cat|jtp|trt|tgt|atp|cta|rtt)_[0-9a-f]{32}$/
                    ),
            },
            {
                name: "version",
                type: "Path",
                schema: z.string(),
            },
        ],
        response: WorkflowVersion,
        errors: [
            {
                status: 400,
                description: `Workflow version was previously deployed and cannot be patched, only nodes or edges set but not both or workflow validation error`,
                schema: z.void(),
            },
            {
                status: 401,
                description: `Unauthorized`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
            {
                status: 404,
                description: `Workflow version not found`,
                schema: z.void(),
            },
            {
                status: 422,
                description: `Validation Error`,
                schema: HTTPValidationError,
            },
            {
                status: 500,
                description: `Internal server error`,
                schema: z.object({ detail: z.string() }).passthrough(),
            },
        ],
    },
]);

export const api = new Zodios("http://localhost:8000", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
    return new Zodios(baseUrl, endpoints, options);
}
