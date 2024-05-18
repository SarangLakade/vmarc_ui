import * as React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  Tabs,
  Tab,
  CustomTabPanel,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import backgroundImage from "../img/earth.png";
import Frame2 from "../img/Frame2.png";
import {
  PlayCircleFilled,
  Facebook,
  Twitter,
  Google,
  Search,
} from "@mui/icons-material";
import theme from "../theme";
import ProductCard from "../component/ProductCard";

const HomePage = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box
        style={{
          position: "absolute",
          borderRadius: "0px 20.18px 20.18px 0",
          padding: "25px 15px",
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
        <Facebook fontSize="large" style={{ color: "white", padding: 10 }} />
        <Twitter fontSize="large" style={{ color: "white", padding: 10 }} />
        <Google fontSize="large" style={{ color: "white", padding: 10 }} />
        {/* <Behance /> */}
        <Facebook fontSize="large" style={{ color: "white", padding: 10 }} />
      </Box>
      <Container maxWidth={"lg"} sx={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "-395px",
            right: "141px",
            width: "775px",
            height: "1018px",
            overflow: "visible",
            zIndex: -1,
          }}
        >
          <img
            src={backgroundImage}
            alt="background"
            style={{
              width: "1848px",
              height: "1168px",
              objectFit: "fill",
              transform: `rotate(155deg)`,
            }}
          />
        </div>
        <Grid
          container
          spacing={2}
          sx={{ color: "white", alignItems: "center" }}
        >
          <Grid item xs={12} sx={{ my: 25 }}>
            <Typography variant="h6" component="div">
              Experience Excellence with Us
            </Typography>
            <Typography
              variant="hb1"
              component="div"
              sx={{ marginY: 3, marginBottom: 4 }}
            >
              Connecting & <br />
              Enlightening Lives
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", mt: 3 }}>
              <Button variant="outlined" sx={{ mr: 2 }}>
                Our Services
              </Button>
              <Button variant="contained" startIcon={<PlayCircleFilled />}>
                Watch Video
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ color: "white", my: 5 }}>
          <Grid item sm={12} lg={6} sx={{}}>
            <Typography variant="hb3" component="div">
              Premium & Durable Wires and cables
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ marginY: 3, marginBottom: 4 }}
            >
              V-Marc is one of the global leader in providing reliable and
              consistent quality of products, we enable our clients to achieve
              more and outperform their competitors and stay ahead of the
              innovation curve. The growth of the latter is the first stepping
              stone towards the growth of the company and hence customer’s
              satisfaction is its prime objective. <br />
              <br /> V-Marc has earned the trust and reputation in India by
              winning the customer’s confidence.
            </Typography>
            <Box display={"flex"} flexDirection={"row"}>
              <Grid
                item
                xs={6}
                sx={{
                  backgroundColor: "#D9D9D94A",
                  padding: 1,
                  px: 2,
                  borderBottom: "4px solid #F24535",
                  mr: 2,
                }}
                flexDirection={"row"}
              >
                <Typography variant="hb4" component="div">
                  10+
                </Typography>
                <Typography variant="h5" component="div" align="center">
                  years of delivering
                </Typography>
                <Typography variant="h5" component="div" align="center">
                  EXCELLENCE
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  backgroundColor: "#D9D9D94A",
                  padding: 1,
                  px: 2,
                  borderBottom: "4px solid #F24535",
                }}
                flexDirection={"row"}
              >
                <Typography variant="hb4" component="div">
                  10+
                </Typography>
                <Typography variant="h5" component="div" align="center">
                  years of delivering
                </Typography>
                <Typography variant="h5" component="div" align="center">
                  EXCELLENCE
                </Typography>
              </Grid>
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            lg={6}
            sx={{
              alignContent: "center",
            }}
          >
            <img
              src={Frame2}
              alt="background"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                // transform: `rotate(155deg)`,
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Read More
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ color: "white", my: 3 }}>
          <Grid item sm={12} lg={6} sx={{}}>
            <Typography variant="hb4" component="div">
              Our Products
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ marginY: 3, marginBottom: 4 }}
            >
              V-Marc Manufacturing Unit is well equiped with modern plant and
              machinery and have complete testing equiptment backed up with well
              qualified and trained personnel. <br /> <br />
              V-Marc 3 Core Flat Cables are used by quality conscious electrical
              contractors and recommended by leading consultants, Builders for
              projects, domestic, industrial & agricultural use
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}
            lg={6}
            sx={{
              alignContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <TextField
                fullWidth
                id="outlined-basic"
                label="Search"
                variant="filled"
                color="primary"
                InputLabelProps={{
                  sx: {
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    width: "100%",
                  },
                }}
                sx={{
                  backgroundColor: "rgba(243, 243, 243, 0.25)",
                  mr: 2,
                  "& .MuiInputLabel-root": {
                    color: "white", // Change label color
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    width: "100%",
                    justifyContent: "center",
                    "&.Mui-focused, &.MuiFormLabel-filled": {
                      left: 0,
                      top: 0,
                      transform: "translate(14px, 5px) scale(0.75)",
                      textAlign: "left",
                      transformOrigin: "top left",
                    },
                  },
                  "& .MuiFilledInput-root:before": {
                    borderBottomColor: "rgba(0, 0, 0, 0.42)", // Bottom border color before focus
                  },
                  "& .MuiFilledInput-root:hover:before": {
                    borderBottomColor: "rgba(0, 0, 0, 0.87)", // Bottom border color on hover
                  },
                  "& .MuiFilledInput-root:after": {
                    borderBottomColor: "primary.main", // Bottom border color after focus
                  },
                }}
              />
              <Button variant="contained" color="secondary">
                <Search></Search>
              </Button>{" "}
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ color: "white", my: 3 }}>
          <Grid item sm={12} sx={{}}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  sx={{
                    "& .MuiTab-root": {
                      color: "white", // Color of unselected tabs
                      "&.Mui-selected": {
                        color: "primary.main", // Color of the selected tab
                      },
                    },
                  }}
                >
                  <Tab label="Cable" value="1" />
                  <Tab label="Switches" value="2" />
                  <Tab label="MCB's" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ paddingX: 0 }}>
                <Grid container spacing={3} sx={{}}>
                  <Grid item xs={12} md={6} lg={4} sx={{}}>
                    <ProductCard
                      heading={"Cable"}
                      subHeading={"VIEW PRODUCT"}
                      paragraph={
                        "These cables are used for electric power transmission at high voltage. HT power cables comes in different types which have a variety of applications in ignition systems, instruments and direct and alternating current power transmission"
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} sx={{}}>
                    <ProductCard
                      heading={"Cable"}
                      subHeading={"VIEW PRODUCT"}
                      paragraph={
                        "These cables are used for electric power transmission at high voltage. HT power cables comes in different types which have a variety of applications in ignition systems, instruments and direct and alternating current power transmission"
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} sx={{}}>
                    <ProductCard
                      heading={"Cable"}
                      subHeading={"VIEW PRODUCT"}
                      paragraph={
                        "These cables are used for electric power transmission at high voltage. HT power cables comes in different types which have a variety of applications in ignition systems, instruments and direct and alternating current power transmission"
                      }
                    />
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="2" sx={{ paddingX: 0 }}>
                <Grid container spacing={3} sx={{}}>
                  <Grid item xs={12} md={6} lg={4} sx={{}}>
                    <ProductCard
                      heading={"Switches"}
                      subHeading={"VIEW PRODUCT"}
                      paragraph={
                        "These cables are used for electric power transmission at high voltage. HT power cables comes in different types which have a variety of applications in ignition systems, instruments and direct and alternating current power transmission"
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} sx={{}}>
                    <ProductCard
                      heading={"Switches"}
                      subHeading={"VIEW PRODUCT"}
                      paragraph={
                        "These cables are used for electric power transmission at high voltage. HT power cables comes in different types which have a variety of applications in ignition systems, instruments and direct and alternating current power transmission"
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} sx={{}}>
                    <ProductCard
                      heading={"Switches"}
                      subHeading={"VIEW PRODUCT"}
                      paragraph={
                        "These cables are used for electric power transmission at high voltage. HT power cables comes in different types which have a variety of applications in ignition systems, instruments and direct and alternating current power transmission"
                      }
                    />
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="3" sx={{ paddingX: 0 }}>
                {" "}
                <Grid container spacing={3} sx={{}}>
                  <Grid item xs={12} md={6} lg={4} sx={{}}>
                    <ProductCard
                      heading={"MCB's"}
                      subHeading={"VIEW PRODUCT"}
                      paragraph={
                        "These cables are used for electric power transmission at high voltage. HT power cables comes in different types which have a variety of applications in ignition systems, instruments and direct and alternating current power transmission"
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} sx={{}}>
                    <ProductCard
                      heading={"MCB's"}
                      subHeading={"VIEW PRODUCT"}
                      paragraph={
                        "These cables are used for electric power transmission at high voltage. HT power cables comes in different types which have a variety of applications in ignition systems, instruments and direct and alternating current power transmission"
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} sx={{}}>
                    <ProductCard
                      heading={"MCB's"}
                      subHeading={"VIEW PRODUCT"}
                      paragraph={
                        "These cables are used for electric power transmission at high voltage. HT power cables comes in different types which have a variety of applications in ignition systems, instruments and direct and alternating current power transmission"
                      }
                    />
                  </Grid>
                </Grid>
              </TabPanel>
            </TabContext>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
