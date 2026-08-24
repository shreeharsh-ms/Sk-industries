import React from "react";
import ProductHero from "../../components/products/ProductHero";
import ApplicationBlock from "../../components/products/ApplicationBlock";
import WhatWeAddSection from "../../components/products/WhatWeAddSection";
import CrossLinkBanner from "../../components/products/CrossLinkBanner";
import SpecStamp from "../../components/ui/SpecStamp";
import Badge from "../../components/ui/Badge";
import useDocumentMetadata from "../../hooks/useDocumentMetadata";
import productData from "../../data/products/powderCoating";
import diagramStyles from "../../components/products/ProductDiagram.module.css";

export default function PowderCoatingPage() {
  useDocumentMetadata(
    "Industrial Powder Coating Services & Specs Pune",
    "Technical parameters and curing oven details for high-durability electrostatic epoxy-polyester coatings (PP engineering) processed by SK Industries Pune.",
    "PP Engineering, PP Engineering Pune, industrial powder coating, powder coating services Pune, electrostatic spray painting"
  );

  return (
    <>
      <ProductHero
        name={productData.name}
        desc={productData.application}
        audience={productData.audience}
        specSheetPdf={productData.specSheetPdf}
        accent="teal"
        image="/images/powder_coating_line.png"
        bgImage="/images/metal_stamping_factory.png"
      />

      <ApplicationBlock
        application="Metal components demand resilient surface barriers to prevent abrasion, chemicals, and outdoor environmental exposure from causing premature oxidation. Our conveyorized powder coating line features an electrostatic spray booth and high-temperature curing ovens to apply polyester, epoxy, and hybrid finishes. Parts undergo extensive pickling and hot-dip zinc phosphating pre-treatments, ensuring paint adhesion that stands up to rugged field use."
        specs={productData.specs}
      />

      {/* Custom Visual Component: Sticky Split-Screen Coating Process Layout */}
      <section className="container section-padding--tight" style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        <h3 className={diagramStyles.diagramTitle}>
          Electrostatic Powder Coating Process
        </h3>
        <div className={diagramStyles.stickyGrid}>
          
          {/* Sticky Column: Facility Image */}
          <div className={diagramStyles.stickyColumn}>
            <img 
              src="/images/powder_coating_line.png" 
              alt="Industrial Powder Coating Line Conveyor" 
              className={diagramStyles.blueprintImage}
              style={{ objectFit: "cover", height: "100%", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-steel-300)" }}
            />
          </div>

          {/* Scrollable Column: Detailed Coating Steps */}
          <div className={diagramStyles.scrollColumn}>
            <p className={diagramStyles.description} style={{ marginBottom: "var(--space-2)" }}>
              Applying powder coatings under a single roof immediately after stamping keeps metal surfaces clean and eliminates rust formation risks.
            </p>

            <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginBottom: "var(--space-1)" }}>
              <Badge accent="teal">80-120 μm DFT</Badge>
              <Badge accent="teal">ASTM D3359 Adhesion</Badge>
              <Badge accent="orange">1000hr Salt Spray</Badge>
            </div>

            <div className={diagramStyles.stampRow}>
              <SpecStamp value="120 μm max" label="Film Thickness" accent="teal" size="md" />
              <SpecStamp value="200 °C" label="Curing Temp" accent="orange" size="md" />
            </div>

            <div className={diagramStyles.scrollingList}>
              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>PROCESS // STEP_01</span>
                <h4 className={diagramStyles.cardTitle}>ZINC PHOSPHATING PRE-TREATMENT</h4>
                <p className={diagramStyles.cardDesc}>
                  Multi-stage chemical baths remove mill oils and apply a micro-crystalline phosphate layer to lock in the paint finish.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>PROCESS // STEP_02</span>
                <h4 className={diagramStyles.cardTitle}>ELECTROSTATIC APPLICATION</h4>
                <p className={diagramStyles.cardDesc}>
                  Negatively charged powder particles are sprayed onto grounded metal parts to achieve perfectly uniform coverage over corners and edges.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>PROCESS // STEP_03</span>
                <h4 className={diagramStyles.cardTitle}>THERMAL CURING OVEN</h4>
                <p className={diagramStyles.cardDesc}>
                  Convection ovens heat parts to 200°C for 20 minutes to cross-link the powder polymers into a tough, scratch-resistant barrier.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>TESTING // PROTOCOL_04</span>
                <h4 className={diagramStyles.cardTitle}>CROSS-HATCH ADHESION TEST</h4>
                <p className={diagramStyles.cardDesc}>
                  Paint adhesion is verified on test panels by scoring the surface and checking tape pull results against ASTM D3359 scales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatWeAddSection highlights={productData.whatWeAdd} />

      <CrossLinkBanner 
        title="Looking for Stamped and Coated Enclosures?"
        desc="By executing both metal press stamping and powder coating under a single roof, we eliminate intermediate transport costs and simplify your supplier chain."
        ctaText="Initiate Technical RFQ"
        ctaLink="/rfq-portal"
      />
    </>
  );
}
