import { useParams } from "react";
import Section from "../components/ui/Section";
import CTABand from "../components/ui/CTABand";
import Seo from "../components/layout/Seo";
import StoreLocator from "../components/widgets/StoreLocator";

export default function PartnerStoresPage() {
  const { city } = useParams();

  const formattedCity = city ? city.replace("-", " ") : "";

  return (
    <>
      <Seo
        title={formattedCity ? `Mona Partner Stores in ${formattedCity} | Locator` : "Mona Partner Store Locator | Abuja, Lagos, PH"}
        description="Find certified Mona Partner Stores and Repair Centers in Abuja, Lagos, Port Harcourt, Ibadan, and Kano for smartphone protection, walk-in repairs, and pay-later plans."
      />

      <Section background="bgBlue">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "var(--color-primary)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Walk-In Retail & Repair Network
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", margin: "12px 0 16px 0", color: "var(--color-navy)" }}>
            {formattedCity ? `Mona Partner Stores in ${formattedCity}` : "Mona Partner Store Locator"}
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--color-text)", lineHeight: 1.6 }}>
            Visit any authorised partner store for 3-minute physical device inspections, walk-in screen repairs, or to buy your next smartphone on flexible terms.
          </p>
        </div>
      </Section>

      <Section>
        <StoreLocator initialCity={formattedCity} />
      </Section>

      <Section background="bgSoft">
        <CTABand
          title="Want to Offer Mona Services in Your Store?"
          description="Join Nigeria's fastest growing insurtech merchant network. Onboard your retail shop or repair center today."
          primaryText="Become a Partner Store"
          primaryTo="/become-a-partner"
        />
      </Section>
    </>
  );
}
