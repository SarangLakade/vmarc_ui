import "./App.css";
import Navbar from "./section/NavBar";
import Footer from "./section/Footer";
import React, { Suspense } from "react";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme/index";
import { Box, Fade, Fab } from "@mui/material";
import { ArrowUpward, WhatsApp } from "@mui/icons-material";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
const AnimatedRoutes = React.lazy(() => import("./AnimatedRoutes"));

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
            <Suspense fallback={<div>Loading...</div>}>
              <Navbar />
              <Box sx={{ flex: 1 }}>
                <AnimatedRoutes />
              </Box>
              <Footer />
            </Suspense>
          </Box>
          {/* <RouterProvider router={router} /> */}
          <ScrollTop {...props}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
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
              <Fab
                size="medium"
                aria-label="scroll back to top"
                sx={{
                  backgroundColor: "#00db0f",
                  "&:hover": {
                    backgroundColor: "#00db0f",
                  },
                  // "&:hover svg": {
                  //   color: theme.palette.primary.main,
                  // },
                }}
                href="//api.whatsapp.com/send?phone=7055521808"
              >
                <WhatsApp sx={{ color: "white" }} />
              </Fab>
            </Box>
          </ScrollTop>
        </BrowserRouter>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
