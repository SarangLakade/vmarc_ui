import React from "react";
import {
  Card,
  CardMedia,
  Box,
  Typography,
  CardContent,
  IconButton,
  Tabs,
  Tab,
  CustomTabPanel,
} from "@mui/material";
import theme from "../theme";

const CommitteeMemberCard = ({ name, position, designation }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box>
        <Typography variant="h3" fontWeight={400}>
          {name}
        </Typography>
        <Typography variant="h5" color={"#A9A27B"}>
          {position}
        </Typography>
      </Box>
      <Typography variant="h3" fontWeight={400} mr={2}>
        {designation}
      </Typography>
    </Box>
  );
};

export default CommitteeMemberCard;
