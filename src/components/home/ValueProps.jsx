import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import AnimatedCounter from "../ui/AnimatedCounter";
import { Coins, Clock, ShieldCheck } from "lucide-react";
import styles from "./ValueProps.module.css";

export default function ValueProps() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  const steps = [
    {
      icon: <ShieldCheck size={24} />,
      badge: "Single-Roof Integration",
      title: "Stamping & Coating QA",
      subtitle: (
        <span>
          Unified Quality Assurance
        </span>
      ),
      desc: "Our single-roof facility eliminates multi-vendor transport damage risk, streamlines material handling, and guarantees end-to-end traceability for automotive and industrial stamping assemblies.",
      image: "/images/metal_stamping_factory.png",
      alt: "Unified Stamping & Coating Operations",
      cta: (
        <Button variant="primary" to="/rfq-portal">
          Configure Your Production Run
        </Button>
      ),
    },
    {
      icon: <Coins size={24} />,
      badge: "Direct Sourcing Bypass",
      title: "Sourcing Cost Reduction",
      subtitle: (
        <span>
          Up to <AnimatedCounter value="15%" /> Reduction
        </span>
      ),
      desc: "Optimized sheet nesting layouts, progressive tool consolidation, and direct steel mills sourcing bypasses middlemen markup overheads.",
      image: "/images/progressive_die_parts.png",
      alt: "Progressive die press components",
      cta: (
        <Button variant="ghost" to="/about-us">
          Explore Savings →
        </Button>
      ),
    },
    {
      icon: <Clock size={24} />,
      badge: "In-line Operations Feed",
      title: "Lead Time Compression",
      subtitle: (
        <span>
          <AnimatedCounter value="50%" /> Compression
        </span>
      ),
      desc: "Instant component transition from hydraulic stamping press beds directly into conveyorized zinc chemical pretreatment and powder lines.",
      image: "/images/powder_coating_line.png",
      alt: "Powder coating line conveyor",
      cta: (
        <Button variant="ghost" to="/single-roof-workflow">
          Explore Workflow →
        </Button>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // scrollTop is how much of the section has scrolled past the top of the viewport
      const scrollTop = -rect.top;
      const totalScrollable = sectionHeight - windowHeight;

      if (totalScrollable <= 0) return;

      let progress = scrollTop / totalScrollable;
      // Clamp progress between 0 and 1
      progress = Math.max(0, Math.min(1, progress));

      // Map progress to steps
      let stepIndex = 0;
      if (progress < 0.35) {
        stepIndex = 0;
      } else if (progress < 0.7) {
        stepIndex = 1;
      } else {
        stepIndex = 2;
      }

      setActiveStep(stepIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className={styles.pinSection}>
      <div className={styles.stickyContainer}>
        <div className={`container ${styles.grid}`}>
          
          {/* Left Column: Sticky Image Container */}
          <div className={styles.imageCol}>
            <div className={styles.imageBox}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={steps[activeStep].image}
                  alt={steps[activeStep].alt}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={styles.activeImage}
                />
              </AnimatePresence>
              
              {/* Floating indicator badge */}
              <div className={styles.floatingBadge}>
                {steps[activeStep].badge}
              </div>
            </div>
          </div>

          {/* Right Column: Highlight text blocks */}
          <div className={styles.textCol}>
            <div className={styles.headerArea}>
              <span className={styles.sectionEyebrow}>Core Values</span>
              <h2 className={styles.sectionHeading}>Why Choose Us</h2>
            </div>

            <div className={styles.stepsStack}>
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={idx}
                    className={`${styles.stepBlock} ${isActive ? styles.activeBlock : ""}`}
                  >
                    <div className={styles.blockHeader}>
                      <div className={`${styles.iconCircle} ${isActive ? styles.activeIconCircle : ""}`}>
                        {step.icon}
                      </div>
                      <div>
                        <span className={styles.stepSubtitle}>{step.subtitle}</span>
                        <h3 className={styles.stepTitle}>{step.title}</h3>
                      </div>
                    </div>

                    {/* Transition details inside active block */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? 12 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className={styles.stepDesc}>{step.desc}</p>
                      
                      {/* Detailed Specs for Step 0 (QA) */}
                      {idx === 0 && (
                        <div className={styles.specGrid}>
                          <div className={styles.specItem}>
                            <span className={styles.specValue}>
                              <AnimatedCounter value="± 0.05 mm" />
                            </span>
                            <span className={styles.specLabel}>Coining Tolerance</span>
                          </div>
                          <div className={styles.specItem}>
                            <span className={styles.specValue}>
                              <AnimatedCounter value="80 Micron" />
                            </span>
                            <span className={styles.specLabel}>Minimum DFT Coating</span>
                          </div>
                          <div className={styles.specItem}>
                            <span className={styles.specValue}>
                              <AnimatedCounter value="500 Hours" />
                            </span>
                            <span className={styles.specLabel}>Salt Spray Rating</span>
                          </div>
                          <div className={styles.specItem}>
                            <span className={styles.specValue}>
                              <AnimatedCounter value="Up to 200T" />
                            </span>
                            <span className={styles.specLabel}>Press Line capacity</span>
                          </div>
                        </div>
                      )}

                      <div className={styles.stepCta}>
                        {step.cta}
                      </div>
                    </motion.div>

                    {idx < steps.length - 1 && (
                      <div className={styles.divider} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
