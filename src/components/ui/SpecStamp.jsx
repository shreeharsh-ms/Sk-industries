import React from "react";
import { motion } from "framer-motion";
import styles from "./SpecStamp.module.css";

const stampVariants = {
  hidden: { opacity: 0, scale: 1.15 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.2, 0.8, 0.2, 1], // overshoot-and-settle cubic bezier
    },
  },
};

export default function SpecStamp({
  value,
  label,
  accent = "orange",
  size = "md",
  theme = "light",
  className = "",
}) {
  const accentClass = accent === "teal" ? styles.accentTeal : styles.accentOrange;
  const themeClass = theme === "dark" ? styles.themeDark : styles.themeLight;
  const sizeClass = styles[size] || styles.md;

  const stampClass = `${styles.stamp} ${accentClass} ${themeClass} ${sizeClass} ${className}`;

  return (
    <motion.div
      className={stampClass}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={stampVariants}
    >
      <span className={styles.value}>{value}</span>
      <div className={styles.divider} />
      <span className={styles.label}>{label}</span>
    </motion.div>
  );
}
