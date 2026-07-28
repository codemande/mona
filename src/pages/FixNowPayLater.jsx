import { Wrench, ShieldCheck, CheckCircle2, Clock, Store, MessageCircle } from "lucide-react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import CTABand from "../components/ui/CTABand";
import Seo from "../components/layout/Seo";
import { waLink } from "../api/client";

export default function FixNowPayLater() {
  return (
    <>
      <Seo
        title="Fix Now, Get Protected & Pay Later | Mona Repair Protection"
        description="Fix your cracked screen or damaged smartphone now with certified Mona repair partners, pay flexibly, and get 1-year protection after repair."
      />

      {/* Header */}
      <Section background="bgBlue">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "var(--color-primary)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Damaged Phone Repair Solution
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", margin: "12px 0 16px 0", color: "var(--color-navy)" }}>
            Fix Now, Get Protected & Pay Later
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--color-text)", lineHeight: 1.6, marginBottom: "28px" }}>
            Shattered screen or broken glass? Don't leave your phone damaged. Get it fixed immediately at a certified Mona partner repair store, spread the cost, and automatically receive 12 months protection against future accidents.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Button to="/partner-stores" size="lg" variant="primary">
              Find a Repair Partner
            </Button>
            <Button
              href={waLink("Hello Mona, my phone screen is damaged and I want to Fix Now, Get Protected & Pay Later.")}
              size="lg"
              variant="whatsapp"
              target="_blank"
            >
              Continue on WhatsApp
            </Button>
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginTop: "12px" }}>
            *Available to eligible customers and devices after assessment and approval.
          </p>
        </div>
      </Section>

      {/* 4 Key Benefits */}
      <Section
        badge="Key Benefits"
        title="Why Fix Your Phone with Mona?"
        subtitle="Get quality repairs today without paying the entire bill upfront."
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <Wrench size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Certified Walk-In Repairs</h3>
            <p style={{ color: "var(--color-text)", lineHeight: 1.6 }}>
              All screen replacements and glass repairs are handled by trained technicians using original, high-grade parts.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Protection Enrolled After Repair</h3>
            <p style={{ color: "var(--color-text)", lineHeight: 1.6 }}>
              Once your repair is finished, your device is enrolled in 12 months of Mona Protection to guard against future drops.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <Clock size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Flexible Payment Schedule</h3>
            <p style={{ color: "var(--color-text)", lineHeight: 1.6 }}>
              Repair your phone immediately and pay off the repair cost in manageable monthly installments.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <Store size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Authorised Partner Locations</h3>
            <p style={{ color: "var(--color-text)", lineHeight: 1.6 }}>
              Available at verified partner repair hubs in Abuja, Lagos (Computer Village, Lekki, VI), Port Harcourt, and major hubs.
            </p>
          </div>
        </div>
      </Section>

      {/* 10-Step Customer Journey */}
      <Section
        background="bgSoft"
        badge="Repair Process"
        title="The 10-Step Fix & Protect Journey"
        subtitle="From broken screen to fully protected smartphone."
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            "Locate an authorised Mona Partner Repair Store near you.",
            "Bring your damaged eligible iPhone, Samsung Galaxy, or Google Pixel to the store.",
            "The technician inspects the damage and confirms repair requirements.",
            "Request the 'Fix Now, Get Protected & Pay Later' payment plan.",
            "Provide basic customer identification for quick verification.",
            "Receive repair plan approval from the store team.",
            "Technicians replace your screen or damaged glass using high-grade components.",
            "Your repaired smartphone undergoes a final quality inspection.",
            "Your phone is automatically activated for 12 months of future Mona Smartphone Protection.",
            "Pick up your restored phone with peace of mind and pay comfortably over time!"
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

      {/* Fallback */}
      <Section>
        <div style={{ background: "var(--color-bg-blue)", padding: "40px", borderRadius: "6px", border: "1px solid rgba(0, 74, 173, 0.2)", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "12px", color: "var(--color-navy)" }}>Need Immediate Repair Advice?</h3>
          <p style={{ color: "var(--color-text)", marginBottom: "24px", lineHeight: 1.6 }}>
            Chat with our technical support team on WhatsApp. Share your device model and damage photo to receive instant guidance on the nearest repair partner store.
          </p>
          <Button
            href={waLink("Hello Mona, I have a damaged screen and need help finding a repair partner store.")}
            variant="whatsapp"
            size="lg"
            target="_blank"
          >
            Chat with Mona Repair Support
          </Button>
        </div>
      </Section>

      <Section>
        <CTABand
          title="Fix Your Cracked Screen Today"
          primaryText="Find a Repair Partner"
          primaryTo="/partner-stores"
        />
      </Section>
    </>
  );
}
