import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import styles from "./Faq.module.css";

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What sheet materials do you process?",
      a: "We process Mild Steel (CRCA), Stainless Steel, Aluminum, and Brass from 0.5mm up to 6.0mm thickness, sourced directly from certified steel mills.",
    },
    {
      q: "What is your coining and stamping tolerance?",
      a: "We maintain tolerances down to ± 0.05 mm for coining and progressive tooling consolidation, ensuring high-repeatability fits.",
    },
    {
      q: "Do you handle progressive die design in-house?",
      a: "Yes, our engineering team handles custom progressive die designs, tool fabrication, and preventative maintenance in-house.",
    },
    {
      q: "What colors and thicknesses do you apply for powder coating?",
      a: "We apply minimum 80-micron DFT (Dry Film Thickness) across RAL standards, including RAL 7024 Graphite Grey, RAL 9004 Signal Black, and RAL 9010 Pure White.",
    },
    {
      q: "How do you verify corrosion-resistance for enclosures?",
      a: "All weather-exposed parts undergo rigorous ASTM B117 salt-spray chamber testing rated up to 500 hours of continuous exposure.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        
        <div className={styles.grid}>
          {/* Left Column: Accordion Questions */}
          <div className={styles.questionsCol}>
            <span className={styles.eyebrow}>Your Common Question</span>
            <h2 className={styles.heading}>Frequently asked Question</h2>

            <div className={styles.accordionStack}>
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className={styles.faqCard}>
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className={styles.faqHeader}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.questionText}>{faq.q}</span>
                      <div className={`${styles.toggleCircle} ${isOpen ? styles.openCircle : ""}`}>
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </button>
                    
                    {/* Animated answer collapse */}
                    <div className={`${styles.answerWrapper} ${isOpen ? styles.openWrapper : ""}`}>
                      <div className={styles.answerContent}>
                        <p className={styles.answerText}>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Promo Card */}
          <div className={styles.promoCol}>
            <div className={styles.promoCard}>
              <div className={styles.iconCircle}>
                <HelpCircle size={28} />
              </div>
              <h3 className={styles.promoTitle}>
                Have Questions About Our Stamping & Coating?
              </h3>
              <p className={styles.promoText}>
                Ask our engineers directly to get clear and concise answers regarding metal stamping capabilities, DFM audits on your drawings, or electrostatic coating choices.
              </p>
              <div className={styles.promoCta}>
                <a href="/rfq-portal" className={styles.promoBtn}>
                  Get Answers Here
                </a>
              </div>
              
              {/* Bottom right curved accent visual cut */}
              <div className={styles.curveAccent} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
