import React from "react";
import Button from "../ui/Button";
import styles from "./ProductHero.module.css";

export default function ProductHero({
  name,
  desc,
  audience,
  specSheetPdf,
  accent = "orange",
  image,
  bgImage, // Added bgImage prop
}) {
  const metaClass = `${styles.meta} ${
    accent === "teal" ? styles.metaTeal : ""
  }`;

  const customStyle = bgImage ? { "--hero-bg-url": `url(${bgImage})` } : {};

  return (
    <section className={styles.hero} style={customStyle}>
      <div className={`container ${styles.grid}`}>
        {/* Left Column: Text Content & CTA & Sourcing info */}
        <div className={styles.contentColumn}>
          <span className={styles.badge}>Technical Specifications</span>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.desc}>{desc}</p>
          
          <div className={styles.actionRow}>
            {specSheetPdf && (
              <Button
                variant="primary"
                href={specSheetPdf}
                download={`${name.replace(/\s+/g, "_")}_Spec_Sheet.pdf`}
              >
                Download Technical Data Sheet
              </Button>
            )}
          </div>

          {/* Sourcing target info placed cleanly below the main actions */}
          <div className={metaClass}>
            <div>
              <span className={styles.metaTitle}>Target Sourcing Segment</span>
              <span className={styles.metaText}>{audience}</span>
            </div>
            <div>
              <span className={styles.metaTitle}>Documentation Provided</span>
              <span className={styles.metaText}>
                Material Test Certificates (MTC) and dimensional inspection reports
                shipped standard with all production runs.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Framed Product Image */}
        {image && (
          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              <img src={image} alt={name} className={styles.productImage} />
              <div className={styles.imageOverlay} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
