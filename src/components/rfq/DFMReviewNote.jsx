import React from "react";
import { AlertTriangle } from "lucide-react";
import styles from "./DFMReviewNote.module.css";

export default function DFMReviewNote() {
  return (
    <div className={styles.note}>
      <AlertTriangle className={styles.icon} size={18} />
      <div className={styles.content}>
        <span className={styles.title}>Design for Manufacturability (DFM) Review</span>
        <p className={styles.text}>
          Our engineering division performs a complimentary DFM check on all uploaded drawings,
          assessing press boundaries and paint flow access points to verify tool clearances prior
          to stamping setups.
        </p>
      </div>
    </div>
  );
}
