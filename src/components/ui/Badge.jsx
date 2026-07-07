import React from "react";
import styles from "./Badge.module.css";

export default function Badge({ children, accent = "teal", className = "", ...props }) {
  const badgeClass = `${styles.badge} ${
    accent === "orange" ? styles.orange : styles.teal
  } ${className}`;

  return (
    <span className={badgeClass} {...props}>
      {children}
    </span>
  );
}
