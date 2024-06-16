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
import { Policies } from "../../PolicyContent";
import CommitteeOfBoardSection from "../../section/CommitteeOfBoardSection";
import DetailOfBusiness from "../../section/DetailOfBusiness";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CustomTable from "../../component/CustomTable";
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomListCard from "../../component/CustomListCard";

const PoliciesPage = () => {
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
            mt: 20,
            mb: 5,
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
            <Typography
              variant="hb1"
              fontWeight={800}
              sx={{ fontSize: { md: "50px", xs: "30px" } }}
            >
              Policies & Program
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <img src={SEBI}></img> */}
          </Box>
        </Grid>
        <Grid item sm={12} sx={{ pb: 7 }}>
          <CustomListCard
            title={Policies.title}
            list={Policies.content}
            singlechild={true}
          />
        </Grid>
      </Container>
    </>
  );
};

export default PoliciesPage;
