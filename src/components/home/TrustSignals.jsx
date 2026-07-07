import React from "react";
import Badge from "../ui/Badge";
import styles from "./TrustSignals.module.css";

export default function TrustSignals() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <span className={styles.title}>Quality Assurance Standards</span>

        <div className={styles.badges}>
          <div className={styles.badgeItem}>
            <Badge accent="teal">ISO 9001</Badge>
            <span className={styles.badgeLabel}>Quality Management</span>
          </div>

          <div className={styles.badgeItem}>
            <Badge accent="teal">FAI Audited</Badge>
            <span className={styles.badgeLabel}>First Article Inspection</span>
          </div>

          <div className={styles.badgeItem}>
            <Badge accent="orange">PPAP Available</Badge>
            <span className={styles.badgeLabel}>Part Approval Process</span>
          </div>

          <div className={styles.badgeItem}>
            <Badge accent="orange">ASTM Tested</Badge>
            <span className={styles.badgeLabel}>Material Testing Standards</span>
          </div>
        </div>
      </div>
    </section>
  );
}
