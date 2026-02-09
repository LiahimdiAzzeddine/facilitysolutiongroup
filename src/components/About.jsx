import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './About.css';

function About() {
  const aboutCards = [
    {
      title: 'CVC',
      description: 'Climatisation, Ventilation, Chauffage',
      image: 'https://facilitysolutiongroup.ma/wp-content/uploads/2024/01/about-cvc.jpg',
      link: '/contact'
    },
    {
      title: 'Electricité Industrielle',
      description: 'Solutions électriques complètes',
      image: 'https://facilitysolutiongroup.ma/wp-content/uploads/2024/01/about-elec.jpg',
      link: '/contact'
    },
    {
      title: 'Froid Industriel',
      description: 'Systèmes de réfrigération',
      image: 'https://facilitysolutiongroup.ma/wp-content/uploads/2024/01/about-froid.jpg',
      link: '/contact'
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">FACILITY SOLUTION GROUP</h2>
          <p className="section-subtitle">
            Nous Opérons dans le Secteur Industrielle et Bâtiment, Offrant des Services de Rénovation, d'Agencement et d'Entretien.
          </p>
        </motion.div>
        
        <div className="about-content">
          {aboutCards.map((card, index) => (
            <motion.div 
              key={index} 
              className="about-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="about-card-image">
                <img src={card.image} alt={card.title} />
                <div className="about-card-overlay">
                  <span className="about-badge">Facility Solution Group</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <motion.a 
                    href={card.link} 
                    className="btn-about"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    CONTACT <FaArrowRight />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          FSG Vous assure un service personnalisé et clé en main pour tous vos travaux
        </motion.p>
      </div>
    </section>
  );
}

export default About;
