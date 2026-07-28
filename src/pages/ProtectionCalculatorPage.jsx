import Section from "../components/ui/Section";
import CTABand from "../components/ui/CTABand";
import Seo from "../components/layout/Seo";
import ProtectionCalculator from "../components/widgets/ProtectionCalculator";
import Accordion from "../components/ui/Accordion";
import { FAQS } from "../data/faqs";

export default function ProtectionCalculatorPage() {
  return (
    <>
      <Seo
        title="Smartphone Protection Price Calculator | Mona Protect"
        description="Calculate official annual protection prices for Apple iPhone, Samsung Galaxy, and Google Pixel models in Nigeria."
      />

      <Section background="bgBlue">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "var(--color-primary)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Protection Price Estimator
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", margin: "12px 0 16px 0", color: "var(--color-navy)" }}>
            Smartphone Protection Calculator
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--color-text)", lineHeight: 1.6 }}>
            Select your exact brand and model below to view your official annual protection rate, coverage breakdown, and physical inspection steps.
          </p>
        </div>
      </Section>

      <Section>
        <ProtectionCalculator />
      </Section>

      <Section background="bgSoft">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "32px", color: "var(--color-navy)" }}>Frequently Asked Questions About Rates</h2>
          <Accordion items={FAQS.slice(0, 4)} />
        </div>
      </Section>

      <Section>
        <CTABand />
      </Section>
    </>
  );
}
