import { useLocation } from "react-router-dom";
import { ShieldCheck, CheckCircle2, XCircle, Smartphone, Store, ArrowRight, MessageCircle } from "lucide-react";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import CTABand from "../components/ui/CTABand";
import Seo from "../components/layout/Seo";
import ProtectionCalculator from "../components/widgets/ProtectionCalculator";
import { waLink } from "../api/client";

export default function ProtectPhone() {
  const location = useLocation();
  const isInsuranceVariant = location.pathname.includes("insurance");

  const h1Text = isInsuranceVariant 
    ? "Smartphone Insurance & Screen Protection in Nigeria" 
    : "Smartphone Protection in Nigeria";

  return (
    <>
      <Seo
        title={isInsuranceVariant ? "Smartphone Insurance Nigeria | Mona Protect" : "Protect My Phone | Mona Smartphone Protection"}
        description="Official smartphone protection for eligible iPhone, Samsung Galaxy, and Google Pixel devices in Nigeria. Covers accidental screen cracks, liquid damage, and glass replacement."
      />

      {/* Page Header */}
      <Section background="bgBlue">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "var(--color-primary)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Official Device Coverage
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", margin: "12px 0 16px 0", color: "var(--color-navy)" }}>
            {h1Text}
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--color-text)", lineHeight: 1.6, marginBottom: "28px" }}>
            Safeguard your eligible Apple iPhone, Samsung Galaxy, or Google Pixel against accidental drops, shattered screens, and liquid damage. Enjoy fast walk-in repairs at authorised partner stores across Nigeria.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Button to="/protection-calculator" size="lg" variant="primary">
              Check Protection Price
            </Button>
            <Button to="/partner-stores" size="lg" variant="secondary">
              Find a Partner Store
            </Button>
            <Button
              href={waLink("Hello Mona, I want to protect my phone. Can you guide me through physical inspection?")}
              size="lg"
              variant="whatsapp"
              target="_blank"
            >
              Continue on WhatsApp
            </Button>
          </div>
        </div>
      </Section>

      {/* Calculator Section */}
      <Section
        badge="Instant Rates"
        title="Calculate Protection Cost for Your Model"
        subtitle="Select your smartphone model to view your annual rate instantly."
      >
        <ProtectionCalculator />
      </Section>

      {/* What Does Mona Protect? */}
      <Section
        background="bgSoft"
        badge="Coverage Details"
        title="What Does Mona Protect?"
        subtitle="Full protection against the most common everyday smartphone accidents."
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>1. Accidental Screen Cracks & Display Repairs</h3>
            <p style={{ color: "var(--color-text)", lineHeight: 1.6 }}>
              Whether dropped on tiles, pavement, or stairs — we cover full screen assemblies and touch panels using genuine parts.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>2. Liquid Damage & Spills</h3>
            <p style={{ color: "var(--color-text)", lineHeight: 1.6 }}>
              Accidental submersions in pools, rain, drinks, or sinks. Certified technicians restore your motherboard and component health.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>3. Rear Glass & Camera Covers</h3>
            <p style={{ color: "var(--color-text)", lineHeight: 1.6 }}>
              Cracked back glass housings and camera lens protectors are completely repaired to maintain full IP water resistance.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>4. Authorised Partner Repair Network</h3>
            <p style={{ color: "var(--color-text)", lineHeight: 1.6 }}>
              Access walk-in certified partner repair stores across Abuja, Lagos, Port Harcourt, and major commercial centers in Nigeria.
            </p>
          </div>
        </div>
      </Section>

      {/* 7-Step Onboarding List */}
      <Section
        badge="Simple Process"
        title="How to Protect Your Smartphone in 7 Simple Steps"
        subtitle="Follow these easy steps to activate active protection for your device."
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            "Select your device brand (Apple iPhone, Samsung Galaxy, or Google Pixel).",
            "Choose your specific smartphone model to view your annual protection price.",
            "Locate an authorised Mona Partner Store near you in Abuja, Lagos, or major cities.",
            "Visit the partner store for a 3-minute physical inspection to confirm screen integrity.",
            "Complete your policy activation online or directly at the store.",
            "Receive your official Mona Digital Protection Certificate via email.",
            "In case of any future accidental drop, walk into any partner store for priority repair!"
          ].map((stepText, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 20px", background: "#fff", border: "1px solid var(--color-border)", borderRadius: "6px" }}>
              <div style={{ width: "32px", height: "32px", background: "var(--color-navy)", color: "#fff", fontWeight: 800, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {idx + 1}
              </div>
              <div style={{ fontSize: "1.05rem", fontWeight: 500, color: "var(--color-ink)" }}>{stepText}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <CTABand
          title="Ready to Safeguard Your Smartphone?"
          primaryText="Check Protection Price"
          primaryTo="/protection-calculator"
          secondaryText="Find a Partner Store"
          secondaryTo="/partner-stores"
        />
      </Section>
    </>
  );
}
