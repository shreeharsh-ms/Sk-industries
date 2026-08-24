import React from "react";
import AboutHero from "../components/about/AboutHero";
import CorporateProfile from "../components/about/CorporateProfile";
import CapabilitiesData from "../components/about/CapabilitiesData";
import CertificationBanner from "../components/about/CertificationBanner";
import FacilityGallery from "../components/about/FacilityGallery";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

export default function AboutPage() {
  useDocumentMetadata(
    "About SK Industries — Corporate Profile & Setup",
    "Learn about SK Industries' single-roof sheet metal stamping, progressive press tooling (PP engineering), and powder coating setup located in Pune, Maharashtra.",
    "PP Engineering, PP Engineering Pune, SK Industries about, Komal Pansare, Kondhwa industrial estate Pune"
  );

  return (
    <>
      {/* Premium Full-Width Hero Section */}
      <AboutHero />
      
      {/* Profile & Vital Specifications */}
      <CorporateProfile />
      
      {/* Machinery Inventory & Tolerances Tables */}
      <CapabilitiesData />
      
      {/* Certifications and Badges */}
      <CertificationBanner />
      
      {/* Facility Operations Gallery */}
      <FacilityGallery />
    </>
  );
}
