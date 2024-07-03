import React from "react";
import { TextField, Button, Grid } from "@mui/material";

interface SearchFieldProps {
  label: string;
  value?: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  error?: string;
}

const SearchField = (props: SearchFieldProps) => {
  const { label, value, onChange, error, onSearch } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <TextField
          label={label}
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error}
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={onSearch}
          fullWidth
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchField;
