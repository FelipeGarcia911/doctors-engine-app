import React from "react";
import MUITextField from "@mui/material/TextField";

interface TextFieldProps {
  label: string;
  value?: string | undefined | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const TextField = (props: TextFieldProps) => {
  const { label, value, onChange, error } = props;

  return (
    <MUITextField
      label={label}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error}
      variant="outlined"
      fullWidth
    />
  );
};

export default TextField;
