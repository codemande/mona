import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, MapPin, MessageCircle, ArrowRight, Smartphone, AlertCircle } from "lucide-react";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import CTABand from "../components/ui/CTABand";
import Seo from "../components/layout/Seo";
import DeviceGrid from "../components/widgets/DeviceGrid";
import Accordion from "../components/ui/Accordion";
import { getModelBySlug, waLink } from "../api/client";
import { MODELS, BRANDS } from "../data/devices";
import { FAQS } from "../data/faqs";

export default function SupportedDevicesPage() {
  const { brand, model } = useParams();
  const [modelDetail, setModelDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (model) {
      setLoading(true);
      getModelBySlug(brand, model).then((data) => {
        setModelDetail(data);
        setLoading(false);
      });
    } else {
      setModelDetail(null);
    }
  }, [brand, model]);

  // Model Detail View
  if (model && modelDetail) {
    const formattedPrice = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(modelDetail.priceAnnual);

    return (
      <>
        <Seo
          title={`${modelDetail.modelName} Protection Price & Coverage | Mona Protect`}
          description={`Get official Mona Smartphone Protection for ${modelDetail.modelName}. Annual rate: ${formattedPrice}. Covers screen repairs, liquid damage, and back glass replacement in Nigeria.`}
        />

        <Section background="bgBlue">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Link to="/supported-devices" style={{ fontSize: "0.9rem", color: "var(--color-primary)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px", marginBottom: "16px" }}>
              ← Back to All Supported Devices
            </Link>

            <span style={{ display: "block", color: "var(--color-primary)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>
              {modelDetail.brandName} Smartphone Coverage
            </span>

            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "8px 0 16px 0", color: "var(--color-navy)" }}>
              {modelDetail.modelName} Protection Plan
            </h1>

            <div style={{ background: "#fff", padding: "32px", borderRadius: "6px", border: "1px solid var(--color-border)", boxShadow: "var(--shadow-md)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "24px" }}>
                <div>
                  <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", fontWeight: 600 }}>ANNUAL PROTECTION PRICE</div>
                  <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}>
                    {formattedPrice} <span style={{ fontSize: "1rem", fontWeight: 500, color: "var(--color-text-muted)" }}>/ year</span>
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--color-primary)", fontWeight: 600 }}>Or ~₦{modelDetail.priceMonthly.toLocaleString()} / month</div>
                </div>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Button to="/partner-stores" variant="primary" size="lg">
                    Check Eligibility & Store Locations
                  </Button>
                  <Button
                    href={waLink(`Hello Mona, I am inquiring about protection for my ${modelDetail.modelName}.`)}
                    variant="whatsapp"
                    size="lg"
                    target="_blank"
                  >
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>

              <div style={{ padding: "16px", background: "var(--color-bg-soft)", border: "1px dashed var(--color-primary)", borderRadius: "6px", marginBottom: "24px", fontSize: "0.9rem" }}>
                <strong>Physical Inspection Requirement:</strong> A 3-minute physical check is required at any Mona Partner Store before your policy activates.
              </div>

              <h3 style={{ fontSize: "1.2rem", marginBottom: "16px", color: "var(--color-navy)" }}>Included Coverage Highlights:</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                {modelDetail.coverageHighlights.map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.95rem" }}>
                    <CheckCircle2 size={18} color="var(--color-success)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section background="bgSoft">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", marginBottom: "24px" }}>Available Mona Services for {modelDetail.modelName}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
              <div style={{ background: "#fff", padding: "20px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
                <h4 style={{ color: "var(--color-navy)", marginBottom: "8px" }}>Protect My Phone</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Full annual accident coverage for your current phone.</p>
              </div>
              <div style={{ background: "#fff", padding: "20px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
                <h4 style={{ color: "var(--color-navy)", marginBottom: "8px" }}>Buy & Pay Later</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Buy new with 1-year protection bundled.</p>
              </div>
              <div style={{ background: "#fff", padding: "20px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
                <h4 style={{ color: "var(--color-navy)", marginBottom: "8px" }}>Fix & Pay Later</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Repair cracked screen & activate protection.</p>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <CTABand />
        </Section>
      </>
    );
  }

  // Brand / All Index View
  return (
    <>
      <Seo
        title="Supported Devices Index | Mona Protect Nigeria"
        description="Browse all eligible Apple iPhone, Samsung Galaxy, and Google Pixel models supported for Mona Smartphone Protection, repairs, and pay-later plans."
      />

      <Section background="bgBlue">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "var(--color-primary)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Device Catalog
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", margin: "12px 0 16px 0", color: "var(--color-navy)" }}>
            Supported Smartphone Models
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--color-text)", lineHeight: 1.6 }}>
            Select your brand or search for your smartphone model to check protection pricing, coverage options, and partner repair store availability.
          </p>
        </div>
      </Section>

      <Section>
        <DeviceGrid activeBrandFilter={brand || "all"} />
      </Section>

      <Section background="bgSoft">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "32px", color: "var(--color-navy)" }}>Device Eligibility FAQs</h2>
          <Accordion items={FAQS.slice(0, 4)} />
        </div>
      </Section>

      <Section>
        <CTABand />
      </Section>
    </>
  );
}
