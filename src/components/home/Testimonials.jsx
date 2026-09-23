import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const scrollContainerRef = useRef(null);

  // Exact requested order: 1. Intelux 2. Bajaj 3. Fulham 4. Havells (plus remaining tier-1 partners)
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
  ];

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

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

        {/* 4-Card Visible Row Grid */}
        <div ref={scrollContainerRef} className={styles.grid}>
          {reviews.map((rev, idx) => (
            <div key={idx} className={styles.card}>
              <div>
                {/* Header: Brand Logo & Category info */}
                <div className={styles.cardHeader}>
                  <div className={styles.brandHeaderGroup}>
                    <div className={styles.logoContainer}>
                      <img src={rev.logo} alt={`${rev.company} logo`} className={styles.brandImage} />
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
