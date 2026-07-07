import React from "react";
import styles from "./QCEquipmentSidebar.module.css";

export default function QCEquipmentSidebar() {
  const machinery = [
    {
      name: "Coordinate Measuring Machine (CMM)",
      desc: "Performs automated 3D dimensional inspections, mapping stamping borders against CAD geometries.",
      spec: "TOLERANCE: ± 0.005 MM RESOLUTION",
    },
    {
      name: "Digital DFT Coating Gauges",
      desc: "Measures powder coating thickness non-destructively using magnetic induction and eddy current probes.",
      spec: "CALIBRATION: ASTM D7091 STANDARDS",
    },
    {
      name: "Gloss & Cross-Hatch Testers",
      desc: "Evaluates powder paint adhesion and gloss finishes to ensure compliance with weathering parameters.",
      spec: "STANDARD: ISO 2409 ADHESION SCALE",
    },
    {
      name: "Salt Spray Chambers",
      desc: "Simulates atmospheric humidity and saline sprays to verify paint chemical barrier endurance.",
      spec: "TESTING: ASTM B117 SALT FOG CHAMBER",
    },
  ];

  return (
    <div className={styles.section}>
      <h3 className={styles.title}>Inspection Equipment</h3>
      <div className={styles.grid}>
        {machinery.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <span className={styles.itemName}>{item.name}</span>
            <p className={styles.itemDesc}>{item.desc}</p>
            <div className={styles.specBadge}>
              <span className={styles.specText}>{item.spec}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
