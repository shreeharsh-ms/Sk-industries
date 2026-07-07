import React from "react";
import Badge from "../ui/Badge";
import styles from "./CertificationBanner.module.css";

export default function CertificationBanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.info}>
            <h3 className={styles.title}>Compliance & Materials Standards</h3>
            <p className={styles.text}>
              Every stamping coil and powder batch ships with standard mill chemical analysis and paint thickness inspection sheets. 
            </p>
          </div>
          <div className={styles.badgeRow}>
            <Badge accent="teal">ISO 9001</Badge>
            <Badge accent="teal">ASTM B117 salt fog</Badge>
            <Badge accent="orange">PPAP Level 3</Badge>
            <Badge accent="orange">FAI Audited</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
