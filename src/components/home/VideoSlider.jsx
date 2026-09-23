import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Volume2, VolumeX } from "lucide-react";
import styles from "./VideoSlider.module.css";

const videoSlides = [
  {
    title: "Progressive Die Stamping Run",
    desc: "High-speed progressive stamping operations blanking and forming precision steel casing pieces.",
    src: "/VIDS/WhatsApp Video 2026-08-20 at 17.10.44.mp4",
  },
  {
    title: "Tooling & Press Setup",
    desc: "Calibration of progressive tooling dies and mechanical setups inside our press facility.",
    src: "/VIDS/WhatsApp Video 2026-08-20 at 17.10.44 (1).mp4",
  },
  {
    title: "Conveyorized Feed System",
    desc: "Raw coil stock fed through straighteners to ensure flat strip entry into press lines.",
    src: "/VIDS/WhatsApp Video 2026-08-20 at 17.10.46.mp4",
  },
  {
    title: "Electrostatic Spray Tunnels",
    desc: "Dual spray booths applying uniform powder coatings to grounded metal components.",
    src: "/VIDS/WhatsApp Video 2026-08-20 at 17.10.46 (1).mp4",
  },
  {
    title: "Convection Bake Tunnel",
    desc: "Curing ovens baking parts at 200°C to cross-link polymers into wear-resistant barriers.",
    src: "/VIDS/WhatsApp Video 2026-08-20 at 17.10.47.mp4",
  },
  {
    title: "Stamping Press Bed In-Action",
    desc: "High-tonnage stamping press forming complex brackets and custom electrical housings.",
    src: "/VIDS/WhatsApp Video 2026-08-20 at 17.10.47 (1).mp4",
  },
  {
    title: "Powder Coating Application",
    desc: "Electrostatic spray booth applying protective polyester powder to custom cabinets.",
    src: "/VIDS/WhatsApp Video 2026-08-20 at 17.10.47 (2).mp4",
  },
  {
    title: "Quality Inspection & CMM",
    desc: "Post-coating inspection and dimensional checks mapping stamping boundaries.",
    src: "/VIDS/WhatsApp Video 2026-08-20 at 17.10.48.mp4",
  },
];

function VideoCard({ slide, index, isNear, isVisible }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isNear && isVisible) {
      if (isPlaying) {
        video.play().catch(() => {});
      }
    } else {
      video.pause();
    }
  }, [isNear, isVisible, isPlaying]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => console.log("Play blocked:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={styles.videoCard}>
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.video}
          src={isNear ? slide.src : undefined}
          loop
          muted={isMuted}
          playsInline
          preload={isNear && isVisible ? "metadata" : "none"}
        />
        
        {/* Top Header Overlay with Tag and Mute */}
        <div className={styles.cardOverlay}>
          <div className={styles.cardHeader}>
            <span className={styles.stepTag}>0{index + 1}</span>
            <button onClick={toggleMute} className={styles.muteBtn} title={isMuted ? "Unmute" : "Mute"}>
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>
          </div>
        </div>

        {/* Big Central Play/Pause Toggle on click */}
        <div className={styles.playOverlay} onClick={togglePlay}>
          {!isPlaying && <div className={styles.playIcon}><Play size={32} /></div>}
        </div>
      </div>
    </div>
  );
}

export default function VideoSlider() {
  const sectionRef = useRef(null);
  const [isNear, setIsNear] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Observe section approaching viewport (rootMargin: 300px)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsNear(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Handle responsive column counts
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Safe navigation bounds
  const maxIndex = Math.max(0, videoSlides.length - visibleCount);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className="container">
        {/* Section Heading */}
        <div className={styles.headingBlock}>
          <span className={styles.eyebrow}>Facility In Action</span>
          <h2 className={styles.title}>Process Showcases</h2>
          <p className={styles.subtitle}>
            Explore our advanced tooling, progressive stamping, and integrated single-roof coating operations in motion.
          </p>
        </div>

        {/* Video Slider Interface */}
        <div className={styles.sliderWrapper}>
          
          {/* Side Navigation Chevron Arrows */}
          <button className={`${styles.navArrow} ${styles.arrowLeft}`} onClick={handlePrev} aria-label="Previous Showcase">
            <ChevronLeft size={24} />
          </button>
          <button className={`${styles.navArrow} ${styles.arrowRight}`} onClick={handleNext} aria-label="Next Showcase">
            <ChevronRight size={24} />
          </button>

          {/* Carousel Viewport */}
          <div
            className={styles.carouselViewport}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
              }}
            >
              {videoSlides.map((slide, idx) => {
                const isVisible = idx >= startIndex && idx < startIndex + visibleCount;
                return (
                  <div
                    key={idx}
                    className={styles.slideCol}
                    style={{
                      flex: `0 0 ${100 / visibleCount}%`,
                    }}
                  >
                    <VideoCard
                      slide={slide}
                      index={idx}
                      isNear={isNear}
                      isVisible={isVisible}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator list */}
          <div className={styles.dotsRow}>
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${idx === startIndex ? styles.activeDot : ""}`}
                onClick={() => setStartIndex(idx)}
                aria-label={`Go to slide group ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
