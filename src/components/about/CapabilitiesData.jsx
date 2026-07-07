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
    { type: "Progressive Stamping Press Line", capacity: "100T - 200T", qty: "3 Lines" },
    { type: "Single-Crank Precision Press", capacity: "35T - 85T", qty: "5 Lines" },
    { type: "Epoxy-Polyester Conveyorized Oven", capacity: "200°C Limit", qty: "1 Line" },
    { type: "Vibratory Deburring Bowls", capacity: "150L Volume", qty: "2 Units" },
  ];

  const toleranceHeaders = [
    { key: "process", label: "Stamping Process" },
    { key: "tolerance", label: "Standard Tolerance", isMono: true },
  ];

  const toleranceData = [
    { process: "Coined Sheet Boundaries", tolerance: "± 0.05 mm" },
    { process: "Punch Hole Center Spacing", tolerance: "± 0.05 mm" },
    { process: "Form Bending Angular Precision", tolerance: "± 0.20 mm" },
    { process: "Paint Coating DFT Thickness", tolerance: "80 - 120 μm" },
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.tablesGrid}`}>
        {/* Table 1: Equipment */}
        <div>
          <span className={styles.tableTitle}>Facility Machinery Inventory</span>
          <DataTable headers={machineryHeaders} data={machineryData} />
        </div>

        {/* Table 2: Tolerances */}
        <div>
          <span className={styles.tableTitle}>Standard Quality Tolerances</span>
          <DataTable headers={toleranceHeaders} data={toleranceData} />
        </div>
      </div>
    </section>
  );
}
