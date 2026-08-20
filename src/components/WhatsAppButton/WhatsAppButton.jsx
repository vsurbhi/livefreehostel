import styles from "./WhatsAppButton.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999020248"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
    >
      <FaWhatsapp size={30} />
    </a>
  );
}