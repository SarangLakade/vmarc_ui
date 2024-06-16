import React from "react";
import { Box, IconButton } from "@mui/material";
import {
  Facebook,
  Twitter,
  YouTube,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import theme from "../theme";

const SocialMediaBox = () => {
  return (
    <Box
      style={{
        position: "fixed",
        borderRadius: "0px 20.18px 20.18px 0",
        padding: "15px 8px",
        gap: "13.45px",
        backgroundColor: "#1B1B1B",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
      }}
      sx={{ display: { xs: "none", lg: "flex" } }}
    >
      <IconButton
        style={{ padding: 10 }}
        href="https://www.linkedin.com/company/v-marc/"
        // Change color to primary on hover
      >
        <LinkedIn
          // fontSize="large"

          sx={{
            fontSize: 33,
            color: "white",
            "&:hover": { color: theme.palette.primary.main },
          }}
        />
      </IconButton>
      <IconButton
        style={{ padding: 10 }}
        href="https://www.instagram.com/vmarcindia?igshid=NDk5N2NlZjQ%3D"
      >
        <Instagram
          // fontSize="large"
          sx={{
            color: "white",
            fontSize: 33,
            "&:hover": { color: theme.palette.primary.main },
          }}
        />
      </IconButton>
      <IconButton
        style={{ padding: 10 }}
        href="https://www.youtube.com/@v-marcwirescables8469/videos"
      >
        <YouTube
          // fontSize="large"
          sx={{
            color: "white",
            fontSize: 33,
            "&:hover": { color: theme.palette.primary.main },
          }}
        />
      </IconButton>
      <IconButton
        style={{ padding: 10 }}
        href="https://www.facebook.com/profile.php?id=100068702384250"
      >
        <Facebook
          // fontSize="large"
          sx={{
            color: "white",
            fontSize: 33,
            "&:hover": { color: theme.palette.primary.main },
          }}
        />
      </IconButton>
      <IconButton style={{ padding: 10 }} href="https://twitter.com/VMARCwires">
        <Twitter
          // fontSize="large"
          sx={{
            color: "white",
            fontSize: 33,
            "&:hover": { color: theme.palette.primary.main },
          }}
        />
      </IconButton>
    </Box>
  );
};

export default SocialMediaBox;
