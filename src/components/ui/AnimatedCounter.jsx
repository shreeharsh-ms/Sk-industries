import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({ value, duration = 1.2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayVal, setDisplayVal] = useState("");

  useEffect(() => {
    // Parse numbers out of the string (handles negative, positive, and floats)
    const match = value.match(/(\d+(?:\.\d+)?)/);
    if (!match) {
      setDisplayVal(value);
      return;
    }

    const rawNumStr = match[0];
    const targetNum = parseFloat(rawNumStr);
    if (isNaN(targetNum)) {
      setDisplayVal(value);
      return;
    }

    // Detect decimal precision
    const decimalParts = rawNumStr.split(".");
    const decimals = decimalParts.length > 1 ? decimalParts[1].length : 0;

    const prefix = value.substring(0, match.index);
    const suffix = value.substring(match.index + rawNumStr.length);

    if (!isInView) {
      // Display initial structured zero state (e.g. ±0.00mm, 000k+, 0.0%)
      const zeroNumber = (0).toFixed(decimals);
      setDisplayVal(`${prefix}${zeroNumber}${suffix}`);
      return;
    }

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing curve: easeOutQuad
      const easeProgress = progress * (2 - progress);
      const currentNum = targetNum * easeProgress;
      
      setDisplayVal(`${prefix}${currentNum.toFixed(decimals)}${suffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayVal(value); // Force exact target text at the end
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayVal}</span>;
}
