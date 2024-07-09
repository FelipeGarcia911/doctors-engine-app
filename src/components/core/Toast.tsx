import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Typography } from "@mui/material";

interface ToastProps {
  open: boolean;
  message?: string;
  severity?: "success" | "info" | "warning" | "error";
  onClose?: () => void;
}

const Toast = (props: ToastProps) => {
  const { open, message, severity = "error", onClose } = props;
  const show = Boolean(open && message);

  return (
    <Snackbar open={show} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        <Typography style={{ whiteSpace: "pre-line" }}>{message}</Typography>
      </Alert>
    </Snackbar>
  );
};

export default Toast;
