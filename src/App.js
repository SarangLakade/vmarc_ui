import "./App.css";
import Navbar from "./section/NavBar";
import Footer from "./section/Footer";
import * as React from "react";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme/index";
import AnimatedRoutes from "./AnimatedRoutes";
import { Box, Fade, Fab } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <BrowserRouter basename="/" future={{ v7_startTransition: true }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Navbar />
            <Box sx={{ flex: 1 }}>
              <AnimatedRoutes />
            </Box>
            <Footer />
          </Box>
          {/* <RouterProvider router={router} /> */}
          <ScrollTop {...props}>
            <Fab
              size="small"
              aria-label="scroll back to top"
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
                "&:hover svg": {
                  color: theme.palette.primary.main,
                },
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUpward sx={{ color: "white" }} />
            </Fab>
          </ScrollTop>
        </BrowserRouter>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
