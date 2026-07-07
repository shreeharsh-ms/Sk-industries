import React from "react";
import styles from "./SpecTable.module.css";

export default function SpecTable({ specs = [], className = "" }) {
  if (!specs || specs.length === 0) return null;

  return (
    <div className={`${styles.table} ${className}`}>
      {specs.map((spec, idx) => (
        <div key={idx} className={styles.row}>
          <span className={styles.label}>{spec.label}</span>
          <span className={`${styles.value} mono-data`}>{spec.value}</span>
        </div>
      ))}
    </div>
  );
}
