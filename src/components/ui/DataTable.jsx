import React from "react";
import styles from "./DataTable.module.css";

export default function DataTable({
  headers = [], // format: [{ key: 'machine', label: 'Machine Type' }, { key: 'capacity', label: 'Tonnage Capacity', isMono: true }]
  data = [],    // format: [{ machine: 'Stamping Press', capacity: '100T', ... }]
  theme = "light",
  className = "",
}) {
  const wrapperClass = `${styles.tableWrapper} ${
    theme === "dark" ? styles.darkWrapper : ""
  } ${className}`;

  const tableClass = `${styles.table} ${
    theme === "dark" ? styles.darkTable : ""
  }`;

  return (
    <div className={wrapperClass}>
      <table className={tableClass}>
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} className={styles.th}>
                {header.label || header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} className={styles.tr}>
              {headers.map((header, colIdx) => {
                const key = header.key || header;
                const isMono = header.isMono;
                return (
                  <td
                    key={colIdx}
                    className={`${styles.td} ${isMono ? styles.mono : ""}`}
                  >
                    {row[key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
