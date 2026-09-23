import React from "react";
import { Gauge } from "lucide-react";
import styles from "./QCEquipmentSidebar.module.css";

export default function QCEquipmentSidebar() {
  const item = {
    name: "Digital DFT Coating Gauges",
    desc: "Measures powder coating thickness non-destructively using magnetic induction and eddy current probes.",
    spec: "CALIBRATION: ASTM D7091 STANDARDS",
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.title}>Inspection Equipment</h3>
      
      <div className={styles.showcaseCard}>
        <div className={styles.iconCircle}>
          <Gauge size={28} />
        </div>

        <div className={styles.contentGroup}>
          <div className={styles.headerRow}>
            <span className={styles.itemName}>{item.name}</span>
            <div className={styles.specBadge}>
              <span className={styles.specText}>{item.spec}</span>
            </div>
          </div>
          
          <p className={styles.itemDesc}>{item.desc}</p>
        </div>
      </div>
    </div>
  );
}
