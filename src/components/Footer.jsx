import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-professional">
      <div className="footer-content">
        <div className="container mx-auto px-4">
          <div className="footer-grid">
            {/* Company Info */}
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="/logowebdark.png" 
                alt="FSG Logo" 
                className="footer-logo"
              />
              <p className="footer-description">
                Expert en maintenance multitechnique, CVC, électricité industrielle et froid industriel au Maroc.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="footer-title">Liens Rapides</h3>
              <ul className="footer-links">
                <li><a href="/">Accueil</a></li>
                <li><a href="/a-propos">À propos</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/maintenance-multitechnique">Maintenance</a></li>
                <li><a href="/e-plaquette">E-Plaquette</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="footer-title">Nos Services</h3>
              <ul className="footer-links">
                <li><a href="/services">CVC</a></li>
                <li><a href="/services">Électricité Industrielle</a></li>
                <li><a href="/services">Froid Industriel</a></li>
                <li><a href="/services">Gaz & Fluides Spéciaux</a></li>
                <li><a href="/maintenance-multitechnique">Maintenance Multitechnique</a></li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="footer-title">Contact</h3>
              <ul className="footer-contact">
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Bd Mohamed V, Technoparc T215<br />90100 Tanger, Maroc</span>
                </li>
                <li>
                  <FaPhone className="contact-icon" />
                  <a href="tel:+212664518537">+212 664 518 537</a>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:contact@facilitysolutiongroup.ma">contact@facilitysolutiongroup.ma</a>
                </li>
              </ul>
              <div className="footer-badge">
                <span className="badge-text">Disponible 24h/24 et 7j/7</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="container mx-auto px-4">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Facility Solution Group. Tous droits réservés.</p>
            <div className="footer-bottom-links">
              <a href="#">Mentions légales</a>
              <span className="separator">•</span>
              <a href="#">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
