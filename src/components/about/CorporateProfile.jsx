import React from "react";
import styles from "./CorporateProfile.module.css";

export default function CorporateProfile() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Facility Operations & Setup</h2>
          <p className={styles.text}>
            SK Industries operates a unified engineering facility specializing in
            the volume manufacture of stamped steel components and high-integrity powder
            coating finishes. By combining sheet metal stamping and powder coating lines under
            a single roof, we eliminate multi-supplier shipping overheads and divide liabilities
            that plague traditional sourcing pipelines.
          </p>
          <p className={styles.text}>
            Our engineering workflow starts with chemical phosphating pre-treatments, ensuring
            high chemical locking bonds for standard polyester powder spray coats. We serve
            hardware distributors, audio equipment integrators, and infrastructure network operators.
          </p>
        </div>

        <div className={styles.sidebar}>
          <span className={styles.sidebarTitle}>Corporate Vital Specs</span>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarItem}>
              <span>Proprietor Accountability</span>
              <span className={styles.sidebarValue}>Komal Pansare</span>
            </li>
            <li className={styles.sidebarItem}>
              <span>Registered Location</span>
              <span className={styles.sidebarValue}>Kondhwa Bk., Pune</span>
            </li>
            <li className={styles.sidebarItem}>
              <span>Core Press Lines</span>
              <span className={styles.sidebarValue}>Up to 200T</span>
            </li>
            <li className={styles.sidebarItem}>
              <span>Primary Accreditations</span>
              <span className={styles.sidebarValue}>ISO 9001 Compliant</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
