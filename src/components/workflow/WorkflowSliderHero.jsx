import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./WorkflowSliderHero.module.css";

const steps = [
  {
    step: "01",
    title: "Power press machine process",
    shortTitle: "Power Press",
    desc: "Single-crank precision press line (5T to 75T capacity) and 8 active progressive stamping lines for high-speed blanking.",
    shortDesc: "Single-crank 5T–75T precision stamping lines with progressive blanking dies.",
    image: "/images/wf_power_press_process.jpg"
  },
  {
    step: "02",
    title: "Seven tank process",
    shortTitle: "Seven Tank",
    desc: "Seven-tank chemical immersion system for surface degreasing, acid pickling, and corrosion-resistant zinc phosphating.",
    shortDesc: "Chemical immersion line for degreasing, acid pickling, and zinc phosphating.",
    image: "/images/wf_seven_tank_process.jpg"
  },
  {
    step: "03",
    title: "Statfield gun",
    shortTitle: "Statfield Gun",
    desc: "Electrostatic Statfield powder coating booth applying uniform 80-120 μm coatings with 200°C conveyorized curing ovens.",
    shortDesc: "Electrostatic powder coating booth applying uniform 80–120 μm protective finish.",
    image: "/images/wf_statfield_powder_gun.jpg"
  },
  {
    step: "04",
    title: "Policy of company",
    shortTitle: "Quality Policy",
    desc: "Single-roof manufacturing policy combining press tooling and powder coating with strict first-article quality audits.",
    shortDesc: "Single-roof manufacturing policy with strict first-article quality inspection.",
    image: "/images/wf_policy_of_company.jpg"
  }
];

export default function WorkflowSliderHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  }, []);

  // Auto sliding every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Touch swipe support for mobile
  const minSwipeDistance = 45;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  return (
    <section className={styles.sliderSection} aria-label="Workflow Steps Slider">
      
      {/* Full-width container matching navbar padding */}
      <div className={styles.headerWrapper}>
        <div className={styles.stepsNav}>
          {steps.map((st, idx) => (
            <button
              key={st.step}
              className={`${styles.stepTab} ${idx === activeIndex ? styles.activeTab : ""}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to step ${st.step}: ${st.title}`}
            >
              <span className={styles.tabNum}>{st.step}</span>
              <span className={styles.tabTitle}>
                <span className={styles.desktopTitle}>{st.title}</span>
                <span className={styles.mobileTitle}>{st.shortTitle}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Edge-to-Edge Full Width Sliding Image Viewport */}
      <div 
        className={styles.sliderWindow}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div 
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {steps.map((st, idx) => (
            <div key={st.step} className={styles.slide}>
              <div className={styles.slideInner}>
                <img 
                  src={st.image} 
                  alt={st.title} 
                  className={styles.slideImage} 
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                
                {/* Subtle dark gradient overlay for text readability */}
                <div className={styles.imageGradient} />

                {/* Caption Overlay */}
                <div className={styles.captionOverlay}>
                  <div className={styles.captionContent}>
                    <span className={styles.stepBadge}>
                      <span className={styles.badgeDot} />
                      STEP {st.step} / 04
                    </span>
                    <h2 className={styles.slideTitle}>{st.title}</h2>
                    <p className={styles.slideDesc}>
                      <span className={styles.desktopDesc}>{st.desc}</span>
                      <span className={styles.mobileDesc}>{st.shortDesc}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow Button */}
        <button 
          className={`${styles.arrowBtn} ${styles.prevBtn}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={26} />
        </button>

        {/* Right Arrow Button */}
        <button 
          className={`${styles.arrowBtn} ${styles.nextBtn}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={26} />
        </button>

        {/* Slide Indicator Dots */}
        <div className={styles.dotsRow}>
          {steps.map((st, idx) => (
            <button
              key={st.step}
              className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ""}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
            >
              <span className="sr-only">Slide {idx + 1}</span>
            </button>
          ))}
        </div>
      </div>

    </section>
  );
}
