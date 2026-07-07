import React from "react";
import ProductHero from "../../components/products/ProductHero";
import ApplicationBlock from "../../components/products/ApplicationBlock";
import WhatWeAddSection from "../../components/products/WhatWeAddSection";
import CrossLinkBanner from "../../components/products/CrossLinkBanner";
import SpecStamp from "../../components/ui/SpecStamp";
import Badge from "../../components/ui/Badge";
import useDocumentMetadata from "../../hooks/useDocumentMetadata";
import productData from "../../data/products/evChargerEnclosures";
import diagramStyles from "../../components/products/ProductDiagram.module.css";

export default function EVChargerEnclosuresPage() {
  useDocumentMetadata(
    "EV Charger Enclosures Specifications",
    "Technical parameters and weatherproof NEMA protection details for UV-stable powder coated EV charging cabinets manufactured by SK Industries."
  );

  return (
    <>
      <ProductHero
        name={productData.name}
        desc={productData.application}
        audience={productData.audience}
        specSheetPdf={productData.specSheetPdf}
        accent="teal"
        image="/images/ev_charger_enclosure_finished.png"
        bgImage="/images/metal_stamping_factory.png"
      />

      <ApplicationBlock
        application="EV charging electronics demand robust protection from rain, snow, dust, and physical impacts. Our sheet metal enclosures are engineered with double-return gutters, continuous welds, and polyurethane gaskets to meet NEMA 4/4X weatherproof standards. The exterior is coated with a minimum 80-micron UV-stable polyester powder finish to resist solar degradation and paint chalking."
        specs={productData.specs}
      />

      {/* Custom Visual Component: Sticky Split-Screen Weather Protection Layout */}
      <section className="container section-padding--tight" style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        <h3 className={diagramStyles.diagramTitle}>
          NEMA Enclosure Weatherproof Features
        </h3>
        <div className={diagramStyles.stickyGrid}>
          
          {/* Sticky Column: Generated Premium Blueprint Image */}
          <div className={diagramStyles.stickyColumn}>
            <img 
              src="/images/ev_charger_enclosure_schematic.png" 
              alt="EV Charger Enclosure Weatherproof Blueprint" 
              className={diagramStyles.blueprintImage}
            />
          </div>

          {/* Scrollable Column: Detailed Parts & Measurements Specs */}
          <div className={diagramStyles.scrollColumn}>
            <p className={diagramStyles.description} style={{ marginBottom: "var(--space-2)" }}>
              Every enclosure undergoes a multi-stage pre-treatment phase to guarantee paint longevity under outdoor sunlight and moisture exposure.
            </p>

            <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginBottom: "var(--space-1)" }}>
              <Badge accent="teal">NEMA 4X</Badge>
              <Badge accent="teal">IP66 rated</Badge>
              <Badge accent="orange">IK10 mechanical</Badge>
            </div>

            <div className={diagramStyles.stampRow}>
              <SpecStamp value="80 μm min" label="Coating Powder" accent="teal" size="md" />
              <SpecStamp value="IK10" label="Impact Spec" accent="orange" size="md" />
            </div>

            <div className={diagramStyles.scrollingList}>
              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_01</span>
                <h4 className={diagramStyles.cardTitle}>RAIN SHIELD CANOPY</h4>
                <p className={diagramStyles.cardDesc}>
                  Stamped top overhang that redirects rain runoff away from cabinet door seams and front interface controls.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_02</span>
                <h4 className={diagramStyles.cardTitle}>POLYURETHANE FIP GASKET</h4>
                <p className={diagramStyles.cardDesc}>
                  Foam-in-place continuous gasket lining that forms a seamless seal to guarantee absolute IP66 watertight housing.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_03</span>
                <h4 className={diagramStyles.cardTitle}>LOUVERED VENT PORTS</h4>
                <p className={diagramStyles.cardDesc}>
                  Form-stamped cooling ventilation slots designed with dust mesh backings for passive heat venting.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>TEST // PROTOCOL_04</span>
                <h4 className={diagramStyles.cardTitle}>NEMA WATER JET TEST</h4>
                <p className={diagramStyles.cardDesc}>
                  Subjected to high-pressure water hose spray testing representing extreme storm wind conditions.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>MATERIAL // ACCENT_05</span>
                <h4 className={diagramStyles.cardTitle}>UV-STABLE COATING</h4>
                <p className={diagramStyles.cardDesc}>
                  Double-stage zinc phosphate pre-treated polyester powder spray coat engineered for 10+ years solar endurance.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <WhatWeAddSection whatWeAdd={productData.whatWeAdd} accent="teal" />

      <CrossLinkBanner />
    </>
  );
}
