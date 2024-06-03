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

const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  transition: "background-color 0.5s ease",
  backgroundColor: scrolled ? "black" : "transparent",
  boxShadow: scrolled ? undefined : "none",
}));

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

  const lcaseN = location.pathname.toLowerCase().trim();
  const navigate = useNavigate();

  const [investorMenu, setInvestorMenu] = useState(null);
  const [productMenu, setProductMenu] = useState(null);
  const [productSubMenu, setProductSubMenu] = useState({});
  const [openInvestor, setOpenInvestor] = React.useState(false);

  const handleClickInvestor = () => {
    setOpenInvestor(!openInvestor);
  };
  const [openProductCat, setOpenProductCat] = useState(false);
  const [openProductItems, setOpenProductItems] = useState({});

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
  const handleClickProductMenuItem = (event, index) => {
    setProductSubMenu((prev) => ({ ...prev, [index]: event.currentTarget }));
  };
  const handleClickProductSubMenuItem = (item, category) => {
    navigate("product", { state: { item, category } });
    setProductSubMenu({});
    setProductMenu(null);
  };

  const handleInvestorNavigate = (link) => {
    navigate(link);
    setInvestorMenu(null);
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
          <img src={Logo} alt="logo" height={"120px"} />

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
                textDecoration: "none",
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
                textDecoration: "none",
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
                textDecoration: "none",
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

            <Button
              aria-controls="main-menu"
              aria-haspopup="true"
              onClick={(event) => setProductMenu(event.currentTarget)}
              sx={{
                color: `${theme.palette.textPrimary.main}`,
                // display: "block",
                textTransform: "capitalize",
                "&:hover": {
                  color: `${theme.palette.primary.main}`,
                  backgroundColor: "transparent",
                },
                position: "relative",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: 1.5,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Products
              <ExpandMore
                sx={{
                  marginLeft: "5px",
                  verticalAlign: "middle",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 15, // Adjust this value to control the gap between text and underline
                  width: lcaseN.includes("product") ? "100%" : "0",
                  borderBottom: `2px solid ${theme.palette.primary.main}`,
                }}
              ></span>
            </Button>
            <Menu
              id="main-menu"
              anchorEl={productMenu}
              keepMounted
              open={Boolean(productMenu)}
              onClose={() => setProductMenu(null)}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "#333",
                  color: "#fff",
                },
                "& .MuiMenuItem-root": {
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: "#fff",
                  },
                  "&.Mui-selected": {
                    backgroundColor: theme.palette.primary.main,
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  },
                },
              }}
            >
              {Products.map((product, i) => (
                <MenuItem
                  key={i}
                  onClick={(event) => {
                    handleClickProductMenuItem(event, i);
                  }}
                >
                  {product.category}
                  {product.items.length > 0 ? <KeyboardArrowRight /> : null}
                  <Menu
                    id={`submenu-${i}`} // Unique ID for each submenu
                    anchorEl={productSubMenu[i]}
                    keepMounted
                    open={Boolean(productSubMenu[i])}
                    onClose={() => setProductSubMenu({})}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    sx={{
                      "& .MuiPaper-root": {
                        backgroundColor: "#333",
                        color: "#fff",
                      },
                      "& .MuiMenuItem-root": {
                        "&:hover": {
                          backgroundColor: theme.palette.primary.main,
                          color: "#fff",
                        },
                        "&.Mui-selected": {
                          backgroundColor: theme.palette.primary.main,
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.dark,
                          },
                        },
                      },
                    }}
                  >
                    {product.items.map((item, j) => (
                      <MenuItem
                        key={j}
                        onClick={() =>
                          handleClickProductSubMenuItem(item, product.category)
                        }
                      >
                        {item.title}
                        {item.length > 0 ? <KeyboardArrowRight /> : null}
                      </MenuItem>
                    ))}
                  </Menu>
                </MenuItem>
              ))}
            </Menu>

            <Button
              aria-controls="main-menu"
              aria-haspopup="true"
              onClick={(event) => setInvestorMenu(event.currentTarget)}
              sx={{
                color: `${theme.palette.textPrimary.main}`,
                display: "block",
                textTransform: "capitalize",
                "&:hover": {
                  color: `${theme.palette.primary.main}`,
                  backgroundColor: "transparent",
                },
                position: "relative",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: 1.5,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Investor
              <ExpandMore
                sx={{
                  marginLeft: "5px",
                  verticalAlign: "middle",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 15, // Adjust this value to control the gap between text and underline
                  width: lcaseN.includes("investor") ? "100%" : "0",
                  borderBottom: `2px solid ${theme.palette.primary.main}`,
                }}
              ></span>
            </Button>
            <Menu
              id="main-menu"
              anchorEl={investorMenu}
              keepMounted
              open={Boolean(investorMenu)}
              onClose={() => setInvestorMenu(null)}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "#333", // Dark background color
                  color: "#fff", // Light text color
                },
                "& .MuiMenuItem-root": {
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main, // Highlight color on hover
                    color: "#fff",
                  },
                  "&.Mui-selected": {
                    backgroundColor: theme.palette.primary.main, // Highlight color when selected
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark, // Darker highlight on hover when selected
                    },
                  },
                },
              }}
            >
              <MenuItem
                onClick={() => handleInvestorNavigate("/investor/sebi46")}
              >
                Disclosure - Regulation 46 of the SEBI
              </MenuItem>
              <MenuItem
                aria-controls="submenu"
                aria-haspopup="true"
                onClick={() => handleInvestorNavigate("/investor/policies")}
              >
                Policies & Program
              </MenuItem>
              <MenuItem
                onClick={() =>
                  handleInvestorNavigate("/investor/announcements")
                }
              >
                {" "}
                Announcements
              </MenuItem>
              <MenuItem onClick={() => handleInvestorNavigate("/investor/ipo")}>
                IPO
              </MenuItem>
              <MenuItem
                onClick={() =>
                  handleInvestorNavigate("/investor/investor-grievance")
                }
              >
                Investor Grievance
              </MenuItem>
              <MenuItem
                onClick={() =>
                  handleInvestorNavigate("/investor/details-of-registrar")
                }
              >
                Details Of Registrar and Share Transfer Agents
              </MenuItem>
            </Menu>
            <Typography
              // key={page}
              variant="h5"
              mx={2}
              component={Link} // Use Link component for navigation
              to={"carrier"}
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
              Career
              {/* Underline */}
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: -6, // Adjust this value to control the gap between text and underline
                  width: lcaseN.includes("carrier") ? "100%" : "0",
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
            <MenuOutlined />
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
              m: 2,
            }}
          >
            <IconButton aria-label="delete" onClick={toggleDrawer}>
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
                  my: 1,
                  color: "#fff",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                Home
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                variant="h4"
                mx={2}
                component={Link}
                to="/about us"
                onClick={toggleDrawer}
                sx={{
                  my: 1,
                  color: "#fff",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                About Us
              </Typography>
            </ListItem>
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
                }}
              >
                Product
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
                    <Collapse
                      in={openProductItems[i]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List id={`sublist${i}`} component="div" disablePadding>
                        {product.items.map((item, j) => (
                          <ListItemButton
                            key={j}
                            sx={{ mx: 4, color: "#c9c9c9" }}
                            onClick={() =>
                              handleClickProductSubMenuItem(
                                item,
                                product.category
                              )
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
                }}
              >
                Investor
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
                  onClick={() =>
                    handleInvestorNavigate("/investor/announcements")
                  }
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
                to="/carrier"
                onClick={toggleDrawer}
                sx={{
                  my: 1,
                  color: "#fff",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                Carrier
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
                }}
              >
                Contact Us
              </Typography>
            </ListItem>
          </List>
        </Drawer>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;
