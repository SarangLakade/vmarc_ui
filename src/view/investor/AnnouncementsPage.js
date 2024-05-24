import React, { useState } from "react";
import { Container, Grid, Box, Typography, Tab } from "@mui/material";
import SEBI from "../../img/invest1.png";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import theme from "../../theme";
import backgroundImage from "../../img/earth1.png";
import { Announcements } from "../../AnnouncementsContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomListCard from "../../component/CustomListCard";

const AnnouncementsPage = () => {
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
              Announcements
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
                <Tab label="2024-25" value="1" />
                <Tab label="2023-24" value="2" />
                <Tab label="2022-23" value="3" />
                <Tab label="2021-22" value="4" />
              </TabList>
              <TabPanel
                value="1"
                sx={{
                  paddingX: 0,
                }}
              >
                <CustomListCard
                  title={Announcements[0].title}
                  list={Announcements[0].content}
                  singlechild={true}
                />
              </TabPanel>
              <TabPanel value="2" sx={{ paddingX: 0 }}>
                <CustomListCard
                  title={Announcements[1].title}
                  list={Announcements[1].content}
                  singlechild={true}
                />
              </TabPanel>
              <TabPanel value="3" sx={{ paddingX: 0 }}>
                <CustomListCard
                  title={Announcements[2].title}
                  list={Announcements[2].content}
                  singlechild={true}
                />
              </TabPanel>
              <TabPanel value="4" sx={{ paddingX: 0 }}>
                <CustomListCard
                  title={Announcements[3].title}
                  list={Announcements[3].content}
                  singlechild={true}
                />
              </TabPanel>
            </Box>
          </TabContext>
        </Grid>
      </Container>
    </>
  );
};

export default AnnouncementsPage;
