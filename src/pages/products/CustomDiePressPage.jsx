import React from "react";
import ProductHero from "../../components/products/ProductHero";
import ApplicationBlock from "../../components/products/ApplicationBlock";
import WhatWeAddSection from "../../components/products/WhatWeAddSection";
import CrossLinkBanner from "../../components/products/CrossLinkBanner";
import SpecStamp from "../../components/ui/SpecStamp";
import useDocumentMetadata from "../../hooks/useDocumentMetadata";
import productData from "../../data/products/customDiePress";
import diagramStyles from "../../components/products/ProductDiagram.module.css";

export default function CustomDiePressPage() {
  useDocumentMetadata(
    "Custom Die Press Electrical Parts Specifications",
    "Technical parameters and bending rule formulas for conductive copper and brass electrical busbars stamped by SK Industries."
  );

  return (
    <>
      <ProductHero
        name={productData.name}
        desc={productData.application}
        audience={productData.audience}
        specSheetPdf={productData.specSheetPdf}
        accent="orange"
        image="/images/progressive_die_parts.png"
        bgImage="/images/powder_coating_line.png"
      />

      <ApplicationBlock
        application="High-conductivity electrical busbars and distribution panels require precision bending to fit switchgear and cabinet configurations. Our custom progressive stamping dies feature automatic over-bend calculations to offset copper/brass springback behaviors. All punching operations are engineered to prevent burrs that could trigger hazardous arc flashes."
        specs={productData.specs}
      />

      {/* Custom Visual Component: Sticky Split-Screen Bend Formula Layout */}
      <section className="container section-padding--tight" style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        <h3 className={diagramStyles.diagramTitle}>
          Sheet Metal Bending Minimum Height Reference
        </h3>
        <div className={diagramStyles.stickyGrid}>
          
          {/* Sticky Column: Generated Premium Blueprint Image */}
          <div className={diagramStyles.stickyColumn}>
            <img 
              src="/images/custom_die_press_schematic.png" 
              alt="Sheet Metal Bending Geometry Blueprint" 
              className={diagramStyles.blueprintImage}
            />
          </div>

          {/* Scrollable Column: Detailed Parts & Measurements Specs */}
          <div className={diagramStyles.scrollColumn}>
            <p className={diagramStyles.description} style={{ marginBottom: "var(--space-2)" }}>
              Violating the minimum height relationship ($H \ge 2.5 \times T + R$) leads to metal wrinkling or tooling shear failure. Our dies incorporate bend margins to guarantee electrical contact flatness.
            </p>

            <div className={diagramStyles.stampRow}>
              <SpecStamp value="± 0.05 mm" label="Hole Spacing" accent="orange" size="md" />
              <SpecStamp value="Tin Plated" label="Conduct Coating" accent="teal" size="md" />
            </div>

            <div className={diagramStyles.scrollingList}>
              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_01</span>
                <h4 className={diagramStyles.cardTitle}>METAL THICKNESS (T)</h4>
                <p className={diagramStyles.cardDesc}>
                  Raw sheet copper, brass, or steel thickness calculated for mechanical strength and electrical loads.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_02</span>
                <h4 className={diagramStyles.cardTitle}>INSIDE BEND RADIUS (R)</h4>
                <p className={diagramStyles.cardDesc}>
                  The inner curve curvature formed by the precision press brake or progressive coin stamping die.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_03</span>
                <h4 className={diagramStyles.cardTitle}>MINIMUM BEND HEIGHT (H)</h4>
                <p className={diagramStyles.cardDesc}>
                  The minimum upright height required to prevent tooling slippage, wrinkles, or shear damage.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>FORMULA // REFERENCE_04</span>
                <h4 className={diagramStyles.cardTitle}>BEND HEIGHT FORMULA</h4>
                <p className={diagramStyles.cardDesc}>
                  Calculated standard limits (\(H \ge 2.5 \times T + R\)) to satisfy sheet metal progressive die parameters.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>METROLOGY // SPEC_05</span>
                <h4 className={diagramStyles.cardTitle}>HOLE SPACING ACCURACY</h4>
                <p className={diagramStyles.cardDesc}>
                  Hole center spacing held within a strict ±0.05mm tolerance limit for seamless site assembly.
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
