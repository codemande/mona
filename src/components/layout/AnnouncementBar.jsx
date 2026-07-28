import styles from "./AnnouncementBar.module.css";

export default function AnnouncementBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.content}>
        <span className={styles.badge}>Official Coverage</span>
        <span>Available for eligible iPhone, Samsung Galaxy and Google Pixel devices across Nigeria.</span>
      </div>
    </div>
  );
}
