import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./ScrollPrompt.module.css";

export default function ScrollPrompt({ theme = "light", scrollProgress }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (scrollProgress !== undefined) {
      setIsVisible(scrollProgress < 0.95);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollProgress]);

  const containerClass = `${styles.promptContainer} ${
    isVisible ? "" : styles.hidden
  } ${theme === "dark" ? styles.themeDark : styles.themeLight}`;

  return (
    <div className={containerClass}>
      <span className={styles.text}>Scroll to Explore</span>
      <ChevronDown className={styles.arrow} size={20} />
    </div>
  );
}
