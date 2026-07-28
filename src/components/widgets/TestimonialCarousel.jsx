import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "../../data/testimonials";
import styles from "./TestimonialCarousel.module.css";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const item = TESTIMONIALS[currentIndex];

  return (
    <div className={styles.carouselWrapper}>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          className={styles.testimonialCard}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.starsRow}>
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} size={20} fill="var(--color-star)" color="var(--color-star)" />
            ))}
          </div>

          <p className={styles.quoteText}>"{item.quote}"</p>

          <div className={styles.userInfo}>
            <img src={item.avatar} alt={item.name} className={styles.avatar} />
            <div className={styles.userDetails}>
              <div className={styles.userName}>{item.name}</div>
              <div className={styles.userSub}>
                {item.role} • {item.location} • <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>{item.device}</span>
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--color-success)", display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                <CheckCircle2 size={12} />
                <span>Verified Mona Customer</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={styles.controls}>
        <button className={styles.controlBtn} onClick={handlePrev} aria-label="Previous Testimonial">
          <ChevronLeft size={20} />
        </button>

        <div className={styles.dots}>
          {TESTIMONIALS.map((_, idx) => (
            <div
              key={idx}
              className={`${styles.dot} ${currentIndex === idx ? styles.dotActive : ""}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>

        <button className={styles.controlBtn} onClick={handleNext} aria-label="Next Testimonial">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
