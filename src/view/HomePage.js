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
  Fade,
  Fab,
  IconButton,
  colors,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import backgroundImage from "../img/homeEarth.png";
import Ellipse from "../img//Ellipse.png";
import Frame2 from "../img/Frame2.png";
import {
  PlayCircleFilled,
  Facebook,
  Twitter,
  Google,
  Search,
  ArrowUpward,
  YouTube,
  Instagram,
  LinkedIn,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import theme from "../theme";
import ProductCard from "../component/ProductCard";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import { ReactComponent as MySVG } from "../img/Group 95.svg";

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const HomePage = ({ props }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLg = useMediaQuery(theme.breakpoints.down("xl"));

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const svg =
    "data:image/svg+xml,%3Csvg%20width%3D%22176%22%20height%3D%22849%22%20viewBox%3D%220%200%20176%20849%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20filter%3D%22url(%23filter0_di_0_270)%22%3E%3Cpath%20d%3D%22M151.088%2025.1958V97.1607C151.088%20103.847%20145.668%20109.267%20138.982%20109.267H21.282C14.5959%20109.267%209.17578%20114.687%209.17578%20121.373V641.269V765.695V839.677%22%20stroke%3D%22url(%23paint0_linear_0_270)%22%20stroke-width%3D%224.03542%22%20stroke-linecap%3D%22round%22/%3E%3C/g%3E%3Cg%20filter%3D%22url(%23filter1_dd_0_270)%22%3E%3Ccircle%20cx%3D%22151.761%22%20cy%3D%2225.1958%22%20r%3D%224.03542%22%20fill%3D%22white%22/%3E%3C/g%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_di_0_270%22%20x%3D%220.432264%22%20y%3D%2216.4523%22%20width%3D%22159.399%22%20height%3D%22831.968%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22/%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22/%3E%3CfeOffset/%3E%3CfeGaussianBlur%20stdDeviation%3D%223.36285%22/%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22/%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.6%200%200%200%200%200.282353%200%200%200%200%200.984314%200%200%200%201%200%22/%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_0_270%22/%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_0_270%22%20result%3D%22shape%22/%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22/%3E%3CfeOffset/%3E%3CfeGaussianBlur%20stdDeviation%3D%222.69028%22/%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22/%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.9%200%22/%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect2_innerShadow_0_270%22/%3E%3C/filter%3E%3Cfilter%20id%3D%22filter1_dd_0_270%22%20x%3D%22127.548%22%20y%3D%220.983316%22%20width%3D%2248.425%22%20height%3D%2248.425%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22/%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22/%3E%3CfeMorphology%20radius%3D%222.69028%22%20operator%3D%22dilate%22%20in%3D%22SourceAlpha%22%20result%3D%22effect1_dropShadow_0_270%22/%3E%3CfeOffset/%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22/%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.643137%200%200%200%200%200.211765%200%200%200%200%200.976471%200%200%200%201%200%22/%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_0_270%22/%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22/%3E%3CfeOffset/%3E%3CfeGaussianBlur%20stdDeviation%3D%2210.0885%22/%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22/%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.839216%200%200%200%200%200.239216%200%200%200%200%200.435294%200%200%200%201%200%22/%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect1_dropShadow_0_270%22%20result%3D%22effect2_dropShadow_0_270%22/%3E%3";

  return (
    <div style={{ position: "relative" }}>
      <Box
        style={{
          position: "fixed",
          borderRadius: "0px 20.18px 20.18px 0",
          padding: "20px 8px",
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
            fontSize="large"
            sx={{
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
            fontSize="large"
            sx={{
              color: "white",
              "&:hover": { color: theme.palette.primary.main },
            }}
          />
        </IconButton>
        <IconButton
          style={{ padding: 10 }}
          href="https://www.youtube.com/@v-marcwirescables8469/videos"
        >
          <YouTube
            fontSize="large"
            sx={{
              color: "white",
              "&:hover": { color: theme.palette.primary.main },
            }}
          />
        </IconButton>
        <IconButton
          style={{ padding: 10 }}
          href="https://www.facebook.com/profile.php?id=100068702384250"
        >
          <Facebook
            fontSize="large"
            sx={{
              color: "white",
              "&:hover": { color: theme.palette.primary.main },
            }}
          />
        </IconButton>
        <IconButton
          style={{ padding: 10 }}
          href="https://twitter.com/VMARCwires"
        >
          <Twitter
            fontSize="large"
            sx={{
              color: "white",
              "&:hover": { color: theme.palette.primary.main },
            }}
          />
        </IconButton>
      </Box>

      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            // height: "100%",
            overflow: "visible",
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
            }}
          />
        </div>
      </div>

      <Container maxWidth={"lg"}>
        <div id="back-to-top-anchor" />
        <Grid
          container
          spacing={2}
          sx={{
            color: "white",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: -180,
              width: "100%",
              height: "70%",
              display: isLg ? "none" : undefined,
            }}
          >
            <MySVG
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                // width: '100%',
                height: "100%",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                right: 90,
                bottom: -50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowBackIos
                fontSize="small"
                sx={{ color: "white", alignItems: "flex-end" }}
              />
              <img
                src={Ellipse}
                alt="background"
                style={{
                  width: "50px", // Full width of container
                  height: "50px", // Maintain aspect ratio
                  objectFit: "cover", // Ensure the image is contained within the container
                }}
              />
              <ArrowForwardIos
                fontSize="small"
                sx={{ color: "white", alignItems: "flex-start" }}
              />
            </Box>
          </Box> */}

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
              <Button
                variant="outlined"
                sx={{ mr: 2 }}
                onClick={() => navigate("/product")}
              >
                Our Products
              </Button>
              <Button
                variant="contained"
                startIcon={<PlayCircleFilled />}
                href="https://www.youtube.com/@v-marcwirescables8469/videos"
              >
                Watch Video
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            color: "white",
            my: 5,
            position: "relative",
            // overflow: "hidden",
          }}
        >
          {/* <Box
            sx={{
              display: isLg ? "none" : undefined,
              position: "absolute",
              bottom: -50,
              right: -50,
              width: "100%",
              height: "105%",
              // backgroundColor: "red",
              overflow: "hidden",
              borderBottomRightRadius: 10,
              zIndex: -1,
              "&::before": {
                content: "''",
                position: "absolute",
                zIndex: -999,
                // right: "-50%",
                // bottom: "-50%",
                width: "200%",
                height: "300%",
                backgroundRepeat: "repeat",
                backgroundSize: "50% 50%, 50% 50%",
                backgroundPosition: "0 0, 100% 0, 100% 100%, 0 100%",
                backgroundImage:
                  "linear-gradient(#9747FF, #FF6B00), linear-gradient(#05FF00, #1E4705), linear-gradient(#1D4EFF, #0085FF), linear-gradient(#9B49F6, #BD00FF)",
                animation: "rotate 4s linear infinite",
              },
              "&::after": {
                content: "''",
                position: "absolute",
                zIndex: -2,
                bottom: "4px",
                right: "4px",
                width: "100% ",
                height: "100% ",
                background: "black",
                borderRadius: "5px",
              },
            }}
          >
            <style jsx>{`
              @keyframes rotate {
                0% {
                  transform: rotate(360deg);
                }
                100% {
                  transform: rotate(0deg);
                }
              }
            `}</style>
          </Box> */}
          <Grid item sm={12} md={6} sx={{ mb: 5 }}>
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
                <Typography
                  component="div"
                  sx={{
                    color: theme.palette.primary.main,
                    textAlign: "center",
                    fontWeight: 700,
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 40,
                  }}
                >
                  18+
                </Typography>
                <Typography variant="h5" component="div" align="center">
                  years of delivering
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ letterSpacing: "6px" }}
                  align="center"
                >
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
                <Typography
                  sx={{
                    color: theme.palette.primary.main,
                    textAlign: "center",
                    fontWeight: 700,
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 40,
                  }}
                  component="div"
                >
                  1k+
                </Typography>
                <Typography variant="h5" component="div" align="center">
                  up and running
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  align="center"
                  sx={{ letterSpacing: "6px" }}
                >
                  VENTURES
                </Typography>
              </Grid>
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              mb: 5,
              alignContent: "center",
            }}
          >
            <img
              src={Frame2}
              alt="background"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "350px",
                objectFit: "cover",
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
        <Grid
          container
          spacing={3}
          sx={{ color: "white", my: 3, position: "relative" }}
        >
          {/* <Box
            sx={{
              display: isLg ? "none" : undefined,
              position: "absolute",
              top: 6,
              left: -50,
              width: "100%",
              height: "105%",
              // backgroundColor: "red",
              overflow: "hidden",
              borderTopLeftRadius: 10,
              zIndex: -1,
              "&::before": {
                content: "''",
                position: "absolute",
                zIndex: -100,
                top: "-50%",
                left: "-50%",
                width: "200%",
                height: "300%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50% 50% ",
                backgroundPosition: "0 0, 100% 0, 100% 100%, 0 100%",
                backgroundImage:
                  "linear-gradient(#9747FF, #FF6B00), linear-gradient(#05FF00, #1E4705), linear-gradient(#1D4EFF, #0085FF), linear-gradient(#9B49F6, #BD00FF), linear-gradient(#FF0000, #FF7F50), linear-gradient(#FFFF00, #9ACD32), linear-gradient(#00FF00, #32CD32), linear-gradient(#00FFFF, #4682B4)",
                animation: "rotate 4s linear infinite",
              },
              "&::after": {
                content: "''",
                position: "absolute",
                zIndex: -2,
                top: "4px",
                left: "4px",
                width: "100% ",
                height: "100% ",
                background: "black",
                borderTopLeftRadius: 10,
              },
            }}
          >
            <style jsx>{`
              @keyframes rotate {
                0% {
                  transform: rotate(369deg);
                }
                100% {
                  transform: rotate(0deg);
                }
              }
            `}</style>
          </Box> */}
          <Grid item sm={12} md={6} sx={{ mt: 5 }}>
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
            md={6}
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
          {/* </Grid>
        <Grid container spacing={3} sx={{ color: "white", my: 3 }}> */}
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
                  <Grid item xs={12} sm={6} md={4} sx={{}}>
                    <ProductCard
                      heading={"Cable"}
                      subHeading={"VIEW PRODUCT"}
                      paragraph={
                        "These cables are used for electric power transmission at high voltage. HT power cables comes in different types which have a variety of applications in ignition systems, instruments and direct and alternating current power transmission"
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} sx={{}}>
                    <ProductCard
                      heading={"Cable"}
                      subHeading={"VIEW PRODUCT"}
                      paragraph={
                        "These cables are used for electric power transmission at high voltage. HT power cables comes in different types which have a variety of applications in ignition systems, instruments and direct and alternating current power transmission"
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} sx={{}}>
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
                  <Grid item xs={12} sm={6} md={4} sx={{}}>
                    <ProductCard
                      heading={"Switches"}
                      subHeading={"VIEW PRODUCT"}
                      paragraph={
                        "These cables are used for electric power transmission at high voltage. HT power cables comes in different types which have a variety of applications in ignition systems, instruments and direct and alternating current power transmission"
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} sx={{}}>
                    <ProductCard
                      heading={"Switches"}
                      subHeading={"VIEW PRODUCT"}
                      paragraph={
                        "These cables are used for electric power transmission at high voltage. HT power cables comes in different types which have a variety of applications in ignition systems, instruments and direct and alternating current power transmission"
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} sx={{}}>
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
                  <Grid item xs={12} sm={6} md={4} sx={{}}>
                    <ProductCard
                      heading={"MCB's"}
                      subHeading={"VIEW PRODUCT"}
                      paragraph={
                        "These cables are used for electric power transmission at high voltage. HT power cables comes in different types which have a variety of applications in ignition systems, instruments and direct and alternating current power transmission"
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} sx={{}}>
                    <ProductCard
                      heading={"MCB's"}
                      subHeading={"VIEW PRODUCT"}
                      paragraph={
                        "These cables are used for electric power transmission at high voltage. HT power cables comes in different types which have a variety of applications in ignition systems, instruments and direct and alternating current power transmission"
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} sx={{}}>
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
        <ScrollTop {...props}>
          <Fab
            size="small"
            aria-label="scroll back to top"
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              },
              "&:hover svg": {
                color: theme.palette.primary.main,
              },
            }}
          >
            <ArrowUpward sx={{ color: "white" }} />
          </Fab>
        </ScrollTop>
      </Container>
    </div>
  );
};

export default HomePage;
