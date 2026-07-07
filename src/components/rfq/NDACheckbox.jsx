import React from "react";
import styles from "./NDACheckbox.module.css";

export default function NDACheckbox({ checked = false, onChange }) {
  return (
    <div className={styles.container}>
      <label className={styles.wrapper}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className={styles.label}>
          I require a signed NDA before transmitting CAD drawing files.
        </span>
      </label>

      {checked && (
        <div className={styles.notice}>
          <strong>Secure Transmission Protocol:</strong> We will email a signed
          Non-Disclosure Agreement (NDA) to your business email before downloading
          or reviewing your attached CAD drawings.
        </div>
      )}
    </div>
  );
}
