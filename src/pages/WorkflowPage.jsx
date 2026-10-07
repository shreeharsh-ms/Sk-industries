import React from "react";
import { Link } from "react-router-dom";
import WorkflowSliderHero from "../components/workflow/WorkflowSliderHero";
import QCEquipmentSidebar from "../components/workflow/QCEquipmentSidebar";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

export default function WorkflowPage() {
  useDocumentMetadata(
    "Manufacturing Process Workflow — PP Engineering Pune",
    "Explore the integrated step-by-step sheet metal fabrication, deburring, zinc pre-treatment, powder coating, and CMM quality inspection processes (PP engineering) at SK Industries.",
    "PP Engineering, PP Engineering Pune, factory workflow, metal stamping process, powder coating line Pune"
  );

  return (
    <main style={{ minHeight: "100vh", position: "relative", backgroundColor: "var(--color-white)" }}>
      {/* 1. Interactive Sliding Animation Workflow Hero */}
      <WorkflowSliderHero />

      {/* 2. Detailed Floor Plan & Equipment Lists */}
      <div className="container section-padding workflow-content-container" style={{ paddingBlock: "1.5cm" }}>

        {/* Inline SVG: Physical Shop Floor Flow Chart (Technical Console Style) */}
        <div
          style={{
            backgroundColor: "var(--color-bg-light)", /* slate white-grey */
            border: "1px solid var(--color-steel-300)",
            padding: "var(--space-7)",
            borderRadius: "var(--radius-md)",
            marginBottom: "1.5cm",
            boxShadow: "0 12px 32px rgba(20, 23, 26, 0.02)",
          }}
          className="floor-plan-card"
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.45rem",
              textTransform: "uppercase",
              marginBottom: "var(--space-6)",
              fontWeight: 900,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.015em"
            }}
          >
            Shop Floor Mechanical Layout & Flow
          </h3>

          <div className="mobile-scroll-hint" style={{ display: "none", fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-steel-500)", marginBottom: "var(--space-3)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            ← Swipe layout horizontally to explore steps →
          </div>
          <div style={{ overflowX: "auto", width: "100%", WebkitOverflowScrolling: "touch" }}>
            <svg
              viewBox="0 0 820 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ minWidth: "800px", width: "100%", height: "auto", display: "block" }}
            >
              {/* Definition for arrow markers */}
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--color-accent-primary)" />
                </marker>
              </defs>

              {/* 1. Decoiler */}
              <rect x="15" y="25" width="70" height="65" rx="6" fill="var(--color-white)" stroke="var(--color-accent-primary)" strokeWidth="2.5" />
              <circle cx="50" cy="57" r="16" fill="rgba(20, 63, 107, 0.06)" stroke="var(--color-accent-primary)" strokeWidth="2.5" />
              <circle cx="50" cy="57" r="6" fill="var(--color-accent-primary)" />
              <text x="50" y="112" fill="var(--color-text-primary)" fontSize="9" fontWeight="800" fontFamily="var(--font-mono)" textAnchor="middle">1. DECOILER</text>

              {/* Arrow */}
              <path d="M 95 57 L 115 57" stroke="var(--color-accent-primary)" strokeWidth="2.5" markerEnd="url(#arrow)" />

              {/* 2. Press */}
              <rect x="125" y="15" width="80" height="75" rx="6" fill="var(--color-white)" stroke="var(--color-accent-primary)" strokeWidth="2.5" />
              <path d="M 140 25 L 190 25 L 190 42 L 140 42 Z" fill="var(--color-accent-primary)" />
              <line x1="165" y1="42" x2="165" y2="72" stroke="var(--color-accent-primary)" strokeWidth="4.5" />
              <text x="165" y="112" fill="var(--color-text-primary)" fontSize="9" fontWeight="800" fontFamily="var(--font-mono)" textAnchor="middle">2. PRESS</text>

              {/* Arrow */}
              <path d="M 215 57 L 235 57" stroke="var(--color-accent-primary)" strokeWidth="2.5" markerEnd="url(#arrow)" />

              {/* 3. Tumbler */}
              <rect x="245" y="25" width="70" height="65" rx="325" fill="var(--color-white)" stroke="var(--color-accent-primary)" strokeWidth="2.5" />
              <line x1="255" y1="57" x2="305" y2="57" stroke="var(--color-accent-primary)" strokeWidth="2.5" strokeDasharray="3 3" />
              <text x="280" y="112" fill="var(--color-text-primary)" fontSize="9" fontWeight="800" fontFamily="var(--font-mono)" textAnchor="middle">3. TUMBLER</text>

              {/* Arrow */}
              <path d="M 325 57 L 345 57" stroke="var(--color-accent-primary)" strokeWidth="2.5" markerEnd="url(#arrow)" />

              {/* 4. Phosphate */}
              <rect x="355" y="30" width="90" height="60" rx="6" fill="var(--color-white)" stroke="var(--color-accent-primary)" strokeWidth="2.5" />
              <rect x="367" y="40" width="18" height="40" rx="2" fill="rgba(20, 63, 107, 0.08)" stroke="var(--color-accent-primary)" strokeWidth="1.5" />
              <rect x="391" y="40" width="18" height="40" rx="2" fill="rgba(20, 63, 107, 0.08)" stroke="var(--color-accent-primary)" strokeWidth="1.5" />
              <rect x="415" y="40" width="18" height="40" rx="2" fill="rgba(20, 63, 107, 0.08)" stroke="var(--color-accent-primary)" strokeWidth="1.5" />
              <text x="400" y="112" fill="var(--color-text-primary)" fontSize="9" fontWeight="800" fontFamily="var(--font-mono)" textAnchor="middle">4. PHOSPHATE</text>

              {/* Arrow */}
              <path d="M 455 57 L 475 57" stroke="var(--color-accent-primary)" strokeWidth="2.5" markerEnd="url(#arrow)" />

              {/* 5. Spray */}
              <rect x="485" y="25" width="80" height="65" rx="6" fill="var(--color-white)" stroke="var(--color-accent-primary)" strokeWidth="2.5" />
              <circle cx="525" cy="50" r="12" fill="rgba(20, 63, 107, 0.06)" stroke="var(--color-accent-primary)" strokeWidth="1.5" />
              <path d="M 505 70 Q 525 65, 545 70" stroke="var(--color-accent-primary)" strokeWidth="2" strokeLinecap="round" />
              <text x="525" y="112" fill="var(--color-text-primary)" fontSize="9" fontWeight="800" fontFamily="var(--font-mono)" textAnchor="middle">5. SPRAY</text>

              {/* Arrow */}
              <path d="M 575 57 L 595 57" stroke="var(--color-accent-primary)" strokeWidth="2.5" markerEnd="url(#arrow)" />

              {/* 6. Oven */}
              <rect x="605" y="15" width="80" height="75" rx="6" fill="var(--color-white)" stroke="var(--color-accent-primary)" strokeWidth="2.5" />
              <path d="M 615 30 Q 645 40, 675 30" stroke="var(--color-accent-primary)" strokeWidth="2.5" strokeDasharray="3 3" />
              <path d="M 615 50 Q 645 60, 675 50" stroke="var(--color-accent-primary)" strokeWidth="2.5" strokeDasharray="3 3" />
              <text x="645" y="112" fill="var(--color-text-primary)" fontSize="9" fontWeight="800" fontFamily="var(--font-mono)" textAnchor="middle">6. OVEN</text>

              {/* Arrow */}
              <path d="M 695 57 L 715 57" stroke="var(--color-accent-primary)" strokeWidth="2.5" markerEnd="url(#arrow)" />

              {/* 7. CMM QA */}
              <rect x="725" y="25" width="70" height="65" rx="6" fill="var(--color-white)" stroke="var(--color-accent-primary)" strokeWidth="2.5" />
              <path d="M 742 50 L 752 62 L 778 38" stroke="var(--color-accent-primary)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x="760" y="112" fill="var(--color-text-primary)" fontSize="9" fontWeight="800" fontFamily="var(--font-mono)" textAnchor="middle">7. CMM QA</text>
            </svg>
          </div>
        </div>

        {/* 3. QC Equipment Grid */}
        <div style={{ marginBottom: "var(--space-8)" }}>
          <QCEquipmentSidebar />
        </div>

        {/* 4. Facility Plant Showcase Banner with Background Image & WhatsApp Inquiry */}
        <div
          className="workflow-plant-banner"
          style={{
            position: "relative",
            width: "100%",
            minHeight: "380px",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            backgroundImage: "url('/images/workmanship_plant.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 42%",
            boxShadow: "0 14px 40px rgba(10, 16, 28, 0.14)",
            border: "1px solid var(--color-steel-300)",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Dark gradient overlay for optimal readability while showing facility */}
          <div
            className="workflow-banner-overlay"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, rgba(11, 15, 25, 0.95) 0%, rgba(11, 15, 25, 0.85) 45%, rgba(11, 15, 25, 0.40) 80%, rgba(11, 15, 25, 0.20) 100%)",
              zIndex: 1,
            }}
          />

          {/* Overlaid Content */}
          <div
            className="workflow-banner-content"
            style={{
              position: "relative",
              zIndex: 2,
              padding: "clamp(2rem, 5vw, 4rem)",
              maxWidth: "750px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--space-3)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
                color: "#38bdf8",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                fontWeight: "750",
                background: "rgba(56, 189, 248, 0.12)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                padding: "4px 12px",
                borderRadius: "999px",
                display: "inline-block",
              }}
            >
              In-House Integrated Facility
            </span>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.1rem, 4.4vw, 3.4rem)",
                textTransform: "uppercase",
                fontWeight: "900",
                margin: 0,
                letterSpacing: "-0.02em",
                lineHeight: "1.12",
                color: "#ffffff",
                textShadow: "0 2px 14px rgba(0, 0, 0, 0.85)",
              }}
            >
              Visit Our Plant &amp; Discuss Your Production
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)",
                color: "#e2e8f0",
                lineHeight: "1.6",
                margin: "4px 0 var(--space-2) 0",
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.75)",
              }}
            >
              Schedule a visit to our Kondhwa facility in Pune or connect directly with our engineering team on WhatsApp to review technical drawings and initiate sample runs.
            </p>

            <a
              href="https://wa.me/917875138713?text=Hi%20SK%20Industries,%20I%20would%20like%20to%20discuss%20a%20manufacturing%20inquiry%20and%20schedule%20a%20facility%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="workflow-whatsapp-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 34px",
                backgroundColor: "#25D366",
                color: "#ffffff",
                borderRadius: "var(--radius-sm)",
                fontFamily: "var(--font-display)",
                fontWeight: "800",
                textTransform: "uppercase",
                fontSize: "0.98rem",
                letterSpacing: "0.03em",
                textDecoration: "none",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                boxShadow: "0 6px 20px rgba(37, 211, 102, 0.35)",
                whiteSpace: "nowrap",
                marginTop: "6px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 211, 102, 0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.35)";
              }}
            >
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
