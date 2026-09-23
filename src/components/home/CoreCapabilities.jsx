import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "../ui/AnimatedCounter";
import styles from "./CoreCapabilities.module.css";

export default function CoreCapabilities() {
  const stats = [
    { value: "20+ Years", label: "Industry Presence" },
    { value: "500k+", label: "Stamped Parts Annually" },
    { value: "100%", label: "First-Article Inspection" },
    { value: "99.8%", label: "Quality Acceptance rate" },
  ];


  const catalogItems = [
    {
      title: "Ballast Cabinets",
      tag: "Lighting Enclosure",
      desc: "Louvered CRCA driver enclosures.",
      count: "75k+ Run",
      image: "/images/ballast_cabinet_finished.png",
      link: "/products/ballast-cabinets",
    },
    {
      title: "EV Enclosures",
      tag: "Weatherproof IP65",
      desc: "NEMA-rated charging boxes.",
      count: "50k+ Run",
      image: "/images/ev_charger_enclosure_finished.png",
      link: "/products/ev-charger-enclosures",
    },
    {
      title: "Speaker Magnet Plates",
      tag: "Acoustic Components",
      desc: "Pole pieces & integrated coating.",
      count: "250k+ Run",
      image: "/images/speaker_magnet_parts_stack.png",
      link: "/products/speaker-magnet-plates-powder-coating",
    },
    {
      title: "Custom Die Press",
      tag: "Progressive Tooling",
      desc: "High-tonnage progressive stampings.",
      count: "500k+ Run",
      image: "/images/progressive_die_parts.png",
      link: "/services/custom-die-press-electrical-parts",
    },
    {
      title: "Rolling Shutter Locks",
      tag: "Security Hardware",
      desc: "Heavy-duty HR steel lock sets.",
      count: "100k+ Run",
      image: "/images/rolling_shutter_lock.png",
      link: "/products/rolling-shutter-locks",
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



        {/* ================= BLOCK 2: CATALOG OF PRODUCTS ================= */}
        <div className={styles.catalogSection}>
          {/* Full-Width Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollReveal}
            className={styles.catalogHeader}
          >
            <div className={styles.catalogHeaderLeft}>
              <span className={styles.catalogEyebrow}>Specialties &amp; Range</span>
              <h2 className={styles.catalogHeading}>Catalog of Products</h2>
              <p className={styles.catalogText}>
                Explore our core product ranges engineered to custom engineering drawings. 
                We handle batches from prototype tooling to full-volume single-roof production runs.
              </p>
            </div>

            <Link to="/rfq-portal" className={styles.catalogActionBtn}>
              <span>Request Technical RFQ</span>
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* 5-Card Responsive Grid */}
          <div className={styles.cardsGrid}>
            {catalogItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.5, delay: idx * 0.08, ease: "easeOut" } 
                  },
                }}
                className={styles.catalogCard}
              >
                <Link to={item.link} className={styles.cardLink}>
                  <div className={styles.cardHeaderInfo}>
                    <span className={styles.cardTag}>{item.tag}</span>
                    <span className={styles.cardCount}>{item.count}</span>
                  </div>

                  <div className={styles.imageWrapper}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.cardImage}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className={styles.cardInfo}>
                    <h4 className={styles.cardTitle}>{item.title}</h4>
                    <p className={styles.cardDesc}>{item.desc}</p>
                    <span className={styles.cardCta}>
                      <span>Explore Specs</span>
                      <ArrowRight size={13} className={styles.ctaArrow} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
