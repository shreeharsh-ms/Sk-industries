import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import ScrollPrompt from "../ui/ScrollPrompt";
import styles from "./FrameScrubber.module.css";

const SLIDES = [
  {
    id: 0,
    image: "/images/hero_ballast_cabinet.jpg",
    title: "Precision Sheet Metal Enclosures",
    subtitle: "Custom Stamping, Progressive Louvers & Mounting Flanges",
    desc: "Precision-engineered industrial chassis with compound progressive die stamping, integrated mounting tabs, and structural bends.",
    shortDesc: "Custom stamped industrial chassis with progressive louvers and integrated mounting flanges.",
    link: "/products/ballast-cabinets"
  },
  {
    id: 1,
    image: "/images/hero_ev_charger.jpg",
    title: "EV Charger Metal Enclosures",
    subtitle: "Outdoor-Grade Powder Coating & Thermal Ventilation",
    desc: "Heavy-duty electric vehicle charger cabinets built to withstand weather elements, salt spray testing, and thermal requirements.",
    shortDesc: "Heavy-duty outdoor EV charging enclosures with precision ventilation louvers.",
    link: "/products/ev-charger-enclosures"
  },
  {
    id: 2,
    image: "/images/hero_die_parts.jpg",
    title: "Progressive Die Tooling & Parts",
    subtitle: "In-House Tool Design, Stamping & Inspection",
    desc: "Multi-station progressive dies capable of complex high-volume blanking, piercing, forming, and coining in a single press cycle.",
    shortDesc: "Multi-station progressive die stamped precision parts engineered to tight tolerances.",
    link: "/services/custom-die-press-electrical-parts"
  },
  {
    id: 3,
    image: "/images/hero_shutter_lock.jpg",
    title: "Rolling Shutter Locks & Hardware",
    subtitle: "High-Strength Galvanized Steel Security Hardware",
    desc: "Commercial-grade shutter lock mechanisms engineered from high-tensile steel with corrosion-resistant protective coatings.",
    shortDesc: "High-strength galvanized steel rolling shutter lock components and assemblies.",
    link: "/products/rolling-shutter-locks"
  },
];

export default function FrameScrubber() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.container} aria-label="Hero Showcase">
      {/* Background Product Images with Smooth Auto-Slide */}
      <div className={styles.videoWrapper}>
        {SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`${styles.imageSlide} ${idx === currentSlide ? styles.imageSlideActive : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={slide.title}
          />
        ))}
        {/* Focused radial backdrop behind text on the left, keeping product clear */}
        <div className={styles.backdropOverlay} />
      </div>

      {/* Slide Navigation Dots */}
      <div className={styles.indicators}>
        {SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            className={`${styles.dot} ${idx === currentSlide ? styles.dotActive : ""}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Ambient bottom transition to next section */}
      <div className={styles.gradient} />

      {/* Text Overlays - auto transitions with currentSlide */}
      <div className={styles.overlay}>
        {SLIDES.map((slide, idx) => {
          const isActive = currentSlide === idx;
          return (
            <div
              key={slide.id}
              className={`${styles.textGroup} ${isActive ? styles.textGroupActive : ""}`}
              aria-hidden={!isActive}
            >
              <h1 className={styles.title}>{slide.title}</h1>
              <h2 className={styles.heroSubTitle}>{slide.subtitle}</h2>
              <p className={styles.desc}>
                <span className={styles.desktopDesc}>{slide.desc}</span>
                <span className={styles.mobileDesc}>{slide.shortDesc}</span>
              </p>
              <div className={styles.ctaWrapper}>
                <Button
                  variant="primary"
                  size="lg"
                  to="/rfq-portal"
                  className={styles.primaryHeroBtn}
                >
                  Initiate Technical RFQ
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  to={slide.link}
                  className={styles.secondaryHeroBtn}
                >
                  View Product Line
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Gentle Scroll Hint */}
      <ScrollPrompt theme="light" />
    </section>
  );
}
