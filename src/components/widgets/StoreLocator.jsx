import { useState, useEffect } from "react";
import { MapPin, Phone, Clock, Search, MessageCircle, Navigation, Store as StoreIcon } from "lucide-react";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import { getStores, waLink } from "../../api/client";
import { CITIES } from "../../data/cities";
import { NIGERIAN_STATES } from "../../data/nigerianStates";
import styles from "./StoreLocator.module.css";

const SERVICES_OPTIONS = [
  { value: "Smartphone Protection", label: "Smartphone Protection" },
  { value: "Phone Repairs", label: "Phone Repairs" },
  { value: "Buy Now, Get Protected & Pay Later", label: "Buy Now & Pay Later" },
  { value: "Fix Now, Get Protected & Pay Later", label: "Fix Now & Pay Later" }
];

export default function StoreLocator({ initialCity = "" }) {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [selectedService, setSelectedService] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function loadStores() {
      setLoading(true);
      const data = await getStores({
        state: selectedState,
        city: selectedCity,
        service: selectedService,
        query: searchQuery
      });
      setStores(data);
      setLoading(false);
    }
    loadStores();
  }, [selectedState, selectedCity, selectedService, searchQuery]);

  return (
    <div>
      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <Input
          label="Search Store or Area"
          placeholder="e.g. Wuse II, Ikeja, Lekki..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon={Search}
        />

        <Select
          label="Filter by City"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          options={CITIES.map((c) => ({ value: c.name, label: `${c.name} (${c.state})` }))}
          placeholder="All Cities"
        />

        <Select
          label="Filter by State"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          options={NIGERIAN_STATES.map((s) => ({ value: s, label: s }))}
          placeholder="All States"
        />

        <Select
          label="Filter by Service"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          options={SERVICES_OPTIONS}
          placeholder="All Services"
        />
      </div>

      {/* Map View Placeholder */}
      <div className={styles.mapSection}>
        <div style={{ position: "absolute", top: 16, left: 16, background: "#fff", padding: "6px 12px", borderRadius: "4px", fontSize: "0.8rem", fontWeight: 600, border: "1px solid #ddd" }}>
          Interactive Mona Partner Locator
        </div>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          {stores.slice(0, 4).map((s, idx) => (
            <div key={s.id} className={styles.mapMarker}>
              <MapPin size={16} />
              <span>{s.name.split("-")[0]} ({s.city})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stores List */}
      {loading ? (
        <div style={{ textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-primary)", textAlign: "center", padding: "40px" }}>
          Loading Partner Stores...
        </div>
      ) : stores.length > 0 ? (
        <div className={styles.grid}>
          {stores.map((store) => (
            <div key={store.id} className={styles.storeCard}>
              <img src={store.image} alt={store.name} className={styles.storeImage} loading="lazy" />
              <div className={styles.storeContent}>
                <h3 className={styles.storeName}>{store.name}</h3>

                <div className={styles.addressRow}>
                  <MapPin size={18} className={styles.icon} />
                  <span>{store.address}, {store.city}, {store.state}</span>
                </div>

                <div className={styles.hoursRow}>
                  <Clock size={16} />
                  <span>{store.hours}</span>
                </div>

                <div className={styles.servicesTagList}>
                  {store.services.map((srv, idx) => (
                    <span key={idx} className={styles.tag}>
                      {srv}
                    </span>
                  ))}
                </div>

                <div className={styles.storeActions}>
                  <Button
                    href={`https://maps.google.com/?q=${encodeURIComponent(store.name + " " + store.address)}`}
                    target="_blank"
                    variant="outline"
                    size="sm"
                    icon={Navigation}
                  >
                    Directions
                  </Button>
                  <Button
                    href={waLink(`Hello, I want to visit ${store.name} in ${store.city} for smartphone service.`)}
                    target="_blank"
                    variant="whatsapp"
                    size="sm"
                    icon={MessageCircle}
                  >
                    WhatsApp Store
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <StoreIcon size={48} style={{ color: "var(--color-text-muted)", margin: "0 auto 16px auto" }} />
          <h3>Mona Is Not Available in This City Yet</h3>
          <p>We are rapidly expanding our partner store network across Nigeria. Chat with our support team to request a partner store in your location or explore digital protection options.</p>
          <Button
            href={waLink("Hello Mona, I am located in a city with no store yet. How can I get my phone protected or serviced?")}
            target="_blank"
            variant="whatsapp"
            size="lg"
          >
            Chat With Mona Support
          </Button>
        </div>
      )}
    </div>
  );
}
