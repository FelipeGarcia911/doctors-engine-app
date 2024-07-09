import React, { useMemo, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import InputField from "./core/fields/Input";

import { SearchParams } from "../types/types";

import Button from "./core/Button";
import SelectField from "./core/fields/Select";
import { SearchType } from "../constants/enums";
import validate from "../utils/validation";

interface SearchFormProps {
  onSubmit: (payload: SearchParams, type: SearchType) => void;
  loading?: boolean;
}

const LIMITS = [
  { label: "5", value: "5" },
  { label: "10", value: "10" },
  { label: "15", value: "15" },
  { label: "20", value: "20" },
  { label: "50", value: "50" },
];

const SearchForm = (props: SearchFormProps) => {
  const { onSubmit, loading } = props;

  const [data, setData] = useState<SearchParams>({});
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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async () => {
    const payload = getPayload();

    const { hasError, message } = validate(payload);
    if (hasError) {
      setError(message);
      return;
    }

    setError(null);
    onSubmit && onSubmit(payload, type);
  };

  const getPayload = () => {
    const {
      number,
      first_name,
      last_name,
      country_code,
      state,
      city,
      postal_code,
    } = data || {};
    const payload: SearchParams = {
      ...{ ...(number && { number: number.toString() }) },
      ...{ ...(first_name && { first_name }) },
      ...{ ...(last_name && { last_name }) },
      ...{ ...(country_code && { country_code }) },
      ...{ ...(state && { state }) },
      ...{ ...(city && { city }) },
      ...{ ...(postal_code && { postal_code }) },
      ...{ ...(limit && { limit: parseInt(limit) }) },
    };

    return payload;
  };

  const handleOnClear = () => {
    setData({});
    setError(null);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField
            name="number"
            type="number"
            label="Number"
            value={data?.number || ""}
            onChange={(e) => handleOnChange(e)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name="first_name"
            label="First Name"
            value={data?.first_name || ""}
            onChange={(e) => handleOnChange(e)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name="last_name"
            label="Last Name"
            value={data?.last_name || ""}
            onChange={(e) => handleOnChange(e)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <InputField
            name="country_code"
            label="Country Code"
            value={data?.country_code || ""}
            onChange={(e) => handleOnChange(e)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <InputField
            name="state"
            label="State"
            value={data?.state || ""}
            onChange={(e) => handleOnChange(e)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <InputField
            name="city"
            label="City"
            value={data?.city || ""}
            onChange={(e) => handleOnChange(e)}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <InputField
            name="postal_code"
            label="Postal Code"
            value={data?.postal_code || ""}
            onChange={(e) => handleOnChange(e)}
          />
        </Grid>

        <Box mt={15} />

        <Grid item xs={12} md={6}>
          <SelectField
            onChange={(e) => setLimit(e.target.value)}
            value={limit}
            label="Total Results"
            options={LIMITS}
          ></SelectField>
        </Grid>
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} lg={10}>
          <Button
            onClick={handleOnSubmit}
            loading={loading}
            variant="contained"
            fullWidth
          >
            Search
          </Button>
        </Grid>
        <Grid item xs={12} lg={2}>
          <Button
            onClick={handleOnClear}
            loading={loading}
            variant="outlined"
            fullWidth
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchForm;
