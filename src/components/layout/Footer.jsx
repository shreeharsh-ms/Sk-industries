import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Column 1: Company Details */}
          <div className={styles.column}>
            <img src="/images/logoNav.png" alt="SK Industries Logo" className={styles.footerLogo} />
            <div className={styles.text}>
              <p style={{ fontWeight: "600", marginBottom: "4px" }}>
                Proprietor: Komal Pansare
              </p>
              <p>Registered Facility:</p>
              <p>TINY INDUSTRIAL ESTATE,</p>
              <p>KONDHWA BK., PUNE-411048</p>
            </div>
          </div>

          {/* Column 2: Sitemap Links */}
          <div className={styles.column}>
            <span className={styles.colTitle}>Navigate</span>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <Link to="/">Home</Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/single-roof-workflow">Single-Roof Workflow</Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/about-us">About Us</Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/rfq-portal">Technical RFQ Portal</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Pages */}
          <div className={styles.column}>
            <span className={styles.colTitle}>Products</span>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <Link to="/products/rolling-shutter-locks">Rolling Shutter Locks</Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/products/speaker-magnet-plates">Speaker Magnet Plates</Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/products/ev-charger-enclosures">EV Charger Enclosures</Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/services/custom-die-press-electrical-parts">Custom Die Press Parts</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Compliance & Certifications */}
          <div className={styles.column}>
            <span className={styles.colTitle}>Compliance</span>
            <p className={styles.text}>
              Engineered to comply with ISO 9001 quality management guidelines and ASTM
              materials testing standards. Material Test Certificates (MTC) and First-Article
              Inspection (FAI) reports available upon request.
            </p>
            <div className={styles.badgeRow}>
              <span className={styles.badge}>ISO 9001</span>
              <span className={styles.badge}>PPAP Available</span>
              <span className={styles.badge}>ASTM Tested</span>
              <span className={styles.badge}>FAI Audited</span>
            </div>
          </div>
        </div>

        {/* Google Maps Embed (90% width, 5% spacing on both sides) */}
        <div className={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94186.49185729207!2d73.82483320887904!3d18.466318380406786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea50a9b669d3%3A0x2eabc8e4c260a2eb!2sTiny%20Industrial%20Estate%2C%20Tyni%20Audyogic%20Wasahat%2C%20Kondhwa%2C%20Pune%2C%20Maharashtra%20411048!5e0!3m2!1sen!2sin!4v1783438287086!5m2!1sen!2sin" 
            width="100%" 
            height="280" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="SK Industries Pune Facility Map"
          ></iframe>
        </div>

        {/* Bottom Bar: Copyright & Contact */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            © 2026 SK Industries. All rights reserved.
          </span>
          <div className={styles.contactLinks}>
            <span className={styles.contactItem} style={{ opacity: 0.85 }}>
              Contact:
            </span>
            <a href="tel:+917875138713" className={styles.contactItem}>
              +91 7875 138 713
            </a>
            <span className={styles.footerDivider}>|</span>
            <a href="mailto:skindustries0709@gmail.com" className={styles.emailBadge}>
              skindustries0709@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
