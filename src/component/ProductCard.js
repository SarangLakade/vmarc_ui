import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Products1 from "../img/products3.jpeg";

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
const ProductCard = ({ heading, subHeading, paragraph }) => {
  return (
    <Box
      sx={{
        // width: "344.06px", // Adjust the width as needed
        height: "400px", // Adjust the height as neededb
        backgroundImage: `url(${Products1})`,
        backgroundSize: "cover", // Cover the entire box
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent image repetition
        transition: "background 0.3s ease-in-out", // Smooth transition for the background change
        paddingX: 2,
        paddingY: 5,
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          backgroundImage: "none",
          justifyContent: "space-between",
          backgroundColor: "primary.main",
          "& .product-description": {
            display: "block", // Disply on hover
          },
        },
        justifyContent: "flex-end",
      }}
    >
      <Box>
        <Typography className="product-header" style={styles.header} mb={1}>
          {heading}
        </Typography>
        <Typography
          className="product-description"
          sx={{
            fontFamily: "Poppins",
            fontSize: "12.23px",
            fontWeight: 400,
            color: "#ffff",
            display: "none", // Initially hidden
          }}
        >
          {paragraph}
        </Typography>
      </Box>
      <Link className="product-subheader" style={styles.subHead} href="#">
        {subHeading}
      </Link>
    </Box>
  );
};

export default ProductCard;
