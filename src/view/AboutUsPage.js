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
  CardMedia,
  useMediaQuery,
  useTheme,
  styled,
  Paper,
} from "@mui/material";
import SEBI from "../img/invest1.png";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Committeeboard } from "../content";
import CommitteeMemberCard from "../component/CommitteeMemberCard";
import CustomListCard from "../component/CustomListCard";
import BlackEarth from "../img/blackearth.png";
import { Gradient, Translate } from "@mui/icons-material";
import backgroundImage from "../img/earth1.png";
import theme from "../theme";
import vector24 from "../img/Vector.svg";

import Timeline from "../component/Timeline";

const styles = {
  heading: {
    fontWeight: 500,
    fontSize: "20px",
    fontFamily: "Poppins, sans-serif",
  },
  subHeading: {
    fontWeight: 500,
    fontSize: "16px",
    fontFamily: "Poppins, sans-serif",
    textAlign: "right",
    color: "#fff",
  },
  paragraph: {
    fontWeight: 400,
    fontSize: "14px",
    fontFamily: "Poppins, sans-serif",
  },
  GradientText: {},
};
const scrollBoxStyles = {
  "&::-webkit-scrollbar": {
    height: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#555", // Scrollbar thumb color
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#777", // Scrollbar thumb hover color
  },
  "&::-webkit-scrollbar-track": {
    background: "#333", // Scrollbar track color
  },
  scrollbarColor: "#555 #333", // For Firefox
  scrollbarWidth: "thin", // For Firefox
};

const AboutUsPage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [cvalue, setCValue] = React.useState("1");

  const handleCommiteeChange = (event, newValue) => {
    setCValue(newValue);
  };
  // const theme = useTheme();

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
      <Container maxWidth={"lg"}>
        <Grid
          item
          xs={12}
          sx={{
            mt: 20,

            color: "white",
          }}
        >
          <Box mb={15}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: 14,
                fontWeight: 500,
                color: "#fff",
                textAlign: "center",
                display: "inline-block",
                backgroundColor: theme.palette.primary.main,
                padding: "8px 16px", // Optional: Adds some padding for better appearance
                borderRadius: "4px", // Optional: Adds rounded corners
              }}
            >
              About Us
            </Typography>
            <Box mb={2} mt={3}>
              <Typography variant="hb4">Our History</Typography>
            </Box>
            <Typography variant="h5">
              Our MD, the first generation entrepreneur Shri Vikas Garg Ji had a
              very humble inception in 1996 with the manufacturing of house
              wiring cables, the simplest product of wires & cable industry.
              Good quality, optimal pricing & consistently timely deliveries
              helped us in winning trust of buyers. We established and thus the
              demand for our products increased multi fold. We established our
              factory at SIDCUL Haridwar in 2006 and named it Asian Wires &
              Cables. We enhanced our product range by adding LT PVC & XLPE
              cables in 2009. In 2012 we put up a new plant & added Aerial
              Bunched Cables to our product range. In 2014 this company got
              incorporated as Asian Galaxy Pvt Ltd. In 2017, we further added
              another factory to manufacture HT cables up till 33kV. <br />
              In April 2021, we launched our IPO & became a public limited
              company. Inspite of the low sentiments in the pandemic stricken
              market our IPO had an overwhelming response and the issue was
              successfully subscribed.
            </Typography>
          </Box>
          <Box sx={{ overflowX: "auto", pb: 5, mb: 5, ...scrollBoxStyles }}>
            <Timeline />
          </Box>
        </Grid>
      </Container>

      <div style={{ backgroundColor: "#2B2B2B", paddingTop: "10px" }}>
        <Container maxWidth={"lg"}>
          <Typography
            sx={{
              mt: 10,
              fontFamily: "Poppins",
              fontSize: "32px",
              fontWeight: 600,
              textAlign: "left",
              color: "#FFFF",
            }}
            mb={3}
          >
            Company
          </Typography>
          <Grid container spacing={3} sx={{ color: "#ffff" }}>
            <Grid item xs={12} md={8}>
              <Typography variant="h5">
                “V-Marc” is among the global leaders in providing reliable and
                consistent quality of products. By supplying our optimally
                priced high quality products we enable our clients to achieve
                more and outperform their competitors and stay ahead of the
                innovation curve. Customers' satisfaction is our prime objective
                as it is the foundation stone for the growth of the company.
                <br />
                <br /> “V-Marc” has earned trust and reputation in India by
                winning the customers’ confidence. A very huge quantity of our
                cables has been in operation across India. The Organization is
                also committed to comply with all applicable environment, health
                & safety legislations and all other requirements of existing &
                prospective buyers. We believe that our deeply ingrained value
                system has helped us to achieve a respectable position amongst
                our Indian peers. Making products that are reliable and
                intuitive is not our only goal, in addition to usability; we
                strive to create accessibility, convenience and credibility. We
                aim to retain our image of an organisation serving as an epitome
                of being reliable and efficient, our commitment and
                customer-centric approach have helped us to understand our
                customers in a better way and thus has guided us to serve their
                diverse needs and wants.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="100%"
                image={require("../img/home_image_4.jpeg")}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ color: "#ffff" }}>
            <Grid item xs={12} md={8}>
              <div></div>
            </Grid>
          </Grid>
          <Box
            sx={{
              backgroundImage: `url(${BlackEarth})`,
              backgroundPosition: "left -130px top",
              backgroundSize: "cover", // Add this line to cover the entire area
              width: "100%",
              height: "100%",
              backgroundRepeat: "no-repeat",
              backgroundColor: "black",

              mixBlendMode: "luminosity",
              mt: 5,
              display: "flex",
              flexDirection: "column",
              textAlign: "right",
              justifyContent: "flex-end",
              alignContent: "end",
              alignItems: "flex-end",
              my: 15,
            }}
          >
            <Box sx={{ p: 5, justifyContent: "flex-end" }}>
              <Typography style={styles.subHeading}>
                We are committed to deliver consistently through dedicated
                <br />
                customer support and offices located across India. “V-Marc” is
                <br />
                there for you, whenever and wherever.....
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 5,
                }}
              >
                view services
              </Button>
            </Box>
          </Box>
          <Box my={3}>
            <Grid
              container
              sx={{
                backgroundColor: "rgba(0, 185, 197, 0.3)",
                p: 2,
                borderRadius: 2,
              }}
            >
              <Grid item xs={12} md={4}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="100%"
                  image={require("../img/home_image_4.jpeg")}
                  sx={{ borderRadius: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={7.8} sx={{ p: 2, color: "#fff" }}>
                <Typography variant="h5">
                  We manufacture various types of exceptional quality wires &
                  cables in Single & Multi-core with Copper/Aluminium
                  Conductors, having XLPE/PVC insulation, Flat Cables, Co-axial
                  Cables, LAN Cables, LT Power/Control Cable, Medium Voltage
                  Covered Conductors, HT Cables and Specialty Cables. Our range
                  of wires & cables possess properties of FR, HRFR, FRLS, HFFR
                  etc. all these cater specific needs of clients and meet all
                  necessary quality standards.
                </Typography>
                <Typography style={styles.paragraph} sx={{ mt: 2 }}>
                  “V-Marc” has earned the trust and reputation in INDIA by
                  winning the customers’ confidence. XLPE / PVC Cables
                  from “V-Marc” are a preferred choice in Power Plants,
                  Distribution Systems, Heavy Industries, and various Utilities.
                  The organization is also committed to comply with all the
                  applicable environmental, health & safety legislations and all
                  other requirements of prospective buyers. We are poised for a
                  massive enhancement both in quality & quantity. Our commitment
                  to the nation is to produce the best in quality and thereby
                  achieve satisfaction of customers. We will ensure awareness
                  among employees, society, interested parties about environment
                  protection, minimization of waste, conservation of energy,
                  water and other natural resources.
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box py={10} sx={{ display: "none" }}>
            <Box mb={10} sx={{ color: "#FFFF" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "32px",
                  fontWeight: 600,
                  textAlign: "left",
                }}
              >
                Our Services
              </Typography>
              <Typography variant="h5" my={2}>
                In an ongoing process to improve Customer Satisfaction “V-Marc”
                offers a variety of services:
              </Typography>
            </Box>
            <Grid container>
              <Grid
                item
                xs={12}
                md={2.4}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}
              >
                {/* <Typography>
                01 */}
                <Typography
                  sx={{
                    background:
                      "linear-gradient(90deg, #FFFFFF 0%, #FD8C00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                    textAlign: "right",
                  }}
                  variant="h4" // You can change the variant as per your requirement
                >
                  A targeted stock policy.
                </Typography>
                {/* </Typography> */}
              </Grid>
              <Grid item xs={12} md={2.4} sx={{}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  width={100}
                  height={100}
                  image={require("../img/Vector1.png")}
                  sx={{ objectFit: "contain" }}
                />
              </Grid>
              <Grid item xs={12} md={2.4}></Grid>
              <Grid item xs={12} md={2.4}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  width={100}
                  height={100}
                  image={require("../img/Vector2.png")}
                  sx={{ objectFit: "contain" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={2.4}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  // backgroundColor: "red",
                }}
              >
                <Typography
                  sx={{
                    background:
                      "linear-gradient(90deg, #FFFFFF 0%, #FD8C00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                    textAlign: "left",
                  }}
                  variant="h4" // You can change the variant as per your requirement
                >
                  Reliable & Consistent quality
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={2.4}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  // backgroundColor: "red",
                }}
              >
                <Typography
                  sx={{
                    background:
                      "linear-gradient(90deg, #FFFFFF 0%, #FD8C00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                    textAlign: "right",
                  }}
                  variant="h4" // You can change the variant as per your requirement
                >
                  Product development & enrichment as demanded by the changing
                  markets
                </Typography>
              </Grid>
              <Grid item xs={12} md={2.4}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  width={100}
                  height={100}
                  image={require("../img/Vector5.png")}
                  sx={{ objectFit: "contain", width: "70%" }}
                />
              </Grid>
              <Grid item xs={12} md={2.4}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  width={100}
                  height={100}
                  image={require("../img/logo.png")}
                  sx={{ objectFit: "contain" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={2.4}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  width={100}
                  height={100}
                  image={require("../img/Vector5.png")}
                  sx={{ objectFit: "contain", width: "70%" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={2.4}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  // backgroundColor: "red",
                }}
              >
                <Typography
                  sx={{
                    background:
                      "linear-gradient(90deg, #FFFFFF 0%, #FD8C00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                    textAlign: "left",
                  }}
                  variant="h4" // You can change the variant as per your requirement
                >
                  Technical Support for cable applications / cables cost
                  optimization for projects etc.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={2.4}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  // backgroundColor: "red",
                }}
              >
                <Typography
                  sx={{
                    background:
                      "linear-gradient(90deg, #FFFFFF 0%, #FD8C00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                    textAlign: "right",
                  }}
                  variant="h4" // You can change the variant as per your requirement
                >
                  Commercially Competetive Pricing
                </Typography>
              </Grid>
              <Grid item xs={12} md={2.4}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  width={100}
                  height={100}
                  image={require("../img/Vector3.png")}
                  sx={{ objectFit: "contain" }}
                />
              </Grid>
              <Grid item xs={12} md={2.4}></Grid>
              <Grid item xs={12} md={2.4}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  width={100}
                  height={100}
                  image={require("../img/Vector4.png")}
                  sx={{ objectFit: "contain" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={2.4}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                  // backgroundColor: "red",
                }}
              >
                <Typography
                  sx={{
                    background:
                      "linear-gradient(90deg, #FFFFFF 0%, #FD8C00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                    textAlign: "left",
                  }}
                  variant="h4" // You can change the variant as per your requirement
                >
                  On time deliveries
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default AboutUsPage;
