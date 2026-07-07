import React from "react";
import WorkflowScrubber from "../components/workflow/WorkflowScrubber";
import QCEquipmentSidebar from "../components/workflow/QCEquipmentSidebar";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

export default function WorkflowPage() {
  useDocumentMetadata(
    "Manufacturing Process Workflow",
    "Explore the integrated step-by-step sheet metal fabrication, deburring, zinc pre-treatment, powder coating, and CMM quality inspection processes at SK Industries."
  );

  return (
    <main style={{ minHeight: "100vh", position: "relative", backgroundColor: "var(--color-white)" }}>
      {/* 1. Fullscreen Sticky Video Scroll-Scrubber */}
      <WorkflowScrubber />

      {/* 2. Detailed Floor Plan & Equipment Lists */}
      <div className="container section-padding workflow-content-container" style={{ paddingBlock: "var(--space-10)" }}>
        
        {/* Inline SVG: Physical Shop Floor Flow Chart (Technical Console Style) */}
        <div
          style={{
            backgroundColor: "var(--color-bg-light)", /* slate white-grey */
            border: "1px solid var(--color-steel-300)",
            padding: "var(--space-7)",
            borderRadius: "var(--radius-md)",
            marginBottom: "var(--space-10)",
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
          
          <div style={{ overflowX: "auto", width: "100%" }}>
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
        <div style={{ marginBottom: "var(--space-6)" }}>
          <QCEquipmentSidebar />
        </div>

      </div>

      {/* 4. Satisfied Enough? Call to Action Banner (No Background, Image to the Right, Zero Top Padding) */}
      <section 
        className="container" 
        style={{
          background: "none", /* No background */
          color: "var(--color-text-primary)",
          borderTop: "1px solid var(--color-steel-200)",
          paddingBlock: "0 var(--space-10)", /* Removed top padding as requested */
          width: "100%",
        }}
      >
        {/* Responsive Media Query Support */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
            .workflow-content-container {
              padding-block: var(--space-6) var(--space-3) !important; /* Much smaller bottom padding */
            }
            .floor-plan-card {
              padding: var(--space-4) !important;
              margin-bottom: var(--space-6) !important;
            }
            .satisfied-grid {
              grid-template-columns: 1fr !important;
              gap: var(--space-6) !important;
            }
            .satisfied-grid a {
              width: 100% !important;
              justify-content: center !important;
              box-sizing: border-box !important;
              padding: 14px 24px !important;
            }
            .satisfied-img-wrapper {
              order: -1;
            }
          }
        `}} />

        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "1.2fr 0.8fr", 
            gap: "var(--space-8)", 
            alignItems: "center" 
          }}
          className="satisfied-grid"
        >
          {/* Left Column: text details and CTAs */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-4)", textAlign: "left" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", color: "var(--color-accent-primary)", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: "800" }}>
              Sourcing Collaboration
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.8rem)", textTransform: "uppercase", fontWeight: "900", margin: "0", letterSpacing: "-0.02em", lineHeight: "1.15", color: "var(--color-text-primary)" }}>
              Satisfied Enough with Our Setup?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.22rem", color: "var(--color-steel-600)", lineHeight: "1.65", margin: "0 0 var(--space-3) 0" }}>
              Eliminate shipping delays and vendor management conflicts. Get in touch with our team directly, contact us on WhatsApp, or inquire via the portal to request sample runs.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)", width: "100%" }}>
              <a 
                href="https://wa.me/917875138713" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px 36px", /* Larger button padding */
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "var(--font-display)",
                  fontWeight: "750",
                  textTransform: "uppercase",
                  fontSize: "1rem", /* Larger font size */
                  textDecoration: "none",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: "0 4px 12px rgba(37, 211, 102, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 16px rgba(37, 211, 102, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 211, 102, 0.2)";
                }}
              >
                <span>Contact Us (WhatsApp)</span>
              </a>
              
              <a 
                href="/rfq-portal"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "16px 36px", /* Larger button padding */
                  backgroundColor: "var(--color-accent-primary)",
                  color: "#ffffff",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "var(--font-display)",
                  fontWeight: "750",
                  textTransform: "uppercase",
                  fontSize: "1rem", /* Larger font size */
                  textDecoration: "none",
                  transition: "transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: "0 4px 12px rgba(217, 85, 30, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 16px rgba(217, 85, 30, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(217, 85, 30, 0.2)";
                }}
              >
                <span>Inquire Us (RFQ Portal)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div style={{ display: "flex", justifyContent: "center" }} className="satisfied-img-wrapper">
            <img 
              src="/images/cmm_metrology_room.png" 
              alt="Quality Assurance Lab and Equipment" 
              style={{
                width: "100%",
                maxHeight: "260px",
                objectFit: "cover",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-steel-200)",
                boxShadow: "0 12px 36px rgba(0, 0, 0, 0.08)"
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
