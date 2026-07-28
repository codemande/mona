import { Link } from "react-router-dom";
import { AlertCircle, Home, Search, MessageCircle } from "lucide-react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Seo from "../components/layout/Seo";
import { waLink } from "../api/client";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found (404) | Mona Protect"
        description="The requested page could not be found. Explore Mona Protect smartphone protection, partner stores, or repair services."
      />

      <Section background="bgSoft">
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", padding: "40px 20px" }}>
          <div style={{ width: "64px", height: "64px", background: "rgba(220, 38, 38, 0.1)", color: "var(--color-danger)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px auto" }}>
            <AlertCircle size={32} />
          </div>

          <h1 style={{ fontSize: "2.5rem", color: "var(--color-navy)", marginBottom: "12px" }}>
            404 - Page Not Found
          </h1>

          <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", marginBottom: "32px", lineHeight: 1.6 }}>
            The page or route you are looking for does not exist or has been moved. Explore our popular pages below or contact support.
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Button to="/" variant="primary" icon={Home}>
              Return to Home
            </Button>
            <Button to="/partner-stores" variant="outline" icon={Search}>
              Find a Partner Store
            </Button>
            <Button href={waLink("Hello Mona, I reached a 404 page and need help finding information.")} variant="whatsapp" icon={MessageCircle} target="_blank">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
