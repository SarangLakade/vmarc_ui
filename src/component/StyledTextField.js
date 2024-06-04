import React from "react";
import { TextField } from "@mui/material";

const StyledTextField = ({ label, name, formik, ...props }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      InputLabelProps={{
        style: { color: "#c3c3c3" },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#424242",
          },
          "&:hover fieldset": {
            borderColor: "#fff",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#fff",
          },
          "& input": {
            color: "#fff",
          },
        },
        "& .MuiInputBase-multiline": {
          color: "#fff",
        },
      }}
      {...props}
    />
  );
};

export default StyledTextField;
