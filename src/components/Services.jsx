import React from 'react';
import { motion } from 'framer-motion';
import { FaSnowflake, FaBolt, FaFire, FaWrench } from 'react-icons/fa';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'CVC',
      description: 'FSG Maroc assure la maintenance de vos systèmes CVC : Climatisation - Ventilation - Chauffage.',
      image: 'https://facilitysolutiongroup.ma/wp-content/uploads/2024/01/service-cvc.jpg',
      icon: <FaSnowflake />,
      link: '/services'
    },
    {
      title: 'Electricité Industrielle',
      description: 'Hors-terre, sous-terre, la transmission de l\'énergie qui provient d\'un distributeur d\'énergie',
      image: 'https://facilitysolutiongroup.ma/wp-content/uploads/2024/01/service-elec.jpg',
      icon: <FaBolt />,
      link: '/services'
    },
    {
      title: 'Gaz, Fluides Spéciaux',
      description: 'Travaux d\'installation et de maintenance de gaz et fluides spéciaux.',
      image: 'https://facilitysolutiongroup.ma/wp-content/uploads/2024/01/service-gaz.jpg',
      icon: <FaFire />,
      link: '/services'
    },
    {
      title: 'froid Industriel',
      description: 'Vos besoins professionnels en matière de froid passent par le maintien d\'une température idéale pour vos produits.',
      image: 'https://facilitysolutiongroup.ma/wp-content/uploads/2024/01/service-froid.jpg',
      icon: <FaWrench />,
      link: '/services'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">Votre fidélité est la preuve de notre #Expertise</p>
          <h2 className="section-title">Un service global pour une efficacité maximal</h2>
        </motion.div>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
            >
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-overlay">
                  <div className="service-icon">{service.icon}</div>
                </div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <motion.a 
                  href={service.link} 
                  className="service-link"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  En savoir plus →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
