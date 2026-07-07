import React from "react";
import RFQForm from "../components/rfq/RFQForm";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import useDocumentMetadata from "../hooks/useDocumentMetadata";
import { FileText, Cpu, Clock } from "lucide-react";

export default function RFQPortalPage() {
  useDocumentMetadata(
    "Technical RFQ Sourcing Portal",
    "Submit your sheet metal drawings, material specification needs, and batch volume requirements to get a custom engineering quote in 24 hours."
  );

  return (
    <main className="container section-padding">
      <SectionHeading
        eyebrow="Procurement Pipeline"
        title="Technical RFQ Portal"
        accent="orange"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "var(--space-7)",
          alignItems: "flex-start",
          marginTop: "var(--space-6)",
        }}
      >
        {/* Left column: main form */}
        <RFQForm />

        {/* Right column: technical instructions sidebar cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
          <Card theme="light" accent="orange">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--font-size-body-sm)",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
                color: "var(--color-accent-primary)",
                margin: "0 0 var(--space-4) 0",
              }}
            >
              Direct Sourcing Channels
            </h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              {/* WhatsApp */}
              <div>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--color-steel-500)", display: "block" }}>
                  Direct WhatsApp
                </span>
                <a 
                  href="https://wa.me/917875138713" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    fontSize: "0.95rem", 
                    fontWeight: "700", 
                    color: "var(--color-text-primary)", 
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "4px"
                  }}
                >
                  <span style={{ color: "#25D366", fontSize: "1.2rem" }}>WhatsApp:</span> +91 7875 138 713
                </a>
              </div>

              {/* Email */}
              <div>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--color-steel-500)", display: "block" }}>
                  Engineering Email
                </span>
                <a 
                  href="mailto:skindustries0709@gmail.com"
                  style={{ 
                    fontSize: "0.95rem", 
                    fontWeight: "700", 
                    color: "var(--color-text-primary)", 
                    textDecoration: "none",
                    display: "block",
                    marginTop: "4px"
                  }}
                >
                  skindustries0709@gmail.com
                </a>
              </div>

              {/* Facility Location */}
              <div>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--color-steel-500)", display: "block" }}>
                  Facility Location
                </span>
                <a 
                  href="https://maps.google.com/?q=Tiny+Industrial+Estate,+Kondhwa,+Pune" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    fontSize: "0.85rem", 
                    fontWeight: "600", 
                    color: "var(--color-text-primary)", 
                    textDecoration: "none",
                    display: "block",
                    lineHeight: "1.4",
                    marginTop: "4px"
                  }}
                >
                  TINY INDUSTRIAL ESTATE,<br />
                  KONDHWA BK., PUNE-411048
                </a>
              </div>
            </div>
          </Card>

          <Card theme="light" accent="teal">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--font-size-body-sm)",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
                color: "var(--color-accent-secondary)",
                margin: "0 0 var(--space-3) 0",
              }}
            >
              <Cpu size={18} />
              Unified QA Pipeline
            </h3>
            <p className="text" style={{ fontSize: "var(--font-size-body-sm)", lineHeight: "var(--line-height-relaxed)" }}>
              Every part produced will be stamped and coated in Pune, Maharashtra, avoiding third-party courier risks and optimizing costs.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}
