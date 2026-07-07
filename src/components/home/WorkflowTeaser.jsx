import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import {
  ChevronsRight,
  Cpu,
  Scissors,
  Droplets,
  Paintbrush,
  CheckSquare,
} from "lucide-react";
import styles from "./WorkflowTeaser.module.css";

export default function WorkflowTeaser() {
  const steps = [
    {
      num: "01",
      label: "Coil Feeding",
      icon: <ChevronsRight size={38} />,
      desc: "De-coiling raw sheets under continuous feed.",
    },
    {
      num: "02",
      label: "Precision Stamping",
      icon: <Cpu size={38} />,
      desc: "High-tonnage progressive die stamping.",
    },
    {
      num: "03",
      label: "Parts Deburring",
      icon: <Scissors size={38} />,
      desc: "Clearing stamp burrs for edge safety.",
    },
    {
      num: "04",
      label: "Zinc Pre-treatment",
      icon: <Droplets size={38} />,
      desc: "Chemical washing for paint adhesion.",
    },
    {
      num: "05",
      label: "Powder Coating",
      icon: <Paintbrush size={38} />,
      desc: "Uniform electrostatic powder spraying.",
    },
    {
      num: "06",
      label: "Quality Inspection",
      icon: <CheckSquare size={38} />,
      desc: "CMM and Salt-Spray test verifications.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.headingWrapper}>
          <SectionHeading
            eyebrow="Workflow Teaser"
            title="Our Process"
            accent="orange"
            style={{ marginBottom: 0 }}
          />
          <Button variant="ghost" to="/single-roof-workflow">
            Explore Interactive Workflow →
          </Button>
        </div>

        <div className={styles.grid}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.stepCard}>
              <span className={styles.stepNum}>{step.num}</span>
              
              <div className={styles.iconCircle}>
                {step.icon}
              </div>
              
              <h4 className={styles.stepLabel}>{step.label}</h4>
              <p className={styles.stepDesc}>{step.desc}</p>
              
              {idx < steps.length - 1 && (
                <div className={styles.connector} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
