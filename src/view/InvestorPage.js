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
import SEBI from "../img/invest1.png";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import theme from "../theme";
import BodCard from "../component/BODCard";
import backgroundImage from "../img/earth.png";

const InvestorPage = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "-85%",
          left: 0,
          width: "2930px", // Full screen width
          overflow: "hidden", // Hide overflow
          zIndex: -1,
        }}
      >
        <img
          src={backgroundImage}
          alt="background"
          style={{
            width: "2930px%", // Full width of container
            height: "auto", // Maintain aspect ratio
            objectFit: "cover", // Ensure the image is contained within the container
            transform: `rotate(270deg)`, // Rotate the image if needed
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
            sx={{ color: "white" }}
            display={"flex"}
            flexDirection={"column"}
          >
            <Typography variant="hb3">
              Disclosure As Per Regulation 46 of the
            </Typography>
            <Typography variant="hb1" fontWeight={800}>
              SEBI (LODR), 2015
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <img src={SEBI}></img>
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
                <Tab label="Leadership Team" value="1" />
                <Tab label="Details of Business" value="2" />
                <Tab label="Financial Information" value="3" />
                <Tab label="Shareholding Pattern" value="4" />
              </TabList>
              <TabPanel
                value="1"
                sx={{
                  paddingX: 0,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4" mt={5} mb={3}>
                  BOARD OF DIRECTORS
                </Typography>
                <BodCard />
                <BodCard />
                <BodCard />
                <BodCard />
              </TabPanel>
              <TabPanel value="2" sx={{ paddingX: 0 }}>
                two
              </TabPanel>
              <TabPanel value="3" sx={{ paddingX: 0 }}>
                Three
              </TabPanel>
              <TabPanel value="4" sx={{ paddingX: 0 }}>
                Three
              </TabPanel>
            </Box>
          </TabContext>
        </Grid>
      </Container>
    </>
  );
};

export default InvestorPage;
