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
  ImageList,
  ImageListItem,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BlackEarth from "../img/blackearth.png";
import backgroundImage from "../img/earth1.png";
import theme from "../theme";

import Timeline from "../component/Timeline";
import Service from "../section/Services";

const styles = {
  heading: {
    fontWeight: 500,
    fontSize: "20px",
    fontFamily: "Poppins, sans-serif",
  },
  subHeading: {
    fontWeight: 500,
    fontSize: { md: "16px", xs: "14px" },
    fontFamily: "Poppins, sans-serif",
    textAlign: "right",
    color: "#fff",
  },
  paragraph: {
    fontWeight: 400,
    fontSize: { md: "14px", xs: "12px" },
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
  const [value, setValue] = React.useState("1");

  const handleCommiteeChange = (event, newValue) => {
    setCValue(newValue);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];
  const CertificationCard = ({ path, title }) => {
    return (
      <Box
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          // justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          mb: 2,
          borderRadius: 2,
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          // height="100%"
          width={"100px"}
          sx={{ width: 100, mr: 5 }}
          image={path}
        />
        <Typography variant="h5">{title}</Typography>
        {/* <Button
              variant="contained"
              color="secondary"
              sx={{
                bgcolor: "#363636",
                color: "#8EA1FF",
                "&:hover": {
                  bgcolor: "white",
                  color: theme.palette.secondary.main,
                },
                width: 130,
              }}
              startIcon={<VisibilityIcon />}
              onClick={() => handleOpenPDF()}
              rel="noopener noreferrer"
            >
              View PDF
            </Button> */}
      </Box>
    );
  };

  const handleOpenPDF = (link) => {
    console.log("Box clicked:", link);

    window.open(link, "_blank");
  };
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
          <Box mb={15} id="aboutUs-history">
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
            <Typography
              variant="h5"
              sx={{
                // textAlign: "justify",
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
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
          <Box sx={{ overflowX: "auto", pb: 10, mb: 5, ...scrollBoxStyles }}>
            <Timeline />
          </Box>
        </Grid>
      </Container>

      <div
        style={{ backgroundColor: "#2B2B2B", paddingTop: "10px" }}
        id="aboutUs-company"
      >
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
              <Typography
                variant="h5"
                sx={{
                  // textAlign: "justify",
                  fontSize: { xs: "14px", md: "16px" },
                }}
              >
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
              <Typography style={styles.subHeading} my={7}>
                We are committed to deliver consistently through dedicated
                <br />
                customer support and offices located across India. “V-Marc” is
                <br />
                there for you, whenever and wherever.....
              </Typography>
              {/* <Button
                variant="contained"
                sx={{
                  mt: 5,
                }}
              >
                view services
              </Button> */}
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
              <Grid
                item
                xs={12}
                md={7.8}
                sx={{
                  p: { md: 2, xs: 0 },
                  pt: { md: 0, xs: 2 },
                  color: "#fff",
                  // textAlign: "justify",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontSize: { xs: "14px", md: "16px" } }}
                >
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
          <Box py={10} id="aboutUs-services">
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
              <Typography
                variant="h5"
                my={2}
                sx={{ fontSize: { xs: "14px", md: "16px" } }}
              >
                In an ongoing process to improve Customer Satisfaction “V-Marc”
                offers a variety of services:
              </Typography>
            </Box>
            <Box sx={{ overflowX: "auto", py: 5, my: 5, ...scrollBoxStyles }}>
              <Service />
            </Box>
          </Box>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: "#212121",
          paddingTop: "10px",
          paddingBottom: "20px",
        }}
      >
        <Container maxWidth={"lg"} sx={{ my: 5 }}>
          <Grid
            container
            gap={3}
            sx={{
              p: { md: 1, xs: 0 },
            }}
            id="aboutUs-vision"
          >
            <Grid
              item
              xs={12}
              md={5.8}
              sx={{
                p: { md: 5, xs: 2 },
                backgroundColor: "#2E2E2E",
                // borderRadius: 2,
                borderBottom: `5px solid ${theme.palette.primary.main}`,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontSize: { md: "47px", xs: "30px" },
                  fontWeight: 900,
                  textAlign: "start",
                  color: theme.palette.primary.main,
                  mb: 3,
                }}
              >
                Our Vision
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: { md: "16px", xs: "14px" },
                  fontWeight: 500,
                  // textAlign: "justify",
                  color: "#fff",
                }}
              >
                We are 'Powering Progress Sustainably' by developing products
                and solutions that contribute to energy efficiency and
                conservation, ultimately helping to mitigate environmental
                impact and combat climate change. V-Marc India's ultimate
                business objective is to have an equitable & sustainable future
                for all.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={5.8}
              sx={{
                p: { md: 5, xs: 2 },
                backgroundColor: "#2E2E2E",
                // borderRadius: 2,
                borderBottom: `5px solid ${theme.palette.primary.main}`,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontSize: { md: "47px", xs: "30px" },
                  fontWeight: 900,
                  textAlign: "start",
                  color: theme.palette.primary.main,
                  mb: 3,
                }}
              >
                Our Mission
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: { md: "16px", xs: "14px" },
                  fontWeight: 500,
                  // textAlign: "justify",
                  color: "#fff",
                }}
              >
                Our mission is to pioneer advancements in cable and accessories
                manufacturing, setting new standards for durable electrical
                systems. V-Marc India envisions a future owered by sustainable
                progress in the electrical industry. We aim to be among global
                leaders powering safer, more reliable, and environmentaly
                conscious solutions.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ backgroundColor: "#0000", paddingTop: " 1px" }}>
        <Container maxWidth={"lg"} sx={{ my: 10 }}>
          <Grid
            container
            sx={{
              backgroundColor: "#424862",
              borderRadius: 2,
            }}
          >
            <Grid item xs={12} md={4.5} sx={{ p: { md: 3, xs: 2 } }}>
              <Box
                sx={{ height: "80%", backgroundColor: "#4F577A", mb: 3 }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: "15%",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "#4F577A",
                  }}
                >
                  1
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "#4F577A",
                  }}
                >
                  2
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "#4F577A",
                  }}
                >
                  3
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7.5} sx={{ p: { md: 3, xs: 2 } }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  fontSize: { xs: "14px", md: "16px" },
                  // textAlign: "justify",
                }}
              >
                I would like to express my gratitude to all my customers, board
                of directors, stakeholders, consultants and V-Marc’s team & wish
                all of them to have a great experience working together. We are
                trying to enhance our brand-image until our organization is
                transformed as a benchmark of a reliable, high-quality corporate
                & consistent with timely deliveries of products. We will
                continually strive to improve product quality, increase employee
                self-sufficiency, Environment protection & Conservation of
                energy, provide high quality corporate social services and
                implement proven quality & management practices.
                <br />
                <br /> Good quality, optimal pricing & consistently timely
                deliveries helped us in winning confidence of our clients.
                Overwhelming trust & high level of satisfaction among our
                customers have resulted into huge success which made us set up
                new factories & enhance product range.
                <br />
                <br /> In 2021, we acquired a huge land & laid the foundation
                stone of an ultra-modern state-of-the- art manufacturing
                facility to add extra high voltage (EHV) cables up to &
                including 110 kV to our product range. We have plans to initiate
                manufacturing of 66kV cables within the current financial year.
                This plant with German machinery will adopt the most advanced
                method of curing HT & EHV cables. It will employ pressurized
                nitrogen in its Continuous Catenary Vulcanization (CCV) tube &
                our plant will also have nitrogen cooling of cores.
                <br /> <br /> We have future plans to make our company a
                multi-product corporate. You will hear from us about our adding
                new line of electrical products. <br />
                <br />
                Sincerely,
                <br />
                Managing Director
                <br /> V-Marc India Limited
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div
        style={{ backgroundColor: "#212121", paddingTop: "1px" }}
        id="aboutUs-policy"
      >
        <Container maxWidth={"lg"} sx={{ my: 10 }}>
          <Box sx={{ color: "#FFFF" }}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "32px",
                fontWeight: 600,
                textAlign: "left",
              }}
            >
              Quality Policy
            </Typography>
            <Typography
              variant="h5"
              my={2}
              sx={{ fontSize: { md: "16px", xs: "14px" } }}
            >
              We at “V-Marc” are devoted towards meeting the customers’ needs
              and expectations by delivering an array of uncompetitive services
              and solutions through continual improvement of our systems and
              manufacturing processes.
            </Typography>
            <Box sx={{ overflowX: "auto", py: 5, ...scrollBoxStyles }}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: "1100px",
                  overflowX: "sroll",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    position: "absolute",
                    top: "18%",
                    width: "25%",
                    textAlign: "center",
                    // right: "50%",
                    // transform: "translateX(-50%)",
                  }}
                >
                  Continually enhance external and internal customer
                  satisfaction.
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    position: "absolute",
                    width: "25%",
                    top: "77%",
                    right: "24%",
                    textAlign: "center",
                  }}
                >
                  Deliver services and solutions that meet customer
                  requirements.
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    position: "absolute",
                    width: "25%",
                    top: "77%",
                    left: "24%",
                    textAlign: "center",
                  }}
                >
                  Improve productivity and reduce rework.
                </Typography>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={require("../img/Group 1000005003 (1).png")}
                  sx={{ borderRadius: 2, width: "70%", objectFit: "contain" }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                backgroundImage: `url(${BlackEarth})`,
                // backgroundPosition: "left -px top",
                backgroundSize: "cover", // Add this line to cover the entire area
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "black",

                mixBlendMode: "luminosity",
                mt: 10,
                display: "flex",
                flexDirection: "column",
                // textAlign: "right",
                // justifyContent: "flex-end",
                // alignContent: "end",
                // alignItems: "flex-end",
                mb: 5,
              }}
            >
              <Box sx={{ p: 5, justifyContent: "flex-start" }}>
                <Typography style={{ ...styles.subHeading, textAlign: "left" }}>
                  The name V-Marc is the synonym of quality, technical
                  excellence and <br />
                  reliability. We at V-Marc measure our accomplishments in terms
                  of
                </Typography>
                <Typography style={{ ...styles.subHeading, textAlign: "left" }}>
                  <ul>
                    <li>Products’ Quality</li>
                    <li>Customer Satisfaction</li>
                    <li>Excellent Workplace Culture </li>
                    <li>Quality of Various Processes</li>
                    <li>Employees’ Productivity</li>
                  </ul>
                </Typography>
              </Box>
            </Box>
            <Typography
              style={{
                ...styles.subHeading,
                textAlign: "left",
                color: "#B58B8B",
                // textAlign: "justify",
              }}
            >
              Also, we try to cultivate a quality culture by developing quality
              awareness throughout the company. The encouraging attitude of
              management is to anticipate & resolve potential quality issues. We
              empower all V- Marc personnel with the necessary competencies and
              tools to continually fulfill policy demands, principles and
              standards. We constantly improve by challenging our boundaries. We
              involve all employees across the organisation to discuss measures
              to achieve and maintain consumer trust, which is the most
              important and valuable thing to us.
            </Typography>
          </Box>
          <Box sx={{ color: "#FFFF", pb: 15, mt: 10 }} id="aboutUs-csr">
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "32px",
                fontWeight: 600,
                textAlign: "left",
              }}
            >
              CSR
            </Typography>
            <Typography
              variant="h5"
              my={2}
              sx={{
                // textAlign: "justify",
                fontSize: { md: "16px", xs: "14px" },
              }}
            >
              Social and environmental responsibility has always been at the
              forefront of V-Marc operating philosophy and as a result the
              Company consistently contributes to socially responsible
              activities. Corporate Social Responsibility (CSR) at V-Marc
              portrays the deep symbiotic relationship that the group enjoys
              with the communities it is engaged with. As a responsible
              corporate citizen, we try to contribute for social and
              environmental causes on a regular basis. We believe that to
              succeed, an organization must maintain highest standards of
              corporate behaviour towards its employees, consumers and societies
              in which it operates. We are of the opinion that CSR underlines
              the objective of bringing about a difference and adding value in
              our stakeholders’ lives. V-Marc India Limited Corporate Social
              Responsibility Policy is rooted in the Company’s core values of
              quality, reliability and trust guided by international standards
              and best practices, and driven by our aspiration for excellence in
              the overall performance of our business.
              <br />
              <br /> When the world was hit by global pandemic, as part of
              commitment to rise to the occasion when the Nation needed it the
              most, V-Marc did its best to support those impacted by the
              Covid-19 pandemic. V-Marc helped by donating more than 9000 kgs of
              medicinal mushroom among the needy. As in a recent study by
              University of California Los Angeles (UCLA), on the
              characteristics of mushrooms as medicinal herb, it helps in
              boosting immune function against COVID-19. Natural chemicals
              derived from herbal medicines and medicinal mushrooms provide a
              significant resource for the development of novel antiviral drugs.
              During the pandemic when lockdown hit poor people the most, V-Marc
              ensured to provide for at least one meal a day to more than 800
              people for a month.
            </Typography>
            <Grid container>
              <Grid item sm={12} md={8}>
                <Typography variant="h5">
                  OUR CSR VISION <br />
                  Develop meaningful and effective strategies for engaging with
                  all stakeholders.
                  <br /> Consult with local communities to identify effective
                  and culturally appropriate development goals.
                  <br /> Partner with credible organizations like trusts,
                  foundations etc. including nongovernment organizations.
                  <br /> Check and prevent pollution; recycle, manage and reduce
                  waste, manage natural resources in a sustainable manner.
                  <br />
                  Ensure efficient use of energy and environment friendly
                </Typography>
              </Grid>
              <Grid item sm={12} md={4}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/8-xvJDlAHuI?si=_lBQoh9ZOfBXxtWg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ color: "#FFFF", pb: 15 }} id="aboutUs-gallery">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "32px",
                      fontWeight: 600,
                      textAlign: "left",
                    }}
                  >
                    Gallery
                  </Typography>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    sx={{
                      marginLeft: "auto",
                      "& .MuiTab-root": {
                        color: "white", // Color of unselected tabs
                        "&.Mui-selected": {
                          color: "primary.main", // Color of the selected tab
                        },
                      },
                    }}
                  >
                    <Tab label="Advertisement" value="1" />
                    <Tab label="Event" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <ImageList
                    sx={{
                      gap: 20,
                      width: "100%",
                      height: "auto",
                    }}
                    // gap={20}
                    cols={3}
                    rowHeight={164}
                  >
                    {itemData.map((item) => (
                      <ImageListItem key={item.img}>
                        <img
                          srcSet={`${item.img}?w=164&h=164&&fit=cover&auto=format&dpr=2 2x`}
                          src={`${item.img}?w=164&h=164&&fit=cover&auto=format`}
                          alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </TabPanel>
                <TabPanel value="2">
                  <ImageList
                    sx={{
                      gap: 20,
                      width: "100%",
                      height: "auto",
                    }}
                    // gap={20}
                    cols={3}
                    rowHeight={164}
                  >
                    {itemData.map((item) => (
                      <ImageListItem key={item.img}>
                        <img
                          srcSet={`${item.img}?w=300&h=400&fit=cover&auto=format&dpr=2 2x`}
                          src={`${item.img}?w=300&h=400&fit=cover&auto=format`}
                          alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </TabPanel>
              </TabContext>
            </Box>
          </Box>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: "#0000",
          paddingTop: " 1px",
          paddingBottom: "10px",
        }}
        id="aboutUs-certifications"
      >
        <Container maxWidth={"lg"} sx={{ mb: 6, pb: 3 }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "32px",
              fontWeight: 600,
              textAlign: "left",
              color: "#ffff",
              mb: 5,
            }}
          >
            Certifications
          </Typography>
          <CertificationCard
            path={require("../img/haccp 1.png")}
            title={"HACCP"}
          />
          <CertificationCard path={require("../img/iso.png")} title={"ISO"} />
          <CertificationCard path={require("../img/gmp.png")} title={"GMP"} />
        </Container>
      </div>
    </>
  );
};

export default AboutUsPage;
