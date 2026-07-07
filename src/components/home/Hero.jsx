import React from "react";
import Button from "../ui/Button";
import { trackEvent } from "../../utils/analytics";
import styles from "./Hero.module.css";

export default function Hero() {
  const handleDownloadTrack = () => {
    trackEvent("capabilities_download");
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.headline}>
          Precision Stamped Parts.
          <br />
          Unified Coating.
          <br />
          Single-Roof Execution.
        </h1>
        <p className={styles.subheadline}>
          SK Industries manufactures high-tolerance metal stampings and integrated
          powder coatings in Pune, Maharashtra. We deliver complete engineering parts
          with direct Material Test Certificates and zero supplier handoff.
        </p>
        <div className={styles.actions}>
          <Button variant="primary" size="lg" to="/rfq-portal">
            Initiate Technical RFQ
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="/downloads/capabilities-sheet.pdf"
            download="SK_Industries_Capabilities_Sheet.pdf"
            onClick={handleDownloadTrack}
          >
            Download Capabilities Sheet
          </Button>
        </div>
      </div>
    </section>
  );
}
