import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  Tabs,
  Tab,
  Collapse,
  CardMedia,
} from "@mui/material";
import SEBI from "../../img/invest1.png";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import theme from "../../theme";
import BodCard from "../../component/BODCard";
import backgroundImage from "../../img/earth1.png";
import {
  boardDirector,
  FinancialTableData,
  ShareholdingData,
} from "../../content";
import CommitteeOfBoardSection from "../../section/CommitteeOfBoardSection";
import DetailOfBusiness from "../../section/DetailOfBusiness";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CustomTable from "../../component/CustomTable";
import useMediaQuery from "@mui/material/useMediaQuery";
import draftRed from "../../img/draft-red-herring-prospectus.jpeg";
import certificateMaterial from "../../img/Certificate_on_Material_Creditor.jpg";
import redHerring from "../../img/red-herring-prospectus.png";
import prospectus from "../../img/prospectus.jpg";

const ImageCard = ({ img, buttonText, link }) => {
  return (
    <Grid item xs={12} md={5}>
      <CardMedia
        component="img"
        loading="lazy"
        sx={{
          height: 450,
          backgroundColor: "white",
          objectFit: "cover", // Ensures the image covers the area
          objectPosition: "top", // Positions the upper part of the image within the container
        }}
        image={img}
        alt="Image"
      />
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => window.open(link, "_blank")}
      >
        {buttonText}
      </Button>
    </Grid>
  );
};

const IPOPage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = React.useState("1");
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggle = () => {
    setExpanded(!expanded);
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
      <Container maxWidth={"lg"} sx={{ position: "relative", mb: 7 }}>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            mt: 20,
            mb: 5,
          }}
        >
          <Box
            sx={{ color: "#C3C3C3" }}
            display={"flex"}
            flexDirection={"column"}
          >
            <Typography variant="hb3">
              {/* Disclosure As Per Regulation 46 of the */}
            </Typography>
            <Typography
              variant="hb1"
              fontWeight={800}
              sx={{ fontSize: { md: "50px", xs: "30px" } }}
            >
              IPO
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <img src={SEBI}></img> */}
          </Box>
        </Grid>
        <Grid item sm={12} sx={{}}>
          <TabContext value={value}>
            <Box
              sx={{ borderBottom: 1, borderColor: "divider", color: "white" }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                centered
                sx={{
                  width: "100%", // Set TabList to take full width
                  borderBottom: "none",
                  "& .MuiTabs-flexContainer": {
                    justifyContent: "space-between", // Ensure tabs are spaced out evenly
                  },
                  "& .MuiTab-root": {
                    flex: 1, // Make each tab take equal space
                    color: "white", // Color of unselected tabs
                    backgroundColor: theme.palette.bgGray.main,
                    mr: 1,
                    borderRadius: 2,
                    maxWidth: "none", // Override default max-width
                    "&.Mui-selected": {
                      backgroundColor: theme.palette.secondary.main,
                      color: "#ffff", // Color of the selected tab
                    },
                  },
                  "& .MuiTabs-indicator": {
                    display: "none", // Hide the indicator
                  },
                }}
              >
                <Tab label="Draft Red Herring Prospectus" value="1" />
                <Tab label="Red Herring Prospectus" value="2" />
                <Tab label="Prospectus" value="3" />
              </TabList>
              <TabPanel
                value="1"
                sx={{
                  paddingX: 0,
                }}
              >
                <Grid
                  container
                  gap={2}
                  sx={{ alignContent: "center", justifyContent: "center" }}
                >
                  <ImageCard
                    img={draftRed}
                    buttonText="Draft Red Herring Prospectus"
                    link={
                      "/vmarc/IPO/Draft-Red-Hearing-Prospectus/V_Marc_DRHP.pdf"
                    }
                  />
                  <ImageCard
                    img={certificateMaterial}
                    buttonText="Certificate Of Material Creditor"
                    link={
                      "/vmarc/IPO/Draft-Red-Hearing-Prospectus/V_Marc_DRHP.pdf"
                    }
                  />
                </Grid>
              </TabPanel>
              <TabPanel value="2" sx={{ paddingX: 0 }}>
                <Grid
                  container
                  gap={2}
                  sx={{ alignContent: "center", justifyContent: "center" }}
                  link={
                    "/vmarc/IPO/Draft-Red-Hearing-Prospectus/V_Marc_DRHP.pdf"
                  }
                >
                  <ImageCard
                    img={redHerring}
                    buttonText="Red Herring Prospectus"
                    link={
                      "/vmarc/IPO/Red-Hearing_Prospectus/V-MarcIndia_RHP.pdf"
                    }
                  />
                </Grid>
              </TabPanel>
              <TabPanel value="3" sx={{ paddingX: 0 }}>
                <Grid
                  container
                  gap={2}
                  sx={{ alignContent: "center", justifyContent: "center" }}
                >
                  <ImageCard
                    img={prospectus}
                    buttonText="Prospectus V-Marc India Limited."
                    link={"/vmarc/IPO/Prospectus/V_Marc_Prospectus.pdf"}
                  />
                </Grid>
              </TabPanel>
            </Box>
          </TabContext>
        </Grid>
      </Container>
    </>
  );
};

export default IPOPage;
