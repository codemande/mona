import { useState } from "react";
import { Store, TrendingUp, Users, ShieldCheck, CreditCard, Headphones, Send, CheckCircle2 } from "lucide-react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Toast from "../components/ui/Toast";
import Seo from "../components/layout/Seo";
import { submitPartnerApplication, waLink } from "../api/client";
import { NIGERIAN_STATES } from "../data/nigerianStates";

export default function BecomePartnerPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    businessType: "retail_and_repair",
    address: ""
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await submitPartnerApplication(formData);
      setToast({ type: "success", message: res.message });
      setFormData({
        businessName: "",
        contactName: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        businessType: "retail_and_repair",
        address: ""
      });
    } catch (err) {
      setToast({ type: "error", message: err.message || "Failed to submit application." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title="Become a Partner Store | Mona Merchant Network"
        description="Grow your mobile phone retail or repair store by joining the Mona Partner Network. Offer protection plans, flexible payment options, and certified repair services."
      />

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <Section background="bgBlue">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "var(--color-primary)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Merchant Network Expansion
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", margin: "12px 0 16px 0", color: "var(--color-navy)" }}>
            Grow Your Business With Mona
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--color-text)", lineHeight: 1.6 }}>
            Partner with Mona to offer official smartphone protection, flexible pay-later purchasing, and certified walk-in repair services to your local customers.
          </p>
        </div>
      </Section>

      {/* 6 Benefit Cards */}
      <Section
        badge="Partner Benefits"
        title="Why Top Mobile Retailers Partner With Mona"
        subtitle="Boost store foot traffic and unlock new revenue streams for your store."
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <TrendingUp size={24} />
            </div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Increase Sales Volume</h3>
            <p style={{ color: "var(--color-text)", fontSize: "0.95rem" }}>
              Offer flexible pay-later plans that turn browsing shoppers into immediate smartphone buyers.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <Users size={24} />
            </div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Drive High Foot Traffic</h3>
            <p style={{ color: "var(--color-text)", fontSize: "0.95rem" }}>
              Receive walk-in customers looking for device physical inspections and official repair services in your city.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Official Protection Plans</h3>
            <p style={{ color: "var(--color-text)", fontSize: "0.95rem" }}>
              Sell 1-year Mona Protection plans directly at your sales counter with zero administrative hassle.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <CreditCard size={24} />
            </div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Guaranteed Store Settlement</h3>
            <p style={{ color: "var(--color-text)", fontSize: "0.95rem" }}>
              Get paid reliably for verified customer purchases and authorized repair jobs directly to your store account.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <Store size={24} />
            </div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Store Branding & Kit</h3>
            <p style={{ color: "var(--color-text)", fontSize: "0.95rem" }}>
              Receive official Mona marketing signage, digital verification software, and merchant onboarding support.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "6px", border: "1px solid var(--color-border)" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--color-bg-blue)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", marginBottom: "16px" }}>
              <Headphones size={24} />
            </div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Dedicated Merchant Support</h3>
            <p style={{ color: "var(--color-text)", fontSize: "0.95rem" }}>
              Access priority merchant desk support to quickly resolve customer claims or verification queries.
            </p>
          </div>
        </div>
      </Section>

      {/* Application Form */}
      <Section background="bgSoft">
        <div style={{ maxWidth: "720px", margin: "0 auto", background: "#fff", padding: "40px", borderRadius: "6px", border: "1px solid var(--color-border)", boxShadow: "var(--shadow-md)" }}>
          <h2 style={{ color: "var(--color-navy)", marginBottom: "8px", textAlign: "center" }}>Apply to Become a Mona Partner Store</h2>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "32px", textAlign: "center", fontSize: "0.95rem" }}>
            Fill in your store details below. Our merchant onboarding team will evaluate your location and contact you within 24 hours.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <Input
                label="Store / Business Name"
                placeholder="e.g. Slot Electronics Ikeja"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                required
              />
              <Input
                label="Contact Person Name"
                placeholder="e.g. Chukwuma Obi"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                required
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <Input
                label="Business Email"
                type="email"
                placeholder="info@yourstore.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Input
                label="Phone / WhatsApp Number"
                placeholder="+234 801 234 5678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <Select
                label="State"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                options={NIGERIAN_STATES.map((s) => ({ value: s, label: s }))}
                placeholder="Select State"
                required
              />
              <Input
                label="City / Area"
                placeholder="e.g. Wuse II, Lekki, Computer Village"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
              />
            </div>

            <Select
              label="Primary Business Activity"
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              options={[
                { value: "retail_and_repair", label: "Phone Retail & Repair Shop" },
                { value: "retail_only", label: "Mobile Phone Retail Store Only" },
                { value: "repair_only", label: "Certified Repair Center Only" }
              ]}
              required
            />

            <Input
              label="Physical Store Address"
              type="textarea"
              placeholder="Full shop address including building name and street"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              rows={3}
              required
            />

            <Button
              type="submit"
              variant="primary"
              fullWidth
              size="lg"
              disabled={loading}
              icon={Send}
            >
              {loading ? "Submitting Application..." : "Apply to Become a Partner"}
            </Button>
          </form>
        </div>
      </Section>
    </>
  );
}
