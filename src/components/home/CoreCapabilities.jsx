import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  FileCheck, 
  FileText, 
  ClipboardCheck, 
  Leaf 
} from "lucide-react";
import Button from "../ui/Button";
import AnimatedCounter from "../ui/AnimatedCounter";
import styles from "./CoreCapabilities.module.css";

export default function CoreCapabilities() {
  const stats = [
    { value: "20+ Years", label: "Industry Presence" },
    { value: "500k+", label: "Stamped Parts Annually" },
    { value: "±0.05mm", label: "Coining Tolerance limits" },
    { value: "99.8%", label: "Quality Acceptance rate" },
  ];

  const logoCompliance = [
    { 
      name: "ISO 9001 Certified", 
      desc: "Quality Systems",
      icon: <Award size={34} />
    },
    { 
      name: "PPAP Compliant", 
      desc: "Automotive Audits",
      icon: <FileCheck size={34} />
    },
    { 
      name: "ASTM Standards", 
      desc: "Material Testing",
      icon: <FileText size={34} />
    },
    { 
      name: "FAI Audited", 
      desc: "First Article Checks",
      icon: <ClipboardCheck size={34} />
    },
    { 
      name: "RoHS Compliant", 
      desc: "Green Coatings",
      icon: <Leaf size={34} />
    },
  ];

  const catalogItems = [
    {
      title: "Rolling Shutter Locks",
      desc: "Double-lock cylinder systems.",
      count: "100k+ Parts Run",
      image: "/images/metal_stamping_factory.png",
      link: "/products/rolling-shutter-locks",
    },
    {
      title: "EV Enclosures",
      desc: "NEMA-rated charging boxes.",
      count: "50k+ Parts Run",
      image: "/images/ev_charger_enclosure_finished.png",
      link: "/products/ev-charger-enclosures",
    },
    {
      title: "Custom Die Press",
      desc: "High-tonnage progressive stampings.",
      count: "500k+ Parts Run",
      image: "/images/progressive_die_parts.png",
      link: "/services/custom-die-press-electrical-parts",
    },
  ];

  // Motion variants for scroll reveals
  const scrollReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className={styles.section}>
      <div className="container">
        
        {/* ================= BLOCK 1: ABOUT US ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollReveal}
          className={styles.aboutBlock}
        >
          {/* Left: About Intro */}
          <div className={styles.aboutLeft}>
            <span className={styles.aboutEyebrow}>Corporate Profile</span>
            <h2 className={styles.aboutHeading}>About Us</h2>
            <p className={styles.aboutText}>
              SK Industries is a premier sheet metal stamping and industrial coating enterprise. 
              We deliver high-repeatability stamping components and epoxy-polyester powder coat finishes 
              under a single roof. Our integrated workflow eliminates multi-vendor logistics risks, 
              streamlining sourcing pipelines for global electric vehicle, gate automation, 
              and automotive OEM divisions.
            </p>
          </div>

          {/* Right: Stats Grid */}
          <div className={styles.aboutRight}>
            <div className={styles.statsGrid}>
              {stats.map((stat, idx) => (
                <div key={idx} className={styles.statCard}>
                  <span className={styles.statValue}>
                    <AnimatedCounter value={stat.value} />
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Logo/Compliance Strip with large vertical stacked icons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={scrollReveal}
          className={styles.logoStrip}
        >
          {logoCompliance.map((logo, idx) => (
            <div key={idx} className={styles.logoItem}>
              <div className={styles.complianceIconCircle}>
                {logo.icon}
              </div>
              <span className={styles.logoName}>{logo.name}</span>
              <span className={styles.logoDesc}>{logo.desc}</span>
            </div>
          ))}
        </motion.div>


        {/* ================= BLOCK 2: CATALOG OF OBJECTS ================= */}
        <div className={styles.catalogBlock}>
          {/* Left Column: Title Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollReveal}
            className={styles.catalogLeft}
          >
            <span className={styles.catalogEyebrow}>Specialties & Range</span>
            <h2 className={styles.catalogHeading}>
              Catalog of <br /> Products
            </h2>
            <p className={styles.catalogText}>
              Explore our core product ranges engineered to custom engineering drawings. 
              We handle batches from prototype tooling to full-volume production runs.
            </p>
          </motion.div>

          {/* Right Column: 3 rounded image-cards */}
          <div className={styles.catalogRight}>
            <div className={styles.cardsRow}>
              {catalogItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={scrollReveal}
                  className={styles.catalogCard}
                >
                  <Link to={item.link} className={styles.cardLink}>
                    <div className={styles.imageWrapper}>
                      <img src={item.image} alt={item.title} className={styles.cardImage} />
                    </div>
                    <div className={styles.cardInfo}>
                      <h4 className={styles.cardTitle}>{item.title}</h4>
                      <p className={styles.cardDesc}>{item.desc}</p>
                      <span className={styles.cardCount}>{item.count}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Slider next/prev control triggers (mockup placement) */}
            <div className={styles.controlRow}>
              <button className={styles.controlBtn} aria-label="Previous page">
                <ChevronLeft size={20} />
              </button>
              <button className={styles.controlBtn} aria-label="Next page">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
