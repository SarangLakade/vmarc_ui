import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  Menu,
  MenuItem,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  Container,
  ListItemText,
  ListItem,
  Collapse,
  ListItemButton,
  Box,
} from "@mui/material";
import {
  ExpandMore,
  KeyboardArrowRight,
  MenuOutlined,
  Close,
} from "@mui/icons-material";
import ExpandLess from "@mui/icons-material/ExpandLess";
// import LanguageSelector from "../multilingual/LanguageSelector";
// import Logo from "../img/V-mark-logo-horizontal.png";
import Logo from "../img/logo.png";
import theme from "../theme/index";
import { styled } from "@mui/material/styles";
import { Products } from "../productContent";
import { useNavigate } from "react-router-dom";

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
const DrawerNavBar = ({ toggleDrawer, drawerOpen }) => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const lcaseN = location.pathname.toLowerCase().trim();
  const navigate = useNavigate();

  const [openInvestor, setOpenInvestor] = React.useState(false);
  const [openAboutus, setOpenAboutus] = React.useState(false);
  const [openProductCat, setOpenProductCat] = useState(false);
  const [openProductItems, setOpenProductItems] = useState({});

  const handleClickInvestor = () => {
    setOpenInvestor(!openInvestor);
  };
  const handleClickAboutus = () => {
    setOpenAboutus(!openAboutus);
  };

  const handleClickProductCat = () => {
    setOpenProductCat(!openProductCat);
    // toggleDrawer();
  };

  const handleClickProductItem = (index) => {
    setOpenProductItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  // const handleClickProductMenuItem = (event, index) => {
  //   setProductSubMenu((prev) => ({ ...prev, [index]: event.currentTarget }));
  // };
  const handleClickProductSubMenuItem = (item, category) => {
    navigate("product", { state: { item, category } });
    toggleDrawer(!drawerOpen);
  };

  const handleInvestorNavigate = (link) => {
    navigate(link);
    toggleDrawer(!drawerOpen);
  };

  const handleAboutusNavigate = (id) => {
    if (lcaseN.includes("about%20us")) {
      scrollToElement(id);
    } else {
      navigate("about us", { state: { scrollToId: id } });
      setTimeout(() => {
        scrollToElement(id);
      }, 500);
    }
    setOpenAboutus(false);
    toggleDrawer(!drawerOpen);
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === "aboutUs-history") {
        window.scrollTo(0, 0);
      } else {
        const yOffset = -120;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };
  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer}
      sx={{
        "& .MuiDrawer-paper": {
          width: "350px", // Set your desired width here
          backgroundColor: "#2B2B2B", // Optional: Set a background color for the drawer
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "end",
          justifyContent: "flex-end",
          mx: 2,
          mt: 2,
          // backgroundColor: "red",
        }}
      >
        <IconButton
          aria-label="delete"
          onClick={toggleDrawer}
          sx={{
            "&:hover": {
              backgroundColor: "primary.main", // Set the background color to primary on hover
            },
          }}
        >
          <Close sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <List>
        <ListItem>
          <Typography
            variant="h4"
            mx={2}
            component={Link}
            to="/"
            onClick={toggleDrawer}
            sx={{
              mb: 1,
              color: "#fff",
              display: "block",
              textDecoration: "none",
              position: "relative",
            }}
          >
            Home
            <span
              style={{
                position: "absolute",
                left: 0,
                bottom: -6, // Adjust this value to control the gap between text and underline
                width: lcaseN === "/" || lcaseN.includes("Home") ? "100%" : "0",
                borderBottom: `2px solid ${theme.palette.primary.main}`,
              }}
            ></span>
          </Typography>
        </ListItem>
        <ListItem
          onClick={handleClickAboutus}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Typography
            variant="h4"
            mx={2}
            sx={{
              my: 1,
              color: "#fff",
              display: "block",
              textDecoration: "none",
              position: "relative",
            }}
          >
            About Us
            <span
              style={{
                position: "absolute",
                left: 0,
                bottom: -6, // Adjust this value to control the gap between text and underline
                width: lcaseN.includes("investor") ? "100%" : "0",
                borderBottom: `2px solid ${theme.palette.primary.main}`,
              }}
            ></span>
          </Typography>
          {openAboutus ? (
            <ExpandLess sx={{ color: "#fff" }} />
          ) : (
            <ExpandMore sx={{ color: "#fff" }} />
          )}
        </ListItem>
        <Collapse in={openAboutus} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              onClick={() => handleAboutusNavigate("aboutUs-history")}
              sx={{ mx: 2, color: "#c9c9c9" }}
            >
              History
            </ListItemButton>
            <ListItemButton
              aria-controls="submenu"
              aria-haspopup="true"
              onClick={() => handleAboutusNavigate("aboutUs-company")}
              sx={{ mx: 2, color: "#c9c9c9" }}
            >
              Company
            </ListItemButton>
            <ListItemButton
              onClick={() => handleAboutusNavigate("aboutUs-services")}
              sx={{ mx: 2, color: "#c9c9c9" }}
            >
              Services
            </ListItemButton>
            <ListItemButton
              onClick={() => handleAboutusNavigate("aboutUs-vision")}
              sx={{ mx: 2, color: "#c9c9c9" }}
            >
              Vision & Mission
            </ListItemButton>
            <ListItemButton
              onClick={() => handleAboutusNavigate("aboutUs-policy")}
              sx={{ mx: 2, color: "#c9c9c9" }}
            >
              Our Policy
            </ListItemButton>
            <ListItemButton
              onClick={() => handleAboutusNavigate("aboutUs-csr")}
              sx={{ mx: 2, color: "#c9c9c9" }}
            >
              CSR
            </ListItemButton>
            <ListItemButton
              onClick={() => handleAboutusNavigate("aboutUs-gallery")}
              sx={{ mx: 2, color: "#c9c9c9" }}
            >
              Gallery
            </ListItemButton>
            <ListItemButton
              onClick={() => handleAboutusNavigate("aboutUs-certifications")}
              sx={{ mx: 2, color: "#c9c9c9" }}
            >
              Certifications
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem
          sx={{ display: "flex", alignItems: "center" }}
          onClick={handleClickProductCat}
        >
          <Typography
            variant="h4"
            mx={2}
            // component={Link}
            // to="/product"
            sx={{
              my: 1,
              color: "#fff",
              display: "block",
              textDecoration: "none",
              position: "relative",
            }}
          >
            Product
            <span
              style={{
                position: "absolute",
                left: 0,
                bottom: -6, // Adjust this value to control the gap between text and underline
                width: lcaseN.includes("product") ? "100%" : "0",
                borderBottom: `2px solid ${theme.palette.primary.main}`,
              }}
            ></span>
          </Typography>
          {openProductCat ? (
            <ExpandLess sx={{ color: "#fff" }} />
          ) : (
            <ExpandMore sx={{ color: "#fff" }} />
          )}
        </ListItem>
        <Collapse in={openProductCat} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {Products.map((product, i) => (
              <div key={i}>
                <ListItemButton
                  sx={{ mx: 2, color: "#c9c9c9" }}
                  onClick={() => handleClickProductItem(i)}
                >
                  {product.category}
                  {openProductItems[i] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openProductItems[i]} timeout="auto" unmountOnExit>
                  <List id={`sublist${i}`} component="div" disablePadding>
                    {product.items.map((item, j) => (
                      <ListItemButton
                        key={j}
                        sx={{ mx: 4, color: "#c9c9c9" }}
                        onClick={() =>
                          handleClickProductSubMenuItem(item, product.category)
                        }
                      >
                        {item.title}
                        {item.items && item.items.length > 0 ? (
                          <KeyboardArrowRight />
                        ) : null}
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </div>
            ))}
          </List>
        </Collapse>

        <ListItem
          onClick={handleClickInvestor}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Typography
            variant="h4"
            mx={2}
            sx={{
              my: 1,
              color: "#fff",
              display: "block",
              textDecoration: "none",
              position: "relative",
            }}
          >
            Investor
            <span
              style={{
                position: "absolute",
                left: 0,
                bottom: -6, // Adjust this value to control the gap between text and underline
                width: lcaseN.includes("investor") ? "100%" : "0",
                borderBottom: `2px solid ${theme.palette.primary.main}`,
              }}
            ></span>
          </Typography>
          {openInvestor ? (
            <ExpandLess sx={{ color: "#fff" }} />
          ) : (
            <ExpandMore sx={{ color: "#fff" }} />
          )}
        </ListItem>
        <Collapse in={openInvestor} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              onClick={() => handleInvestorNavigate("/investor/sebi46")}
              sx={{ mx: 2, color: "#c9c9c9" }}
            >
              Disclosure - Regulation 46 of the SEBI
            </ListItemButton>
            <ListItemButton
              aria-controls="submenu"
              aria-haspopup="true"
              onClick={() => handleInvestorNavigate("/investor/policies")}
              sx={{ mx: 2, color: "#c9c9c9" }}
            >
              Policies & Program
            </ListItemButton>
            <ListItemButton
              onClick={() => handleInvestorNavigate("/investor/announcements")}
              sx={{ mx: 2, color: "#c9c9c9" }}
            >
              {" "}
              Announcements
            </ListItemButton>
            <ListItemButton
              onClick={() => handleInvestorNavigate("/investor/ipo")}
              sx={{ mx: 2, color: "#c9c9c9" }}
            >
              IPO
            </ListItemButton>
            <ListItemButton
              onClick={() =>
                handleInvestorNavigate("/investor/investor-grievance")
              }
              sx={{ mx: 2, color: "#c9c9c9" }}
            >
              Investor Grievance
            </ListItemButton>
            <ListItemButton
              onClick={() =>
                handleInvestorNavigate("/investor/details-of-registrar")
              }
              sx={{ mx: 2, color: "#c9c9c9" }}
            >
              Details Of Registrar and Share Transfer Agents
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem>
          <Typography
            variant="h4"
            mx={2}
            component={Link}
            to="/careers"
            onClick={toggleDrawer}
            sx={{
              my: 1,
              color: "#fff",
              display: "block",
              textDecoration: "none",
              position: "relative",
            }}
          >
            Careers
            <span
              style={{
                position: "absolute",
                left: 0,
                bottom: -6, // Adjust this value to control the gap between text and underline
                width: lcaseN.includes("careers") ? "100%" : "0",
                borderBottom: `2px solid ${theme.palette.primary.main}`,
              }}
            ></span>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography
            variant="h4"
            mx={2}
            component={Link}
            to="/contact us"
            onClick={toggleDrawer}
            sx={{
              my: 1,
              color: "#fff",
              display: "block",
              textDecoration: "none",
              position: "relative",
            }}
          >
            Contact Us
            <span
              style={{
                position: "absolute",
                left: 0,
                bottom: -6, // Adjust this value to control the gap between text and underline
                width: lcaseN.includes("contact%20us") ? "100%" : "0",
                borderBottom: `2px solid ${theme.palette.primary.main}`,
              }}
            ></span>
          </Typography>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerNavBar;
