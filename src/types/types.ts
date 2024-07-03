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

export interface SearchResultsAPIResponse {
  result_count: number;
  results: SearchResults[];
}

export interface SearchResults {
  created_epoch: string;
  enumeration_type: string;
  last_updated_epoch: string;
  number: string;
  addresses: Address[];
  basic: Basic;
  taxonomies: Taxonomy[];
}

export interface Address {
  address_1: string;
  address_purpose: string;
  address_type: string;
  city: string;
  country_code: string;
  country_name: string;
  fax_number?: string;
  postal_code: string;
  state: string;
  telephone_number: string;
}

export interface Basic {
  authorized_official_first_name: string;
  authorized_official_last_name: string;
  authorized_official_name_prefix?: string;
  authorized_official_name_suffix?: string;
  authorized_official_telephone_number: string;
  authorized_official_title_or_position: string;
  enumeration_date: string;
  last_updated: string;
  organization_name: string;
  organizational_subpart: string;
  status: string;
}

export interface Taxonomy {
  code: string;
  desc?: string | null;
  license?: string | null;
  primary: boolean;
  state?: string | null;
  taxonomy_group?: string;
}
