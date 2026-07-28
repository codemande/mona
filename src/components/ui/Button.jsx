import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { buttonMotion } from "../../styles/motion";
import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary", // primary, secondary, outline, whatsapp, ghost, link
  size = "md",          // sm, md, lg
  to,
  href,
  onClick,
  type = "button",
  fullWidth = false,
  disabled = false,
  className = "",
  icon: Icon,
  iconPosition = "left",
  target,
  rel,
  id
}) {
  const combinedClassName = [
    styles.btn,
    styles[variant] || styles.primary,
    styles[size] || styles.md,
    fullWidth ? styles.fullWidth : "",
    disabled ? styles.disabled : "",
    className
  ].filter(Boolean).join(" ");

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={size === "sm" ? 16 : size === "lg" ? 22 : 18} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={size === "sm" ? 16 : size === "lg" ? 22 : 18} />}
    </>
  );

  if (to && !disabled) {
    return (
      <motion.div {...buttonMotion} style={{ display: fullWidth ? "block" : "inline-block" }}>
        <Link id={id} to={to} className={combinedClassName} onClick={onClick}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href && !disabled) {
    return (
      <motion.div {...buttonMotion} style={{ display: fullWidth ? "block" : "inline-block" }}>
        <a id={id} href={href} target={target} rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)} className={combinedClassName} onClick={onClick}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      id={id}
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      {...(!disabled ? buttonMotion : {})}
    >
      {content}
    </motion.button>
  );
}
