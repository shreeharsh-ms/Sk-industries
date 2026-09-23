import React, { useRef, useEffect, useState } from "react";
import ScrollPrompt from "../ui/ScrollPrompt";
import styles from "./WorkflowScrubber.module.css";

export default function WorkflowScrubber() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const requestRef = useRef();

  const totalFrames = 300; // Preload 300 frames (every 2nd frame of the 600-frame video)
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);

  const currentPanFractionRef = useRef(0.5);
  const targetPanFractionRef = useRef(0.5);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

  const steps = [
    {
      num: "01",
      label: "Coil Feeding",
      desc: "Raw coil stock (CRCA steel, stainless steel, or aluminum) is mounted on automatic decoilers and fed through straighteners to ensure flat sheet entry into the press line.",
      impact: "Process Impact: Eliminates coil set waviness and ensures flat strip alignment before stamping.",
      align: "right",
      start: 0,
      end: 0.16,
    },
    {
      num: "02",
      label: "Precision Stamping",
      desc: "Coils are stamped in progressive or compound dies. Clearances between punch and die are calibrated to 5-10% of material thickness to achieve clean shear edges.",
      impact: "Process Impact: Maintains uniform mechanical consistency and prevents springback deviations.",
      align: "left",
      start: 0.14,
      end: 0.30,
    },
    {
      num: "03",
      label: "Parts Deburring",
      desc: "Stamped blanks undergo mechanical deburring and vibratory polishing to smooth sharp edges and remove microscopic slag that can compromise powder adhesion.",
      impact: "Process Impact: Guarantees safe handling edges and prevents premature paint failure on sharp corners.",
      align: "right",
      start: 0.28,
      end: 0.44,
    },
    {
      num: "04",
      label: "Zinc Pre-treatment",
      desc: "Parts undergo a multi-stage chemical cleaning, acid pickling, and zinc phosphate hot-dip spray sequence to create a corrosion-resistant crystalline lock layer.",
      impact: "Process Impact: Prepares a high-adhesion chemical base that locks powder paint in place.",
      align: "left",
      start: 0.42,
      end: 0.58,
    },
    {
      num: "05",
      label: "Electrostatic Spraying",
      desc: "Electrostatic spray guns apply epoxy-polyester powder coats uniformly to an 80-micron minimum dry film thickness.",
      impact: "Process Impact: Delivers uniform film thickness and prepares parts for thermal cross-linking.",
      align: "right",
      start: 0.56,
      end: 0.72,
    },
    {
      num: "06",
      label: "Powder Baking & Curing",
      desc: "Coated parts are baked in industrial curing ovens at 200°C for 20 minutes to cross-link the chemical polymers.",
      impact: "Process Impact: Produces a durable weather-resistant chemical barrier resilient to rust.",
      align: "left",
      start: 0.70,
      end: 0.86,
    },
    {
      num: "07",
      label: "Quality Inspection",
      desc: "Final parts are inspected using Coordinate Measuring Machines (CMM) for dimensional checks, and digital DFT gauges to verify powder coat thickness.",
      impact: "Process Impact: Verifies compliance before delivery, issuing official Material Test Certificates.",
      align: "right",
      start: 0.84,
      end: 1.0,
    },
  ];

  // Preload frames with immediate 1st frame paint and error fallback
  useEffect(() => {
    let loadedCount = 0;
    const preloadedImages = [];

    const handleSingleLoad = (index) => {
      loadedCount++;
      if (index === 0) {
        setFirstFrameLoaded(true);
      }
      if (loadedCount === totalFrames) {
        setImagesLoaded(true);
      }
    };

    for (let i = 1; i <= totalFrames; i++) {
      const frameNum = String((i - 1) * 2 + 1).padStart(4, "0");
      const img = new Image();
      img.src = `/images/machinery_frames/frame_${frameNum}.jpg`;
      img.onload = () => handleSingleLoad(i - 1);
      img.onerror = () => handleSingleLoad(i - 1);
      preloadedImages.push(img);
    }
    imagesRef.current = preloadedImages;
  }, []);

  // Recalculate Lenis boundaries when frames are fully loaded
  useEffect(() => {
    if (imagesLoaded) {
      setTimeout(() => {
        window.lenis?.resize();
      }, 150);
    }
  }, [imagesLoaded]);

  // Non-linear mapping from scroll progress (0-1) to video frames (1-600)
  const getProgressFrame = (progress) => {
    const keyframes = [1, 140, 245, 309, 413, 523, 600, 600];
    const position = progress * 6; // segment scale
    const idx = Math.min(6, Math.floor(position));
    const t = position - idx;

    if (idx >= 6) {
      return keyframes[6];
    }
    return keyframes[idx] * (1 - t) + keyframes[idx + 1] * t;
  };

  // Camera panning tracking keyframes (maps step focus to video horizontal alignments)
  const getProgressPan = (p) => {
    const panKeyframes = [0.15, 0.85, 0.15, 0.85, 0.15, 0.85, 0.15];
    const position = p * 6;
    const idx = Math.min(6, Math.floor(position));
    const t = position - idx;

    if (idx >= 6) return panKeyframes[6];
    return panKeyframes[idx] * (1 - t) + panKeyframes[idx + 1] * t;
  };

  // Scroll to step helper (direct jump / navigation)
  const scrollToStep = (index) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const totalScrollHeight = rect.height - window.innerHeight;
    const targetScroll = containerTop + (index / 6) * totalScrollHeight;

    if (window.lenis) {
      window.lenis.scrollTo(targetScroll, { duration: 1.0 });
    } else {
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  // Handle scroll tracking & LERP canvas rendering
  useEffect(() => {
    const handleScrollAndResize = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) return;

      const width = window.innerWidth;
      const isMobile = width <= 900;
      const height = isMobile ? window.innerHeight * 0.5 : window.innerHeight;

      if (Math.abs(canvas.width - width) > 10 || Math.abs(canvas.height - height) > 20) {
        canvas.width = width;
        canvas.height = height;
      }

      // Calculate scroll progress (0 to 1)
      const rect = container.getBoundingClientRect();
      const totalScrollHeight = rect.height - window.innerHeight;
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollHeight));

      setScrollProgress(progress);

      // Update camera panning target fraction
      targetPanFractionRef.current = getProgressPan(progress);

      // Calculate target frame
      const targetFrameVal = getProgressFrame(progress);
      const rawFrameIndex = Math.max(0, Math.min(totalFrames - 1, (targetFrameVal - 1) / 2));
      targetFrameRef.current = rawFrameIndex;
    };

    const renderLoop = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        requestRef.current = requestAnimationFrame(renderLoop);
        return;
      }

      // 1. LERP damping for video frame progression
      const diff = targetFrameRef.current - currentFrameRef.current;
      currentFrameRef.current += diff * 0.09;

      // 2. LERP damping for horizontal camera panning track
      const panDiff = targetPanFractionRef.current - currentPanFractionRef.current;
      currentPanFractionRef.current += panDiff * 0.09;

      const roundedFrame = Math.max(0, Math.min(totalFrames - 1, Math.round(currentFrameRef.current)));
      const activeImg = imagesRef.current[roundedFrame] || imagesRef.current[0];

      if (activeImg && activeImg.complete && activeImg.naturalWidth > 0) {
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);

        const imgRatio = activeImg.width / activeImg.height;
        const canvasRatio = canvas.width / canvas.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        const width = window.innerWidth;
        const isMobile = width <= 900;
        const panFraction = isMobile ? currentPanFractionRef.current : 0.5;

        if (imgRatio > canvasRatio) {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) * panFraction;
          offsetY = 0;
        } else {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        }

        context.drawImage(activeImg, offsetX, offsetY, drawWidth, drawHeight);
      }

      requestRef.current = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("scroll", handleScrollAndResize, { passive: true });
    window.addEventListener("resize", handleScrollAndResize);

    handleScrollAndResize();
    requestRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("scroll", handleScrollAndResize);
      window.removeEventListener("resize", handleScrollAndResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, [firstFrameLoaded]);

  // Compute text card opacity & transform with a solid middle reading plateau
  const getBlockStyles = (start, end) => {
    const range = end - start;
    const margin = range * 0.22; // 22% transition zone at each end
    let opacity = 0;

    if (scrollProgress >= start && scrollProgress <= end) {
      if (scrollProgress < start + margin) {
        opacity = (scrollProgress - start) / margin;
      } else if (scrollProgress > end - margin) {
        opacity = (end - scrollProgress) / margin;
      } else {
        opacity = 1; // Solid reading plateau
      }
    }

    const translateY = (1 - opacity) * 16;

    return {
      opacity,
      "--slide-y": `${translateY}px`,
      pointerEvents: opacity > 0.2 ? "auto" : "none",
    };
  };

  const activeStepIdx = Math.min(6, Math.max(0, Math.floor(scrollProgress * 7)));

  return (
    <div ref={containerRef} className={styles.scrubberSection}>
      <div className={styles.stickyContainer}>
        {/* Scrubber Canvas Background */}
        <canvas ref={canvasRef} className={styles.canvas} />

        {/* Ambient Gradients for Smooth Transitions */}
        <div className={styles.topGradient} />
        <div className={styles.bottomGradient} />

        {/* Interactive Step Navigator */}
        <nav className={styles.stepNav} aria-label="Process Steps">
          {steps.map((step, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToStep(idx)}
              className={`${styles.stepNavBtn} ${activeStepIdx === idx ? styles.stepNavBtnActive : ""}`}
              title={`Jump to Step ${step.num}: ${step.label}`}
            >
              <span className={styles.stepNavNum}>{step.num}</span>
              <span className={styles.stepNavLabel}>{step.label}</span>
            </button>
          ))}
        </nav>

        {/* Scroll to Explore Prompt */}
        <ScrollPrompt scrollProgress={scrollProgress} theme="dark" />

        {/* Text Overlays depending on scroll position */}
        <div className={`container ${styles.overlay}`}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={step.align === "left" ? styles.leftGroup : styles.rightGroup}
              style={getBlockStyles(step.start, step.end)}
            >
              <div className={styles.stepCard}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <h3 className={styles.stepLabel}>{step.label}</h3>
                </div>
                <p className={styles.stepDesc}>{step.desc}</p>
                <div className={styles.stepImpactBadge}>
                  <p className={styles.stepImpact}>{step.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
