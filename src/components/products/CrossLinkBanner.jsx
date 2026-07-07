import React from "react";
import Button from "../ui/Button";
import styles from "./CrossLinkBanner.module.css";

export default function CrossLinkBanner() {
  return (
    <section className={styles.banner}>
      <div className="container">
        <span className={styles.eyebrow}>Integrated Single-Roof Process</span>
        <p className={styles.text}>
          Every single product on this page is stamped, deburred, pre-treated, and
          powder-coated inside our unified facility. No multi-supplier shipping overheads
          or divided quality control liabilities.
        </p>
        <Button variant="secondary" to="/single-roof-workflow">
          See the Full Workflow Process →
        </Button>
      </div>
    </section>
  );
}
