import React from "react";
import { Box, Typography, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import theme from "../theme";

const EventCard = ({ event }) => {
  const handleOpenPDF = (link) => {
    console.log("Box clicked:", link);
    const pdfPath =
      "/vmarc/Financial-Information/2017-18/Balance-Sheet-17-18.pdf";
    window.open(link, "_blank");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255, 0.35)", // Background color
        color: "#fff", // Text color
        padding: "8px 16px",
        borderRadius: "4px",
        marginBottom: "8px",
      }}
    >
      <Typography variant="body1" sx={{ width: "100%" }}>
        {event.title}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          width: "40%",
          bgcolor: "#363636",
          color: "#8EA1FF",
          "&:hover": {
            bgcolor: "white",
            color: theme.palette.secondary.main,
          },
        }}
        startIcon={<VisibilityIcon />}
        onClick={() => {
          handleOpenPDF(event.link);
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        View PDF
      </Button>
    </Box>
  );
};

export default EventCard;
