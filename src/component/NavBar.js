import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
// import LanguageSelector from "../multilingual/LanguageSelector";
import Logo from "../img/logo.png";
import theme from "../theme/index";
import { Container } from "@mui/material";

const pages = [
  "Home",
  "About Us",
  "Product",
  "Investor",
  "Carrier",
  "Contact Us",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none", mt: 1 }}
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
            {pages.map((page) => {
              const lcaseC = page.toLowerCase();
              const lcaseN = location.pathname;
              return (
                <Typography
                  key={page}
                  variant="h5"
                  mx={2}
                  component={Link} // Use Link component for navigation
                  to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
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
                  {page}
                  {/* Underline */}
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: -6, // Adjust this value to control the gap between text and underline
                      width:
                        (page === "Home" && lcaseN === "/") ||
                        lcaseN.includes(lcaseC.substr(0, 4))
                          ? "100%"
                          : "0",
                      borderBottom: `2px solid ${theme.palette.primary.main}`,
                    }}
                  ></span>
                </Typography>
              );
            })}
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
    </AppBar>
  );
};

export default Navbar;
