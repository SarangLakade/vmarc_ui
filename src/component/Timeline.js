import React from "react";
import { Grid, Box, Typography, styled } from "@mui/material";
import { ReactComponent as Vector24 } from "../img/Vector.svg";

const events = [
  {
    year: "2002",
    title: "Fonded",
    description: "Started With 2 Product Line & Vibrant Work Force.",
    color: "#81C784",
  },
  {
    year: "2003",
    title: "Founded",
    description: "Started With 2 Product Line & Vibrant Work Force.",
    color: "#81C7C3",
  },
  {
    year: "2004",
    title: "Founded",
    description: "Started With 2 Product Line & Vibrant Work Force.",
    color: "#8188C7",
  },
  {
    year: "2005",
    title: "Founded",
    description: "Started With 2 Product Line & Vibrant Work Force.",
    color: "#FCA4A4",
  },
  {
    year: "2006",
    title: "Founded",
    description: "Started With 2 Product Line & Vibrant Work Force.",
    color: "#7BE1E8",
  },
  {
    year: "2007",
    title: "Founded",
    description: "Started With 2 Product Line & Vibrant Work Force.",
    color: "#D73F6A",
  },
  {
    year: "2008",
    title: "Founded",
    description: "Started With 2 Product Line & Vibrant Work Force.",
    color: "#EFC83C",
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
      height: 150,
      p: 2,
    },
  };

  const TimelineDot = styled("div")(({ color, left }) => ({
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    border: `5px solid #303030`,
    position: "relative",
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
              }}
            >
              <TimelineDot
                key={index}
                color={item.color}
                left={index > 0 ? 14.7 * index : 0}
                style={{
                  position: "absolute",
                  bottom: -15,
                  left: "50%",
                  transform: "translate(-50% )",
                }}
              />
              <>
                <Typography style={styles.heading}>{item.year}</Typography>
                <Typography style={styles.subHeading}>{item.title}</Typography>
                <Typography style={styles.paragraph}>
                  {item.description}
                </Typography>
                <Vector24
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "auto",
                    color: item.color,
                    objectFit: "cover",
                  }}
                />
              </>
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
                />
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
                <>
                  <Typography style={styles.heading}>{item.year}</Typography>
                  <Typography style={styles.subHeading}>
                    {item.title}
                  </Typography>
                  <Typography style={styles.paragraph}>
                    {item.description}
                  </Typography>
                </>
              </>
            </Box>
          ) : null
        )}
      </Box>
    </Grid>
  );
};

export default Timeline;
