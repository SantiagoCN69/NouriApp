import { Outlet } from "react-router";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingModal from "../components/PricingModal";
import ScrollToTop from "../components/ScrollToTop";
import { useTheme } from "../context/ThemeContext";

export default function Root() {
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
      <ScrollToTop />
      <Navbar onOpenPricing={() => setPricingModalOpen(true)} />
      <Outlet />
      <Footer />
      <PricingModal
        isOpen={pricingModalOpen}
        onClose={() => setPricingModalOpen(false)}
      />
    </div>
  );
}
