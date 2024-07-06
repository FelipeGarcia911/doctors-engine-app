import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";

import SearchForm from "./SearchForm";
import ResultsTable from "./ResultsTable";
import {
  SearchParams,
  SearchResults,
  SearchResultsAPIResponse,
} from "../types/types";
import { SearchDoctor } from "../services/SearchDoctor";
import { SearchType } from "../constants/enums";

const SearchUI: React.FC = () => {
  const [data, setData] = useState<SearchResults[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const onSearchResults = (results: SearchResults[]) => {
    setData(results);
  };

  const handleOnSuccess = (response: SearchResultsAPIResponse) => {
    onSearchResults(response.results);
    setError(undefined);
  };

  const handleOnSubmit = async (payload: SearchParams, type: SearchType) => {
    try {
      setLoading(true);
      const response = await SearchDoctor(payload, type);
      if (response) {
        handleOnSuccess(response);
      } else {
        setError("No results found");
      }
    } catch (error) {
      console.error("Error handleOnSubmit:", error);
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4" textAlign="center" margin={2}>
        NPI Registry Search
      </Typography>
      <SearchForm onSubmit={handleOnSubmit} loading={loading} />
      <Box mt={4} />
      <ResultsTable data={data} loading={loading} />
    </Container>
  );
};

export default SearchUI;
