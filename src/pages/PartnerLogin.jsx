import { useState } from "react";
import { Briefcase, Lock, Mail, ArrowRight } from "lucide-react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Toast from "../components/ui/Toast";
import Seo from "../components/layout/Seo";
import { submitPartnerLogin } from "../api/client";

export default function PartnerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: wire real auth backend
      const res = await submitPartnerLogin({ email, password });
      setLoggedInUser(res.user);
      setToast({ type: "success", message: "Partner portal access granted!" });
    } catch (err) {
      setToast({ type: "error", message: err.message || "Invalid merchant credentials." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title="Partner Merchant Login | Mona Merchant Portal"
        description="Authorised merchant login for Mona Protect retail stores and repair centers in Nigeria."
      />

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <Section background="bgSoft">
        <div style={{ maxWidth: "480px", margin: "0 auto", background: "#fff", padding: "40px", borderRadius: "6px", border: "1px solid var(--color-border)", boxShadow: "var(--shadow-md)" }}>
          <div style={{ width: "48px", height: "48px", background: "var(--color-bg-blue)", color: "var(--color-primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px auto" }}>
            <Briefcase size={24} />
          </div>

          <h1 style={{ fontSize: "1.75rem", color: "var(--color-navy)", textAlign: "center", marginBottom: "8px" }}>
            Partner Portal Sign In
          </h1>
          <p style={{ color: "var(--color-text-muted)", textAlign: "center", marginBottom: "28px", fontSize: "0.95rem" }}>
            For registered retail store managers and certified technicians.
          </p>

          {loggedInUser ? (
            <div style={{ padding: "20px", background: "var(--color-bg-blue)", borderRadius: "6px", textAlign: "center" }}>
              <h3 style={{ color: "var(--color-navy)", marginBottom: "8px" }}>Merchant Terminal: {loggedInUser.email}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text)", marginBottom: "16px" }}>
                Ready to conduct customer physical device checks and store settlements.
              </p>
              <Button onClick={() => setLoggedInUser(null)} variant="outline" size="sm">
                Sign Out Merchant Terminal
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <Input
                label="Partner Business Email"
                type="email"
                placeholder="store@merchant.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={Mail}
                required
              />

              <Input
                label="Store Access Password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={Lock}
                required
              />

              <Button
                type="submit"
                variant="primary"
                fullWidth
                size="lg"
                disabled={loading}
                icon={ArrowRight}
                iconPosition="right"
              >
                {loading ? "Authenticating Terminal..." : "Access Merchant Terminal"}
              </Button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}
