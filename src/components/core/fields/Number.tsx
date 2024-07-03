import React from "react";
import TextFied from "@mui/material/TextField";

interface NumberFieldProps {
  label: string;
  value?: number | undefined  | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const NumberField = (props: NumberFieldProps) => {
  const { label, value, onChange, error } = props;
  return (
    <TextFied
      label={label}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error}
      variant="outlined"
      fullWidth
      type="number"
    />
  );
};

export default NumberField;
