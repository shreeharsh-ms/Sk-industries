import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import NavDropdown from "./NavDropdown";
import MobileNav from "./MobileNav";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const isWhiteNavbar = isDropdownOpen || isMenuOpen;
  const headerClass = `${styles.header} ${styles.lightText} ${isWhiteNavbar ? styles.whiteNavbar : ""}`;
  const logoSrc = isWhiteNavbar ? "/images/DARK-NAV.png" : "/images/logoNav.png";

  return (
    <>
      <header className={headerClass}>
        <Link to="/" className={styles.brand}>
          <img src={logoSrc} alt="SK Industries Logo" className={styles.navLogo} />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <Link
            to="/"
            className={`${styles.navLink} ${
              location.pathname === "/" ? styles.activeLink : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/single-roof-workflow"
            className={`${styles.navLink} ${
              location.pathname === "/single-roof-workflow" ? styles.activeLink : ""
            }`}
          >
            Workflow
          </Link>

          <NavDropdown onToggleOpen={setIsDropdownOpen} />

          <Link
            to="/about-us"
            className={`${styles.navLink} ${
              location.pathname === "/about-us" ? styles.activeLink : ""
            }`}
          >
            About Us
          </Link>
        </nav>

        {/* Actions CTA */}
        <div className={styles.actions}>
          <Link
            to="/rfq-portal"
            style={{
              backgroundColor: "var(--color-accent-primary)",
              color: "var(--color-white)",
              fontWeight: "600",
              fontSize: "var(--font-size-body-sm)",
              padding: "var(--space-2) var(--space-4)",
              borderRadius: "var(--radius-sm)",
              display: "inline-block",
              transition: "background-color 0.15s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--color-precision-orange-hover)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--color-accent-primary)")
            }
          >
            Get a Quote
          </Link>
        </div>

        {/* Hamburger Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.menuButton}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {isMenuOpen && <MobileNav onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
