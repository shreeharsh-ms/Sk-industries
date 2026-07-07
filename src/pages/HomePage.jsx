import React, { useState, useEffect } from "react";
import FrameScrubber from "../components/home/FrameScrubber";
import ValueProps from "../components/home/ValueProps";
import CoreCapabilities from "../components/home/CoreCapabilities";
import WorkflowTeaser from "../components/home/WorkflowTeaser";
import WorkmanshipBanner from "../components/home/WorkmanshipBanner";
import Testimonials from "../components/home/Testimonials";
import Faq from "../components/home/Faq";
import ExplorePopup from "../components/home/ExplorePopup";
import HeroModal from "../components/home/HeroModal";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

export default function HomePage() {
  useDocumentMetadata(
    "Precision Metal Stamping & Powder Coating",
    "SK Industries delivers premium precision-stamped metal parts and epoxy-polyester powder coating finishes from our integrated single-roof facility in Pune, Maharashtra."
  );

  const [showModal, setShowModal] = useState(false);
  const [hasModalShown, setHasModalShown] = useState(false);

  useEffect(() => {
    // Only show center modal once per session
    const isShown = sessionStorage.getItem("hero_modal_shown");
    if (isShown) {
      setHasModalShown(true);
    }

    const handleScroll = () => {
      // Trigger modal when scrolling past the hero scrubber animation (roughly 0.8 * window height)
      if (window.scrollY > window.innerHeight * 0.8 && !hasModalShown && !isShown) {
        setShowModal(true);
        setHasModalShown(true);
        sessionStorage.setItem("hero_modal_shown", "true");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasModalShown]);

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <FrameScrubber />
      <CoreCapabilities />
      <ValueProps />
      <WorkflowTeaser />
      <Testimonials />
      <WorkmanshipBanner />
      <Faq />

      {/* Floating Onboarding Widget (Bottom-Left) */}
      <ExplorePopup />

      {/* Scroll-Triggered Professional Center Modal */}
      {showModal && <HeroModal onClose={() => setShowModal(false)} />}
    </main>
  );
}
