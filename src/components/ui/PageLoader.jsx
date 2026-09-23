import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./PageLoader.module.css";

export default function PageLoader() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setShouldRender(true);

    // Smooth page transition duration (400ms)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400); 

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
          <img src="/images/sk_industries_logo.png" alt="SK Industries Logo" className={styles.logo} />
        </div>
      </div>
    </div>
  );
}
