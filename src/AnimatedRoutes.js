import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./view/HomePage";
import AboutUsPage from "./view/AboutUsPage";
import ProductPage from "./view/ProductPage";
import ContactUsPage from "./view/ContactUsPage";
import InvestorPage from "./view/InvestorPage";
import CarrierPage from "./view/CareerPage";
// import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    // <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about us" element={<AboutUsPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/investor" element={<InvestorPage />} />
      <Route path="/careers" element={<CarrierPage />} />
      <Route path="/contact us" element={<ContactUsPage />} />
    </Routes>
    // </AnimatePresence>
  );
};

export default AnimatedRoutes;
