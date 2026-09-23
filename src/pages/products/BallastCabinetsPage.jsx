import React from "react";
import ProductHero from "../../components/products/ProductHero";
import ApplicationBlock from "../../components/products/ApplicationBlock";
import WhatWeAddSection from "../../components/products/WhatWeAddSection";
import CrossLinkBanner from "../../components/products/CrossLinkBanner";
import SpecStamp from "../../components/ui/SpecStamp";
import Badge from "../../components/ui/Badge";
import useDocumentMetadata from "../../hooks/useDocumentMetadata";
import productData from "../../data/products/ballastCabinets";
import diagramStyles from "../../components/products/ProductDiagram.module.css";

export default function BallastCabinetsPage() {
  useDocumentMetadata(
    "Ballast Cabinets & Driver Boxes — PP Engineering Pune",
    "Technical parameters and engineering drawings for heavy-duty ventilated CRCA sheet metal ballast cabinets and driver boxes manufactured by SK Industries Pune.",
    "Ballast cabinet, ballast box, driver box Pune, lighting ballast enclosure, MS cabinet Pune, powder coated driver case"
  );

  return (
    <>
      <ProductHero
        name={productData.name}
        desc={productData.application}
        audience={productData.audience}
        accent="orange"
        image="/images/ballast_cabinet_finished.png"
        bgImage="/images/metal_stamping_factory.png"
      />

      <ApplicationBlock
        application="Electronic ballasts and power drivers generate significant thermal dissipation that can degrade circuitry if improperly housed. Our precision sheet metal ballast cabinets are manufactured from cold-rolled close annealed (CRCA) steel, featuring progressive stamped ventilation louvers, internal DIN rail mounting channels, and welded earthing bosses. Finished with an 80-micron powder coating layer over zinc phosphating, they deliver complete electrical shielding and long-term durability in commercial and industrial lighting setups."
        specs={productData.specs}
      />

      {/* Custom Visual Component: Sticky Split-Screen Mechanical Blueprint Layout */}
      <section className="container section-padding--tight" style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        <h3 className={diagramStyles.diagramTitle}>
          Ballast Cabinet Engineering Blueprint &amp; Features
        </h3>
        <div className={diagramStyles.stickyGrid}>
          
          {/* Sticky Column: Generated Premium Blueprint Image */}
          <div className={diagramStyles.stickyColumn}>
            <img 
              src="/images/ballast_cabinet_schematic.png" 
              alt="Ballast Cabinet Mechanical Blueprint" 
              className={diagramStyles.blueprintImage}
              style={{ backgroundColor: "#ffffff", padding: "10px" }}
            />
          </div>

          {/* Scrollable Column: Detailed Parts & Measurements Specs */}
          <div className={diagramStyles.scrollColumn}>
            <p className={diagramStyles.description} style={{ marginBottom: "var(--space-2)" }}>
              The enclosure architecture is engineered to isolate high-temperature transformer coils while providing simple field installation access for electrician crews.
            </p>

            <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginBottom: "var(--space-1)" }}>
              <Badge accent="orange">CRCA Steel</Badge>
              <Badge accent="orange">IP40 / IP54</Badge>
              <Badge accent="teal">Convective Louvers</Badge>
              <Badge accent="teal">RAL 7035 Powder Coat</Badge>
            </div>

            <div className={diagramStyles.stampRow}>
              <SpecStamp value="Precision Fit" label="Forming Standard" accent="orange" size="md" />
              <SpecStamp value="80+ μm" label="Powder Thickness" accent="orange" size="md" />
            </div>

            <div className={diagramStyles.scrollingList}>
              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_01</span>
                <h4 className={diagramStyles.cardTitle}>LOUVERED HEAT VENTILATION</h4>
                <p className={diagramStyles.cardDesc}>
                  Progressive stamped louvers along the lateral panels enable continuous convective airflow, lowering driver core operating temperatures by up to 18°C.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_02</span>
                <h4 className={diagramStyles.cardTitle}>WELDED M10 EARTHING STUD</h4>
                <p className={diagramStyles.cardDesc}>
                  Integrated brass-plated M10 ground post with serrated star washers provides a reliable, low-impedance earth fault discharge path meeting electrical safety standards.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_03</span>
                <h4 className={diagramStyles.cardTitle}>METRIC &amp; PG CABLE GLAND ENTRIES</h4>
                <p className={diagramStyles.cardDesc}>
                  Pre-punched knockouts on top and bottom plates accommodate M20 and M25 cable glands without requiring on-site drilling or risking slag debris inside the box.
                </p>
              </div>

              <div className={diagramStyles.cardItem}>
                <span className={diagramStyles.cardLabel}>COMPONENT // PART_04</span>
                <h4 className={diagramStyles.cardTitle}>WALL-MOUNT FLANGE BRACKET</h4>
                <p className={diagramStyles.cardDesc}>
                  Integrated heavy-gauge rear mounting flanges with teardrop keyhole slots allow single-technician wall or luminaire mounting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatWeAddSection nodes={productData.whatWeAdd} />

      <CrossLinkBanner
        title="Explore Related Metal Enclosures"
        subtitle="View our outdoor weatherproof EV charger cabinets or custom progressive die stampings."
        linkText="View EV Charger Enclosures"
        linkTo="/products/ev-charger-enclosures"
      />
    </>
  );
}
