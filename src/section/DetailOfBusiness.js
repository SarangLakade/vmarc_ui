import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Tabs,
  Tab,
  Collapse,
} from "@mui/material";
import CustomListCard from "../component/CustomListCard";
import {
  RegulationEvents,
  StatementofDeviation,
  StatementofDeviation2,
  AnualReturn,
  AnualReturn2,
  AnualReturn3,
  Event,
} from "../content";
import CustomDivider from "../component/CustomDivider";
import EventCard from "../component/EventCard";
import BlackEarth from "../img/blackearth.png";

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
  },
  paragraph: {
    fontWeight: 400,
    fontSize: "18px",
    fontFamily: "Poppins, sans-serif",
  },
};
const DetailOfBusiness = () => {
  return (
    <div
      style={{
        backgroundColor: "#2B2B2B",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <Container maxWidth={"lg"}>
        <Box
          sx={{
            backgroundImage: `url(${BlackEarth})`,
            backgroundPosition: "left -130px top",
            backgroundSize: "cover", // Add this line to cover the entire area
            width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundColor: "black",
            filter: "grayscale(100%)",
            mt: 5,
          }}
        >
          <Grid container gap={2} sx={{ p: 5 }}>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                color: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography style={styles.heading}>
                Grievance Redressal Contact Details
              </Typography>
              <Typography style={styles.subHeading} sx={{ my: 4 }}>
                Email: investor@v-marc.in
              </Typography>
              <Typography style={styles.subHeading}>
                Contact Information of the designated officials of the listed
                entity responsible for assisting and handling investor
                grievances.
              </Typography>
            </Grid>
            <Grid item xs={0} md={2}></Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                color: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography style={styles.subHeading}>Anuj Ahluwalia</Typography>
              <Typography style={styles.subHeading}>
                Company Secretary & Compliance Officer
              </Typography>
              <Typography style={styles.subHeading}>
                Phone: +91 9389922395
              </Typography>
              <Typography style={styles.subHeading}>
                Email: CS@v-marc.in
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 4 }}>
          <Grid container spacing={1}>
            {Event.map((event, index) => (
              <Grid key={index} item xs={12} md={6}>
                <EventCard event={event}></EventCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <CustomDivider title="Events Disclosed under Regulation 30 " />
        <CustomListCard
          title={RegulationEvents.title}
          list={RegulationEvents.content}
          singlechild={true}
        />
        <CustomDivider title="Statement of Deviation or Variation" />
        <CustomListCard
          title={StatementofDeviation.title}
          list={StatementofDeviation.content}
          singlechild={true}
          large={true}
        />
        <CustomListCard
          title={StatementofDeviation2.title}
          list={StatementofDeviation2.content}
          singlechild={true}
          large={true}
        />
        <CustomDivider title="Annual Return as provided under Section 92" />
        <CustomListCard
          title={AnualReturn.year}
          list={AnualReturn.pdf}
          singlechild={true}
          large={true}
          pdf={true}
        />
        <CustomListCard
          title={AnualReturn2.year}
          list={AnualReturn2.pdf}
          singlechild={true}
          large={true}
          pdf={true}
        />
        <CustomListCard
          title={AnualReturn3.year}
          list={AnualReturn3.pdf}
          singlechild={true}
          large={true}
          pdf={true}
        />
      </Container>
    </div>
  );
};

export default DetailOfBusiness;
