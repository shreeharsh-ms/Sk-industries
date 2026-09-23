import React from "react";
import Button from "../ui/Button";
import styles from "./ProductHero.module.css";

export default function ProductHero({
  name,
  desc,
  audience,
  accent = "orange",
  image,
  bgImage, // Added bgImage prop
}) {
  const metaClass = `${styles.meta} ${accent === "teal" ? styles.metaTeal : ""
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
            <Button variant="primary" size="md" to="/rfq-portal">
              Request Technical RFQ
            </Button>
          </div>
          <div className={metaClass}>
            <div>
              <span className={styles.metaTitle}>Target Sourcing Segment</span>
              <span className={styles.metaText}>{audience}</span>
            </div>
            <div>
              <span className={styles.metaTitle}>Doorstep Delivery</span>
              <span className={styles.metaText}>
                Reliable doorstep delivery and managed dispatch directly to your facility or plant, ensuring safe transit and on-time fulfillment for all production batches.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Framed Product Image */}
        {image && (
          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              <img
                src={image}
                alt={name}
                className={styles.productImage}
                fetchpriority="high"
                decoding="async"
              />
              <div className={styles.imageOverlay} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
