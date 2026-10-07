import React from "react";
import ProductHero from "../../components/products/ProductHero";
import ApplicationBlock from "../../components/products/ApplicationBlock";
import WhatWeAddSection from "../../components/products/WhatWeAddSection";
import CrossLinkBanner from "../../components/products/CrossLinkBanner";
import SpecStamp from "../../components/ui/SpecStamp";
import Badge from "../../components/ui/Badge";
import useDocumentMetadata from "../../hooks/useDocumentMetadata";
import productData from "../../data/products/speakerMagnetPlatesPowderCoating";
import diagramStyles from "../../components/products/ProductDiagram.module.css";

export default function SpeakerMagnetPlatesPowderCoatingPage() {
  useDocumentMetadata(
    "Speaker Magnet Plates & Zinc Plating — PP Engineering Pune",
    "Technical parameters and magnetic flux density diagrams for low-carbon steel speaker top and bottom pole plates combined with in-house industrial zinc coating by SK Industries Pune.",
    "Speaker magnet plates, zinc plating Pune, T-Yoke pole piece, front plate stamping, single roof stamping coating"
  );

  return (
    <>
      <ProductHero
        name={productData.name}
        desc={productData.application}
        audience={productData.audience}
        accent="orange"
        image="/images/speaker_magnet_parts_stack.png"
        bgImage="/images/zinc_plating_line.jpg"
      />

      <ApplicationBlock
        application="High-performance audio transducers and industrial magnetic components demand both precise electromagnetic flux paths and robust surface protection. Under our unified facility in Pune, we stamp ultra-low carbon steel pole plates to high precision flatness, followed immediately by in-house zinc plating or coating as per customer requirements. This single-roof workflow eliminates transit corrosion and ensures zero-defect voice coil clearance."
        specs={productData.specs}
      />

      {/* Custom Visual Component: Sticky Split-Screen Magnetic & Surface Finish Layout */}
      <section className="container section-padding--tight" style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        <h3 className={diagramStyles.diagramTitle}>
          Magnetic Circuit Architecture &amp; Single-Roof Surface Treatment
        </h3>
        <div className={diagramStyles.stickyGrid}>
          
          {/* Sticky Column: Explosion diagram and real component gallery */}
          <div className={diagramStyles.stickyColumn}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <img 
                src="/images/speaker_magnet_exploded_schematic.png" 
                alt="Speaker Pole Piece Magnetic Circuit Exploded Blueprint" 
                className={diagramStyles.blueprintImage}
                loading="lazy"
                decoding="async"
                style={{ backgroundColor: "#ffffff", padding: "10px" }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
                <img 
                  src="/images/speaker_magnet_parts_stack.png" 
                  alt="Stamped T-Yoke and Front Plates Stacks" 
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-steel-300)", objectFit: "cover", height: "100%" }}
                />
                <img 
                  src="/images/zinc_plating_line.jpg" 
                  alt="Automated Zinc Plating and Chemical Passivation Line" 
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-steel-300)", objectFit: "cover", height: "100%" }}
                />
              </div>
            </div>
          </div>

          {/* Scrollable Column: Detailed Parts & Measurements Specs */}
          <div className={diagramStyles.scrollColumn}>
            <p className={diagramStyles.description} style={{ marginBottom: "var(--space-2)" }}>
              The flat pole plate blanking process optimizes metal boundaries, ensuring high magnetic flux loops are maintained without stray emissions, while our in-house zinc plating and coating protect against environmental humidity.
            </p>

            <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginBottom: "var(--space-1)" }}>
              <Badge accent="orange">JIS S10C Steel</Badge>
              <Badge accent="orange">1.5 - 6.0 mm</Badge>
              <Badge accent="teal">Zinc Plating / Coating</Badge>
              <Badge accent="teal">Corrosion Resistant</Badge>
            </div>

            <div className={diagramStyles.stampRow}>
              <SpecStamp value="High Precision" label="Flatness Quality" accent="orange" size="md" />
              <SpecStamp value="1,000 hrs" label="Salt Spray Rating" accent="teal" size="md" />
            </div>

            <div className={diagramStyles.scrollingList}>
              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_01</span>
                <h4 className={diagramStyles.cardTitle}>LOW-CARBON STEEL PLATES</h4>
                <p className={diagramStyles.cardDesc}>
                  Cold-rolled low carbon steel (C &lt; 0.08%) ensuring maximum magnetic permeability and minimum hysteresis loss for distortion-free sound reproduction.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_02</span>
                <h4 className={diagramStyles.cardTitle}>T-YOKE &amp; FRONT POLE PIECES</h4>
                <p className={diagramStyles.cardDesc}>
                  Single-piece coined or stamped T-Yokes and front plates holding strict voice coil air gap alignment without mechanical springback or burrs.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>SURFACE FINISH // PART_03</span>
                <h4 className={diagramStyles.cardTitle}>7-STAGE CHEMICAL CONVERSION</h4>
                <p className={diagramStyles.cardDesc}>
                  Multi-tank hot alkaline degreasing, acid pickling, and passivation that creates a microscopic keying surface for permanent plating and coating adhesion.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>SURFACE FINISH // PART_04</span>
                <h4 className={diagramStyles.cardTitle}>ZINC COATING &amp; PLATING</h4>
                <p className={diagramStyles.cardDesc}>
                  Precision zinc coating or plating applied uniformly with trivalent passivation for exceptional corrosion resistance and moisture protection in humid speaker assemblies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatWeAddSection nodes={productData.whatWeAdd} />

      <CrossLinkBanner
        title="Need Stamped Sheet Metal Housings?"
        subtitle="Explore our custom die press electrical parts and heavy-duty rolling shutter locks."
        linkText="View Custom Die Press Parts"
        linkTo="/services/custom-die-press-electrical-parts"
      />
    </>
  );
}
