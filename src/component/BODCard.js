import React from "react";
import {
  Card,
  CardMedia,
  Box,
  Typography,
  CardContent,
  IconButton,
  Tabs,
  Tab,
  CustomTabPanel,
} from "@mui/material";
import BOD1 from "../img/BOD1.png";
// import BOD2 from "../img/BOD2.png";
// import BOD3 from "../img/BOD3.png";
// import BOD4 from "../img/BOD4.png";
// import BOD5 from "../img/BOD5.png";
import theme from "../theme";

const styles = {
  header: {
    fontFamily: "Poppins",
    fontSize: "21.41px",
    fontWeight: 600,
    color: "#ffff",
  },
  subHead: {
    fontFamily: "Poppins",
    fontSize: "10.7px",
    fontWeight: 500,
    color: "#ffff",
    textDecoration: "underline",
  },
  p: {
    fontFamily: "Poppins",
    fontSize: "12.23px",
    fontWeight: 400,
    color: "#ffff",
  },
};
const BodCard = ({ name, img, position, description }) => {
  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "transparent",
        color: "white",
        border: `1px solid ${theme.palette.border.main}`, // 1px white border
        padding: 1, // Padding inside the card
        mb: 2,
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 200, width: 200, backgroundColor: "white" }}
        image={img}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          {console.log(name)}
          <Typography component="div" variant="h3">
            {name}
          </Typography>
          <Typography
            component="div"
            variant="h5"
            color={theme.palette.secondary.main}
          >
            {position}
          </Typography>
          <Typography component="div" variant="h5" mt={2}>
            {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BodCard;
