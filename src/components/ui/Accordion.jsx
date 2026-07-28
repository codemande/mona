import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import styles from "./Accordion.module.css";

export default function Accordion({ items = [], allowMultiple = false }) {
  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleItem = (index) => {
    if (allowMultiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={index}
            className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
          >
            <button
              className={styles.trigger}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              <span>{item.question || item.title}</span>
              <ChevronDown
                size={20}
                className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  className={styles.contentWrapper}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={styles.content}>{item.answer || item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
