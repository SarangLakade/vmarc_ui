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
} from "@mui/material";
import SEBI from "../img/invest1.png";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import theme from "../theme";
import { Committeeboard } from "../content";
import CommitteeMemberCard from "../component/CommitteeMemberCard";
import CustomListCard from "../component/CustomListCard";
import BlackEarth from "../img/blackearth.png";
import { Gradient } from "@mui/icons-material";

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

const AboutUsPage = () => {
  const [cvalue, setCValue] = React.useState("1");

  const handleCommiteeChange = (event, newValue) => {
    setCValue(newValue);
  };
  return (
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
              consistent quality of products. By supplying our optimally priced
              high quality products we enable our clients to achieve more and
              outperform their competitors and stay ahead of the innovation
              curve. Customers' satisfaction is our prime objective as it is the
              foundation stone for the growth of the company.
              <br />
              <br /> “V-Marc” has earned trust and reputation in India by
              winning the customers’ confidence. A very huge quantity of our
              cables has been in operation across India. The Organization is
              also committed to comply with all applicable environment, health &
              safety legislations and all other requirements of existing &
              prospective buyers. We believe that our deeply ingrained value
              system has helped us to achieve a respectable position amongst our
              Indian peers. Making products that are reliable and intuitive is
              not our only goal, in addition to usability; we strive to create
              accessibility, convenience and credibility. We aim to retain our
              image of an organisation serving as an epitome of being reliable
              and efficient, our commitment and customer-centric approach have
              helped us to understand our customers in a better way and thus has
              guided us to serve their diverse needs and wants.
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
            my: 10,
          }}
        >
          <Box sx={{ p: 5, justifyContent: "flex-end" }}>
            <Typography style={styles.subHeading}>
              We are committed to deliver consistently through dedicated
            </Typography>
            <Typography style={styles.subHeading}>
              customer support and offices located across India. “V-Marc” is
            </Typography>
            <Typography style={styles.subHeading}>
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
                cables in Single & Multi-core with Copper/Aluminium Conductors,
                having XLPE/PVC insulation, Flat Cables, Co-axial Cables, LAN
                Cables, LT Power/Control Cable, Medium Voltage Covered
                Conductors, HT Cables and Specialty Cables. Our range of wires &
                cables possess properties of FR, HRFR, FRLS, HFFR etc. all these
                cater specific needs of clients and meet all necessary quality
                standards.
              </Typography>
              <Typography style={styles.paragraph} sx={{ mt: 2 }}>
                “V-Marc” has earned the trust and reputation in INDIA by winning
                the customers’ confidence. XLPE / PVC Cables from “V-Marc” are a
                preferred choice in Power Plants, Distribution Systems, Heavy
                Industries, and various Utilities. The organization is also
                committed to comply with all the applicable environmental,
                health & safety legislations and all other requirements of
                prospective buyers. We are poised for a massive enhancement both
                in quality & quantity. Our commitment to the nation is to
                produce the best in quality and thereby achieve satisfaction of
                customers. We will ensure awareness among employees, society,
                interested parties about environment protection, minimization of
                waste, conservation of energy, water and other natural
                resources.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box py={10} sx={{ display: "none" }}>
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
  );
};

export default AboutUsPage;
