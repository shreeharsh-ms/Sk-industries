import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./Accordion.module.css";

export default function Accordion({ title, children, defaultOpen = false, className = "" }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`${styles.container} ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.trigger}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className={`${styles.icon} ${isOpen ? styles.iconActive : ""}`}>
          <ChevronDown size={18} />
        </span>
      </button>
      <div
        className={`${styles.contentWrapper} ${isOpen ? styles.contentActive : ""}`}
      >
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
