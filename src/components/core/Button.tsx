import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import Loader from "./Loader";

interface ButtonProps extends MuiButtonProps {
  loading?: boolean;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { children, onClick, loading } = props;

  return (
    <MuiButton onClick={onClick} disabled={loading} {...props}>
      {loading ? <Loader /> : children}
    </MuiButton>
  );
};

export default Button;
