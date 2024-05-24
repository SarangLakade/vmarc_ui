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
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/about us",
//     element: <AboutUsPage />,
//   },
//   {
//     path: "/buy-now",
//     element: <BuyNowPage />,
//   },
//   {
//     path: "/customer-service",
//     element: <CustomerService />,
//   },
//   {
//     path: "/privacy-policy",
//     element: <PrivacyPage />,
//   },

//   // {
//   //   path: "/",
//   //   element: <WarrantyPage />,
//   // },
//   // {
//   //   path: "/",
//   //   element: <Home />,
//   // },
// ]);

// const AnimateRoutes = () => {
//   const location = useLocation();
//   return (
//     <Routes location={location} key={location.pathname}>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/about us" element={<AboutUsPage />} />
//       <Route path="/buy-now" element={<BuyNowPage />} />
//       <Route path="/customer-service" element={<CustomerService />} />
//       <Route path="/privacy-policy" element={<PrivacyPage />} />
//     </Routes>
//   );
// };

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <BrowserRouter basename="/" future={{ v7_startTransition: true }}>
          <Navbar />
          <AnimatedRoutes />
          <Footer />
          {/* <RouterProvider router={router} /> */}
        </BrowserRouter>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
