import React from "react";
import {
  Grid,
  Container,
  Box,
  Typography,
  CardContent,
  IconButton,
  Divider,
  Button,
  Tab,
  Link,
  CustomTabPanel,
} from "@mui/material";
import theme from "../theme";
import {
  YouTube,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import Logo from "../img/V-mark-logo-horizontal-w.png";
import PlayStore from "../img/google-play.png";
import AppStore from "../img/app-store.png";

const style = {
  heading: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 600,
    fontSize: "16px",
    textAlign: "left",
    color: "rgba(255,255,255, 0.8)",
    marginBottom: "5px",
  },
  subHeading: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontSize: "14.08px",
    textAlign: "left",
    color: "rgba(255,255,255, 0.8)",
  },
};

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#1D1D1D" }}>
      {/* <Container maxWidth={"lg"} sx={{ position: "relative", py: 2 }}>
        <div
          style={{
            filter: "brightness(0) invert(1)",
          }}
        >
          <img src={Logo} height={70} />
        </div>
      </Container>
      <Divider
        sx={{
          borderColor: "#4a4a4a",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      /> */}

      <Container maxWidth={"lg"} sx={{ position: "relative" }}>
        <Grid container spacing={3} py={3}>
          <Grid item xs={12} lg={6} md={4} sm={12} sx={{}}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                px: 0,
                py: 1,
              }}
            >
              <IconButton
                href="https://www.linkedin.com/company/v-marc/"
                size="small"
                aria-label="LinkedIn"
                sx={{ color: "rgba(255,255,255, 0.8)", mr: 1 }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/vmarcindia?igshid=NDk5N2NlZjQ%3D"
                size="small"
                aria-label="Instagram"
                sx={{ color: "rgba(255,255,255, 0.8)", mr: 1 }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://twitter.com/VMARCwires"
                size="small"
                aria-label="Twitter"
                sx={{ color: "rgba(255,255,255, 0.8)", mr: 1 }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="https://www.youtube.com/@v-marcwirescables8469/videos"
                size="small"
                aria-label="YouTube"
                sx={{ color: "rgba(255,255,255, 0.8)", mr: 1 }}
              >
                <YouTube />
              </IconButton>
              <IconButton
                href="https://www.facebook.com/profile.php?id=100068702384250"
                size="small"
                aria-label="Facebook"
                sx={{ color: "rgba(255,255,255, 0.8)", mr: 1 }}
              >
                <Facebook />
              </IconButton>
            </Box>

            <Typography style={style.subHeading}>
              Download V-Marc Utsav App
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                py: 2,
              }}
            >
              <Button href="https://play.google.com/store/apps/details?id=com.unotag.vmarc">
                <img
                  src={PlayStore}
                  width={120}
                  style={{ marginRight: "5px" }}
                />
              </Button>
              <img src={AppStore} width={120} />
            </Box>
            {/* <Typography variant="h5" color={"#A9A27B"}>
          {position}
        </Typography> */}
          </Grid>
          <Grid item xs={12} lg={3} md={4} sm={6} sx={{}}>
            <Box>
              <Typography style={style.heading} color="white">
                Registered Office
              </Typography>
              <Typography style={{ ...style.subHeading, marginBottom: "7px" }}>
                Plot No. 3, 4, 18 & 20 A, Sector – IIDC, SIDCUL, Haridwar,
                Uttarakhand – 249403
              </Typography>
              <Typography style={style.subHeading}>
                <b>Phone:</b>
                <Link href="tel:01334-239638" color="inherit">
                  01334-239638
                </Link>
                <br />
                <b>Customer Support:</b>{" "}
                <Link href="tel:70555 21808 " color="inherit">
                  70555 21808
                </Link>
                <br />
                <b>Email:</b>
                <Link href="mailto: info@v-marc.in" color="inherit">
                  info@v-marc.in
                </Link>{" "}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={3} md={4} sm={6} sx={{}}>
            <Box>
              <Typography style={style.heading} color="white">
                Noida Office
              </Typography>
              <Typography style={{ ...style.subHeading, marginBottom: "7px" }}>
                Trapezoid IT Park, 3rd Floor, C-27, C Block,Phase 2, Sector-62,
                Noida, Uttar Pradesh - 201309
              </Typography>
              <Typography style={style.subHeading}>
                <b>Email:</b>{" "}
                <Link href="mailto:sales@v-marc.in" color="inherit">
                  sales@v-marc.in
                </Link>
                <br />
                <Link href="mailto:salesproject@v-marc.in" color="inherit">
                  salesproject@v-marc.in
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{}}>
            <Typography style={style.subHeading}>
              ©V-MARC India Limited. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
