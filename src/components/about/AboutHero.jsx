import React from "react";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Corporate Profile</span>
          <h1 className={styles.title}>About SK Industries</h1>
          <p className={styles.desc}>
            Operating a unified engineering setup specializing in volume sheet metal fabrication, 
            precision progressive press stamping, and high-durability industrial powder coating, 
            delivering premium component quality from under a single facility footprint.
          </p>
        </div>
      </div>
    </section>
  );
}
