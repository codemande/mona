import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import styles from "./Toast.module.css";

export default function Toast({ message, type = "success", onClose }) {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={`${styles.toast} ${styles[type] || styles.success}`}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <div className={styles.icon}>
          {type === "success" ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
        </div>
        <p className={styles.text}>{message}</p>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close notification">
          <X size={16} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
