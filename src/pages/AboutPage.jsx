import React from "react";
import AboutHero from "../components/about/AboutHero";
import CorporateProfile from "../components/about/CorporateProfile";
import CapabilitiesData from "../components/about/CapabilitiesData";
import CertificationBanner from "../components/about/CertificationBanner";
import FacilityGallery from "../components/about/FacilityGallery";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

export default function AboutPage() {
  useDocumentMetadata(
    "Corporate Profile & Setup",
    "Learn about SK Industries' single-roof sheet metal stamping and powder coating setup located in Pune, Maharashtra, led by proprietor Komal Pansare."
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
