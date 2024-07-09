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
import Toast from "./core/Toast";

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

  const handleOnError = (err: SearchResultsAPIResponse) => {
    const { message, errors } = err;
    let msg = message;
    if (errors) {
      msg = errors
        .map(({ description }, idx) => `${idx + 1}. ${description}`)
        .join(". \n");
    }
    setError(msg);
    setData([]);
  };

  const handleOnClose = () => setError(undefined);

  const handleOnSubmit = async (payload: SearchParams, type: SearchType) => {
    try {
      setLoading(true);
      const response = await SearchDoctor(payload, type);
      if (response) {
        handleOnSuccess(response);
      } else {
        setError("No results found");
      }
    } catch (error: any) {
      handleOnError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container style={{ backgroundColor: "white" }}>
      <Box py={2} mt={2} mb={5}>
        <Typography variant="h4" textAlign="center" margin={2}>
          NPI Registry Search
        </Typography>
        <SearchForm onSubmit={handleOnSubmit} loading={loading} />
        <Box mt={4} />
        <ResultsTable data={data} loading={loading} />
        <Toast
          open={!!error}
          message={error}
          severity={"error"}
          onClose={handleOnClose}
        />
      </Box>
    </Container>
  );
};

export default SearchUI;
