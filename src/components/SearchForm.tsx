import React, { useMemo, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import TextField from "./core/fields/Text";
import NumberField from "./core/fields/Number";

import { SearchParams } from "../types/types";

import Button from "./core/Button";
import SelectField from "./core/fields/Select";
import { SearchType } from "../constants/enums";

interface SearchFormProps {
  onSubmit: (payload: SearchParams, type: SearchType) => void;
  loading?: boolean;
}

const LIMITS = [
  { label: "5", value: "5" },
  { label: "10", value: "10" },
  { label: "15", value: "15" },
  { label: "20", value: "20" },
];

const SearchForm = (props: SearchFormProps) => {
  const { onSubmit, loading } = props;

  const [firstName, setFirstName] = useState<string | null>();
  const [lastName, setLastName] = useState<string | null>();
  const [country, setCountry] = useState<string | null>();
  const [city, setCity] = useState<string | null>();
  const [state, setState] = useState<string | null>();
  const [number, setNumber] = useState<number | null>();
  const [error, setError] = useState<string | null>();

  const [type, setType] = useState<SearchType>(SearchType.SIMPLE);
  const [limit, setLimit] = useState<string>(LIMITS[0].value);

  const SEARCH_TYPES = useMemo(
    () =>
      Object.values(SearchType).map((value) => {
        return { label: value, value };
      }),
    []
  );

  const validate = (payload: SearchParams) => {
    let result = true;
    if (Object.keys(payload).length <= 1) {
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

    setError(null);
    onSubmit && onSubmit(payload, type);
  };

  const getPayload = () => {
    const payload: SearchParams = {
      ...{ ...(number && { number: number.toString() }) },
      ...{ ...(firstName && { first_name: firstName }) },
      ...{ ...(lastName && { last_name: lastName }) },
      ...{ ...(country && { country }) },
      ...{ ...(state && { state }) },
      ...{ ...(city && { city }) },
      ...{ ...(limit && { limit: parseInt(limit) }) },
    };

    return payload;
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

        <Box mt={15} />

        <Grid item xs={6}>
          <SelectField
            onChange={(e) => setLimit(e.target.value)}
            value={limit}
            label="Total Results"
            options={LIMITS}
          ></SelectField>
        </Grid>
        <Grid item xs={6}>
          <SelectField
            onChange={(e) => setType(e.target.value as SearchType)}
            value={type}
            label="Search Type"
            options={SEARCH_TYPES}
          ></SelectField>
        </Grid>
        <Grid item xs={12}>
          {error ? <Typography color="error">{error}</Typography> : null}
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={handleOnSubmit}
            loading={loading}
            variant="contained"
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
