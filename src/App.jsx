import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import WorkflowPage from "./pages/WorkflowPage";
import RollingShutterLocksPage from "./pages/products/RollingShutterLocksPage";
import SpeakerMagnetPlatesPage from "./pages/products/SpeakerMagnetPlatesPage";
import EVChargerEnclosuresPage from "./pages/products/EVChargerEnclosuresPage";
import CustomDiePressPage from "./pages/products/CustomDiePressPage";
import AboutPage from "./pages/AboutPage";
import RFQPortalPage from "./pages/RFQPortalPage";
import NotFoundPage from "./pages/NotFoundPage";
import PageLoader from "./components/ui/PageLoader";

function LenisWatcher() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const pathname = location.pathname;
    const isSlowPage = pathname === "/" || pathname === "/single-roof-workflow";

    // Instantiate Lenis with path-specific kinetic scroll coefficients
    const lenis = new Lenis({
      lerp: isSlowPage ? 0.03 : 0.095, // 0.03 slow buttery damping for frame scrubbers, 0.095 normal for text pages
      wheelMultiplier: isSlowPage ? 0.45 : 1.0, // 0.45 slower progression, 1.0 standard progression
      smoothWheel: true,
    });
    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Force Lenis height bounds recalculation after DOM settles
    const timer = setTimeout(() => {
      lenis.resize();
    }, 120);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
      lenis.destroy();
      window.lenis = null;
    };
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <PageLoader />
      <LenisWatcher />
      <Header />
      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/single-roof-workflow" element={<WorkflowPage />} />
          <Route path="/products/rolling-shutter-locks" element={<RollingShutterLocksPage />} />
          <Route path="/products/speaker-magnet-plates" element={<SpeakerMagnetPlatesPage />} />
          <Route path="/products/ev-charger-enclosures" element={<EVChargerEnclosuresPage />} />
          <Route path="/services/custom-die-press-electrical-parts" element={<CustomDiePressPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/rfq-portal" element={<RFQPortalPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />

      {/* Floating Action Buttons in bottom-right corner */}
      <div 
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          display: "flex",
          flexDirection: "row", /* Side by side horizontal layout */
          gap: "12px",
        }}
      >
        {/* WhatsApp Float Button */}
        <a 
          href="https://wa.me/917875138713" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="Direct WhatsApp"
          className="whatsappPulse"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            color: "#ffffff"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.15)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.116-2.905-6.993C16.357 1.87 13.878 1.83 11.243 1.83c-5.434 0-9.858 4.417-9.863 9.858a9.785 9.785 0 0 0 1.417 4.959L1.812 21.19l4.835-1.266z" />
          </svg>
        </a>

        {/* Google Maps Float Button */}
        <a 
          href="https://maps.google.com/?q=Tiny+Industrial+Estate,+Kondhwa,+Pune" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="Google Map Facility Location"
          className="mapsPulse"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "#4285F4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            color: "#ffffff"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.15)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </a>
      </div>
    </Router>
  );
}
