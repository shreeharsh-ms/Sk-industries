import React from "react";
import ProductHero from "../../components/products/ProductHero";
import ApplicationBlock from "../../components/products/ApplicationBlock";
import WhatWeAddSection from "../../components/products/WhatWeAddSection";
import CrossLinkBanner from "../../components/products/CrossLinkBanner";
import SpecStamp from "../../components/ui/SpecStamp";
import useDocumentMetadata from "../../hooks/useDocumentMetadata";
import productData from "../../data/products/rollingShutterLocks";
import diagramStyles from "../../components/products/ProductDiagram.module.css";

export default function RollingShutterLocksPage() {
  useDocumentMetadata(
    "Rolling Shutter Lock Sets Specifications",
    "Technical parameters and engineering drawings for heavy-duty 10-gauge steel rolling shutter lock sets manufactured under one roof at SK Industries."
  );

  return (
    <>
      <ProductHero
        name={productData.name}
        desc={productData.application}
        audience={productData.audience}
        specSheetPdf={productData.specSheetPdf}
        accent="orange"
        image="/images/rolling_shutter_lock.png"
        bgImage="/images/metal_stamping_factory.png"
      />

      <ApplicationBlock
        application="Designed for extreme environmental duty, these locking mechanisms secure commercial rolling shutters. The double-sided throw bolt engages guide channel structural rails, providing physical anchors against jemmying and crowbar attacks. Stamped from heavy-duty 10-gauge CRCA mild steel sheets, the housing is pre-treated and powder coated to a thickness of 80 microns for weathering protection."
        specs={productData.specs}
      />

      {/* Custom Visual Component: Sticky Split-Screen Lock Layout */}
      <section className="container section-padding--tight" style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        <h3 className={diagramStyles.diagramTitle}>
          Lock Cutaway Mechanical Reference
        </h3>
        <div className={diagramStyles.stickyGrid}>
          
          {/* Sticky Column: Generated Premium Blueprint Image */}
          <div className={diagramStyles.stickyColumn}>
            <img 
              src="/images/rolling_shutter_lock_schematic.png" 
              alt="Rolling Shutter Lock Mechanical Blueprint" 
              className={diagramStyles.blueprintImage}
            />
          </div>

          {/* Scrollable Column: Detailed Parts & Measurements Specs */}
          <div className={diagramStyles.scrollColumn}>
            <p className={diagramStyles.description} style={{ marginBottom: "var(--space-2)" }}>
              The stamping layout contains integral guide bosses to position internal sliding levers. Precision stamping limits leverage points, maintaining strict clearance fit-ups that prevent physical bypass attempts.
            </p>

            <div className={diagramStyles.stampRow}>
              <SpecStamp value="50,000" label="Cycle Life" accent="orange" size="md" />
              <SpecStamp value="CRCA Steel" label="Shell Metal" accent="orange" size="md" />
            </div>

            <div className={diagramStyles.scrollingList}>
              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_01</span>
                <h4 className={diagramStyles.cardTitle}>STEEL LOCK HOUSING</h4>
                <p className={diagramStyles.cardDesc}>
                  Stamped 10-gauge CRCA housing providing heavy physical resistance to forced entry and blunt force attacks.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_02</span>
                <h4 className={diagramStyles.cardTitle}>DOUBLE-SIDED THROW BOLTS</h4>
                <p className={diagramStyles.cardDesc}>
                  Heavy-duty stamped steel linkages extending outwards to lock shutter guide channel rails.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_03</span>
                <h4 className={diagramStyles.cardTitle}>5-LEVER SECURITY ASSEMBLY</h4>
                <p className={diagramStyles.cardDesc}>
                  Multi-level security lever plates aligned by stamped internal guide bosses to prevent picking.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_04</span>
                <h4 className={diagramStyles.cardTitle}>BRASS CORE CYLINDER</h4>
                <p className={diagramStyles.cardDesc}>
                  Solid brass key-operated high security mechanism ensuring 3,500 unique combination locks.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>METROLOGY // SPEC_05</span>
                <h4 className={diagramStyles.cardTitle}>STRICT CLEARANCE FIT-UPS</h4>
                <p className={diagramStyles.cardDesc}>
                  Tolerance clearances maintained during die coining that completely block physical bypass attempts.
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
