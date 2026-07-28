import { motion } from "motion/react";
import Container from "./Container";
import { fadeInUp, defaultViewport } from "../../styles/motion";
import styles from "./Section.module.css";

export default function Section({
  children,
  background = "bgWhite", // bgWhite, bgSoft, bgBlue, bgNavy
  badge,
  title,
  subtitle,
  className = "",
  id
}) {
  const bgClass = styles[background] || styles.bgWhite;

  return (
    <section id={id} className={`${styles.section} ${bgClass} ${className}`}>
      <Container>
        {(badge || title || subtitle) && (
          <motion.div
            className={styles.header}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={defaultViewport}
            transition={fadeInUp.transition}
          >
            {badge && <span className={styles.badge}>{badge}</span>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </Container>
    </section>
  );
}
