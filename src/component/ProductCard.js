import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import theme from "../theme";

const styles = {
  header: {
    fontFamily: "Poppins",
    fontSize: "21.41px",
    fontWeight: 600,
    color: "#fff",
  },
  subHead: {
    fontFamily: "Poppins",
    fontSize: "10.7px",
    fontWeight: 500,
    color: theme.palette.secondary.main,
    textDecoration: "underline",
  },
  p: {
    fontFamily: "Poppins",
    fontSize: "12.23px",
    fontWeight: 400,
    color: "#ffff",
  },
};
const ProductCard = ({ item, category, subHeading, paragraph }) => {
  return (
    <Box
      sx={{
        // width: "344.06px",
        height: "230px",
        backgroundColor: "#2ABBAE",
        backgroundImage: `url(${item.img})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background 0.3s ease-in-out",
        paddingX: 2,
        paddingY: 5,
        display: "flex",
        flexDirection: "column",
        color: theme.palette.secondary.main,
        "&:hover": {
          color: "white",
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
          {item.title}
        </Typography>
        <Typography
          className="product-description"
          sx={{
            fontFamily: "Poppins",
            fontSize: "12.23px",
            fontWeight: 400,
            color: "#ffff",
            // textAlign: "justify",
            display: "none", // Initially hidden
          }}
        >
          {paragraph}
        </Typography>
      </Box>

      <Link
        className="product-subheader"
        style={styles.subHead}
        to={"/product"}
        state={{ item, category }}
      >
        {subHeading}
      </Link>
    </Box>
  );
};

export default ProductCard;
