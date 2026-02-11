import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './WhatsAppButton.css';

function WhatsAppButton({ showScrollTop }) {
  // Remplacez par votre numéro WhatsApp (format international sans + ni espaces)
  const phoneNumber = '212664518537'; // Exemple: 212664518537 pour +212 664 518 537
  const message = 'Bonjour, je souhaite obtenir plus d\'informations sur vos services.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-float ${showScrollTop ? 'with-scroll-button' : ''}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contactez-nous sur WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Contactez-nous</span>
    </motion.a>
  );
}

export default WhatsAppButton;
