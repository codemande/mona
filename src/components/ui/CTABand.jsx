import { motion } from "motion/react";
import Container from "./Container";
import Button from "./Button";
import { fadeInUp, defaultViewport } from "../../styles/motion";
import styles from "./CTABand.module.css";

export default function CTABand({
  title = "Whatever Your Phone Needs, Start With Mona",
  description = "Protect your current smartphone, buy a new phone with 1-year coverage, or repair a damaged device on flexible terms.",
  primaryText = "Check Protection Price",
  primaryTo = "/protection-calculator",
  secondaryText = "Find a Partner Store",
  secondaryTo = "/partner-stores",
  whatsappText = "Continue on WhatsApp",
  className = ""
}) {
  return (
    <Container className={className}>
      <motion.div
        className={styles.ctaBand}
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        viewport={defaultViewport}
        transition={fadeInUp.transition}
      >
        <div className={styles.glowPattern} />
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        <div className={styles.buttonGroup}>
          {primaryText && primaryTo && (
            <Button to={primaryTo} size="lg" variant="primary">
              {primaryText}
            </Button>
          )}
          {secondaryText && secondaryTo && (
            <Button to={secondaryTo} size="lg" variant="secondary">
              {secondaryText}
            </Button>
          )}
          {whatsappText && (
            <Button
              href="https://wa.me/2347048100101?text=Hello%20Mona%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services."
              size="lg"
              variant="whatsapp"
              target="_blank"
            >
              {whatsappText}
            </Button>
          )}
        </div>
      </motion.div>
    </Container>
  );
}
