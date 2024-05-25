import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  ListItem,
  Box,
} from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
// import LanguageSelector from "../multilingual/LanguageSelector";
import Logo from "../img/logo.png";
import theme from "../theme/index";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { cableMenu } from "../content";
const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  transition: "background-color 0.5s ease",
  backgroundColor: scrolled ? "black" : "transparent",
  boxShadow: scrolled ? undefined : "none",
}));

const pages = [
  "Home",
  "About Us",
  "Product",
  "Investor",
  "Careers",
  "Contact Us",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

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
  // const lcaseN = location.pathname;

  const lcaseN = location.pathname.toLowerCase().trim();
  console.log("THIS IS lcaseN", lcaseN);
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    handleCloseSub();
    setActiveSubmenu(index);
    setSubmenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubmenuAnchorEl(null);
    setActiveSubmenu(null);
  };
  const handleCloseSub = () => {
    setSubmenuAnchorEl(null);
    setActiveSubmenu(null);
  };

  return (
    <StyledAppBar
      position="fixed"
      // sx={{ backgroundColor: "transparent", boxShadow: "none", mt: 1 }}
      scrolled={isScrolled}
    >
      <Container maxWidth="lg">
        <Toolbar
          id="back-to-top-anchor"
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img src={Logo} alt="logo" height={"70px"} />

          {/* Navigation links for medium and larger screens */}
          <Box sx={{ display: { xs: "none", md: "flex" } }} ml={4}>
            {/* {pages.map((page) => {
              const lcaseC = page.toLowerCase(); */}

            {/* return ( */}
            <Typography
              // key={page}
              variant="h5"
              mx={2}
              component={Link} // Use Link component for navigation
              to={"/"}
              sx={{
                my: 3,
                color: `${theme.palette.textPrimary.main}`,
                display: "block",
                "&:hover": { color: `${theme.palette.primary.main}` },
                position: "relative",
              }}
              style={{
                textDecoration: "none", // Remove underline from default
              }}
            >
              Home
              {/* Underline */}
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: -6, // Adjust this value to control the gap between text and underline
                  width:
                    lcaseN === "/" || lcaseN.includes("Home") ? "100%" : "0",
                  borderBottom: `2px solid ${theme.palette.primary.main}`,
                }}
              ></span>
            </Typography>
            <Typography
              // key={page}
              variant="h5"
              mx={2}
              component={Link} // Use Link component for navigation
              to={"about us"}
              sx={{
                my: 3,
                color: `${theme.palette.textPrimary.main}`,
                display: "block",
                "&:hover": { color: `${theme.palette.primary.main}` },
                position: "relative",
              }}
              style={{
                textDecoration: "none", // Remove underline from default
              }}
            >
              About Us
              {/* Underline */}
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: -6, // Adjust this value to control the gap between text and underline
                  width: lcaseN.includes("/about%20us") ? "100%" : "0",
                  borderBottom: `2px solid ${theme.palette.primary.main}`,
                }}
              ></span>
            </Typography>
            <Typography
              // key={page}
              variant="h5"
              mx={2}
              component={Link} // Use Link component for navigation
              to={"contact us"}
              sx={{
                my: 3,
                color: `${theme.palette.textPrimary.main}`,
                display: "block",
                "&:hover": { color: `${theme.palette.primary.main}` },
                position: "relative",
              }}
              style={{
                textDecoration: "none", // Remove underline from default
              }}
            >
              Contact Us
              {/* Underline */}
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: -6, // Adjust this value to control the gap between text and underline
                  width: lcaseN.includes("/contact%20us") ? "100%" : "0",
                  borderBottom: `2px solid ${theme.palette.primary.main}`,
                }}
              ></span>
            </Typography>
            <Typography
              // key={page}
              variant="h5"
              mx={2}
              component={Link} // Use Link component for navigation
              to={"product"}
              sx={{
                my: 3,
                color: `${theme.palette.textPrimary.main}`,
                display: "block",
                "&:hover": { color: `${theme.palette.primary.main}` },
                position: "relative",
              }}
              style={{
                textDecoration: "none", // Remove underline from default
              }}
            >
              Products
              {/* Underline */}
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

            <Typography
              // key={page}
              variant="h5"
              mx={2}
              component={Link} // Use Link component for navigation
              to={"investor"}
              sx={{
                my: 3,
                color: `${theme.palette.textPrimary.main}`,
                display: "block",
                "&:hover": { color: `${theme.palette.primary.main}` },
                position: "relative",
              }}
              style={{
                textDecoration: "none", // Remove underline from default
              }}
            >
              Investor
              {/* Underline */}
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
            <Typography
              // key={page}
              variant="h5"
              mx={2}
              component={Link} // Use Link component for navigation
              to={"careers"}
              sx={{
                my: 3,
                color: `${theme.palette.textPrimary.main}`,
                display: "block",
                "&:hover": { color: `${theme.palette.primary.main}` },
                position: "relative",
              }}
              style={{
                textDecoration: "none", // Remove underline from default
              }}
            >
              Careers
              {/* Underline */}
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
            {/* );
            })} */}
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          > */}
          {/* Language selector */}
          {/* <LanguageSelector /> */}
          <IconButton
            size="large"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{
              display: { md: "none", color: theme.palette.textPrimary.main },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* User settings */}
          {/* <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
          <IconButton sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
          </Tooltip>
        </Box> */}
          {/* </Box> */}
        </Toolbar>

        {/* Responsive drawer for small screens */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <List>
            {pages.map((page) => (
              <ListItem key={page}>
                <Typography
                  key={page}
                  variant="h4"
                  mx={2}
                  component={Link} // Use Link component for navigation
                  to={page == "Home" ? `/` : `/${page.toLowerCase()}`}
                  onClick={toggleDrawer}
                  sx={{
                    my: 1,
                    color: `${theme.palette.textGray.main}`,
                    display: "block",
                    textDecoration: "none", // Remove underline from links
                  }}
                >
                  {page}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;
