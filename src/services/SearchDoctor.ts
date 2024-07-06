import { SearchType } from "../constants/enums";
import { SearchParams, SearchResultsAPIResponse } from "../types/types";
import { get } from "./HTTPConnector";

const BASE_ENDPOINT = "search/doctor";

const ENDPOINTS = {
  [SearchType.SIMPLE]: BASE_ENDPOINT,
  [SearchType.FUZZY]: `${BASE_ENDPOINT}/fuzzy`,
  [SearchType.EMBEDDINGS]: `${BASE_ENDPOINT}/embeddings`,
};

export const SearchDoctor = async (
  params: SearchParams,
  type: SearchType
): Promise<SearchResultsAPIResponse | null> => {
  let response: SearchResultsAPIResponse | null = null;
  try {
    const URL = ENDPOINTS[type];
    response = await get(URL, { params });
  } catch (error) {
    console.error("Error SearchDoctor:", error);
    throw error;
  }
  return response;
};
