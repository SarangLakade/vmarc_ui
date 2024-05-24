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
import InvestorPage from "./view/investor/InvestorPage";
import CarrierPage from "./view/CareerPage";
import PoliciesPage from "./view/investor/PoliciesPage";
import AnnouncementsPage from "./view/investor/AnnouncementsPage";
import IPOPage from "./view/investor/IPOPage";
import InvestorGrievancePage from "./view/investor/InvestorGrievancePage";
import RegistrarDetailsPage from "./view/investor/RegistrarDetailsPage";
// import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    // <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about us" element={<AboutUsPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/investor/sebi46" element={<InvestorPage />} />
      <Route path="/investor/policies" element={<PoliciesPage />} />
      <Route path="/investor/announcements" element={<AnnouncementsPage />} />
      <Route path="/investor/ipo" element={<IPOPage />} />
      <Route
        path="/investor/investor-grievance"
        element={<InvestorGrievancePage />}
      />
      <Route
        path="/investor/details-of-registrar"
        element={<RegistrarDetailsPage />}
      />
      <Route path="/carrier" element={<CarrierPage />} />
      <Route path="/contact us" element={<ContactUsPage />} />
    </Routes>
    // </AnimatePresence>
  );
};

export default AnimatedRoutes;
