import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";

import SearchForm from "./SearchForm";
import ResultsTable from "./ResultsTable";
import { SearchResults } from "../types/types";

const SearchUI: React.FC = () => {
  const [data, setData] = useState<SearchResults[]>([]);

  const onSearchResults = (results: SearchResults[]) => {
    setData(results);
  };

  return (
    <Container>
      <Typography variant="h4" textAlign="center" margin={2}>
        NPI Registry Search
      </Typography>
      <SearchForm onSearchResults={onSearchResults} />
      <Box mt={4} />
      <ResultsTable data={data} />
    </Container>
  );
};

export default SearchUI;
