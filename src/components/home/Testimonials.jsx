import React, { useRef, useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Exact requested order: 1. Intelux 2. Bajaj 3. Fulham 4. Polycab 5. Havells (plus remaining tier-1 partners)
  const reviews = [
    {
      company: "INTELUX ELECTRONICS PVT. LTD.",
      category: "Specialized Electronics Manufacturer",
      logo: "/images/clients/intelux.jpg",
      rating: 5,
      score: "5.0",
      quote: "A fantastic team to work with. They provide highly reliable sourcing, competitive pricing, and maintain a rigorous standard of excellence across all deliverables.",
    },
    {
      company: "BAJAJ ELECTRICALS LTD-(CHAKAN)",
      category: "Leading Electrical & Power Brand",
      logo: "/images/clients/bajaj.png",
      rating: 5,
      score: "5.0",
      quote: "Excellent service and strict adherence to industry standards. Their team is highly professional and consistently delivers high-quality engineering support.",
    },
    {
      company: "FULHAM (India) PVT LTD",
      category: "Specialized Electronics Manufacturer",
      logo: "/images/clients/fulham.jpg",
      rating: 5,
      score: "5.0",
      quote: "Prompt service, clear communication, and high-quality materials. They seamlessly integrate into our vendor ecosystem and exceed our quality expectations.",
    },
    {
      company: "POLYCAB INDIA LIMITED",
      category: "Leading Electrical & Power Brand",
      logo: "/images/clients/polycab.png",
      rating: 5,
      score: "5.0",
      quote: "Outstanding precision and consistent batch finishing. Their integrated sheet metal and coating facility delivers components exactly to specification on demanding schedules.",
    },
    {
      company: "HAVELLS INDIA LIMITED",
      category: "Leading Electrical & Power Brand",
      logo: "/images/clients/havells.svg",
      rating: 5,
      score: "5.0",
      quote: "Their commitment to consistent quality and reliable delivery has made them a highly dependable partner for our high-volume component requirements.",
    },
    {
      company: "PYROTECH ELECTRONICS PVT LTD",
      category: "Specialized Electronics Manufacturer",
      logo: "/images/clients/pyrotech.png",
      rating: 5,
      score: "5.0",
      quote: "We highly value our ongoing partnership. Their attention to detail, precision engineering, and prompt fulfillment have been critical to our production timelines.",
    },
    {
      company: "NUTECK POWER SOLUTIONS PVT. LTD.",
      category: "Leading Electrical & Power Brand",
      logo: "/images/clients/nuteck.png",
      rating: 5,
      score: "5.0",
      quote: "A trusted vendor with impressive technical capabilities. Their durable components and straightforward operational approach make them highly recommended.",
    },
    {
      company: "LION DATES IMPEX PVT. LTD.",
      category: "FMCG & Diversified Operations",
      logo: "/images/clients/liondates.png",
      rating: 5,
      score: "5.0",
      quote: "Their customized sheet metal solutions and seamless operational support have significantly streamlined our facility processes and equipment turnaround.",
    },
    {
      company: "BAG ELECTRONICS & TECHNOLOGY (INDIA) PVT. LTD.",
      category: "Specialized Electronics Manufacturer",
      logo: "/images/clients/bag_electronics.png",
      rating: 5,
      score: "5.0",
      quote: "High-precision ballast enclosures and power electronics housings delivered with superior coating standards. Exceptional manufacturing consistency and responsive support.",
    },
  ];

  const getStepWidth = () => {
    if (!scrollContainerRef.current) return 320;
    const firstCard = scrollContainerRef.current.querySelector(`.${styles.card}`);
    if (firstCard) {
      // Card offsetWidth + gap
      const style = window.getComputedStyle(scrollContainerRef.current);
      const gap = parseFloat(style.columnGap || style.gap) || 16;
      return firstCard.offsetWidth + gap;
    }
    return 320;
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const step = getStepWidth();
      scrollContainerRef.current.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const el = scrollContainerRef.current;
      const step = getStepWidth();
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }
  };

  // Auto scroll card by card every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const el = scrollContainerRef.current;
        const step = getStepWidth();

        // If reached the end, smoothly scroll back to the start
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 15) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: step, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className={styles.section}>
      <div className="container">
        
        {/* Header container with heading on left, slider arrows on right */}
        <div className={styles.headerWrapper}>
          <SectionHeading
            eyebrow="Clients & Endorsements"
            title="Trusted by Industry Leaders"
            accent="orange"
            style={{ marginBottom: 0 }}
          />
          <div className={styles.sliderControls}>
            <button className={styles.sliderBtn} onClick={handleScrollLeft} title="Scroll Left">
              <ChevronLeft size={20} />
            </button>
            <button className={styles.sliderBtn} onClick={handleScrollRight} title="Scroll Right">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 4-Card Visible Row Grid with auto-scroll and hover pause */}
        <div
          ref={scrollContainerRef}
          className={styles.grid}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {reviews.map((rev, idx) => (
            <div key={idx} className={styles.card}>
              <div>
                {/* Header: Brand Logo & Category info */}
                <div className={styles.cardHeader}>
                  <div className={styles.brandHeaderGroup}>
                    <div className={styles.logoContainer}>
                      <img
                        src={rev.logo}
                        alt={`${rev.company} logo`}
                        className={styles.brandImage}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <span className={styles.companyName}>{rev.company}</span>
                    <span className={styles.categoryLabel}>{rev.category}</span>
                  </div>
                  <div className={styles.quoteSign}>“</div>
                </div>

                {/* Ratings */}
                <div className={styles.ratingsRow}>
                  <div className={styles.stars}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="var(--color-accent-warn)" color="var(--color-accent-warn)" />
                    ))}
                  </div>
                  <span className={styles.score}>{rev.score}</span>
                </div>
              </div>

              {/* Review Text */}
              <p className={styles.quoteText}>{rev.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
