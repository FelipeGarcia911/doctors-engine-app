import React, { useState } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";

import TextField from "./core/fields/Text";
import NumberField from "./core/fields/Number";

import {
  SearchParams,
  SearchResults,
  SearchResultsAPIResponse,
} from "../types/types";

import { SearchDoctor } from "../services/SearchDoctor";

interface SearchFormProps {
  onSearchResults: (results: SearchResults[]) => void;
}

const SearchForm = (props: SearchFormProps) => {
  const { onSearchResults } = props;

  const [firstName, setFirstName] = useState<string | undefined>();
  const [lastName, setLastName] = useState<string | undefined>();
  const [country, setCountry] = useState<string | undefined>();
  const [city, setCity] = useState<string | undefined>();
  const [state, setState] = useState<string | undefined>();
  const [number, setNumber] = useState<number | undefined>();
  const [error, setError] = useState<string | undefined>();

  const getPayload = () => {
    const payload: SearchParams = {
      ...{ ...(number && { number: number.toString() }) },
      ...{ ...(firstName && { first_name: firstName }) },
      ...{ ...(lastName && { last_name: lastName }) },
      ...{ ...(country && { country }) },
      ...{ ...(city && { city }) },
    };

    return payload;
  };

  const handleOnSuccess = (response: SearchResultsAPIResponse) => {
    onSearchResults(response.results);
    setError(undefined);
  };

  const validate = (payload: SearchParams) => {
    let result = true;
    if (Object.keys(payload).length === 0) {
      result = false;
    }
    return result;
  };

  const handleOnSubmit = async () => {
    const payload = getPayload();

    const isValid = validate(payload);
    if (!isValid) {
      setError("Please fill at least one field");
      return;
    }

    try {
      const response = await SearchDoctor(payload);
      if (response) {
        handleOnSuccess(response);
      } else {
        setError("No results found");
      }
    } catch (error) {
      console.error("Error handleOnSubmit:", error);
      setError("An error occurred");
    }
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <NumberField
            label="Number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          {error ? <Typography color="error">{error}</Typography> : null}
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOnSubmit}
            fullWidth
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchForm;
