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

const InvestorPage = () => {
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
                variant="scrollable"
                scrollButtons="auto"
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
                <Tab label="Leadership Team" value="1" wrapped />
                <Tab label="Details of Business" value="2" wrapped />
                <Tab label="Financial Information" value="3" wrapped />
                <Tab label="Shareholding Pattern" value="4" wrapped />
              </TabList>
              <TabPanel
                value="1"
                sx={{
                  paddingX: 0,
                }}
              >
                <Typography variant="h4" mt={5} mb={3}>
                  BOARD OF DIRECTORS
                </Typography>
                {console.log("boardDirector", boardDirector)}
                {boardDirector.map((director, index) => (
                  <BodCard
                    key={index}
                    img={director.img}
                    name={director.name}
                    position={director.position}
                    description={director.description}
                  />
                ))}
              </TabPanel>
              <TabPanel value="2" sx={{ paddingX: 0 }}>
                <Box sx={{ mt: 5, mb: 3 }}>
                  <Typography variant="body1">
                    <Collapse in={expanded} collapsedSize={100}>
                      “V-Marc”is among the global leaders in providing reliable
                      and consistent quality of products.By supplying our
                      optimally priced high quality products we enable our
                      clients to achieve more and outperform their competitors
                      and stay ahead of the innovation curve. Customers'
                      satisfaction is our prime objectives it is the foundation
                      stone for the growth of the company.
                      <br /> “V-Marc”has earned trust and reputation in India by
                      winning the customers’ confidence. A very huge quantity of
                      our cables has been in operation across India. The
                      Organization is also committed to comply with all
                      applicable environment, health & safety legislations and
                      all other requirements of existing & prospective buyers.
                    </Collapse>
                  </Typography>
                  <Box display="flex" justifyContent="center" mt={1}>
                    <Button
                      onClick={handleToggle}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      {expanded ? "Read Less" : "Read More"}
                      {expanded ? (
                        <ExpandLessIcon sx={{ color: "white" }} />
                      ) : (
                        <ExpandMoreIcon sx={{ color: "white" }} />
                      )}
                    </Button>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel value="3" sx={{ paddingX: 0 }}>
                <CustomTable Data={FinancialTableData} />
              </TabPanel>
              <TabPanel value="4" sx={{ paddingX: 0 }}>
                <CustomTable Data={ShareholdingData} />
              </TabPanel>
            </Box>
          </TabContext>
        </Grid>
      </Container>
      {value == "1" ? <CommitteeOfBoardSection /> : null}
      {value == "2" ? <DetailOfBusiness /> : null}
    </>
  );
};

export default InvestorPage;
