import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import styles from "./Footer.module.css";

// Custom SVG components for missing social icons
const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Column 1: Company Details */}
          <div className={styles.column}>
            <img
              src="/images/sk_industries_logo.png"
              alt="SK Industries Logo"
              className={styles.footerLogo}
              loading="lazy"
              decoding="async"
            />
            <div className={styles.text}>
              <p style={{ fontWeight: "600", marginBottom: "4px" }}>
                Proprietor: Komal Pansare
              </p>
              <p>Registered Facility:</p>
              <p>SK INDUSTRIES,</p>
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
            <span className={styles.colTitle}>Products & Services</span>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <Link to="/products/ballast-cabinets">Ballast Cabinet</Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/products/ev-charger-enclosures">EV Charger Enclosures</Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/products/speaker-magnet-plates-powder-coating">Speaker Magnet Plates &amp; Powder Coating</Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/services/custom-die-press-electrical-parts">Custom Die Press</Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/products/rolling-shutter-locks">Rolling Shutter Locks</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Capabilities & Components */}
          <div className={styles.column}>
            <span className={styles.colTitle}>Capabilities</span>
            <p className={styles.text} style={{ fontSize: "0.82rem", lineHeight: "1.45" }}>
              Coating Sheet metal products, Metal Box manufacturing for electronics and electrical industry, Metal Box, MS Cabinet, Driver Box, MS Box, Powder Coating, Driver Plates, Stamping, Embossing, Clamp, and Ballast MS Case.
            </p>
          </div>
        </div>

        {/* Google Maps Embed (90% width, 5% spacing on both sides) */}
        <div className={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.6803120477502!2d73.8936374!3d18.452818699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb1ddb3d55d7%3A0xb7c137c9491e69eb!2sSK%20Industries!5e0!3m2!1sen!2sin!4v1790163490266!5m2!1sen!2sin" 
            width="100%" 
            height="280" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="SK Industries Pune Facility Map"
          ></iframe>
        </div>

        {/* Bottom Bar: Copyright, Socials & Contact */}
        <div className={styles.bottomBar}>
          <div className={styles.leftBottom}>
            <span className={styles.copyright}>
              © {currentYear} SK Industries. All rights reserved.
            </span>
            <div className={styles.socialGroup}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.instagram}`} title="Instagram">
                <InstagramIcon size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.facebook}`} title="Facebook">
                <FacebookIcon size={24} />
              </a>
              <a href="https://wa.me/917875138713" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.whatsapp}`} title="WhatsApp">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
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
            <span className={styles.footerDivider}>|</span>
            <a href="mailto:sales@skindustries.com" className={styles.emailBadge}>
              sales@skindustries.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
