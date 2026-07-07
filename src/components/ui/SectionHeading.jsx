import React from "react";
import styles from "./SectionHeading.module.css";

export default function SectionHeading({
  eyebrow,
  title,
  accent = "orange",
  align = "left",
  className = "",
}) {
  const containerClass = `${styles.container} ${
    align === "center" ? styles.center : ""
  } ${className}`;

  const ruleClass = `${styles.rule} ${
    accent === "teal" ? styles.ruleTeal : ""
  }`;

  return (
    <div className={containerClass}>
      {eyebrow && <span className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</span>}
      <h2 className={`heading-display-md ${styles.headline}`} style={{ marginTop: "4px" }}>{title}</h2>
      <hr className={ruleClass} />
    </div>
  );
}
