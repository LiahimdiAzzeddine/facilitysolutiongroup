import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaExclamationTriangle, FaClipboardCheck, FaCheckCircle } from 'react-icons/fa';
import './Features.css';

function Features() {
  const features = [
    {
      title: 'INSTALLATION & MAINTENANCE',
      description: 'Toute les installations sont assurées par nos équipes techniques spécialisées.',
      icon: <FaTools />
    },
    {
      title: 'INTERVENTION D\'URGENCE',
      description: 'Nos équipes s\'adaptent à vos contraintes et interviennent ou installent directement sur site.',
      icon: <FaExclamationTriangle />
    },
    {
      title: 'CONSEILS & AUDIT',
      description: 'Nos experts réalisent une évaluation gratuite des risques en fonction des besoins spécifiques de votre site.',
      icon: <FaClipboardCheck />
    },
    {
      title: 'IMPLICATION',
      description: 'Personnels qualifiés, procédures métiers, respect de votre cahier des charges, conformité des normes en vigueur font partie de nos exigences.',
      icon: <FaCheckCircle />
    }
  ];

  return (
    <section className="section features">
      <div className="features-bg"></div>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          FACILITY SOLUTION GROUP<br/>
          <span className="highlight">Bénéficiez de l'Assistance Technique 24/7</span>
        </motion.h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(231, 76, 60, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="feature-icon-wrapper"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="feature-icon">{feature.icon}</div>
              </motion.div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-number">0{index + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
