import React from "react";
import styles from "./VolumeEstimator.module.css";

export default function VolumeEstimator({ value = "", onChange }) {
  const standardPills = ["500", "1,000", "5,000", "10,000", "50,000"];

  const handlePillClick = (val) => {
    const numericStr = val.replace(/,/g, "");
    if (onChange) onChange(numericStr);
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    // only numbers allowed
    if (/^\d*$/.test(val)) {
      if (onChange) onChange(val);
    }
  };

  // helper to check if value matches standard format
  const getFormattedVal = (val) => {
    if (!val) return "";
    return parseInt(val, 10).toLocaleString();
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Target Batch Volume / Annual Runs</label>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={handleInputChange}
          placeholder="e.g. 5000"
        />
        {value && (
          <span style={{ fontSize: "0.75rem", color: "var(--color-steel-300)" }}>
            ({getFormattedVal(value)} units)
          </span>
        )}
      </div>

      <div className={styles.pills}>
        {standardPills.map((pill, idx) => {
          const numericStr = pill.replace(/,/g, "");
          const isActive = value === numericStr;
          return (
            <button
              key={idx}
              type="button"
              className={`${styles.pill} ${isActive ? styles.pillActive : ""}`}
              onClick={() => handlePillClick(pill)}
            >
              {pill}
            </button>
          );
        })}
      </div>
    </div>
  );
}
