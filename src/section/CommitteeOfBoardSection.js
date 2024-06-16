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
import {
  AuditCommittee,
  NominationCommittee,
  StakeholderCommittee,
  SocialCommittee,
} from "../content";
import CommitteeMemberCard from "../component/CommitteeMemberCard";
import CustomListCard from "../component/CustomListCard";

const CommitteeOfBoardSection = () => {
  const [cvalue, setCValue] = React.useState("1");

  const handleCommiteeChange = (event, newValue) => {
    setCValue(newValue);
  };
  return (
    <div style={{ backgroundColor: "#2B2B2B", paddingTop: "10px" }}>
      <Container maxWidth={"lg"} sx={{ pb: 5 }}>
        <Grid item sm={12}>
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
            COMMITTEE OF BOARD
          </Typography>
          <TabContext value={cvalue}>
            <Box
              sx={{
                borderColor: "divider",
                color: "white",
              }}
            >
              <TabList
                onChange={handleCommiteeChange}
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
                <Tab label="Audit" value="1" wrapped />
                <Tab label="Nomination And Remuneration" value="2" wrapped />
                <Tab label="Stakeholder Relationship" value="3" wrapped />
                <Tab
                  label="Corporate Social Responsibility"
                  value="4"
                  wrapped
                />
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
                <CustomListCard
                  title="Designation in Committee"
                  list={AuditCommittee}
                />
              </TabPanel>
              <TabPanel value="2" sx={{ paddingX: 0 }}>
                <CustomListCard
                  title="Designation in Committee"
                  list={NominationCommittee}
                />
              </TabPanel>
              <TabPanel value="3" sx={{ paddingX: 0 }}>
                <CustomListCard
                  title="Designation in Committee"
                  list={StakeholderCommittee}
                />
              </TabPanel>
              <TabPanel value="4" sx={{ paddingX: 0 }}>
                <CustomListCard
                  title="Designation in Committee"
                  list={SocialCommittee}
                />
              </TabPanel>
            </Box>
          </TabContext>
        </Grid>
      </Container>
    </div>
  );
};

export default CommitteeOfBoardSection;
