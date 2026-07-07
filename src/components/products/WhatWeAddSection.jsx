import React, { useState } from "react";
import SpecStamp from "../ui/SpecStamp";
import styles from "./WhatWeAddSection.module.css";

export default function WhatWeAddSection({ whatWeAdd = [], accent = "orange" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!whatWeAdd || whatWeAdd.length === 0) return null;

  const bgImages = [
    "/images/metal_stamping_factory.png",
    "/images/powder_coating_line.png",
    "/images/cmm_metrology_room.png"
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>What We Add — Value Highlights</h2>
        
        <div className={styles.accordionContainer}>
          {whatWeAdd.map((item, idx) => {
            const isActive = activeIndex === idx;
            const bgUrl = bgImages[idx % bgImages.length];
            
            const itemStyle = isActive && bgUrl
              ? { 
                  "--panel-bg": `url(${bgUrl})`,
                  flex: 4.2
                }
              : { flex: 1 };

            return (
              <div
                key={idx}
                className={`${styles.panel} ${isActive ? styles.activePanel : ""}`}
                style={itemStyle}
                onMouseEnter={() => setActiveIndex(idx)}
              >
                {/* Background overlay for active panel */}
                <div className={styles.bgOverlay} />

                {/* Header / Node label */}
                <span className={styles.nodeLabel}>{item.node || `NODE_0${idx + 1}`}</span>

                {/* Inactive Vertical Title */}
                {!isActive && (
                  <div className={styles.verticalTitleWrapper}>
                    <span className={styles.verticalTitle}>{item.title}</span>
                  </div>
                )}

                {/* Active Panel Content */}
                <div className={`${styles.content} ${isActive ? styles.contentVisible : ""}`}>
                  <span className={styles.activeSubtitle}>Value Highlight</span>
                  <h3 className={styles.activeTitle}>{item.title}</h3>
                  
                  <div className={styles.detailsBlock}>
                    <span className={styles.detailsLabel}>Technical Detail</span>
                    <p className={styles.bodyText}>{item.body}</p>
                    <p className={styles.detailText}>{item.detail}</p>
                  </div>

                  {/* Active Stats stamps */}
                  {item.statValue && (
                    <div className={styles.statsRow}>
                      <SpecStamp 
                        value={item.statValue} 
                        label={item.statLabel} 
                        accent={accent} 
                        size="md" 
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
