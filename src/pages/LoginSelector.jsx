import { UserCheck, Briefcase, ArrowRight } from "lucide-react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Seo from "../components/layout/Seo";

export default function LoginSelector() {
  return (
    <>
      <Seo
        title="Sign In | Customer & Partner Portal | Mona Protect"
        description="Select your portal type to log in to your Mona Protect account."
      />

      <Section background="bgBlue">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "var(--color-primary)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Account Portal Access
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "12px 0 16px 0", color: "var(--color-navy)" }}>
            Welcome to Mona Protect
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--color-text)", lineHeight: 1.6 }}>
            Please select your account type below to proceed to your dedicated portal.
          </p>
        </div>
      </Section>

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", maxWidth: "800px", margin: "0 auto" }}>
          {/* Customer Login Card */}
          <div style={{ background: "#fff", padding: "40px", borderRadius: "6px", border: "1px solid var(--color-border)", boxShadow: "var(--shadow-md)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "56px", height: "56px", background: "var(--color-bg-blue)", color: "var(--color-primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <UserCheck size={28} />
            </div>
            <h2 style={{ color: "var(--color-navy)", fontSize: "1.5rem", marginBottom: "8px" }}>Customer Login</h2>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "24px", lineHeight: 1.5, fontSize: "0.95rem" }}>
              Manage your active smartphone protection plans, view digital policy certificates, and submit or track repair claims.
            </p>
            <Button to="/customer-login" variant="primary" fullWidth size="lg" icon={ArrowRight} iconPosition="right">
              Continue as Customer
            </Button>
          </div>

          {/* Partner Login Card */}
          <div style={{ background: "#fff", padding: "40px", borderRadius: "6px", border: "1px solid var(--color-border)", boxShadow: "var(--shadow-md)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "56px", height: "56px", background: "var(--color-bg-blue)", color: "var(--color-primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <Briefcase size={28} />
            </div>
            <h2 style={{ color: "var(--color-navy)", fontSize: "1.5rem", marginBottom: "8px" }}>Partner Login</h2>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "24px", lineHeight: 1.5, fontSize: "0.95rem" }}>
              For authorised retail store managers and repair technicians. Access customer device verification tools and store settlement logs.
            </p>
            <Button to="/partner-login" variant="outline" fullWidth size="lg" icon={ArrowRight} iconPosition="right">
              Continue as Partner
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
