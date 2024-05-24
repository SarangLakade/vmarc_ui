import React from "react";
import { Divider, Box, Typography } from "@mui/material";

const CustomDivider = ({ title }) => {
  return (
    <Box sx={{ position: "relative", my: 4, mt: 10 }}>
      <Divider
        sx={{
          width: "100%",
          borderTop: "1px dotted #656565",
          borderBottom: "none", // Remove default border
          mt: 1, // Add margin top for spacing
        }}
      />
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: "50%", // Adjust based on Divider height
          transform: "translateY(-50%)",
          paddingRight: 1, // Adjust padding as needed
          backgroundColor: "#2B2B2B",
          color: "white",
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "20px",
            fontFamily: "Poppins, sans-serif",
            color: "#D4D4D4",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomDivider;
