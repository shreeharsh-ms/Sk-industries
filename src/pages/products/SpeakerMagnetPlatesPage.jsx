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
    "Speaker Magnet Plates Specifications",
    "Technical parameters and magnetic flux density diagrams for low-carbon steel speaker top and bottom pole plates stamped by SK Industries."
  );

  return (
    <>
      <ProductHero
        name={productData.name}
        desc={productData.application}
        audience={productData.audience}
        specSheetPdf={productData.specSheetPdf}
        accent="orange"
        image="/images/speaker_magnet_plate.png"
        bgImage="/images/powder_coating_line.png"
      />

      <ApplicationBlock
        application="Audio speaker drivers depend on highly focused magnetic loops to move voice coils linearly. Our top and bottom magnet plates are stamped from low-carbon steel coils, which maximize magnetic permeability and minimize hysteresis losses. Precision flat blanking prevents structural gap deviations, ensuring high-fidelity audio reproduction without voice coil rubbing."
        specs={productData.specs}
      />

      {/* Custom Visual Component: Sticky Split-Screen Magnetic Flux Layout */}
      <section className="container section-padding--tight" style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        <h3 className={diagramStyles.diagramTitle}>
          Magnetic Flux Field Distribution Reference
        </h3>
        <div className={diagramStyles.stickyGrid}>
          
          {/* Sticky Column: Generated Premium Blueprint Image */}
          <div className={diagramStyles.stickyColumn}>
            <img 
              src="/images/magnetic_flux_distribution.png" 
              alt="Speaker Pole Piece Magnetic Circuit Blueprint" 
              className={diagramStyles.blueprintImage}
            />
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
                <h4 className={diagramStyles.cardTitle}>TOP PLATE</h4>
                <p className={diagramStyles.cardDesc}>
                  Low-carbon steel front plate that channels and concentrates magnetic flux lines directly toward the voice coil.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_03</span>
                <h4 className={diagramStyles.cardTitle}>POLE PIECE BOTTOM</h4>
                <p className={diagramStyles.cardDesc}>
                  Precision coined bottom pole yoke providing the returning magnetic circuit loop with minimal hysteresis loss.
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
