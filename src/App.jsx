import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppFab from "./components/layout/WhatsAppFab";

import Home from "./pages/Home";
import ProtectPhone from "./pages/ProtectPhone";
import BuyNowPayLater from "./pages/BuyNowPayLater";
import FixNowPayLater from "./pages/FixNowPayLater";
import ProtectionCalculatorPage from "./pages/ProtectionCalculatorPage";
import SupportedDevicesPage from "./pages/SupportedDevicesPage";
import PartnerStoresPage from "./pages/PartnerStoresPage";
import BecomePartnerPage from "./pages/BecomePartnerPage";
import BusinessFinancingPage from "./pages/BusinessFinancingPage";
import SupportPage from "./pages/SupportPage";
import FaqsPage from "./pages/FaqsPage";
import LoginSelector from "./pages/LoginSelector";
import CustomerLogin from "./pages/CustomerLogin";
import PartnerLogin from "./pages/PartnerLogin";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFoundPage from "./pages/NotFoundPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <AnnouncementBar />
          <Navbar />
          <main style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/phone-protection" element={<ProtectPhone />} />
              <Route path="/phone-insurance-nigeria" element={<ProtectPhone />} />
              <Route path="/buy-now-get-protected-pay-later" element={<BuyNowPayLater />} />
              <Route path="/fix-now-get-protected-pay-later" element={<FixNowPayLater />} />
              <Route path="/protection-calculator" element={<ProtectionCalculatorPage />} />
              
              <Route path="/supported-devices" element={<SupportedDevicesPage />} />
              <Route path="/supported-devices/:brand" element={<SupportedDevicesPage />} />
              <Route path="/supported-devices/:brand/:model" element={<SupportedDevicesPage />} />

              <Route path="/partner-stores" element={<PartnerStoresPage />} />
              <Route path="/partner-stores/:city" element={<PartnerStoresPage />} />

              <Route path="/become-a-partner" element={<BecomePartnerPage />} />
              <Route path="/business-financing" element={<BusinessFinancingPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/faqs" element={<FaqsPage />} />

              <Route path="/login" element={<LoginSelector />} />
              <Route path="/customer-login" element={<CustomerLogin />} />
              <Route path="/partner-login" element={<PartnerLogin />} />

              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFab />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
