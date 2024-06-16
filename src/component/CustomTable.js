import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Button,
  Paper,
  colors,
  IconButton,
} from "@mui/material";
import { FileCopy } from "@mui/icons-material";

const styles = {
  heading: {
    fontWeight: 400,
    fontSize: "20px",
    fontFamily: "Poppins, sans-serif",
    color: "#ffff",
    textAlign: "center",
  },
  subHeading: {
    fontWeight: 400,
    fontFamily: "Poppins, sans-serif",
    color: "#ECECFF",
    textAlign: "center",
  },
  paragraph: {
    fontWeight: 400,
    fontSize: "18px",
    fontFamily: "Poppins, sans-serif",
  },
  tableCell: {
    backgroundColor: "#1A1A30",
    borderBottom: "none",
    borderRadius: "8px",
    alignContent: "flex-start",
  },
};

const EventCard = ({ name }) => (
  <Box
    sx={{
      bgcolor: "#252550",
      color: "#ECECFF",
      p: 1,
      borderRadius: 2,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: 1,
      border: "1px solid #5D5DCC",
    }}
  >
    <Typography
      style={styles.subHeading}
      sx={{ fontSize: { xs: "12px", md: "16px" } }}
    >
      {name}
    </Typography>
    <IconButton>
      <FileCopy sx={{ color: "#ffff" }}></FileCopy>
    </IconButton>
  </Box>
);

const CustomTable = ({ Data }) => {
  const handleBoxClick = (link) => {
    console.log("Box clicked:", link);
    const pdfPath =
      "/vmarc/Financial-Information/2017-18/Balance-Sheet-17-18.pdf";
    window.open(link, "_blank");
  };
  return (
    <TableContainer sx={{ width: "100%", mb: 5 }}>
      <Table
        sx={{
          minWidth: 650,
          borderCollapse: "separate",
          borderSpacing: 10,
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell style={{ alignContent: "center" }} sx={styles.tableCell}>
              <Typography style={styles.heading}>Year</Typography>
            </TableCell>
            <TableCell style={{ alignContent: "center" }} sx={styles.tableCell}>
              <Typography style={styles.heading}>HY1</Typography>
            </TableCell>
            <TableCell style={{ alignContent: "center" }} sx={styles.tableCell}>
              <Typography style={styles.heading}>HY2</Typography>
            </TableCell>
            {Data[0].annual !== undefined ? (
              <TableCell
                style={{ alignContent: "center" }}
                sx={styles.tableCell}
              >
                <Typography style={styles.heading}>Annual Report</Typography>
              </TableCell>
            ) : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((event, index) => (
            <TableRow key={index}>
              <TableCell sx={{ border: "3px dotted #6B6B6B", minWidth: 70 }}>
                {/* <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      mr: 0.5,
                    }}
                  > */}
                <Typography
                  style={styles.subHeading}
                  sx={{ fontSize: { xs: "12px", md: "16px" } }}
                  color="#8EA1FF"
                >
                  {event.year}
                </Typography>
                {/* </Box> */}
              </TableCell>
              <TableCell style={styles.tableCell}>
                {event.HY1.map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{ m: 1 }}
                    onClick={() => handleBoxClick(item.link)}
                  >
                    <EventCard name={item.name} />
                  </Box>
                ))}
              </TableCell>
              <TableCell style={styles.tableCell}>
                {event.HY2.map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{ m: 1 }}
                    onClick={() => handleBoxClick(item.link)}
                  >
                    <EventCard name={item.name} />
                  </Box>
                ))}
              </TableCell>
              {event.annual !== undefined ? (
                <TableCell style={styles.tableCell}>
                  {event.annual.map((item, idx) => (
                    <Box
                      key={idx}
                      sx={{ m: 1 }}
                      onClick={() => handleBoxClick(item.link)}
                    >
                      <EventCard name={item.name} />
                    </Box>
                  ))}
                </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
