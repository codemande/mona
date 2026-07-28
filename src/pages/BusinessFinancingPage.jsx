import { useState } from "react";
import { Building2, TrendingUp, DollarSign, Store, Send, CheckCircle2 } from "lucide-react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Toast from "../components/ui/Toast";
import Seo from "../components/layout/Seo";
import { submitFinancingApplication, waLink } from "../api/client";
import { NIGERIAN_STATES } from "../data/nigerianStates";

export default function BusinessFinancingPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    state: "",
    financingPurpose: "inventory_expansion"
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await submitFinancingApplication(formData);
      setToast({ type: "success", message: res.message });
      setFormData({
        businessName: "",
        contactName: "",
        email: "",
        phone: "",
        state: "",
        financingPurpose: "inventory_expansion"
      });
    } catch (err) {
      setToast({ type: "error", message: err.message || "Submission failed." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title="Business Financing for Mobile Merchants | Mona Protect"
        description="Tailored working capital and inventory financing solutions for registered smartphone retail stores and repair centers in Nigeria."
      />

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <Section background="bgBlue">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "var(--color-primary)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Merchant Capital & Expansion
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", margin: "12px 0 16px 0", color: "var(--color-navy)" }}>
            Business Financing Solutions
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--color-text)", lineHeight: 1.6 }}>
            Empowering verified mobile phone retail stores and repair hubs with tailored capital support to scale inventory, upgrade store facilities, and meet surging customer demand.
          </p>
        </div>
      </Section>

      {/* Possible Uses */}
      <Section
        badge="Capital Allocation"
        title="How Merchants Use Mona Business Financing"
        subtitle="Designed specifically for the operational needs of smartphone businesses."
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <TrendingUp size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Device Inventory Expansion</h3>
            <p style={{ color: "var(--color-text)", fontSize: "0.95rem" }}>
              Stock brand-new iPhone, Samsung Galaxy, and Google Pixel models ahead of major shopping seasons.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <Store size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Store & Equipment Upgrades</h3>
            <p style={{ color: "var(--color-text)", fontSize: "0.95rem" }}>
              Upgrade repair bench diagnostics, display showcases, and customer experience areas in your store.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <Building2 size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>New Outlet Opening</h3>
            <p style={{ color: "var(--color-text)", fontSize: "0.95rem" }}>
              Expand your retail presence into new commercial centers across Abuja, Lagos, and key cities.
            </p>
          </div>
        </div>
      </Section>

      {/* Form */}
      <Section background="bgSoft">
        <div style={{ maxWidth: "720px", margin: "0 auto", background: "#fff", padding: "40px", borderRadius: "6px", border: "1px solid var(--color-border)", boxShadow: "var(--shadow-md)" }}>
          <h2 style={{ color: "var(--color-navy)", marginBottom: "8px", textAlign: "center" }}>Apply for Business Financing</h2>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "32px", textAlign: "center", fontSize: "0.95rem" }}>
            Available to registered mobile merchants in Nigeria. Fill in your information below to begin assessment.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <Input
                label="Registered Business Name"
                placeholder="e.g. Metro Mobile Ltd"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                required
              />
              <Input
                label="Contact Person Name"
                placeholder="e.g. Funke Adeyemi"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                required
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <Input
                label="Business Email"
                type="email"
                placeholder="financing@metromobile.ng"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Input
                label="Phone Number"
                placeholder="+234 803 111 2222"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <Select
                label="Primary State of Operation"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                options={NIGERIAN_STATES.map((s) => ({ value: s, label: s }))}
                placeholder="Select State"
                required
              />
              <Select
                label="Primary Financing Purpose"
                value={formData.financingPurpose}
                onChange={(e) => setFormData({ ...formData, financingPurpose: e.target.value })}
                options={[
                  { value: "inventory_expansion", label: "Device Inventory Purchase" },
                  { value: "store_renovation", label: "Store Renovation / Display" },
                  { value: "equipment_upgrade", label: "Repair Diagnostic Equipment" },
                  { value: "new_branch", label: "Opening New Retail Outlet" }
                ]}
                required
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              size="lg"
              disabled={loading}
              icon={Send}
            >
              {loading ? "Submitting Request..." : "Apply for Business Financing"}
            </Button>
          </form>
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginTop: "16px", textAlign: "center" }}>
            *Subject to merchant eligibility, business verification, and credit assessment terms.
          </p>
        </div>
      </Section>
    </>
  );
}
