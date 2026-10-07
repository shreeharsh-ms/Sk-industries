import React from "react";
import FrameScrubber from "../components/home/FrameScrubber";
import ValueProps from "../components/home/ValueProps";
import CoreCapabilities from "../components/home/CoreCapabilities";
import WorkflowTeaser from "../components/home/WorkflowTeaser";
import VideoSlider from "../components/home/VideoSlider";
import WorkmanshipBanner from "../components/home/WorkmanshipBanner";
import Testimonials from "../components/home/Testimonials";
import Faq from "../components/home/Faq";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

export default function HomePage() {
  useDocumentMetadata(
    "PP Engineering & Precision Metal Stamping",
    "SK Industries Pune (PP Engineering) delivers high-precision sheet metal stamping, progressive press tooling, and automatic powder coating from our integrated facility.",
    "PP Engineering, PP Engineering Pune, SK Industries, metal stamping Pune, powder coating Pune, progressive die pressings"
  );

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <FrameScrubber />
      <CoreCapabilities />
      <VideoSlider />
      <WorkflowTeaser />
      <ValueProps />
      <Testimonials />
      <WorkmanshipBanner />
      <Faq />
    </main>
  );
}
