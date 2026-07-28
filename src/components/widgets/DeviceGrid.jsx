import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Search, ArrowRight, Shield } from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { BRANDS, MODELS } from "../../data/devices";
import styles from "./DeviceGrid.module.css";

export default function DeviceGrid({ activeBrandFilter = "all" }) {
  const [selectedBrand, setSelectedBrand] = useState(activeBrandFilter);
  const [search, setSearch] = useState("");

  const filteredModels = MODELS.filter((model) => {
    const matchesBrand = selectedBrand === "all" || model.brandId === selectedBrand;
    const matchesSearch = model.modelName.toLowerCase().includes(search.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  return (
    <div>
      {/* Tabs */}
      <div className={styles.tabsRow}>
        <button
          className={`${styles.tabBtn} ${selectedBrand === "all" ? styles.tabActive : ""}`}
          onClick={() => setSelectedBrand("all")}
        >
          All Brands
        </button>
        {BRANDS.map((brand) => (
          <button
            key={brand.id}
            className={`${styles.tabBtn} ${selectedBrand === brand.id ? styles.tabActive : ""}`}
            onClick={() => setSelectedBrand(brand.id)}
          >
            {brand.displayName}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <Input
          placeholder="Search model name (e.g. iPhone 16, S24 Ultra, Pixel 9)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          icon={Search}
        />
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filteredModels.map((m) => (
          <div key={m.id} className={styles.deviceCard}>
            {m.popular && <span className={styles.badgePopular}>Popular Model</span>}
            <h3 className={styles.modelName}>{m.modelName}</h3>
            <div className={styles.priceTag}>
              ₦{m.priceAnnual.toLocaleString()} <small>/ year protection</small>
            </div>

            <div className={styles.highlightsList}>
              {m.coverageHighlights.map((hl, i) => (
                <div key={i} className={styles.highlightItem}>
                  <Check size={14} color="var(--color-success)" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <Button
              to={`/supported-devices/${m.brandId}/${m.slug}`}
              variant="outline"
              size="sm"
              fullWidth
              icon={ArrowRight}
              iconPosition="right"
            >
              View Model Coverage
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
