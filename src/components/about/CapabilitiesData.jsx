import React from "react";
import DataTable from "../ui/DataTable";
import styles from "./CapabilitiesData.module.css";

export default function CapabilitiesData() {
  const machineryHeaders = [
    { key: "type", label: "Press / Line Type" },
    { key: "capacity", label: "Capacity Limit", isMono: true },
    { key: "qty", label: "Qty Active", isMono: true },
  ];

  const machineryData = [
    { type: "Power Press & Progressive Stamping Press Line", capacity: "100T - 200T", qty: "8 Active Lines" },
    { type: "Single-Crank Precision Press", capacity: "5T - 75T", qty: "Active Lines" },
    { type: "Epoxy-Polyester Conveyorized Oven", capacity: "200°C Limit", qty: "1 Line" },
    { type: "Statfield & Powder Coating Booth", capacity: "Electrostatic Spray", qty: "1 Line" },
    { type: "Seven-Tank Chemical Process", capacity: "Zinc Phosphating", qty: "1 Line (7 Tanks)" },
  ];

  const qualityObjectives = [
    "Enhancement of Customer Satisfaction",
    "Timely & Reliable Delivery",
    "Reduction of Customer Complaints",
    "Minimization of Rework & Waste",
    "Continuous Expansion of Customer Base",
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.tablesGrid}`}>
        {/* Left Column: Equipment Table */}
        <div>
          <span className={styles.tableTitle}>Facility Machinery Inventory</span>
          <DataTable headers={machineryHeaders} data={machineryData} />
        </div>

        {/* Right Column: SK Industries Quality Policy & Objectives */}
        <div className={styles.policyCard}>
          <div className={styles.policyHeader}>
            <span className={styles.policyTag}>Corporate Directive</span>
            <h3 className={styles.policyTitle}>SK Industries Quality Policy</h3>
          </div>

          <p className={styles.policyStatement}>
            “The Management of <strong>SK Industries</strong> is committed to quality and continual improvement in all areas of operations working as a team. The involvement of employees in the continual quality improvement process ensures that the company’s goals for quality, efficiency and customer satisfaction are met.”
          </p>

          <div className={styles.objectivesWrapper}>
            <h4 className={styles.objectivesTitle}>Quality Objectives</h4>
            <ul className={styles.objectivesList}>
              {qualityObjectives.map((obj, idx) => (
                <li key={idx} className={styles.objectiveItem}>
                  <span className={styles.objBadge}>{idx + 1}</span>
                  <span className={styles.objText}>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
