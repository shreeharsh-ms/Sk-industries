import React from "react";
import styles from "./ProprietorQuote.module.css";

export default function ProprietorQuote() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.quoteBox}>
          {/* Left Column: Quote Text & Details */}
          <div className={styles.contentColumn}>
            <p className={styles.quoteText}>
              "Sourcing high-tolerance parts shouldn't require managing two separate companies
              and settling shipping claims when components get scratched. By executing metal blanking,
              deburring, and paint spraying inside a single factory footprint, we offer procurement
              managers clear accountability and consistent, certified quality results."
            </p>
            <div className={styles.author}>
              <span className={styles.authorName}>Komal Pansare</span>
              <span className={styles.authorTitle}>Proprietor, SK Industries</span>
            </div>
          </div>

          {/* Right Column: Premium Framed Executive Portrait */}
          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              <img 
                src="/images/proprietor_portrait.png" 
                alt="Komal Pansare - Proprietor of SK Industries" 
                className={styles.portrait} 
              />
              <div className={styles.imageOverlay} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
