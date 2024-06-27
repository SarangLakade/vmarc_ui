import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Box,
  useMediaQuery,
} from "@mui/material";
import {
  ExpandMore,
  KeyboardArrowRight,
  MenuOutlined,
} from "@mui/icons-material";
import Logo from "../img/logo.png";
import theme from "../theme/index";
import { styled } from "@mui/material/styles";
import { Products } from "../productContent";
import { useNavigate } from "react-router-dom";
import DrawerNavBar from "../component/DrawerNavBar";

const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  transition: "background-color 0.5s ease",
  backgroundColor: scrolled ? "black" : "transparent",
  boxShadow: scrolled ? undefined : "none",
}));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const location = useLocation();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScroll = () => {
    let threshold;
    if (isSmallScreen) {
      threshold = 15; // threshold for small screens
    } // threshold for medium screens
    else {
      threshold = 100; // default threshold for large screens
    }

    if (window.scrollY > threshold) {
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
  const [aboutusMenu, setAboutusMenu] = useState(null);
  const [productMenu, setProductMenu] = useState(null);
  const [productSubMenu, setProductSubMenu] = useState({});

  const handleClickProductMenuItem = (event, index) => {
    setProductSubMenu((prev) => ({ ...prev, [index]: event.currentTarget }));
  };
  const handleClickProductSubMenuItem = (item, category) => {
    navigate("product", { state: { item, category } });
    setProductSubMenu({});
    setProductMenu(null);
    setDrawerOpen(false);
  };

  const handleInvestorNavigate = (link) => {
    navigate(link);
    setInvestorMenu(null);
    setDrawerOpen(false);
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
    setAboutusMenu(false);
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
          <img src={Logo} loading="eager" alt="logo" height={"120px"} />

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

            <Button
              aria-controls="main-menu"
              aria-haspopup="true"
              onClick={(event) => setAboutusMenu(event.currentTarget)}
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
              About Us
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
                  width: lcaseN.includes("about%20us") ? "100%" : "0",
                  borderBottom: `2px solid ${theme.palette.primary.main}`,
                }}
              ></span>
            </Button>
            <Menu
              id="main-menu"
              anchorEl={aboutusMenu}
              keepMounted
              open={Boolean(aboutusMenu)}
              onClose={() => setAboutusMenu(null)}
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
                onClick={() => handleAboutusNavigate("aboutUs-history")}
              >
                History
              </MenuItem>
              <MenuItem
                aria-controls="submenu"
                aria-haspopup="true"
                onClick={() => handleAboutusNavigate("aboutUs-company")}
              >
                Company
              </MenuItem>
              <MenuItem
                onClick={() => handleAboutusNavigate("aboutUs-services")}
              >
                Services
              </MenuItem>
              <MenuItem onClick={() => handleAboutusNavigate("aboutUs-vision")}>
                Vision & Mission
              </MenuItem>
              <MenuItem onClick={() => handleAboutusNavigate("aboutUs-policy")}>
                Our Policy
              </MenuItem>
              <MenuItem onClick={() => handleAboutusNavigate("aboutUs-csr")}>
                CSR
              </MenuItem>
              <MenuItem
                onClick={() => handleAboutusNavigate("aboutUs-gallery")}
              >
                Gallery
              </MenuItem>
              <MenuItem
                onClick={() => handleAboutusNavigate("aboutUs-certifications")}
              >
                Certifications
              </MenuItem>
            </Menu>

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
        <DrawerNavBar toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;
