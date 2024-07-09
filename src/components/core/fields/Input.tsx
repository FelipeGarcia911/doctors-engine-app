import React from "react";
import MUITextField from "@mui/material/TextField";

interface TextFieldProps {
  label: string;
  value?: string | number | undefined | null;
  name?: string;
  type?: "text" | "number" | "password" | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField = (props: TextFieldProps) => {
  const { label, value, onChange, error, name, type = "text" } = props;

  return (
    <MUITextField
      type={type}
      name={name}
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

export default InputField;
