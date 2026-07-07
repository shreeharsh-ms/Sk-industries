import React, { useRef, useEffect, useState } from "react";
import Button from "../ui/Button";
import ScrollPrompt from "../ui/ScrollPrompt";
import styles from "./FrameScrubber.module.css";

export default function FrameScrubber() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const requestRef = useRef();

  const totalFrames = 300; // Preload 300 frames (every 2nd frame)
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload frames
  useEffect(() => {
    let loadedCount = 0;
    const preloadedImages = [];

    for (let i = 1; i <= totalFrames; i++) {
      const frameNum = String((i - 1) * 2 + 1).padStart(4, "0");
      const img = new Image();
      img.src = `/images/enclosure_assembly_frames/frame_${frameNum}.jpg`;
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

  // Force Lenis resize when images are fully loaded and page height locks
  useEffect(() => {
    if (imagesLoaded) {
      setTimeout(() => {
        window.lenis?.resize();
      }, 150);
    }
  }, [imagesLoaded]);

  // Handle scroll, resize & smooth LERP render loop
  useEffect(() => {
    const handleScrollAndResize = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) return;

      // Handle canvas resolution resizing
      const width = window.innerWidth;
      const height = window.innerHeight;
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

      // Set target frame index with fractional precision
      targetFrameRef.current = progress * (totalFrames - 1);
    };

    const renderLoop = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        requestRef.current = requestAnimationFrame(renderLoop);
        return;
      }

      // LERP (Inertia damping) for frame scrubbing transitions
      const diff = targetFrameRef.current - currentFrameRef.current;
      currentFrameRef.current += diff * 0.085; // Snappy, smooth frame interpolation

      const roundedFrame = Math.round(currentFrameRef.current);
      const activeImg = imagesRef.current[roundedFrame];

      if (activeImg && activeImg.complete) {
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);

        // object-fit cover math
        const imgRatio = activeImg.width / activeImg.height;
        const canvasRatio = canvas.width / canvas.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgRatio > canvasRatio) {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
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

  // Helper to calculate text block opacity & transform with a solid middle reading plateau
  const getBlockStyles = (start, end) => {
    const margin = 0.08; // smooth transition bounds at edges
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

    const translateY = (1 - opacity) * 15;

    return {
      opacity,
      transform: `translateY(${translateY}px)`,
      pointerEvents: opacity > 0.1 ? "auto" : "none",
    };
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.sticky}>
        {/* Render Image Canvas */}
        <canvas ref={canvasRef} className={styles.canvas} />

        {/* Ambient Dark Bottom-to-Top Fade */}
        <div className={styles.gradient} />

        {/* Scroll to Explore Prompt */}
        <ScrollPrompt scrollProgress={scrollProgress} theme="light" />

        {/* Text Overlays depending on scroll position */}
        <div className={styles.overlay}>
          {/* Phase 1 Text: 0% to 32% */}
          <div className={styles.textGroup} style={getBlockStyles(0, 0.32)}>
            <h2 className={styles.title}>SK Industries</h2>
            <p className={styles.desc}>
              Unified precision stamping and industrial powder coatings executed inside a
              single facility.
            </p>
          </div>

          {/* Phase 2 Text: 34% to 66% */}
          <div className={styles.textGroup} style={getBlockStyles(0.34, 0.66)}>
            <h2 className={styles.title}>Automotive Charger Enclosures</h2>
            <p className={styles.desc}>
              Real assembly line frames showing precision structural sheets, progressive die stamps,
              and NEMA weatherproofing enclosures.
            </p>
          </div>

          {/* Phase 3 Text: 68% to 100% */}
          <div className={styles.textGroup} style={getBlockStyles(0.68, 1.0)}>
            <h2 className={styles.title}>Procure with Confidence</h2>
            <p className={styles.desc}>
              Initiate your sourcing request or request Design for Manufacturability (DFM)
              checks on your CAD drawings today.
            </p>
            <div className={styles.ctaWrapper}>
              <Button variant="primary" size="lg" to="/rfq-portal">
                Initiate Technical RFQ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
