import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Lock, Disc, BatteryCharging, Wrench, ChevronRight } from "lucide-react";
import styles from "./MobileNav.module.css";

export default function MobileNav({ onClose }) {
  const location = useLocation();
  const [showProducts, setShowProducts] = useState(false);

  const products = [
    {
      name: "Rolling Shutter Locks",
      path: "/products/rolling-shutter-locks",
      icon: <Lock size={14} />,
    },
    {
      name: "Speaker Magnet Plates",
      path: "/products/speaker-magnet-plates",
      icon: <Disc size={14} />,
    },
    {
      name: "EV Charger Enclosures",
      path: "/products/ev-charger-enclosures",
      icon: <BatteryCharging size={14} />,
    },
    {
      name: "Custom Die Press Parts",
      path: "/services/custom-die-press-electrical-parts",
      icon: <Wrench size={14} />,
    },
  ];

  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  return (
    <div className={styles.drawer}>
      <nav className={styles.links}>
        <Link
          to="/"
          onClick={handleLinkClick}
          className={`${styles.link} ${location.pathname === "/" ? styles.linkActive : ""}`}
        >
          Home
        </Link>
        <Link
          to="/single-roof-workflow"
          onClick={handleLinkClick}
          className={`${styles.link} ${location.pathname === "/single-roof-workflow" ? styles.linkActive : ""}`}
        >
          Workflow
        </Link>

        <div>
          <button
            onClick={() => setShowProducts(!showProducts)}
            className={`${styles.link} ${showProducts ? styles.linkActive : ""}`}
            style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", fontFamily: "inherit", textAlign: "left" }}
          >
            Products
            <ChevronRight
              size={20}
              style={{
                transform: showProducts ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.15s ease",
              }}
            />
          </button>

          {showProducts && (
            <div className={styles.subLinks}>
              {products.map((product, idx) => (
                <Link
                  key={idx}
                  to={product.path}
                  onClick={handleLinkClick}
                  className={`${styles.subLink} ${location.pathname === product.path ? styles.subLinkActive : ""}`}
                >
                  {product.icon}
                  {product.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          to="/about-us"
          onClick={handleLinkClick}
          className={`${styles.link} ${location.pathname === "/about-us" ? styles.linkActive : ""}`}
        >
          About Us
        </Link>
      </nav>

      <div className={styles.ctaWrapper}>
        <Link
          to="/rfq-portal"
          onClick={handleLinkClick}
          style={{
            display: "block",
            textAlign: "center",
            backgroundColor: "var(--color-accent-primary)",
            color: "var(--color-white)",
            fontWeight: "600",
            padding: "var(--space-3) var(--space-6)",
            borderRadius: "var(--radius-sm)",
          }}
        >
          Enquire Now
        </Link>
        <div className={styles.contactInfo}>
          <span>Proprietor: Komal Pansare</span>
          <span>Email: info@skindustries.com</span>
        </div>
      </div>
    </div>
  );
}
