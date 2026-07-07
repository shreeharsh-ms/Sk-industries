import React from "react";
import RFQForm from "../components/rfq/RFQForm";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import useDocumentMetadata from "../hooks/useDocumentMetadata";
import { Cpu, MapPin, Mail, MessageCircle, ArrowRight } from "lucide-react";
import styles from "./RFQPortalPage.module.css";

export default function RFQPortalPage() {
  useDocumentMetadata(
    "Technical RFQ Sourcing Portal",
    "Submit your sheet metal drawings, material specification needs, and batch volume requirements to get a custom engineering quote in 24 hours."
  );

  return (
    <main className={styles.page}>
      {/* Hero Banner */}
      <div className={styles.heroBanner}>
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.eyebrow}>Procurement Pipeline</span>
          <h1 className={styles.heroTitle}>Technical RFQ Portal</h1>
          <p className={styles.heroSubtitle}>
            Submit your stamping &amp; coating requirements — we respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className={`container ${styles.content}`}>

        {/* Contact Quick Links — mobile top bar */}
        <div className={styles.quickLinks}>
          <a href="https://wa.me/917875138713" target="_blank" rel="noopener noreferrer" className={styles.quickLink}>
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>
          <a href="mailto:skindustries0709@gmail.com" className={styles.quickLink}>
            <Mail size={18} />
            <span>Email Us</span>
          </a>
          <a href="https://maps.google.com/?q=Tiny+Industrial+Estate,+Kondhwa,+Pune" target="_blank" rel="noopener noreferrer" className={styles.quickLink}>
            <MapPin size={18} />
            <span>Location</span>
          </a>
        </div>

        {/* Two-column layout: form left, sidebar right */}
        <div className={styles.grid}>

          {/* Left — RFQ Form */}
          <div className={styles.formCol}>
            <RFQForm />
          </div>

          {/* Right — Info Sidebar */}
          <aside className={styles.sidebar}>

            {/* Direct Sourcing Channels */}
            <div className={styles.sideCard}>
              <h3 className={styles.sideCardTitle}>
                <MessageCircle size={16} />
                Direct Sourcing Channels
              </h3>

              <div className={styles.contactList}>
                <div className={styles.contactRow}>
                  <span className={styles.contactLabel}>WhatsApp</span>
                  <a href="https://wa.me/917875138713" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>
                    +91 7875 138 713
                    <ArrowRight size={13} />
                  </a>
                </div>

                <div className={styles.contactRow}>
                  <span className={styles.contactLabel}>Email</span>
                  <a href="mailto:skindustries0709@gmail.com" className={styles.contactValue}>
                    skindustries0709@gmail.com
                    <ArrowRight size={13} />
                  </a>
                </div>

                <div className={styles.contactRow}>
                  <span className={styles.contactLabel}>Facility</span>
                  <a
                    href="https://maps.google.com/?q=Tiny+Industrial+Estate,+Kondhwa,+Pune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactValue}
                  >
                    Tiny Industrial Estate,<br />Kondhwa BK, Pune-411048
                    <ArrowRight size={13} style={{ marginTop: 2 }} />
                  </a>
                </div>
              </div>
            </div>

            {/* QA Pipeline Badge */}
            <div className={`${styles.sideCard} ${styles.sideCardTeal}`}>
              <h3 className={styles.sideCardTitle}>
                <Cpu size={16} />
                Unified QA Pipeline
              </h3>
              <p className={styles.sideCardText}>
                Every part is stamped and coated inside our Pune facility — no third-party transfers, full traceability from raw coil to final inspection.
              </p>
            </div>

            {/* Response Promise */}
            <div className={styles.responsePill}>
              <span className={styles.responseTime}>24 hrs</span>
              <span className={styles.responseLabel}>Average Engineering Response Time</span>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
