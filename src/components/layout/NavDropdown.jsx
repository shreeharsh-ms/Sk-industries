import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Lock, Disc, BatteryCharging, Wrench, ArrowRight, Box } from "lucide-react";
import styles from "./NavDropdown.module.css";

export default function NavDropdown({ onToggleOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(0);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (onToggleOpen) {
      onToggleOpen(isOpen);
    }
  }, [isOpen, onToggleOpen]);

  const products = [
    {
      name: "Ballast Cabinet",
      desc: "Louvered CRCA driver boxes & enclosures",
      path: "/products/ballast-cabinets",
      icon: <Box size={18} />,
      image: "/images/ballast_cabinet_finished.png",
      details: "Heavy-duty CRCA sheet metal cabinets engineered with progressive stamped convective louvers, DIN rail mounting, and integrated earthing bosses for commercial lighting ballasts.",
      specs: ["CRCA Steel", "Convective Louvers", "IP40 / IP54 Rated"]
    },
    {
      name: "Customised EV Charger Enclosures",
      desc: "Weatherproof IP66 rated metal enclosures",
      path: "/products/ev-charger-enclosures",
      icon: <BatteryCharging size={18} />,
      image: "/images/ev_charger_enclosure_finished.png",
      details: "Weatherproof IP66 enclosures with continuous foam gaskets and UV-stable powder coatings built for outdoor charging infrastructure as per customer requirements.",
      specs: ["2.0 - 4.0 mm Steel / SS", "IP66 Weatherproof", "IK10 Impact Rating"]
    },
    {
      name: "Speaker Magnet Plates & Zinc Plating",
      desc: "Precision pole pieces with unified zinc coating",
      path: "/products/speaker-magnet-plates-powder-coating",
      icon: <Disc size={18} />,
      image: "/images/speaker_magnet_parts_stack.png",
      details: "Low-carbon steel pole pieces, T-yokes, and front plates blanked for high-fidelity acoustic alignment, directly finished with in-house zinc plating and coating lines under one roof.",
      specs: ["1.5 - 6.0 mm Steel", "Precision Flatness", "Zinc Plating / Coating"]
    },
    {
      name: "Custom Die Press",
      desc: "Precision custom die press stampings & brackets",
      path: "/services/custom-die-press-electrical-parts",
      icon: <Wrench size={18} />,
      image: "/images/progressive_die_parts.png",
      details: "High-precision coined terminal connectors, brackets, and sheet metal stampings punched for exact alignment and seamless site assembly.",
      specs: ["Mild Steel (MS)", "Precision Bending", "Zinc Plating (7-Tank)"]
    },
    {
      name: "Rolling Shutter Locks",
      desc: "Dual-sided security locking hardware sets",
      path: "/products/rolling-shutter-locks",
      icon: <Lock size={18} />,
      image: "/images/rolling_shutter_lock.png",
      details: "High-security lock sets blanked from heavy-duty HR steel, featuring five security levers and double-locking bolts to secure commercial storefronts and warehouses as per customer requirements.",
      specs: ["HR Steel Material", "Dual-Sided Lock Throw", "Zinc Coating & Equiv."]
    },
  ];

  const isProductActive = products.some(p => location.pathname === p.path);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const activeProduct = products[hoveredIdx];

  return (
    <div
      ref={dropdownRef}
      className={styles.dropdownContainer}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.dropdownTrigger} ${
          isProductActive ? styles.triggerActive : ""
        }`}
        aria-expanded={isOpen}
      >
        Products
        <ChevronDown
          size={16}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.15s ease",
          }}
        />
      </button>

      {isOpen && (
        <div className={styles.megaMenu}>
          <div className={`container ${styles.megaGrid}`}>
            {/* Left Column: Product Links List */}
            <div className={styles.menuList}>
              <span className={styles.columnLabel}>Sourcing Catalog</span>
              {products.map((product, idx) => (
                <Link
                  key={idx}
                  to={product.path}
                  className={`${styles.menuItem} ${
                    hoveredIdx === idx ? styles.activeMenuItem : ""
                  }`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                >
                  <div className={styles.iconWrapper}>{product.icon}</div>
                  <div className={styles.itemText}>
                    <span className={styles.itemName}>{product.name}</span>
                    <span className={styles.itemDesc}>{product.desc}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right Column: Dynamic Preview Card (Left Image, Right Specs & Button) */}
            <div className={styles.previewPanel}>
              <span className={styles.columnLabel}>Technical Preview</span>
              <div className={styles.previewCard}>
                
                {/* Product Image on the left */}
                <div className={styles.imageWrapper}>
                  <img 
                    src={activeProduct.image} 
                    alt={activeProduct.name} 
                    className={`${styles.productImage} ${activeProduct.name.includes("Custom Die") ? styles.diePressImage : ""}`} 
                  />
                  <div className={styles.imageOverlay} />
                </div>

                {/* Info & Enquire button on the right */}
                <div className={styles.infoWrapper}>
                  <h4 className={styles.previewTitle}>{activeProduct.name}</h4>
                  <p className={styles.previewDetails}>{activeProduct.details}</p>
                  
                  {/* Highlight Specs */}
                  <div className={styles.specsRow}>
                    {activeProduct.specs.map((spec, sIdx) => (
                      <span key={sIdx} className={styles.specBadge}>{spec}</span>
                    ))}
                  </div>

                  {/* Enquire Now CTA Button */}
                  <Link to="/rfq-portal" className={styles.enquireButton}>
                    <span>Enquire Now</span>
                    <ArrowRight size={16} className={styles.btnArrow} />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
