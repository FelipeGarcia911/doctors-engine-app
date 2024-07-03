export interface SearchParams {
  address_purpose?: string;
  city?: string;
  country_code?: string;
  enumeration_type?: string;
  first_name?: string;
  last_name?: string;
  limit?: number;
  name_purpose?: string;
  number?: string;
  organization_name?: string;
  postal_code?: string;
  pretty?: boolean;
  skip?: number;
  state?: string;
  taxonomy_description?: string;
  use_first_name_alias?: boolean;
  version?: string;
}

export interface SearchResults {
  created_epoch: string;
  enumeration_type: string;
  last_updated_epoch: string;
  number: string;
  addresses: Address[];
  basic: BasicInfo;
  taxonomies: Taxonomy[];
  identifiers: Identifier[];
}

export interface Address {
  country_code: string;
  country_name: string;
  address_purpose: string;
  address_type: string;
  address_1: string;
  city: string;
  state: string;
  postal_code: string;
  telephone_number: string;
  fax_number: string;
}

export interface BasicInfo {
  first_name: string;
  last_name: string;
  middle_name: string;
  credential: string;
  sole_proprietor: string;
  gender: string;
  enumeration_date: string;
  last_updated: string;
  status: string;
  name_prefix: string;
  name_suffix: string;
}

export interface Taxonomy {
  code: string;
  taxonomy_group: string;
  desc: string;
  state: string;
  license: string;
  primary: boolean;
}

export interface Identifier {
  code: string;
  desc: string;
  issuer: string;
  identifier: string;
  state: string;
}
