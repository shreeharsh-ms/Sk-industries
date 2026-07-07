import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Lock, Disc, BatteryCharging, Wrench, ArrowRight } from "lucide-react";
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
      name: "Rolling Shutter Locks",
      desc: "Dual-sided security locking hardware sets",
      path: "/products/rolling-shutter-locks",
      icon: <Lock size={18} />,
      image: "/images/rolling_shutter_lock.png",
      details: "High-security lock sets blanked from 10-gauge steel, featuring five security levers and double-locking bolts to secure commercial storefronts and warehouses.",
      specs: ["10-Gauge Mild Steel", "50,000 Cycle Life", "3,500 Key Combos"]
    },
    {
      name: "Speaker Magnet Plates",
      desc: "Precision transducer pole piece plates",
      path: "/products/speaker-magnet-plates",
      icon: <Disc size={18} />,
      image: "/images/speaker_magnet_plate.png",
      details: "Top and bottom pole plates stamped with thickness tolerances within ±0.05 mm, maximizing magnetic permeability and voice coil gap flux focus.",
      specs: ["AISI 1010 Low-Carbon", "± 0.05 mm Flatness", "Blue Zinc Plating"]
    },
    {
      name: "EV Charger Enclosures",
      desc: "Weatherproof NEMA rated metal enclosures",
      path: "/products/ev-charger-enclosures",
      icon: <BatteryCharging size={18} />,
      image: "/images/ev_charger_enclosure_finished.png",
      details: "Weatherproof NEMA 4X / IP66 enclosures with continuous foam gaskets and UV-stable powder coatings built for outdoor charging infrastructure.",
      specs: ["14-Gauge Steel / SS", "IP66 Water Jet Tested", "IK10 Impact Rating"]
    },
    {
      name: "Custom Die Press Parts",
      desc: "Precision cabinets electrical parts & brackets",
      path: "/services/custom-die-press-electrical-parts",
      icon: <Wrench size={18} />,
      image: "/images/progressive_die_parts.png",
      details: "High-precision coined terminal connectors, brackets, and copper busbars punched with hole spacing tolerances within ±0.05 mm.",
      specs: ["Copper / Brass / Steel", "± 0.20° Bend Precision", "Tin / Silver Plated"]
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
