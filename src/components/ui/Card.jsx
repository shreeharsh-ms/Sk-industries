import React from "react";
import styles from "./Card.module.css";

export default function Card({
  children,
  title,
  icon,
  theme = "light",
  accent = "orange",
  className = "",
  ...props
}) {
  const cardClass = `${styles.card} ${
    theme === "dark" ? styles.dark : ""
  } ${className}`;

  const iconClass = `${styles.iconWrapper} ${
    accent === "teal" ? styles.iconTeal : ""
  }`;

  return (
    <div className={cardClass} {...props}>
      {icon && <div className={iconClass}>{icon}</div>}
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
