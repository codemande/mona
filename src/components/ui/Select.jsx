import { ChevronDown } from "lucide-react";
import styles from "./Select.module.css";

export default function Select({
  label,
  id,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  error,
  required = false,
  disabled = false,
  className = ""
}) {
  return (
    <div className={`${styles.fieldGroup} ${className}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label} {required && <span style={{ color: "var(--color-danger)" }}>*</span>}
        </label>
      )}
      <div className={styles.selectWrapper}>
        <select
          id={id}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`${styles.select} ${error ? styles.hasError : ""}`}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value ?? opt.id ?? opt} value={opt.value ?? opt.id ?? opt}>
              {opt.label ?? opt.name ?? opt}
            </option>
          ))}
        </select>
        <ChevronDown size={18} className={styles.chevron} />
      </div>
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}
