import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { waLink } from "../../api/client";
import styles from "./WhatsAppFab.module.css";

export default function WhatsAppFab({ message = "Hello Mona, I would like to inquire about smartphone protection." }) {
  const url = waLink(message);

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Chat with Mona on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={styles.badge} />
      <MessageCircle size={22} />
      <span className={styles.text}>Chat on WhatsApp</span>
    </motion.a>
  );
}
