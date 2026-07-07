import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const scrollContainerRef = useRef(null);

  const reviews = [
    {
      name: "Sneha Patil",
      title: "Operations Lead, VoltCharge Systems",
      avatar: "/images/avatar_engineer_1.png",
      rating: 5,
      score: "5.0",
      quote: "Consolidating our sheet metal stamping and powder coating under a single roof with SK Industries compressed our EV enclosure lead times by 50%. Hand-offs are eliminated and FAI tolerances are strictly checked.",
    },
    {
      name: "Anil Kulkarni",
      title: "Sourcing Director, CoreDrive Automotive",
      avatar: "/images/avatar_director_1.png",
      rating: 5,
      score: "5.0",
      quote: "By stamping progressive dies and coating parts inside the same facility, SK Industries cut our transport logistics risks and middlemen markups. Our shutter housing sourcing cost is down 15%.",
    },
    {
      name: "Vikram Mehta",
      title: "Senior Sourcing Analyst, EnerDrive Components",
      avatar: "/images/avatar_analyst_1.png",
      rating: 5,
      score: "5.0",
      quote: "The progressive die stamping tolerances and chemical wash durability are highly repeatable. Our audit team was thoroughly impressed by their compliance documentation on first inspection.",
    },
    {
      name: "Rohan Deshmukh",
      title: "Operations Manager, InduPress Electrics",
      avatar: "/images/avatar_manager_1.png",
      rating: 5,
      score: "5.0",
      quote: "Moving to progressive tool consolidation helped us reduce the manufacturing cycle times of our electrical switch connectors by 30%. Their communication and engineering support are stellar.",
    },
    {
      name: "Priya Sharma",
      title: "Quality Engineer, Apex Chargers",
      avatar: "/images/avatar_engineer_2.png",
      rating: 5,
      score: "5.0",
      quote: "Their NEMA 3R weatherproof charging enclosures passed all our salt-spray and water ingress audits on the first pass. Highly recommended for EV parts stamping.",
    },
    {
      name: "Sanjay Joshi",
      title: "VP of Procurement, RailTransit Systems",
      avatar: "/images/avatar_director_2.png",
      rating: 5,
      score: "5.0",
      quote: "The unified single-roof layout simplifies our audit process and cuts down on intermediate shipping logistics. Very reliable team for industrial steel components.",
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
            eyebrow="Testimonial"
            title="What Our Clients Say"
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
              {/* Header: Avatar, Info, Quote Icon */}
              <div className={styles.cardHeader}>
                <div className={styles.profileGroup}>
                  <div className={styles.avatarCircle}>
                    <img src={rev.avatar} alt={rev.name} className={styles.avatarImage} />
                  </div>
                  <div>
                    <h4 className={styles.name}>{rev.name}</h4>
                    <span className={styles.title}>{rev.title}</span>
                  </div>
                </div>
                {/* Custom Quote Sign Icon "66" */}
                <div className={styles.quoteSign}>“</div>
              </div>

              {/* Ratings */}
              <div className={styles.ratingsRow}>
                <div className={styles.stars}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--color-accent-warn)" color="var(--color-accent-warn)" />
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
