import { Outlet } from "react-router";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingModal from "../components/PricingModal";
import ScrollToTop from "../components/ScrollToTop";

export default function Root() {
  const [pricingModalOpen, setPricingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
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
