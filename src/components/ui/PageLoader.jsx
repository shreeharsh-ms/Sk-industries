import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./PageLoader.module.css";

export default function PageLoader() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [pageName, setPageName] = useState("");
  const [shouldRender, setShouldRender] = useState(false);

  // Map route paths to user-friendly titles
  const getPageTitle = (path) => {
    if (path === "/") return "Home Page";
    if (path === "/single-roof-workflow") return "Workflow Simulation";
    if (path === "/products/rolling-shutter-locks") return "Rolling Shutter Locks";
    if (path === "/products/speaker-magnet-plates") return "Speaker Magnet Plates";
    if (path === "/products/ev-charger-enclosures") return "EV Charger Enclosures";
    if (path === "/services/custom-die-press-electrical-parts") return "Custom Die Press Parts";
    if (path === "/about-us") return "About Us";
    if (path === "/rfq-portal") return "Technical RFQ Portal";
    return "SK Industries";
  };

  useEffect(() => {
    const title = getPageTitle(location.pathname);
    setPageName(title);
    setIsLoading(true);
    setShouldRender(true);

    // Simulate page load duration (1.5 seconds as requested)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Remove component from DOM after fade-out transition completes
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300); // 300ms transition fade-out time
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div className={`${styles.overlay} ${isLoading ? styles.visible : styles.hidden}`}>
      <div className={styles.loaderContent}>
        <div className={styles.logoWrapper}>
          <img src="/images/Fav.png" alt="SK Industries Favicon" className={styles.logo} />
        </div>
      </div>
    </div>
  );
}
