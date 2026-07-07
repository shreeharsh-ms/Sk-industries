import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, MessageSquare, ArrowRight, BookOpen, Compass, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ExplorePopup.module.css";

export default function ExplorePopup() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Products Catalog",
      text: "Browse our high-tolerance metal stamping and coating product lines.",
      image: "/images/progressive_die_parts.png",
      action: (
        <Link to="/products/rolling-shutter-locks" className={styles.actionBtn}>
          <span>View Catalog</span>
          <ArrowRight size={14} />
        </Link>
      ),
    },
    {
      title: "About Our Setup",
      text: "Learn how we stamps & coat under a unified single-roof footprint.",
      image: "/images/cmm_metrology_room.png",
      action: (
        <Link to="/about-us" className={styles.actionBtn}>
          <BookOpen size={14} />
          <span>Read About Us</span>
        </Link>
      ),
    },
    {
      title: "Get in Touch",
      text: "Contact our engineers directly on WhatsApp to request sample runs.",
      image: "/images/ev_charger_enclosure_finished.png",
      action: (
        <a 
          href="https://wa.me/917875138713" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.actionBtn}
          style={{ backgroundColor: "#25D366", color: "#ffffff", borderColor: "#25D366" }}
        >
          <MessageSquare size={14} fill="currentColor" />
          <span>WhatsApp Chat</span>
        </a>
      ),
    },
  ];

  // Auto-play carousel every 6 seconds
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!isVisible) return null;

  const slide = slides[currentSlide];

  return (
    <div className={styles.popupCard}>
      {/* Close button */}
      <button className={styles.closeBtn} onClick={() => setIsVisible(false)} title="Dismiss">
        <X size={16} />
      </button>

      {/* Header Info */}
      <div className={styles.header}>
        <Compass className={styles.compassIcon} size={16} />
        <span className={styles.eyebrow}>Explore SK Industries</span>
      </div>

      {/* Slide Layout: Left Image, Right Text */}
      <div className={styles.slideGrid}>
        
        {/* Left Column: Image Wrapper */}
        <div className={styles.imageCol}>
          <img src={slide.image} alt={slide.title} className={styles.slideImage} />
        </div>

        {/* Right Column: Text & Action Button */}
        <div className={styles.textCol}>
          <h4 className={styles.slideTitle}>{slide.title}</h4>
          <p className={styles.slideText}>{slide.text}</p>
          <div className={styles.btnWrapper}>
            {slide.action}
          </div>
        </div>

      </div>

      {/* Footer Controls: Dots indicator + Nav arrows */}
      <div className={styles.controlsRow}>
        <div className={styles.dotsGroup}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${currentSlide === idx ? styles.activeDot : ""}`}
              onClick={() => setCurrentSlide(idx)}
              title={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className={styles.navGroup}>
          <button className={styles.navArrow} onClick={handlePrev} title="Previous slide">
            <ChevronLeft size={16} />
          </button>
          <button className={styles.navArrow} onClick={handleNext} title="Next slide">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

    </div>
  );
}
