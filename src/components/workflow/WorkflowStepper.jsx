import React from "react";
import { motion } from "framer-motion";
import WorkflowStepCard from "./WorkflowStepCard";
import styles from "./WorkflowStepper.module.css";

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function WorkflowStepper({ steps = [] }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className={styles.stepperContainer}>
      {/* Connecting dashed timeline line */}
      <div className={styles.track} />

      {steps.map((stepData, idx) => {
        const isTeal = stepData.accent === "teal";
        const nodeClass = `${styles.node} ${
          isTeal ? styles.nodeTeal : styles.nodeOrange
        }`;

        return (
          <motion.div
            key={idx}
            className={styles.stepWrapper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stepVariants}
          >
            {/* Illuminated indicator dot */}
            <div className={nodeClass} />

            {/* Step Card detail */}
            <WorkflowStepCard
              step={stepData.step}
              title={stepData.title}
              desc={stepData.desc}
              impact={stepData.impact}
              accent={stepData.accent}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
