import { SearchType } from "../constants/enums";
import { SearchParams, SearchResultsAPIResponse } from "../types/types";
import { get } from "./HTTPConnector";

const BASE_ENDPOINT = "search/doctor";

const ENDPOINTS = {
  [SearchType.SIMPLE]: BASE_ENDPOINT,
  [SearchType.FUZZY]: `${BASE_ENDPOINT}/fuzzy`,
  [SearchType.EMBEDDINGS]: `${BASE_ENDPOINT}/embeddings`,
};

const handleOn400Error = (error: any) => {
  return error.response.data;
};

export const SearchDoctor = async (
  params: SearchParams,
  type: SearchType
): Promise<SearchResultsAPIResponse | null> => {
  let response: SearchResultsAPIResponse | null = null;
  try {
    const URL = ENDPOINTS[type];
    response = await get(URL, { params });
  } catch (error: any) {
    if (error.code === "ERR_BAD_REQUEST") {
      throw handleOn400Error(error);
    } else {
      throw error;
    }
  }

  return response;
};
