import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./HeroModal.module.css";

export default function HeroModal({ onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/rolling_shutter_lock_schematic.png",
      tag: "Precision Stamping",
      overlayTitle: "Single-Roof Execution",
      eyebrow: "Direct-to-Factory Sourcing",
      title: "Elevate Your Component Quality",
      text: "By executing sheet metal blanking and powder spray lines under a single roof, we offer procurement managers clear accountability and certified quality results.",
    },
    {
      image: "/images/progressive_die_parts.png",
      tag: "Cost Efficiency",
      overlayTitle: "Direct Sourcing Bypass",
      eyebrow: "Logistics Optimization",
      title: "Cut Sourcing Logistic Overhead",
      text: "Consolidate tool engineering and surface coating under one manufacturing facility to bypass logistics damage risks and intermediate middlemen markups.",
    },
    {
      image: "/images/cmm_metrology_room.png",
      tag: "Compliance QA",
      overlayTitle: "Unified Quality Control",
      eyebrow: "Zero Divided Liability",
      title: "Certified First Article Audits",
      text: "Our in-house metrology lab checks first-article tolerances (within ±0.05mm) and verifies salt spray durability up to 500 hours to secure product integrity.",
    },
  ];

  // Auto-play modal carousel slides every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className={styles.backdrop}>
      <div className={styles.modalCard}>
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose} title="Close Modal">
          <X size={20} />
        </button>

        {/* 2-Column Grid Carousel Layout */}
        <div className={styles.modalGrid}>
          {/* Left Column: Image with gradient overlay */}
          <div className={styles.imageCol}>
            <img 
              src={slide.image} 
              alt={slide.title} 
              className={styles.factoryImage} 
            />
            <div className={styles.gradientOverlay} />
            <div className={styles.overlayText}>
              <span className={styles.overlayTag}>{slide.tag}</span>
              <h5 className={styles.overlayTitle}>{slide.overlayTitle}</h5>
            </div>

            {/* In-image slider arrows */}
            <div className={styles.imageNavGroup}>
              <button className={styles.imageNavBtn} onClick={handlePrev} title="Previous slide">
                <ChevronLeft size={16} />
              </button>
              <button className={styles.imageNavBtn} onClick={handleNext} title="Next slide">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Text & RFQ Call to Action */}
          <div className={styles.infoCol}>
            <span className={styles.eyebrow}>{slide.eyebrow}</span>
            <h3 className={styles.title}>{slide.title}</h3>
            <p className={styles.text}>{slide.text}</p>

            <div className={styles.ctaRow}>
              <Link to="/rfq-portal" className={styles.rfqBtn} onClick={onClose}>
                <span>Initiate Technical RFQ</span>
                <ArrowRight size={16} />
              </Link>
              <button className={styles.dismissBtn} onClick={onClose}>
                Dismiss
              </button>
            </div>

            {/* Bottom dots indicator */}
            <div className={styles.dotsRow}>
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.dot} ${currentSlide === idx ? styles.activeDot : ""}`}
                  onClick={() => setCurrentSlide(idx)}
                  title={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
