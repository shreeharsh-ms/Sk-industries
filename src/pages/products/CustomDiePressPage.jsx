import React from "react";
import ProductHero from "../../components/products/ProductHero";
import ApplicationBlock from "../../components/products/ApplicationBlock";
import CrossLinkBanner from "../../components/products/CrossLinkBanner";
import useDocumentMetadata from "../../hooks/useDocumentMetadata";
import productData from "../../data/products/customDiePress";

export default function CustomDiePressPage() {
  useDocumentMetadata(
    "PP Engineering & Custom Die Press Specifications",
    "Technical parameters and progressive die press formulas for custom sheet metal stampings (PP engineering) and copper busbar operations by SK Industries Pune.",
    "PP Engineering, PP Engineering Pune, custom die press, sheet metal stamping, progressive press tooling"
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

      <CrossLinkBanner />
    </>
  );
}
