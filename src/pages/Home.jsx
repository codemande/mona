import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ShieldCheck, 
  ShoppingBag, 
  Wrench, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Smartphone, 
  Store, 
  Award, 
  Clock, 
  Headphones, 
  Sparkles 
} from "lucide-react";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import CTABand from "../components/ui/CTABand";
import Accordion from "../components/ui/Accordion";
import Seo from "../components/layout/Seo";
import ProtectionCalculator from "../components/widgets/ProtectionCalculator";
import TestimonialCarousel from "../components/widgets/TestimonialCarousel";
import { FAQS } from "../data/faqs";
import { fadeInUp, defaultViewport } from "../styles/motion";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Seo
        title="Mona Protect | Official Smartphone Protection & Repairs in Nigeria"
        description="Your Smartphone. Covered at Every Stage. Protect your current phone, buy a new phone with 1-year coverage, or fix a damaged phone on flexible terms across Nigeria."
      />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Container>
          <motion.div
            className={styles.heroContent}
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
          >
            <div className={styles.heroSmallTitle}>
              Smartphone Protection, Repairs and Flexible Payments
            </div>

            <h1 className={styles.heroMainTitle}>
              Your Smartphone. Covered at Every Stage.
            </h1>

            <p className={styles.heroSupporting}>
              Protect your eligible smartphone against accidental damage, buy your next phone with one-year protection included, or fix a damaged phone and get protected after the repair. Available for eligible iPhone, Samsung Galaxy and Google Pixel devices.
            </p>

            <div className={styles.heroButtons}>
              <Button to="/protection-calculator" size="lg" variant="primary">
                Check Protection Price
              </Button>
              <Button to="/fix-now-get-protected-pay-later" size="lg" variant="secondary">
                Fix My Phone
              </Button>
            </div>

            <div>
              <Link to="/partner-stores" className={styles.heroTextLink}>
                Looking to buy a phone? Find a Partner Store →
              </Link>
            </div>

            <div className={styles.eligibilityStrip}>
              <div className={styles.eligibilityItem}>
                <CheckCircle2 size={16} color="var(--color-cyan)" />
                <span>Eligible iPhone</span>
              </div>
              <div className={styles.eligibilityItem}>
                <CheckCircle2 size={16} color="var(--color-cyan)" />
                <span>Samsung Galaxy</span>
              </div>
              <div className={styles.eligibilityItem}>
                <CheckCircle2 size={16} color="var(--color-cyan)" />
                <span>Google Pixel</span>
              </div>
              <div className={styles.eligibilityItem}>
                <CheckCircle2 size={16} color="var(--color-cyan)" />
                <span>One-Year Protection Included</span>
              </div>
              <div className={styles.eligibilityItem}>
                <CheckCircle2 size={16} color="var(--color-cyan)" />
                <span>Authorised Partner Network</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Brand Logos Strip */}
      <div className={styles.brandStrip}>
        <Container>
          <div className={styles.brandStripGrid}>
            <span> Apple iPhone</span>
            <span>SAMSUNG Galaxy</span>
            <span>Google Pixel</span>
          </div>
        </Container>
      </div>

      {/* Section: Choose What You Need */}
      <Section
        badge="Tailored Solutions"
        title="Whatever Your Situation, Mona Has You Covered"
        subtitle="Choose the exact service designed for your smartphone needs today."
      >
        <div className={styles.situationGrid}>
          {/* Card 1: Just Bought a Phone? */}
          <div className={styles.situationCard}>
            <div className={styles.situationBadge}>Option 01</div>
            <h3 className={styles.situationTitle}>Just Bought a Phone?</h3>
            <p className={styles.situationDesc}>
              Get one-year protection for your current or newly purchased smartphone against screen damage, liquid spills, and back glass cracking.
            </p>
            <Button to="/protection-calculator" variant="primary" fullWidth size="md">
              Check Protection Price
            </Button>
          </div>

          {/* Card 2: Need a New Phone? */}
          <div className={styles.situationCard}>
            <div className={styles.situationBadge}>Option 02</div>
            <h3 className={styles.situationTitle}>Need a New Phone?</h3>
            <p className={styles.situationDesc}>
              Buy an eligible iPhone, Samsung Galaxy, or Google Pixel at a partner store and spread payments. One-year Mona Protection is automatically included.
            </p>
            <Button to="/partner-stores" variant="primary" fullWidth size="md">
              Find a Participating Store
            </Button>
            <p className={styles.disclaimerText}>*Available to eligible customers after approval.</p>
          </div>

          {/* Card 3: Phone Already Damaged? */}
          <div className={styles.situationCard}>
            <div className={styles.situationBadge}>Option 03</div>
            <h3 className={styles.situationTitle}>Phone Already Damaged?</h3>
            <p className={styles.situationDesc}>
              Fix your cracked screen or damaged phone now with certified repair partners, pay flexibly, and get 12 months protection after the repair.
            </p>
            <Button to="/fix-now-get-protected-pay-later" variant="primary" fullWidth size="md">
              Find a Repair Partner
            </Button>
            <p className={styles.disclaimerText}>*Available to eligible customers and devices after assessment and approval.</p>
          </div>
        </div>
      </Section>

      {/* Embedded Protection Calculator Widget */}
      <Section
        background="bgSoft"
        badge="Instant Estimator"
        title="Check Your Smartphone Protection Rate"
        subtitle="Select your device brand and model to see your official annual protection rate instantly."
      >
        <ProtectionCalculator />
      </Section>

      {/* Why Mona Section */}
      <Section
        badge="The Mona Advantage"
        title="More Than Phone Insurance"
        subtitle="A complete smartphone care ecosystem designed for peace of mind."
      >
        <div className={styles.valueGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}><ShieldCheck size={24} /></div>
            <h3>One-Year Smartphone Protection</h3>
            <p>Comprehensive coverage for accidental screen cracks, liquid submersion, and glass damage with fast repair turnarounds.</p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}><ShoppingBag size={24} /></div>
            <h3>Buy Now, Get Protected & Pay Later</h3>
            <p>Upgrade to your dream phone with flexible payment options and 12 months protection bundled into every purchase.</p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}><Wrench size={24} /></div>
            <h3>Fix Now, Get Protected & Pay Later</h3>
            <p>Don't let a cracked screen stop you. Fix your phone immediately and stay protected against future accidents.</p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}><Store size={24} /></div>
            <h3>Approved Partner Stores</h3>
            <p>Physical walk-in support at certified retail and repair hubs across Abuja, Lagos, Port Harcourt, and major cities.</p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}><Award size={24} /></div>
            <h3>Premium Smartphone Support</h3>
            <p>Only original, high-grade replacement parts installed by certified technicians to protect your device's resale value.</p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}><Headphones size={24} /></div>
            <h3>Support Throughout Ownership</h3>
            <p>Instant claims assistance via WhatsApp or online portal with zero complex paperwork.</p>
          </div>
        </div>
      </Section>

      {/* What Is Covered vs Exclusions */}
      <Section
        background="bgSoft"
        badge="Clear Transparency"
        title="What Is Covered by Mona Protection"
        subtitle="We keep our terms clear, honest, and straightforward."
      >
        <div className={styles.coverageGrid}>
          <div className={styles.coverageBox}>
            <h3 style={{ color: "var(--color-success)" }}>
              <CheckCircle2 size={24} />
              <span>What IS Covered</span>
            </h3>
            <div className={styles.coverageList}>
              <div className={styles.coverageItem}>
                <CheckCircle2 size={18} color="var(--color-success)" style={{ flexShrink: 0 }} />
                <span><strong>Accidental Screen Damage:</strong> Cracks, shattered glass, touch unresponsive displays.</span>
              </div>
              <div className={styles.coverageItem}>
                <CheckCircle2 size={18} color="var(--color-success)" style={{ flexShrink: 0 }} />
                <span><strong>Liquid Damage:</strong> Accidental spills, liquid submersion, moisture ingress.</span>
              </div>
              <div className={styles.coverageItem}>
                <CheckCircle2 size={18} color="var(--color-success)" style={{ flexShrink: 0 }} />
                <span><strong>Back Glass Cracks:</strong> Shattered rear housing glass and camera lens covers.</span>
              </div>
              <div className={styles.coverageItem}>
                <CheckCircle2 size={18} color="var(--color-success)" style={{ flexShrink: 0 }} />
                <span><strong>Other Accidental Damage:</strong> Structural frame impacts affecting phone functionality.</span>
              </div>
            </div>
          </div>

          <div className={styles.coverageBox}>
            <h3 style={{ color: "var(--color-danger)" }}>
              <XCircle size={24} />
              <span>What Is NOT Covered</span>
            </h3>
            <div className={styles.coverageList}>
              <div className={styles.coverageItem}>
                <XCircle size={18} color="var(--color-danger)" style={{ flexShrink: 0 }} />
                <span><strong>Theft or Loss:</strong> Misplaced or stolen devices are excluded.</span>
              </div>
              <div className={styles.coverageItem}>
                <XCircle size={18} color="var(--color-danger)" style={{ flexShrink: 0 }} />
                <span><strong>Wear & Tear:</strong> Minor cosmetic scratches that do not impede normal device usage.</span>
              </div>
              <div className={styles.coverageItem}>
                <XCircle size={18} color="var(--color-danger)" style={{ flexShrink: 0 }} />
                <span><strong>Battery Degradation:</strong> Normal battery capacity decline over time.</span>
              </div>
              <div className={styles.coverageItem}>
                <XCircle size={18} color="var(--color-danger)" style={{ flexShrink: 0 }} />
                <span><strong>Intentional Harm:</strong> Deliberate damage or unauthorised third-party tampering.</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Customer Testimonials Carousel */}
      <Section
        badge="Verified Experiences"
        title="Trusted by Smartphone Owners Across Nigeria"
        subtitle="Real stories from customers who protected or repaired their devices with Mona."
      >
        <TestimonialCarousel />
      </Section>

      {/* Partner Store & Business Banners */}
      <Section background="bgBlue">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
          <div style={{ background: "#fff", padding: "32px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <span style={{ color: "var(--color-primary)", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase" }}>For Retailers</span>
            <h3 style={{ fontSize: "1.5rem", marginTop: "8px", marginBottom: "12px" }}>Become a Mona Partner Store</h3>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "20px" }}>
              Join Nigeria's leading insurtech network. Offer protection, financing, and repair services directly to your foot traffic.
            </p>
            <Button to="/become-a-partner" variant="primary">Apply to Become a Partner</Button>
          </div>

          <div style={{ background: "#fff", padding: "32px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <span style={{ color: "var(--color-primary)", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase" }}>For Merchants</span>
            <h3 style={{ fontSize: "1.5rem", marginTop: "8px", marginBottom: "12px" }}>Business Financing Solutions</h3>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "20px" }}>
              Expand your store inventory and working capital with tailored financing for registered mobile merchants.
            </p>
            <Button to="/business-financing" variant="outline">Learn About Business Financing</Button>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section
        badge="Got Questions?"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Mona Smartphone Protection, Repairs, and Pay Later options."
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Accordion items={FAQS.slice(0, 6)} />
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Button to="/faqs" variant="outline">View All Frequently Asked Questions →</Button>
          </div>
        </div>
      </Section>

      {/* Final CTA Band */}
      <Section>
        <CTABand />
      </Section>
    </>
  );
}
