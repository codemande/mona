import Section from "../components/ui/Section";
import Seo from "../components/layout/Seo";

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Terms of Service & Protection Terms | Mona Protect"
        description="Official Terms of Service and Protection Policy for Mona Technologies Ltd (RC 7480610), NAICOM Insurtech operator in Nigeria."
      />

      <Section background="bgBlue">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", color: "var(--color-navy)", marginBottom: "12px" }}>
            Terms of Service & Protection Policy
          </h1>
          <p style={{ color: "var(--color-text)", fontSize: "1.05rem" }}>
            <strong>Mona Technologies Ltd (RC 7480610)</strong> • Last updated: January 2026
          </p>
        </div>
      </Section>

      <Section>
        <div style={{ maxWidth: "800px", margin: "0 auto", color: "var(--color-text)", lineHeight: 1.7, fontSize: "1rem" }}>
          <h2 style={{ color: "var(--color-navy)", marginTop: "24px", marginBottom: "12px" }}>1. Regulatory Status & Corporate Information</h2>
          <p style={{ marginBottom: "16px" }}>
            Mona Protect is operated by Mona Technologies Ltd (RC 7480610), a registered technology company in the Federal Republic of Nigeria. Mona Technologies Ltd operates as a licensed Insurtech provider under the National Insurance Commission (NAICOM) 2025 Insurtech Guidelines.
          </p>

          <h2 id="protection" style={{ color: "var(--color-navy)", marginTop: "32px", marginBottom: "12px" }}>2. Smartphone Protection Terms & Eligibility</h2>
          <p style={{ marginBottom: "16px" }}>
            Protection covers accidental screen glass cracking, touch panel failure, liquid spills/submersion, and rear camera/housing glass damage for eligible Apple iPhone, Samsung Galaxy, and Google Pixel devices.
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong>Physical Inspection Condition:</strong> Active coverage for pre-owned smartphones requires mandatory physical and diagnostic inspection at an authorised Mona Partner Store. Coverage commences only upon issuance of an official Mona Digital Protection Certificate.
          </p>

          <h2 style={{ color: "var(--color-navy)", marginTop: "32px", marginBottom: "12px" }}>3. Fair Usage & Repeated Claims Clause</h2>
          <p style={{ marginBottom: "16px" }}>
            To protect the community against fraud, Mona enforces a strict Fair Usage Policy. Each annual policy allows up to two (2) approved accidental repair claims per 12-month period. Unreasonable or suspicious repeated claims within short intervals are subject to fraud investigation and potential policy termination.
          </p>

          <h2 id="disclosures" style={{ color: "var(--color-navy)", marginTop: "32px", marginBottom: "12px" }}>4. Pay-Later Financing Disclosures</h2>
          <p style={{ marginBottom: "16px" }}>
            All Buy Now, Get Protected & Pay Later and Fix Now, Get Protected & Pay Later plans offered at participating Mona Partner Stores are subject to customer identity verification, store assessment, and credit evaluation. All financing terms are communicated clearly prior to agreement execution.
          </p>

          <h2 id="regulatory" style={{ color: "var(--color-navy)", marginTop: "32px", marginBottom: "12px" }}>5. Data Retention & Privacy Compliance</h2>
          <p style={{ marginBottom: "16px" }}>
            In accordance with the Nigeria Data Protection Act 2023 (NDPA 2023) and statutory insurance regulations, financial records and policy transaction logs are retained securely for a statutory period of up to 10 years.
          </p>

          <h2 style={{ color: "var(--color-navy)", marginTop: "32px", marginBottom: "12px" }}>6. Contact & DPO Inquiries</h2>
          <p style={{ marginBottom: "16px" }}>
            For legal inquiries, regulatory questions, or Data Protection Officer (DPO) communications, please write to:
            <br />
            <strong>Mona Technologies Ltd</strong>
            <br />
            Plot 502, Dalaba Street, Off Michael Okpara Way, Wuse Zone 5, Abuja, Nigeria.
            <br />
            Email: <a href="mailto:hello@monaprotect.com">hello@monaprotect.com</a>
          </p>
        </div>
      </Section>
    </>
  );
}
