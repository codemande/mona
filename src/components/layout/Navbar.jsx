import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ShieldCheck, 
  ShoppingBag, 
  Wrench, 
  Store, 
  Building2, 
  HelpCircle, 
  UserCheck, 
  Briefcase,
  Calculator,
  MessageCircle
} from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Close mobile menu or dropdowns on location change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  // Handle outside click to close dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const isCurrent = (path) => location.pathname === path;

  return (
    <header className={styles.header} ref={navRef}>
      <Container>
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link to="/" className={styles.logoLink} aria-label="Mona Protect Home">
            <div className={styles.logoIcon}>M</div>
            <div className={styles.brandText}>
              <span className={styles.brandName}>Mona Protect</span>
              <span className={styles.brandTagline}>Smartphone Care</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav aria-label="Main Navigation">
            <ul className={styles.navLinks}>
              {/* Products Dropdown */}
              <li className={styles.navItem}>
                <button
                  className={`${styles.link} ${styles.dropdownTrigger}`}
                  onClick={() => toggleDropdown("products")}
                  aria-expanded={openDropdown === "products"}
                >
                  <span>Products</span>
                  <ChevronDown size={16} />
                </button>

                <AnimatePresence>
                  {openDropdown === "products" && (
                    <motion.div
                      className={styles.dropdownMenu}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Link to="/phone-protection" className={styles.dropdownItem}>
                        <ShieldCheck size={18} className={styles.dropdownIcon} />
                        <div>
                          <strong>Protect My Phone</strong>
                          <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Accidental damage coverage</div>
                        </div>
                      </Link>

                      <Link to="/buy-now-get-protected-pay-later" className={styles.dropdownItem}>
                        <ShoppingBag size={18} className={styles.dropdownIcon} />
                        <div>
                          <strong>Buy Now, Get Protected & Pay Later</strong>
                          <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>New device + 1yr protection</div>
                        </div>
                      </Link>

                      <Link to="/fix-now-get-protected-pay-later" className={styles.dropdownItem}>
                        <Wrench size={18} className={styles.dropdownIcon} />
                        <div>
                          <strong>Fix Now, Get Protected & Pay Later</strong>
                          <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Repair cracked screen & protect</div>
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Direct Links */}
              <li className={styles.navItem}>
                <Link
                  to="/protection-calculator"
                  className={`${styles.link} ${isCurrent("/protection-calculator") ? styles.linkActive : ""}`}
                >
                  Protection Calculator
                </Link>
              </li>

              <li className={styles.navItem}>
                <Link
                  to="/partner-stores"
                  className={`${styles.link} ${isCurrent("/partner-stores") ? styles.linkActive : ""}`}
                >
                  Partner Stores
                </Link>
              </li>

              <li className={styles.navItem}>
                <Link
                  to="/supported-devices"
                  className={`${styles.link} ${isCurrent("/supported-devices") ? styles.linkActive : ""}`}
                >
                  Supported Devices
                </Link>
              </li>

              {/* For Businesses Dropdown */}
              <li className={styles.navItem}>
                <button
                  className={`${styles.link} ${styles.dropdownTrigger}`}
                  onClick={() => toggleDropdown("business")}
                  aria-expanded={openDropdown === "business"}
                >
                  <span>For Businesses</span>
                  <ChevronDown size={16} />
                </button>

                <AnimatePresence>
                  {openDropdown === "business" && (
                    <motion.div
                      className={styles.dropdownMenu}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Link to="/become-a-partner" className={styles.dropdownItem}>
                        <Store size={18} className={styles.dropdownIcon} />
                        <div>
                          <strong>Become a Partner Store</strong>
                          <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Join merchant network</div>
                        </div>
                      </Link>

                      <Link to="/business-financing" className={styles.dropdownItem}>
                        <Building2 size={18} className={styles.dropdownIcon} />
                        <div>
                          <strong>Business Financing</strong>
                          <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Store expansion support</div>
                        </div>
                      </Link>

                      <Link to="/support" className={styles.dropdownItem}>
                        <HelpCircle size={18} className={styles.dropdownIcon} />
                        <div>
                          <strong>Partner Support</strong>
                          <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Merchant help center</div>
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Support */}
              <li className={styles.navItem}>
                <Link
                  to="/support"
                  className={`${styles.link} ${isCurrent("/support") ? styles.linkActive : ""}`}
                >
                  Support
                </Link>
              </li>

              {/* Login Dropdown */}
              <li className={styles.navItem}>
                <button
                  className={`${styles.link} ${styles.dropdownTrigger}`}
                  onClick={() => toggleDropdown("login")}
                  aria-expanded={openDropdown === "login"}
                >
                  <span>Login</span>
                  <ChevronDown size={16} />
                </button>

                <AnimatePresence>
                  {openDropdown === "login" && (
                    <motion.div
                      className={`${styles.dropdownMenu} ${styles.dropdownMenuRight}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Link to="/customer-login" className={styles.dropdownItem}>
                        <UserCheck size={18} className={styles.dropdownIcon} />
                        <div>
                          <strong>Customer Login</strong>
                          <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Manage active plans</div>
                        </div>
                      </Link>

                      <Link to="/partner-login" className={styles.dropdownItem}>
                        <Briefcase size={18} className={styles.dropdownIcon} />
                        <div>
                          <strong>Partner Login</strong>
                          <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Merchant portal access</div>
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Get Started Dropdown / Button */}
              <li className={styles.navItem}>
                <div
                  className={`${styles.link} ${styles.dropdownTrigger}`}
                  aria-expanded={openDropdown === "getStarted"}
                >
                  <Button variant="primary" size="sm" onClick={() => toggleDropdown("getStarted")}>
                    Get Started ▾
                  </Button>
                </div>

                <AnimatePresence>
                  {openDropdown === "getStarted" && (
                    <motion.div
                      className={`${styles.dropdownMenu} ${styles.dropdownMenuRight}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Link to="/protection-calculator" className={styles.dropdownItem}>
                        <Calculator size={18} className={styles.dropdownIcon} />
                        <strong>Check Protection Price</strong>
                      </Link>

                      <Link to="/buy-now-get-protected-pay-later" className={styles.dropdownItem}>
                        <ShoppingBag size={18} className={styles.dropdownIcon} />
                        <strong>Buy Now & Get Protected</strong>
                      </Link>

                      <Link to="/fix-now-get-protected-pay-later" className={styles.dropdownItem}>
                        <Wrench size={18} className={styles.dropdownIcon} />
                        <strong>Fix Now & Get Protected</strong>
                      </Link>

                      <Link to="/partner-stores" className={styles.dropdownItem}>
                        <Store size={18} className={styles.dropdownIcon} />
                        <strong>Find a Partner Store</strong>
                      </Link>

                      <a
                        href="https://wa.me/2347048100101?text=Hello%20Mona%2C%20I%20would%20like%20to%20get%20started."
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.dropdownItem}
                      >
                        <MessageCircle size={18} style={{ color: "var(--color-success)" }} />
                        <strong style={{ color: "var(--color-success)" }}>Continue on WhatsApp</strong>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className={styles.hamburgerBtn}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </Container>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.mobileHeader}>
              <Link to="/" className={styles.logoLink} onClick={() => setMobileMenuOpen(false)}>
                <div className={styles.logoIcon}>M</div>
                <div className={styles.brandText}>
                  <span className={styles.brandName}>Mona Protect</span>
                </div>
              </Link>
              <button
                className={styles.hamburgerBtn}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Navigation Menu"
              >
                <X size={28} />
              </button>
            </div>

            <div className={styles.mobileNavList}>
              <div className={styles.mobileGroupTitle}>Products</div>
              <Link to="/phone-protection" className={styles.mobileLink}>
                <span>Protect My Phone</span>
                <ShieldCheck size={20} color="var(--color-primary)" />
              </Link>
              <Link to="/buy-now-get-protected-pay-later" className={styles.mobileLink}>
                <span>Buy Now, Get Protected & Pay Later</span>
                <ShoppingBag size={20} color="var(--color-primary)" />
              </Link>
              <Link to="/fix-now-get-protected-pay-later" className={styles.mobileLink}>
                <span>Fix Now, Get Protected & Pay Later</span>
                <Wrench size={20} color="var(--color-primary)" />
              </Link>

              <div className={styles.mobileGroupTitle}>Navigation</div>
              <Link to="/protection-calculator" className={styles.mobileLink}>
                <span>Protection Calculator</span>
              </Link>
              <Link to="/partner-stores" className={styles.mobileLink}>
                <span>Partner Stores</span>
              </Link>
              <Link to="/supported-devices" className={styles.mobileLink}>
                <span>Supported Devices</span>
              </Link>

              <div className={styles.mobileGroupTitle}>For Businesses</div>
              <Link to="/become-a-partner" className={styles.mobileLink}>
                <span>Become a Partner Store</span>
              </Link>
              <Link to="/business-financing" className={styles.mobileLink}>
                <span>Business Financing</span>
              </Link>

              <div className={styles.mobileGroupTitle}>Account</div>
              <Link to="/customer-login" className={styles.mobileLink}>
                <span>Customer Login</span>
              </Link>
              <Link to="/partner-login" className={styles.mobileLink}>
                <span>Partner Login</span>
              </Link>
            </div>

            <div className={styles.mobileCtaGroup}>
              <Button to="/protection-calculator" variant="primary" fullWidth size="lg">
                Check Protection Price
              </Button>
              <Button
                href="https://wa.me/2347048100101?text=Hello%20Mona%2C%20I%20am%20on%20mobile%20and%20would%20like%20assistance."
                variant="whatsapp"
                fullWidth
                size="lg"
                target="_blank"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
