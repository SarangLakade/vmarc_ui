import React, { useState } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import SEBI from "../../img/invest1.png";

import theme from "../../theme";
import backgroundImage from "../../img/earth1.png";

import useMediaQuery from "@mui/material/useMediaQuery";

const RegistrarDetailsPage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: isMobile ? 0 : "-10%",
          left: 0,
          width: "100%", // Full screen width
          overflow: "hidden", // Hide overflow
          zIndex: -1,
        }}
      >
        <img
          src={backgroundImage}
          alt="background"
          style={{
            width: "100%", // Full width of container
            height: "auto", // Maintain aspect ratio
            objectFit: "cover", // Ensure the image is contained within the container
            // transform: `rotate(270deg)`, // Rotate the image if needed
          }}
        />
      </div>
      <Container maxWidth={"lg"} sx={{ position: "relative" }}>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            my: 20,
          }}
        >
          <Box
            sx={{ color: "#C3C3C3" }}
            display={"flex"}
            flexDirection={"column"}
          >
            {/* <Typography variant="hb3">
              Disclosure As Per Regulation 46 of the
            </Typography> */}
            <Typography variant="hb1" fontWeight={800}>
              Details Of Registrar And Share Transfer Agents
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <img src={SEBI}></img> */}
          </Box>
        </Grid>
        <Grid item sm={12} sx={{ mb: 10 }}>
          <Typography variant="h4" color={"white"}>
            Bigshare Services Pvt. Ltd.
            <br />
            <br /> Office No S6-2, 6th floor Pinnacle Business Park,
            <br />
            <br /> Next to Ahura Centre, Mahakali Caves Road, Andheri (East),
            <br />
            <br />
            Mumbai - 400093, India <br />
            <br />
            Ph. 022 62638200, 022 62638202 <br />
            <br />
            Fax No: :+91 22 62638299
          </Typography>
        </Grid>
      </Container>
    </>
  );
};

export default RegistrarDetailsPage;
