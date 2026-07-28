import { useState } from "react";
import Section from "../components/ui/Section";
import CTABand from "../components/ui/CTABand";
import Seo from "../components/layout/Seo";
import Accordion from "../components/ui/Accordion";
import { FAQS } from "../data/faqs";

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "General Protection", "Buy Now, Get Protected & Pay Later", "Fix Now, Get Protected & Pay Later", "Inspection & Claims", "Partner Stores"];

  const filteredFaqs = activeCategory === "all"
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory);

  return (
    <>
      <Seo
        title="Frequently Asked Questions | Mona Protect"
        description="Clear answers to your questions about Mona Smartphone Protection, inspections, repair claims, BNPL, and partner stores in Nigeria."
      />

      <Section background="bgBlue">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "var(--color-primary)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Knowledge Center
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", margin: "12px 0 16px 0", color: "var(--color-navy)" }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--color-text)", lineHeight: 1.6 }}>
            Everything you need to know about protecting, buying, or repairing your smartphone with Mona.
          </p>
        </div>
      </Section>

      <Section>
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                border: activeCategory === cat ? "1px solid var(--color-navy)" : "1px solid var(--color-border)",
                backgroundColor: activeCategory === cat ? "var(--color-navy)" : "#fff",
                color: activeCategory === cat ? "#fff" : "var(--color-ink)"
              }}
            >
              {cat === "all" ? "All FAQs" : cat}
            </button>
          ))}
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Accordion items={filteredFaqs} allowMultiple />
        </div>
      </Section>

      <Section>
        <CTABand />
      </Section>
    </>
  );
}
