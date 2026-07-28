import { ShoppingBag, ShieldCheck, CheckCircle2, Store, Clock, ArrowRight, MessageCircle } from "lucide-react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import CTABand from "../components/ui/CTABand";
import Seo from "../components/layout/Seo";
import { waLink } from "../api/client";

export default function BuyNowPayLater() {
  return (
    <>
      <Seo
        title="Buy Now, Get Protected & Pay Later | Mona Protect"
        description="Buy your next eligible iPhone, Samsung Galaxy, or Google Pixel with flexible payment options and 1-year Mona Smartphone Protection included at participating stores."
      />

      {/* Header */}
      <Section background="bgBlue">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "var(--color-primary)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            New Phone Purchase Plan
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", margin: "12px 0 16px 0", color: "var(--color-navy)" }}>
            Buy Now, Get Protected & Pay Later
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--color-text)", lineHeight: 1.6, marginBottom: "28px" }}>
            Get your hands on the latest iPhone, Samsung Galaxy, or Google Pixel today. Spread your payment comfortably over time — with full 12-month Mona Smartphone Protection automatically included in your purchase.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Button to="/partner-stores" size="lg" variant="primary">
              Find a Participating Store
            </Button>
            <Button
              href={waLink("Hello Mona, I am interested in Buy Now, Get Protected & Pay Later for a new phone.")}
              size="lg"
              variant="whatsapp"
              target="_blank"
            >
              Continue on WhatsApp
            </Button>
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginTop: "12px" }}>
            *Available to eligible customers after store assessment and approval.
          </p>
        </div>
      </Section>

      {/* 4 Key Benefits */}
      <Section
        badge="Key Features"
        title="Why Choose Buy Now, Get Protected & Pay Later"
        subtitle="The smartest way to upgrade your smartphone in Nigeria."
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>12-Month Protection Included</h3>
            <p style={{ color: "var(--color-text)", lineHeight: 1.6 }}>
              Every device purchased under this plan automatically comes bundled with 1 full year of Mona Smartphone Protection covering accidental screen cracks and liquid damage.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <ShoppingBag size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Latest Flagship Smartphone Brands</h3>
            <p style={{ color: "var(--color-text)", lineHeight: 1.6 }}>
              Choose from brand-new, original Apple iPhone, Samsung Galaxy, and Google Pixel models at certified retail partner stores.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <Clock size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Flexible Payment Schedule</h3>
            <p style={{ color: "var(--color-text)", lineHeight: 1.6 }}>
              Drive off with your phone immediately and pay your balance over structured monthly installments designed for your budget.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <Store size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>In-Store Verification</h3>
            <p style={{ color: "var(--color-text)", lineHeight: 1.6 }}>
              Quick, transparent onboarding conducted directly at participating partner store counters across major Nigerian cities.
            </p>
          </div>
        </div>
      </Section>

      {/* 9-Step Customer Journey */}
      <Section
        background="bgSoft"
        badge="How It Works"
        title="The 9-Step Buy & Protect Journey"
        subtitle="A smooth walk-in experience from selection to full protection."
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            "Visit an authorised Mona Partner Store in Abuja, Lagos, Port Harcourt, or your city.",
            "Select your preferred eligible smartphone (iPhone, Samsung Galaxy, or Google Pixel).",
            "Request the 'Buy Now, Get Protected & Pay Later' payment option at the store counter.",
            "Provide basic identification and customer verification details.",
            "Receive instant eligibility evaluation from the store team.",
            "Make your initial deposit payment.",
            "Your new phone is immediately registered for 12 months of Mona Smartphone Protection.",
            "Walk out with your brand-new phone and active protection certificate!",
            "Complete remaining payments seamlessly according to your agreed plan schedule."
          ].map((stepText, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 20px", background: "#fff", border: "1px solid var(--color-border)", borderRadius: "6px" }}>
              <div style={{ width: "32px", height: "32px", background: "var(--color-primary)", color: "#fff", fontWeight: 800, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {idx + 1}
              </div>
              <div style={{ fontSize: "1.05rem", fontWeight: 500, color: "var(--color-ink)" }}>{stepText}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* No Store Fallback */}
      <Section>
        <div style={{ background: "var(--color-bg-blue)", padding: "40px", borderRadius: "6px", border: "1px solid rgba(0, 74, 173, 0.2)", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "12px", color: "var(--color-navy)" }}>No Partner Store in Your Area Yet?</h3>
          <p style={{ color: "var(--color-text)", marginBottom: "24px", lineHeight: 1.6 }}>
            Don't worry! Connect with our customer support team directly on WhatsApp. We can assist you with nearby verified store locations or notify you when new retail partners open in your city.
          </p>
          <Button
            href={waLink("Hello Mona, I want to Buy Now & Get Protected, but I need help finding a store in my city.")}
            variant="whatsapp"
            size="lg"
            target="_blank"
          >
            Chat with Mona Support on WhatsApp
          </Button>
        </div>
      </Section>

      <Section>
        <CTABand
          title="Upgrade Your Smartphone Today"
          primaryText="Find a Participating Store"
          primaryTo="/partner-stores"
        />
      </Section>
    </>
  );
}
