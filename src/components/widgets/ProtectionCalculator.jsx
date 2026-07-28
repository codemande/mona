import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ShieldAlert, Smartphone, ArrowRight, Check } from "lucide-react";
import Select from "../ui/Select";
import Button from "../ui/Button";
import { BRANDS, MODELS } from "../../data/devices";
import { waLink } from "../../api/client";
import styles from "./ProtectionCalculator.module.css";

export default function ProtectionCalculator({ defaultBrand = "apple" }) {
  const [selectedBrand, setSelectedBrand] = useState(defaultBrand);
  const [selectedModelId, setSelectedModelId] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [modelOptions, setModelOptions] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

  useEffect(() => {
    const filtered = MODELS.filter((m) => m.brandId === selectedBrand);
    setModelOptions(filtered);
    if (filtered.length > 0) {
      setSelectedModelId(filtered[0].id);
      setSelectedModel(filtered[0]);
    } else {
      setSelectedModelId("");
      setSelectedModel(null);
    }
  }, [selectedBrand]);

  const handleBrandChange = (brandId) => {
    setSelectedBrand(brandId);
    setShowResult(false);
  };

  const handleModelChange = (e) => {
    const modelId = e.target.value;
    setSelectedModelId(modelId);
    const m = MODELS.find((item) => item.id === modelId);
    setSelectedModel(m || null);
    setShowResult(false);
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (selectedModel) {
      setShowResult(true);
    }
  };

  const formattedPrice = selectedModel
    ? new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(selectedModel.priceAnnual)
    : "";

  const whatsappMsg = selectedModel
    ? `Hello Mona, I calculated protection for my ${selectedModel.modelName} (Price: ${formattedPrice}/year). I would like to proceed with physical inspection.`
    : "Hello Mona, I would like to protect my phone.";

  return (
    <div className={styles.calculatorCard}>
      {/* Step 1: Select Brand */}
      <div className={styles.stepTitle}>
        <Smartphone size={18} color="var(--color-primary)" />
        <span>Step 1: Select Your Device Brand</span>
      </div>

      <div className={styles.brandGrid}>
        {BRANDS.map((brand) => (
          <button
            key={brand.id}
            type="button"
            className={`${styles.brandBtn} ${selectedBrand === brand.id ? styles.brandActive : ""}`}
            onClick={() => handleBrandChange(brand.id)}
          >
            <Smartphone size={24} />
            <span>{brand.displayName}</span>
          </button>
        ))}
      </div>

      {/* Step 2: Select Model */}
      <div className={styles.stepTitle}>
        <span>Step 2: Select Your Model</span>
      </div>

      <form onSubmit={handleCalculate}>
        <Select
          id="model-select"
          value={selectedModelId}
          onChange={handleModelChange}
          options={modelOptions.map((m) => ({ value: m.id, label: m.modelName }))}
          placeholder="Choose your smartphone model"
          required
        />

        <Button
          type="submit"
          variant="primary"
          fullWidth
          size="lg"
          icon={ArrowRight}
          iconPosition="right"
        >
          See My Protection Price
        </Button>
      </form>

      {/* Step 3: Result Card */}
      <AnimatePresence>
        {showResult && selectedModel && (
          <motion.div
            className={styles.resultCard}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.priceHeader}>
              <div>
                <div className={styles.priceLabel}>Your One-Year Protection Price</div>
                <h3 style={{ fontSize: "1.25rem", marginTop: "2px" }}>{selectedModel.modelName}</h3>
                <div className={styles.priceSubtext}>Or ~₦{selectedModel.priceMonthly.toLocaleString()}/month</div>
              </div>
              <div className={styles.priceValue}>{formattedPrice}</div>
            </div>

            <div className={styles.includesList}>
              <div className={styles.includeItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Screen Repair & Replacement</span>
              </div>
              <div className={styles.includeItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Liquid Damage Protection</span>
              </div>
              <div className={styles.includeItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Back Glass & Camera Repairs</span>
              </div>
              <div className={styles.includeItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Authorised Mona Repair Network</span>
              </div>
            </div>

            <div className={styles.noticeBox}>
              <ShieldAlert size={20} style={{ flexShrink: 0, color: "var(--color-primary)" }} />
              <div>
                <strong>Physical Inspection Required:</strong> A 3-minute physical and diagnostic verification is required at an authorised Mona Partner Store before your policy activates.
              </div>
            </div>

            <div className={styles.actions}>
              <Button to="/partner-stores" variant="primary" size="md">
                Choose a Partner Store
              </Button>
              <Button href={waLink(whatsappMsg)} variant="whatsapp" size="md" target="_blank">
                Continue on WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
