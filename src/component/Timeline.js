import React from "react";
import { Grid, Box, Typography, styled, CardMedia } from "@mui/material";
import { ReactComponent as Vector24 } from "../img/Vector.svg";

const events = [
  {
    year: "2006",
    icon: require("../img/icon/Founded_icon.png"),
    title: "Founded",
    description: "Started with 2 product line & vibrant work force.",
    color: "#ffe100",
  },
  {
    year: "2009",
    icon: require("../img/icon/Lower_Voltage_icon.png"),
    title: "Lower Voltage XLPE Cables",
    description: "Introduce new product line, i.e. LT XLPE Cables.",
    color: "#00dec8",
  },
  {
    year: "2012",
    icon: require("../img/icon/New_Plant_Setup_icon.png"),
    title: "New Plant Setup",
    description:
      "Setup new plant along with new product line, i.e. LT Aerial Bunched Cables.",
    color: "#FCA4A4",
  },
  {
    year: "2016",
    icon: require("../img/icon/NPC_1st_Price_Winner_icon.png"),
    title: "NPC 1st Price Winner",
    description:
      "MSME Unit of the year 2015-2016 awarded by NPC under Make in India.",
    color: "#eb3131",
  },
  {
    year: "2017",
    icon: require("../img/icon/33KV_Plant_Setup_icon.png"),
    title: "33KV Plant Setup",
    description: "Introduced High Voltage Cables upto & including 33KV.",
    color: "#f07c00",
  },
  {
    year: "2019",
    icon: require("../img/icon/200__Crore_icon.png"),
    title: "200+ Crore",
    description: "Turnover crossed 200+ Crore.",
    color: "#0090f0",
  },
  {
    year: "2022",
    icon: require("../img/icon/Mega_Expansion_Plan_icon.png"),
    title: "Mega Expansion Plan",
    description:
      "New plant setup and also to introduce new product line of higher voltage upto & including 110KV.",
    color: "#b400f0",
  },
];

const Timeline = () => {
  const styles = {
    heading: {
      fontWeight: 500,
      fontSize: "18px",
      fontFamily: "Poppins, sans-serif",
      color: "#B8B980",
    },
    subHeading: {
      fontWeight: 500,
      fontSize: "18px",
      fontFamily: "Poppins, sans-serif",
      color: "#fff",
    },
    paragraph: {
      fontWeight: 400,
      fontSize: "14px",
      fontFamily: "Poppins, sans-serif",
      color: "#fff",
    },
    box: {
      color: "#fff",
      position: "relative",
      //   backgroundColor: "red",
      width: 220,
      height: 170,
      p: 2,
    },
  };

  const TimelineDot = styled("div")(({ color, left }) => ({
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    border: `1px solid ${color}`,
    position: "relative",
    // padding: '5px',
    zIndex: 1,
    left: `${6 + left + "%"}`,
  }));

  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{ overflowX: "auto", minWidth: "1100px" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          //   backgroundColor: "blue",
          width: "100%",
        }}
      >
        {events.map((item, index) =>
          index % 2 === 0 ? (
            <Box
              key={index}
              sx={{
                ...styles.box,
                // backgroundColor: "red",
                position: "relative",
              }}
            >
              <TimelineDot
                key={index}
                color={item.color}
                left={index > 0 ? 14.7 * index : 0}
                style={{
                  position: "absolute",
                  bottom: -25,
                  left: "50%",
                  transform: "translate(-50% )",
                }}
              >
                <CardMedia
                  component="img"
                  src={item.icon}
                  alt="Image"
                  sx={{
                    width: "30px", // Make the image fit within the dot
                    height: "30px", // Make the image fit within the dot
                    borderRadius: "50%", // Keep the image circular
                  }}
                />
              </TimelineDot>
              <div style={{ position: "absolute", bottom: 70 }}>
                <Typography style={styles.heading}>{item.year}</Typography>
                <Typography style={styles.subHeading}>{item.title}</Typography>
                <Typography style={styles.paragraph}>
                  {item.description}
                </Typography>
              </div>
              <Vector24
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "auto",
                  color: item.color,
                  objectFit: "cover",
                }}
              />
            </Box>
          ) : null
        )}
      </Box>

      <div
        textAlign="center"
        style={{
          width: "100%",
          border: "2px solid #263238",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* {events.map((item, index) => (
          
        ))} */}
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          //   backgroundColor: "blue",
          width: "100%",
        }}
      >
        {events.map((item, index) =>
          index % 2 !== 0 ? (
            <Box
              key={index}
              sx={{
                ...styles.box,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <>
                <TimelineDot
                  key={index}
                  color={item.color}
                  left={index > 0 ? 14.7 * index : 0}
                  style={{
                    position: "absolute",

                    top: "0",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {" "}
                  <CardMedia
                    component="img"
                    src={item.icon}
                    alt="Image"
                    sx={{
                      width: "30px", // Make the image fit within the dot
                      height: "30px", // Make the image fit within the dot
                      borderRadius: "50%", // Keep the image circular
                    }}
                  />
                </TimelineDot>
                <Vector24
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100%",
                    height: "auto",
                    color: item.color,
                    objectFit: "cover",
                    transform: "rotate(180deg)",
                    //   backgroundColor: "blue",
                  }}
                />
                <div style={{ position: "absolute", top: 70 }}>
                  <Typography style={styles.heading}>{item.year}</Typography>
                  <Typography style={styles.subHeading}>
                    {item.title}
                  </Typography>
                  <Typography style={styles.paragraph}>
                    {item.description}
                  </Typography>
                </div>
              </>
            </Box>
          ) : null
        )}
      </Box>
    </Grid>
  );
};

export default Timeline;
