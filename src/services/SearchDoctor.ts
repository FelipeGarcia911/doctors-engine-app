import { SearchParams, SearchResults } from "../types/types";
import { get } from "./HTTPConnector";

const ENDPOINT = "search/doctor/";

export const SearchDoctor = async (
  params: SearchParams
): Promise<SearchResults | null> => {
  let response: SearchResults | null = null;
  try {
    response = await get(ENDPOINT, { params });
  } catch (error) {
    console.error("Error SearchDoctor:", error);
    throw error;
  }
  return response;
};
