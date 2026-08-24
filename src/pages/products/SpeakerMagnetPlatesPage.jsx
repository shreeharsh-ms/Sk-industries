import React from "react";
import ProductHero from "../../components/products/ProductHero";
import ApplicationBlock from "../../components/products/ApplicationBlock";
import WhatWeAddSection from "../../components/products/WhatWeAddSection";
import CrossLinkBanner from "../../components/products/CrossLinkBanner";
import SpecStamp from "../../components/ui/SpecStamp";
import useDocumentMetadata from "../../hooks/useDocumentMetadata";
import productData from "../../data/products/speakerMagnetPlates";
import diagramStyles from "../../components/products/ProductDiagram.module.css";

export default function SpeakerMagnetPlatesPage() {
  useDocumentMetadata(
    "Speaker Magnet Plates Specifications — PP Engineering Pune",
    "Technical parameters and magnetic flux density diagrams for low-carbon steel speaker top and bottom pole plates (PP engineering) stamped by SK Industries Pune.",
    "PP Engineering, PP Engineering Pune, speaker magnet plates, T-Yoke pole piece, front top plate stamping"
  );

  return (
    <>
      <ProductHero
        name={productData.name}
        desc={productData.application}
        audience={productData.audience}
        specSheetPdf={productData.specSheetPdf}
        accent="orange"
        image="/images/speaker_magnet_parts_stack.png"
        bgImage="/images/workmanship_plant.jpg"
      />

      <ApplicationBlock
        application="Audio speaker drivers depend on highly focused magnetic loops to move voice coils linearly. Our top and bottom magnet plates are stamped from low-carbon steel coils, which maximize magnetic permeability and minimize hysteresis losses. Precision flat blanking prevents structural gap deviations, ensuring high-fidelity audio reproduction without voice coil rubbing."
        specs={productData.specs}
      />

      {/* Custom Visual Component: Sticky Split-Screen Magnetic Flux Layout */}
      <section className="container section-padding--tight" style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        <h3 className={diagramStyles.diagramTitle}>
          Magnetic Circuit & Component Blueprint
        </h3>
        <div className={diagramStyles.stickyGrid}>
          
          {/* Sticky Column: Explosion diagram and real component gallery */}
          <div className={diagramStyles.stickyColumn}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <img 
                src="/images/speaker_magnet_exploded_schematic.png" 
                alt="Speaker Pole Piece Magnetic Circuit Exploded Blueprint" 
                className={diagramStyles.blueprintImage}
                style={{ backgroundColor: "#ffffff", padding: "10px" }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
                <img 
                  src="/images/speaker_magnet_parts_stack.png" 
                  alt="Stamped T-Yoke and Front Plates Stacks" 
                  style={{ width: "100%", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-steel-300)" }}
                />
                <img 
                  src="/images/speaker_magnet_standalone_plates.png" 
                  alt="T-Yoke and Front Plate Standalone machined components" 
                  style={{ width: "100%", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-steel-300)" }}
                />
              </div>
            </div>
          </div>

          {/* Scrollable Column: Detailed Parts & Measurements Specs */}
          <div className={diagramStyles.scrollColumn}>
            <p className={diagramStyles.description} style={{ marginBottom: "var(--space-2)" }}>
              The flat pole plate blanking process optimizes metal boundaries, ensuring high magnetic flux loops are maintained without stray emissions. This yields consistent electromagnetic responses in speaker voice coils.
            </p>

            <div className={diagramStyles.stampRow}>
              <SpecStamp value="± 0.05 mm" label="Flatness Spec" accent="orange" size="md" />
              <SpecStamp value="JIS S10C" label="Low-Carbon Steel" accent="orange" size="md" />
            </div>

            <div className={diagramStyles.scrollingList}>
              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_01</span>
                <h4 className={diagramStyles.cardTitle}>FERRITE MAGNET CORE</h4>
                <p className={diagramStyles.cardDesc}>
                  A high-permeability permanent magnet block providing the main magnetomotive force of the speaker driver assembly.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_02</span>
                <h4 className={diagramStyles.cardTitle}>FRONT PLATE (TOP PLATE)</h4>
                <p className={diagramStyles.cardDesc}>
                  While sometimes informally called a bearing plate or washer, the correct technical term is the Front Plate or Top Plate. Its purpose is to concentrate the magnetic field from the top of the magnet across the gap to the central pole piece, creating the magnetic field where the voice coil sits.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_03</span>
                <h4 className={diagramStyles.cardTitle}>T-YOKE (POLE PIECE)</h4>
                <p className={diagramStyles.cardDesc}>
                  Commonly called a T-Yoke in the audio engineering industry because its cross-section looks like the letter "T". Technically, it is a single machined or forged piece that serves as both the Back Plate (the flat bottom part) and the Central Pole (the raised cylindrical part). Its scientific function is to guide the magnetic flux from the back of the magnet into the voice coil gap.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>MEASUREMENT // REF_04</span>
                <h4 className={diagramStyles.cardTitle}>FLUX LEAKAGE LINES</h4>
                <p className={diagramStyles.cardDesc}>
                  Stray magnetic lines of force outside the core minimized through optimal dimensional boundary constraints.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>MEASUREMENT // REF_05</span>
                <h4 className={diagramStyles.cardTitle}>GAP FLUX CONCENTRATION</h4>
                <p className={diagramStyles.cardDesc}>
                  High-density magnetic field focused in the narrow air gap to drive voice coil linear excursions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <WhatWeAddSection whatWeAdd={productData.whatWeAdd} accent="orange" />

      <CrossLinkBanner />
    </>
  );
}
