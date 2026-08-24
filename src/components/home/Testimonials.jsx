import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const scrollContainerRef = useRef(null);

  const reviews = [
    {
      company: "HAVELLS INDIA LIMITED",
      category: "Leading Electrical & Power Brand",
      logo: "/images/clients/havells.svg",
      rating: 5,
      score: "5.0",
      quote: "Their commitment to consistent quality and reliable delivery has made them a highly dependable partner. They understand the rigorous demands of our supply chain and always ensure our component requirements are met with precision.",
    },
    {
      company: "BAJAJ ELECTRICALS LTD-(CHAKAN)",
      category: "Leading Electrical & Power Brand",
      logo: "/images/clients/bajaj.png",
      rating: 5,
      score: "5.0",
      quote: "Excellent service and strict adherence to industry standards. Their team is highly professional, responsive, and consistently delivers the high-quality engineering support our manufacturing projects demand.",
    },
    {
      company: "NUTECK POWER SOLUTIONS PVT. LTD.",
      category: "Leading Electrical & Power Brand",
      logo: "/images/clients/nuteck.png",
      rating: 5,
      score: "5.0",
      quote: "A trusted vendor with an impressive technical capability. Their durable components and straightforward operational approach make them a highly recommended partner in the power solutions sector.",
    },
    {
      company: "PYROTECH ELECTRONICS PVT LTD",
      category: "Specialized Electronics Manufacturer",
      logo: "/images/clients/pyrotech.png",
      rating: 5,
      score: "5.0",
      quote: "We highly value our ongoing partnership. Their attention to detail, precision engineering, and prompt fulfillment have been critical to maintaining our production timelines.",
    },
    {
      company: "FULHAM (India) PVT LTD",
      category: "Specialized Electronics Manufacturer",
      logo: "/images/clients/fulham.jpg",
      rating: 5,
      score: "5.0",
      quote: "Prompt service, clear communication, and high-quality materials. They seamlessly integrate into our vendor ecosystem and consistently exceed our expectations for quality control.",
    },
    {
      company: "INTELUX ELECTRONICS PVT. LTD.",
      category: "Specialized Electronics Manufacturer",
      logo: "/images/clients/intelux.jpg",
      rating: 5,
      score: "5.0",
      quote: "A fantastic team to work with. They provide highly reliable sourcing, competitive pricing, and maintain a rigorous standard of excellence across all their deliverables.",
    },
    {
      company: "LION DATES IMPEX PVT. LTD.",
      category: "FMCG & Diversified Operations",
      logo: "/images/clients/liondates.png",
      rating: 5,
      score: "5.0",
      quote: "Their customized solutions and seamless operational support have significantly streamlined our processes. We appreciate their dedication to rapid turnaround times and exceptional customer service.",
    },
  ];

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
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

        <div ref={scrollContainerRef} className={styles.grid}>
          {reviews.map((rev, idx) => (
            <div key={idx} className={styles.card}>
              {/* Header: Brand Logo & Category info */}
              <div className={styles.cardHeader}>
                <div className={styles.brandHeaderGroup}>
                  <div className={styles.logoContainer}>
                    <img src={rev.logo} alt={`${rev.company} logo`} className={styles.brandImage} />
                  </div>
                  <span className={styles.categoryLabel}>{rev.category}</span>
                </div>
                {/* Custom Quote Sign Icon "66" */}
                <div className={styles.quoteSign}>“</div>
              </div>

              {/* Ratings */}
              <div className={styles.ratingsRow}>
                <div className={styles.stars}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="var(--color-accent-warn)" color="var(--color-accent-warn)" />
                  ))}
                </div>
                <span className={styles.score}>{rev.score}</span>
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
