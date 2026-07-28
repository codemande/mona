import Section from "../components/ui/Section";
import Seo from "../components/layout/Seo";

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | NDPA 2023 Compliance | Mona Protect"
        description="Privacy policy and data protection guidelines for Mona Technologies Ltd (RC 7480610). Compliant with Nigeria Data Protection Act 2023."
      />

      <Section background="bgBlue">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", color: "var(--color-navy)", marginBottom: "12px" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "var(--color-text)", fontSize: "1.05rem" }}>
            <strong>Mona Technologies Ltd (RC 7480610)</strong> • Compliant with NDPA 2023
          </p>
        </div>
      </Section>

      <Section>
        <div style={{ maxWidth: "800px", margin: "0 auto", color: "var(--color-text)", lineHeight: 1.7, fontSize: "1rem" }}>
          <h2 style={{ color: "var(--color-navy)", marginTop: "24px", marginBottom: "12px" }}>1. Data Controller Identity</h2>
          <p style={{ marginBottom: "16px" }}>
            Mona Technologies Ltd (RC 7480610) acts as Data Controller under the Nigeria Data Protection Act 2023 (NDPA 2023). We are committed to processing your personal data lawfully, fairly, and transparently.
          </p>

          <h2 style={{ color: "var(--color-navy)", marginTop: "32px", marginBottom: "12px" }}>2. Personal Data We Collect</h2>
          <p style={{ marginBottom: "16px" }}>
            We collect personal information necessary to activate protection policies and fulfill repair claims, including: full name, contact phone number, email address, physical location, device IMEI/serial number, and physical inspection photos taken at partner stores.
          </p>

          <h2 style={{ color: "var(--color-navy)", marginTop: "32px", marginBottom: "12px" }}>3. Statutory Retention Period (10 Years)</h2>
          <p style={{ marginBottom: "16px" }}>
            Under Nigerian insurance and financial recordkeeping requirements, policy logs, identity verification records, and transaction histories are securely archived for up to 10 years following contract completion.
          </p>

          <h2 style={{ color: "var(--color-navy)", marginTop: "32px", marginBottom: "12px" }}>4. Data Protection Officer (DPO) Contact</h2>
          <p style={{ marginBottom: "16px" }}>
            If you wish to exercise your data subject rights under NDPA 2023 (access, correction, restriction), please contact our Data Protection Officer:
            <br />
            Email: <a href="mailto:hello@monaprotect.com">hello@monaprotect.com</a>
            <br />
            Address: Mona Technologies Ltd, Plot 502, Dalaba Street, Wuse Zone 5, Abuja, Nigeria.
          </p>
        </div>
      </Section>
    </>
  );
}
