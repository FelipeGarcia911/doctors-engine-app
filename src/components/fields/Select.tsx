import React from "react";
import { TextField, MenuItem } from "@mui/material";

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<{ value: any }>) => void;
  options: { label: string; value: string }[];
  error?: string;
}

const SelectField = (props: SelectFieldProps) => {
  const { label, value, onChange, error, options } = props;
  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error}
      variant="outlined"
      fullWidth
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectField;
