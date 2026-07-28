import { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin, Send, HelpCircle } from "lucide-react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Toast from "../components/ui/Toast";
import Seo from "../components/layout/Seo";
import Accordion from "../components/ui/Accordion";
import { submitContact, waLink } from "../api/client";
import { FAQS } from "../data/faqs";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await submitContact(formData);
      setToast({ type: "success", message: res.message });
      setFormData({ name: "", email: "", phone: "", subject: "general", message: "" });
    } catch (err) {
      setToast({ type: "error", message: err.message || "Failed to send message." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title="Contact & Customer Support | Mona Protect"
        description="Get in touch with Mona Protect support team via email, phone, or WhatsApp. Fast assistance for smartphone claims, store inspections, and partner inquiries."
      />

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <Section background="bgBlue">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "var(--color-primary)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Customer & Partner Support
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", margin: "12px 0 16px 0", color: "var(--color-navy)" }}>
            We're Here to Help You
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--color-text)", lineHeight: 1.6 }}>
            Have questions about your policy, claims processing, or partner store onboarding? Reach out to our dedicated support team in Abuja or chat directly on WhatsApp.
          </p>
        </div>
      </Section>

      {/* Direct Contact Cards */}
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          <div style={{ background: "#fff", padding: "32px", borderRadius: "6px", border: "1px solid var(--color-border)", textAlign: "center" }}>
            <div style={{ width: "48px", height: "48px", background: "var(--color-bg-blue)", color: "var(--color-primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px auto" }}>
              <Mail size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Email Support</h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", marginBottom: "16px" }}>For claims, policy queries, and merchant onboarding.</p>
            <a href="mailto:hello@monaprotect.com" style={{ fontWeight: 700, color: "var(--color-primary)" }}>hello@monaprotect.com</a>
          </div>

          <div style={{ background: "#fff", padding: "32px", borderRadius: "6px", border: "1px solid var(--color-border)", textAlign: "center" }}>
            <div style={{ width: "48px", height: "48px", background: "rgba(22, 163, 74, 0.1)", color: "var(--color-success)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px auto" }}>
              <MessageCircle size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>WhatsApp Live Desk</h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", marginBottom: "16px" }}>Instant assistance for quick questions and repair store leads.</p>
            <Button href={waLink("Hello Mona Support, I need assistance with my smartphone.")} variant="whatsapp" size="sm" target="_blank">
              Chat on WhatsApp
            </Button>
          </div>

          <div style={{ background: "#fff", padding: "32px", borderRadius: "6px", border: "1px solid var(--color-border)", textAlign: "center" }}>
            <div style={{ width: "48px", height: "48px", background: "var(--color-bg-blue)", color: "var(--color-primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px auto" }}>
              <Phone size={24} />
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Phone Line</h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", marginBottom: "16px" }}>Mon - Sat: 8:30 AM - 6:30 PM WAT.</p>
            <a href="tel:+2347048100101" style={{ fontWeight: 700, color: "var(--color-primary)" }}>+234 704 810 0101</a>
          </div>
        </div>
      </Section>

      {/* Form */}
      <Section background="bgSoft">
        <div style={{ maxWidth: "720px", margin: "0 auto", background: "#fff", padding: "40px", borderRadius: "6px", border: "1px solid var(--color-border)", boxShadow: "var(--shadow-md)" }}>
          <h2 style={{ color: "var(--color-navy)", marginBottom: "8px", textAlign: "center" }}>Send Us a Message</h2>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "32px", textAlign: "center", fontSize: "0.95rem" }}>
            Fill in your contact details below and our team will get back to you shortly.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <Input
                label="Your Full Name"
                placeholder="e.g. Samuel Kalu"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="samuel@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <Input
              label="Phone / WhatsApp Number"
              placeholder="+234 802 000 0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />

            <Input
              label="How can we help you?"
              type="textarea"
              placeholder="Describe your inquiry, device model, or repair question..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
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
              {loading ? "Sending Message..." : "Send Message"}
            </Button>
          </form>
        </div>
      </Section>

      <Section>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "32px", color: "var(--color-navy)" }}>Quick Helpful FAQs</h2>
          <Accordion items={FAQS.slice(0, 5)} />
        </div>
      </Section>
    </>
  );
}
