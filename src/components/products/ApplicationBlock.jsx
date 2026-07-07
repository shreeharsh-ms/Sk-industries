import React from "react";
import SpecTable from "../ui/SpecTable";
import styles from "./ApplicationBlock.module.css";

export default function ApplicationBlock({ application, specs = [], className = "" }) {
  return (
    <section className={`${styles.section} ${className}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Production & Engineering Application</h2>
          <p className={styles.text}>{application}</p>
        </div>
        <div>
          <span className={styles.tableTitle}>Dimensional Parameters</span>
          <SpecTable specs={specs} />
        </div>
      </div>
    </section>
  );
}
