import React, { useRef, useEffect, useState } from "react";
import Button from "../ui/Button";
import ScrollPrompt from "../ui/ScrollPrompt";
import styles from "./FrameScrubber.module.css";

const PHASES = [
  {
    id: 0,
    phaseNum: "01",
    tag: "Stamping & Forming",
    title: "Precision Sheet Metal Enclosures",
    subtitle: "Custom Stamping, Progressive Louvers & Mounting Flanges",
    desc: "Precision-engineered industrial chassis with compound progressive die stamping, integrated mounting tabs, and structural bends.",
    shortDesc: "Custom stamped industrial chassis with progressive louvers and integrated mounting flanges.",
  },
  {
    id: 1,
    phaseNum: "02",
    tag: "Airflow & Rigidity",
    title: "Louvered Thermal Architecture",
    subtitle: "Progressive Die Louvers & Stiffening Ribs",
    desc: "Embossed front stiffening ribs and stamped airflow louvers engineered for optimal thermal dissipation and high mechanical rigidity.",
    shortDesc: "Stamped airflow louvers and embossed front ribs engineered for thermal heat dissipation.",
  },
  {
    id: 2,
    phaseNum: "03",
    tag: "Finish & Inspection",
    title: "Single-Roof Integrated Production",
    subtitle: "Electrostatic Powder Coating & 100% FAI Verified",
    desc: "Finished in electrostatic powder coatings with 100% first-article inspection under a single integrated facility in Pune.",
    shortDesc: "Finished in protective electrostatic powder coatings with 100% first-article inspection in Pune.",
  },
];

export default function FrameScrubber() {
  const videoRef = useRef(null);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Trigger autoplay safely
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    }

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const current = video.currentTime;
      const duration = video.duration;
      const prog = Math.max(0, Math.min(1, current / duration));

      if (prog < 0.33) {
        setActivePhase(0);
      } else if (prog < 0.66) {
        setActivePhase(1);
      } else {
        setActivePhase(2);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <section className={styles.container} aria-label="Hero Showcase">
      {/* Background Video */}
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          src="/VIDS/homePage.mp4"
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/ballast_cabinet_finished.png"
        />
        {/* Soft radial backdrop behind text on the left, keeping product clear */}
        <div className={styles.backdropOverlay} />
      </div>

      {/* Ambient bottom transition to next section */}
      <div className={styles.gradient} />

      {/* Text Overlays - auto transitions with activePhase */}
      <div className={styles.overlay}>
        {PHASES.map((phase, idx) => {
          const isActive = activePhase === idx;
          return (
            <div
              key={phase.id}
              className={`${styles.textGroup} ${isActive ? styles.textGroupActive : ""}`}
              aria-hidden={!isActive}
            >
              <div className={styles.phaseBadge}>
                <span className={styles.pulseDot} />
                <span>Phase {phase.phaseNum} • {phase.tag}</span>
              </div>
              <h1 className={styles.title}>{phase.title}</h1>
              <h2 className={styles.heroSubTitle}>{phase.subtitle}</h2>
              <p className={styles.desc}>
                <span className={styles.desktopDesc}>{phase.desc}</span>
                <span className={styles.mobileDesc}>{phase.shortDesc}</span>
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
                  to="/single-roof-workflow"
                  className={styles.secondaryHeroBtn}
                >
                  Explore Capabilities
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
