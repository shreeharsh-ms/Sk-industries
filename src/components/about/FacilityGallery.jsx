import React from "react";
import styles from "./FacilityGallery.module.css";

export default function FacilityGallery() {
  const images = [
    {
      label: "Mechanical Press Line",
      desc: "Our automated progressive press line blanks CRCA steel coils.",
      tag: "stamping",
      accent: "orange",
      image: "/images/metal_stamping_factory.png", // Added image asset path
    },
    {
      label: "Powder Coating Oven",
      desc: "Conveyor system leading stamped items through the 200°C cure oven.",
      tag: "coating",
      accent: "teal",
      image: "/images/powder_coating_line.png", // Added image asset path
    },
    {
      label: "7-Tank Surface Treatment",
      desc: "Automated 7-stage chemical immersion degreasing, acid pickling, and phosphating line.",
      tag: "treatment",
      accent: "teal",
      image: "/images/seven_tank_treatment_line.jpg",
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Facility Operations Gallery</h2>
        <div className={styles.grid}>
          {images.map((img, idx) => {
            const frameStyle = img.image ? { "--frame-bg": `url(${img.image})` } : {};
            return (
              <div 
                key={idx} 
                className={styles.frame}
                style={frameStyle}
              >
                <div
                  className={`${styles.tag} ${
                    img.accent === "teal" ? styles.tagTeal : ""
                  }`}
                >
                  {img.tag}
                </div>
                <div className={styles.frameText}>
                  <span className={styles.label}>{img.label}</span>
                  <p className={styles.desc}>{img.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
