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
  const [activeStep, setActiveStep] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const lastScrollTime = useRef(0);
  const targetStepRef = useRef(0);
  const touchStartYRef = useRef(0);

  const steps = [
    {
      num: "01",
      label: "Coil Feeding",
      desc: "Raw coil stock (CRCA steel, stainless steel, or aluminum) is mounted on automatic decoilers and fed through straighteners to ensure flat sheet entry into the press line.",
      impact: "Process Impact: Eliminates coil set waviness and ensures flat strip alignment before stamping.",
      align: "right",
      start: 0,
      end: 0.2000, // frame 140 / 700
    },
    {
      num: "02",
      label: "Precision Stamping",
      desc: "Coils are stamped in progressive or compound dies. Clearances between punch and die are calibrated to 5-10% of material thickness to achieve clean shear edges.",
      impact: "Process Impact: Maintains mechanical tolerances within ± 0.05 mm and avoids springback deviations.",
      align: "left",
      start: 0.2000,
      end: 0.3500, // frame 245 / 700
    },
    {
      num: "03",
      label: "Parts Deburring",
      desc: "Stamped blanks undergo mechanical deburring and vibratory polishing to smooth sharp edges and remove microscopic slag that can compromise powder adhesion.",
      impact: "Process Impact: Guarantees safe handling edges and prevents premature paint failure on sharp corners.",
      align: "right",
      start: 0.3500,
      end: 0.4414, // frame 309 / 700
    },
    {
      num: "04",
      label: "Zinc Pre-treatment",
      desc: "Parts undergo a multi-stage chemical cleaning, acid pickling, and zinc phosphate hot-dip spray sequence to create a corrosion-resistant crystalline lock layer.",
      impact: "Process Impact: Prepares a high-adhesion chemical base that locks powder paint in place.",
      align: "left",
      start: 0.4414,
      end: 0.5900, // frame 413 / 700
    },
    {
      num: "05",
      label: "Electrostatic Spraying",
      desc: "Electrostatic spray guns apply epoxy-polyester powder coats uniformly to an 80-micron minimum dry film thickness.",
      impact: "Process Impact: Delivers uniform film thickness and prepares parts for thermal cross-linking.",
      align: "right",
      start: 0.5900,
      end: 0.7471, // frame 523 / 700
    },
    {
      num: "06",
      label: "Powder Baking & Curing",
      desc: "Coated parts are baked in industrial curing ovens at 200°C for 20 minutes to cross-link the chemical polymers.",
      impact: "Process Impact: Produces a durable weather-resistant chemical barrier resilient to rust.",
      align: "left",
      start: 0.7471,
      end: 0.8571, // frame 600 / 700
    },
    {
      num: "07",
      label: "Quality Inspection",
      desc: "Final parts are inspected using Coordinate Measuring Machines (CMM) for dimensional checks, and digital DFT gauges to verify powder coat thickness.",
      impact: "Process Impact: Verifies compliance before delivery, issuing official Material Test Certificates.",
      align: "right",
      start: 0.8571,
      end: 1.0, // frame 700 / 700 (video frozen at frame 600 for the final 100-frame scroll buffer)
    },
  ];

  // Preload frames
  useEffect(() => {
    let loadedCount = 0;
    const preloadedImages = [];

    for (let i = 1; i <= totalFrames; i++) {
      const frameNum = String((i - 1) * 2 + 1).padStart(4, "0");
      const img = new Image();
      img.src = `/images/machinery_frames/frame_${frameNum}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImagesLoaded(true);
        }
      };
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

  // Non-linear mapping from scroll progress (0-1) to video frames (1-700 virtual)
  const getProgressFrame = (progress) => {
    const keyframes = [1, 140, 245, 309, 413, 523, 600, 700];
    const position = progress * 6; // segment scale
    const idx = Math.floor(position);
    const t = position - idx;

    if (idx >= 6) {
      return keyframes[6] * (1 - (position - 6)) + keyframes[7] * (position - 6);
    }
    return keyframes[idx] * (1 - t) + keyframes[idx + 1] * t;
  };

  // Convert scroll progress (0 to 1) to step index (0 to 6)
  const getStepFromProgress = (p) => {
    if (p < 0.2000) return 0;
    if (p < 0.3500) return 1;
    if (p < 0.4414) return 2;
    if (p < 0.5900) return 3;
    if (p < 0.7471) return 4;
    if (p < 0.8571) return 5;
    return 6;
  };

  // Camera panning tracking keyframes (maps step focus to video horizontal alignments)
  // Step sides: 1:Right(0.15) -> 2:Left(0.85) -> 3:Right(0.15) -> 4:Left(0.85) -> 5:Right(0.15) -> 6:Left(0.85) -> 7:Right(0.15)
  const getProgressPan = (p) => {
    const panKeyframes = [0.15, 0.85, 0.15, 0.85, 0.15, 0.85, 0.15];
    const position = p * 6;
    const idx = Math.floor(position);
    const t = position - idx;

    if (idx >= 6) return panKeyframes[6];
    return panKeyframes[idx] * (1 - t) + panKeyframes[idx + 1] * t;
  };

  const jumpToStep = (idx) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const currentScrollTop = window.scrollY;
    const containerOffsetTop = currentScrollTop + rect.top;
    const targetOffset = containerOffsetTop + idx * window.innerHeight;
    
    // Set snap scrolling reference targets
    targetStepRef.current = idx;
    lastScrollTime.current = Date.now(); // throttle snappy auto-scrolling
    
    if (window.lenis) {
      window.lenis.scrollTo(targetOffset, { 
        duration: 1.2,
        force: true
      });
    } else {
      window.scrollTo({ 
        top: targetOffset, 
        behavior: "smooth" 
      });
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
      const height = isMobile ? window.innerHeight * 0.48 : window.innerHeight;

      if (Math.abs(canvas.width - width) > 20 || Math.abs(canvas.height - height) > 40) {
        canvas.width = width;
        canvas.height = height;
      }

      // Calculate scroll progress (0 to 1)
      const rect = container.getBoundingClientRect();
      const totalScrollHeight = rect.height - window.innerHeight;
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollHeight));

      setScrollProgress(progress);
      const stepIndex = getStepFromProgress(progress);
      setActiveStep(stepIndex);

      // Sync targetStepRef when we are not actively animating a snap scroll
      if (Date.now() - lastScrollTime.current > 1300) {
        targetStepRef.current = stepIndex;
      }

      // Update camera panning target fraction
      targetPanFractionRef.current = getProgressPan(progress);

      // Calculate target frame (capping index at 299 to freeze final frame 600 during virtual overrun)
      const targetFrameVal = getProgressFrame(progress);
      const rawFrameIndex = ((targetFrameVal - 1) / 2);
      targetFrameRef.current = Math.max(0, Math.min(totalFrames - 1, rawFrameIndex));
    };

    const renderLoop = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        requestRef.current = requestAnimationFrame(renderLoop);
        return;
      }

      // 1. Snappy LERP damping for video frame progression
      const diff = targetFrameRef.current - currentFrameRef.current;
      currentFrameRef.current += diff * 0.085;

      // 2. Snappy LERP damping for mobile horizontal panning camera track
      const panDiff = targetPanFractionRef.current - currentPanFractionRef.current;
      currentPanFractionRef.current += panDiff * 0.085;

      const roundedFrame = Math.round(currentFrameRef.current);
      const activeImg = imagesRef.current[roundedFrame];

      if (activeImg && activeImg.complete) {
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);

        const imgRatio = activeImg.width / activeImg.height;
        const canvasRatio = canvas.width / canvas.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        const width = window.innerWidth;
        const isMobile = width <= 900;
        const panFraction = isMobile ? currentPanFractionRef.current : 0.5; // Desktop stays centered (0.5)

        if (imgRatio > canvasRatio) {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) * panFraction; // Apply dynamic camera pan
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
    window.addEventListener("resize", handleScrollAndResize, { passive: true });
    
    if (imagesLoaded) {
      handleScrollAndResize();
      requestRef.current = requestAnimationFrame(renderLoop);
    }

    return () => {
      window.removeEventListener("scroll", handleScrollAndResize);
      window.removeEventListener("resize", handleScrollAndResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, [imagesLoaded]);

  // Intercept wheel/touch scroll to snap directly to steps (mobile & Android friendly)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (!window.lenis) return;
      const now = Date.now();

      const rect = container.getBoundingClientRect();
      const currentScrollTop = window.scrollY;
      const containerOffsetTop = currentScrollTop + rect.top;

      if (rect.top <= 10 && rect.bottom >= window.innerHeight - 10) {
        if (now - lastScrollTime.current < 1300) {
          e.preventDefault();
          return;
        }

        const direction = e.deltaY > 0 ? 1 : -1;
        const nextStep = targetStepRef.current + direction;

        // Snapping within the boundaries of the 7 steps
        if (nextStep >= 0 && nextStep <= 6) {
          e.preventDefault();
          lastScrollTime.current = now;
          targetStepRef.current = nextStep;
          
          const stepHeight = window.innerHeight;
          const targetOffset = containerOffsetTop + nextStep * stepHeight;
          
          window.lenis.scrollTo(targetOffset, { 
            duration: 1.2,
            force: true
          });
        }
      }
    };

    // Touch event interceptors for mobile (Android & iOS)
    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].pageY;
    };

    const handleTouchMove = (e) => {
      if (!window.lenis) return;
      const now = Date.now();

      const rect = container.getBoundingClientRect();
      const currentScrollTop = window.scrollY;
      const containerOffsetTop = currentScrollTop + rect.top;

      if (rect.top <= 10 && rect.bottom >= window.innerHeight - 10) {
        const touchY = e.touches[0].pageY;
        const diffY = touchStartYRef.current - touchY;

        if (Math.abs(diffY) > 40) { // Swipe threshold
          if (now - lastScrollTime.current < 1300) {
            e.preventDefault();
            return;
          }

          const direction = diffY > 0 ? 1 : -1; // swipe up = scroll down, swipe down = scroll up
          const nextStep = targetStepRef.current + direction;

          if (nextStep >= 0 && nextStep <= 6) {
            e.preventDefault();
            lastScrollTime.current = now;
            targetStepRef.current = nextStep;

            const stepHeight = window.innerHeight;
            const targetOffset = containerOffsetTop + nextStep * stepHeight;

            window.lenis.scrollTo(targetOffset, {
              duration: 1.2,
              force: true
            });
          }
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [scrollProgress]);

  // Compute text card opacity & transform transitions
  const getBlockStyles = (start, end) => {
    const range = end - start;
    const center = start + range / 2;
    const dist = Math.abs(scrollProgress - center);
    const maxDist = range / 2;

    const opacity = Math.max(0, 1 - dist / maxDist);
    const translateY = (1 - opacity) * 18; // smooth slide translation

    return {
      opacity,
      transform: `translateY(${translateY}px)`,
      pointerEvents: opacity > 0.1 ? "auto" : "none",
    };
  };

  return (
    <div ref={containerRef} className={styles.scrubberSection}>
      <div className={styles.stickyContainer}>
        {/* Scrubber Canvas Background */}
        <canvas ref={canvasRef} className={styles.canvas} />

        {/* Dynamic Dark Gradients to Blend Sections */}
        <div className={styles.topGradient} />
        <div className={styles.bottomGradient} />



        {/* Scroll to Explore Prompt */}
        <ScrollPrompt scrollProgress={scrollProgress} theme="dark" />

        {/* Text Overlays depending on scroll position */}
        <div className={`container ${styles.overlay}`}>
          {scrollProgress < 0.03 && (
            <div className={styles.flowPrompt}>
              <span className={styles.flowPromptLabel}>Interactive Simulation</span>
              <h4 className={styles.flowPromptTitle}>See Our Flow Simulation</h4>
              <p className={styles.flowPromptText}>
                Workflow related scroll to start. Explore our integrated metal stamping & powder coating phases.
              </p>
            </div>
          )}

          {steps.map((step, idx) => (
            <div
              key={idx}
              className={step.align === "left" ? styles.leftGroup : styles.rightGroup}
              style={getBlockStyles(step.start, step.end)}
            >
              <div className={styles.stepCard}>
                <h3 className={styles.stepLabel}>{step.label}</h3>
                <span className={styles.stepNum}>{step.num}</span>
                <p className={styles.stepDesc}>{step.desc}</p>
                <p className={styles.stepImpact}>{step.impact}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
