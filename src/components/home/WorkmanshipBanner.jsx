import React from "react";
import styles from "./WorkmanshipBanner.module.css";

export default function WorkmanshipBanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.banner}>
          {/* Background image is handled via CSS */}
          <div className={styles.overlay}>
            <div className={styles.overlayContent}>
              {/* Left Column */}
              <div className={styles.leftCol}>
                <span className={styles.badge}>For Engineering & Quality Teams</span>
                <h3 className={styles.heading}>
                  Find Outstanding <br />
                  Workmanship.
                </h3>
              </div>

              {/* Right Column */}
              <div className={styles.rightCol}>
                <p className={styles.text}>
                  The outstanding workmanship displayed in our progressive die pressings, 
                  high-permeability speaker plates, and electrostatic powder coats is a testament 
                  to our facility's commitment to quality. Every batch runs under FAI audits 
                  and ISO 9001 compliance standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
