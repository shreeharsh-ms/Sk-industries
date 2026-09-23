import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./WorkflowSliderHero.module.css";

const steps = [
  {
    step: "01",
    title: "Power press machine process",
    desc: "Single-crank precision press line (5T to 75T capacity) and 8 active progressive stamping lines for high-speed blanking.",
    image: "/images/wf_power_press_process.jpg"
  },
  {
    step: "02",
    title: "Seven tank process",
    desc: "Seven-tank chemical immersion system for surface degreasing, acid pickling, and corrosion-resistant zinc phosphating.",
    image: "/images/wf_seven_tank_process.jpg"
  },
  {
    step: "03",
    title: "Statfield gun",
    desc: "Electrostatic Statfield powder coating booth applying uniform 80-120 μm coatings with 200°C conveyorized curing ovens.",
    image: "/images/wf_statfield_powder_gun.jpg"
  },
  {
    step: "04",
    title: "Policy of company",
    desc: "Single-roof manufacturing policy combining press tooling and powder coating with strict first-article quality audits.",
    image: "/images/wf_policy_of_company.jpg"
  }
];

export default function WorkflowSliderHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  }, []);

  // Auto sliding every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [nextSlide]);

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
              <span className={styles.tabTitle}>{st.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Edge-to-Edge Full Width Sliding Image Viewport */}
      <div className={styles.sliderWindow}>
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
                    <span className={styles.stepBadge}>STEP {st.step} / 04</span>
                    <h2 className={styles.slideTitle}>{st.title}</h2>
                    <p className={styles.slideDesc}>{st.desc}</p>
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
            />
          ))}
        </div>
      </div>

    </section>
  );
}
