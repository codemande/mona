import styles from "./Input.module.css";

export default function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
  icon: Icon,
  className = "",
  rows,
  ...props
}) {
  const isTextarea = type === "textarea";

  return (
    <div className={`${styles.fieldGroup} ${className}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label} {required && <span style={{ color: "var(--color-danger)" }}>*</span>}
        </label>
      )}
      <div className={styles.inputWrapper}>
        {Icon && !isTextarea && (
          <div className={styles.icon}>
            <Icon size={18} />
          </div>
        )}
        {isTextarea ? (
          <textarea
            id={id}
            rows={rows || 4}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={`${styles.input} ${error ? styles.hasError : ""}`}
            {...props}
          />
        ) : (
          <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={`${styles.input} ${Icon ? styles.inputHasIcon : ""} ${error ? styles.hasError : ""}`}
            {...props}
          />
        )}
      </div>
      {error && <p className={styles.errorText}>{error}</p>}
      {helperText && !error && <p className={styles.helperText}>{helperText}</p>}
    </div>
  );
}
