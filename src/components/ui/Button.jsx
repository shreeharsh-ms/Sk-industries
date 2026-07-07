import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  type = "button",
  to,
  href,
  className = "",
  ...props
}) {
  const buttonClass = `${styles.btn} ${styles[variant] || styles.primary} ${
    size === "lg" ? styles.lg : ""
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
