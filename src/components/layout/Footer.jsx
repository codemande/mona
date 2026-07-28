import { Link } from "react-router-dom";
import { ShieldCheck, MapPin, Mail, Phone, ExternalLink, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import Container from "../ui/Container";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {/* Brand & Address Column */}
          <div className={styles.brandCol}>
            <Link to="/" className={styles.logoWrapper}>
              <div className={styles.logoIcon}>M</div>
              <span className={styles.brandName}>Mona Protect</span>
            </Link>

            <p className={styles.description}>
              Official smartphone protection, repairs, and flexible payments for iPhone, Samsung Galaxy, and Google Pixel in Nigeria.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} />
                <span>Plot 502, Dalaba Street, Off Michael Okpara Way, Wuse Zone 5, Abuja</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={16} className={styles.contactIcon} />
                <a href="mailto:hello@monaprotect.com" className={styles.link}>hello@monaprotect.com</a>
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} className={styles.contactIcon} />
                <a href="tel:+2347048100101" className={styles.link}>+234 704 810 0101</a>
              </div>
            </div>

            <div className={styles.badgeBox}>
              <ShieldCheck size={28} style={{ color: "var(--color-cyan)", flexShrink: 0 }} />
              <div className={styles.badgeText}>
                <strong>Mona Technologies Ltd (RC 7480610)</strong>
                Licensed Insurtech operator under NAICOM 2025 Insurtech Guidelines.
              </div>
            </div>
          </div>

          {/* Column 1: Products */}
          <div>
            <h4 className={styles.colTitle}>Products</h4>
            <div className={styles.linkList}>
              <Link to="/phone-protection" className={styles.link}>Protect My Phone</Link>
              <Link to="/buy-now-get-protected-pay-later" className={styles.link}>Buy Now & Get Protected</Link>
              <Link to="/fix-now-get-protected-pay-later" className={styles.link}>Fix Now & Get Protected</Link>
              <Link to="/protection-calculator" className={styles.link}>Protection Calculator</Link>
              <Link to="/supported-devices" className={styles.link}>Supported Devices</Link>
            </div>
          </div>

          {/* Column 2: Find Mona */}
          <div>
            <h4 className={styles.colTitle}>Find Mona</h4>
            <div className={styles.linkList}>
              <Link to="/partner-stores" className={styles.link}>Partner Stores</Link>
              <Link to="/partner-stores/abuja" className={styles.link}>Abuja Stores</Link>
              <Link to="/partner-stores/lagos" className={styles.link}>Lagos Stores</Link>
              <Link to="/partner-stores/port-harcourt" className={styles.link}>Port Harcourt</Link>
              <Link to="/support" className={styles.link}>Contact & Support</Link>
            </div>
          </div>

          {/* Column 3: For Businesses */}
          <div>
            <h4 className={styles.colTitle}>For Businesses</h4>
            <div className={styles.linkList}>
              <Link to="/become-a-partner" className={styles.link}>Become a Partner Store</Link>
              <Link to="/partner-login" className={styles.link}>Partner Login</Link>
              <Link to="/business-financing" className={styles.link}>Business Financing</Link>
              <Link to="/support" className={styles.link}>Partner Support</Link>
            </div>
          </div>

          {/* Column 4: Account & Company */}
          <div>
            <h4 className={styles.colTitle}>Account</h4>
            <div className={styles.linkList}>
              <Link to="/customer-login" className={styles.link}>Customer Login</Link>
              <Link to="/partner-login" className={styles.link}>Partner Login</Link>
              <Link to="/support" className={styles.link}>Request a Repair</Link>
              <Link to="/faqs" className={styles.link}>Help & FAQs</Link>
            </div>
          </div>

          {/* Column 5: Legal */}
          <div>
            <h4 className={styles.colTitle}>Legal</h4>
            <div className={styles.linkList}>
              <Link to="/terms" className={styles.link}>Terms of Service</Link>
              <Link to="/privacy" className={styles.link}>Privacy Policy</Link>
              <Link to="/terms#protection" className={styles.link}>Protection Terms</Link>
              <Link to="/terms#disclosures" className={styles.link}>Financing Disclosures</Link>
              <Link to="/terms#regulatory" className={styles.link}>Regulatory Info</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div>
            © {currentYear} Mona Technologies Ltd. All rights reserved. Registered in Nigeria (RC 7480610).
          </div>
          <div className={styles.socials}>
            <a href="https://instagram.com/monaprotect" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com/monaprotect" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="https://facebook.com/monaprotect" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://linkedin.com/company/monaprotect" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
