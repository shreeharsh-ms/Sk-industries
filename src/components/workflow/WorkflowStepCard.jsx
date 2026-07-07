import React from "react";
import styles from "./WorkflowStepCard.module.css";

export default function WorkflowStepCard({ step, title, desc, impact, accent }) {
  const isTeal = accent === "teal";
  const circleClass = `${styles.stepCircle} ${isTeal ? styles.stepCircleTeal : ""}`;
  const impactClass = `${styles.impact} ${isTeal ? styles.impactTeal : ""}`;

  return (
    <div className={styles.card}>
      <div>
        <div className={circleClass}>{step}</div>
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        {impact && (
          <div className={impactClass}>
            <span>Process Impact: </span>
            {impact}
          </div>
        )}
      </div>
    </div>
  );
}
