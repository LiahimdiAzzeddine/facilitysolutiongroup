import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSnowflake, FaBolt, FaFire, FaWrench, FaArrowRight, FaCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './ServicesPage.css';

function ServicesPage() {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const services = [
    {
      title: 'GÉNIE CLIMATIQUE',
      subtitle: 'CVC - Climatisation, Ventilation & Chauffage',
      description: 'Plus de 10 ans d\'expérience dans l\'industrie de la climatisation. Notre Société conçoit, réalise et entretient tout type d\'installation de génie climatique pour les secteurs tertiaire, industriel, les collectivités et les particuliers.',
      icon: <FaSnowflake />,
      details: [
        'Ventilation naturelle (AIR) et désenfumage naturel',
        'Solutions de climatisation professionnelle',
        'Chauffage professionnel aérothermie et géothermie',
        'Installation Split et systèmes multi-split',
        'Nettoyage et entretien des filtres',
        'Recharge Fréon et fluides frigorigènes',
        'Contrôle depuis smartphone via application mobile',
        'Intervention 24/7 - Proximité garantie',
        'Économisez jusqu\'à 40% sur votre consommation'
      ],
      specialties: [
        { name: 'Concevoir', desc: 'Nos bureaux d\'études conçoivent tous types de systèmes destinés à chauffer, ventiler, rafraîchir et assainir les locaux commerciaux, industriels, professionnels et résidentiels.' },
        { name: 'Mettre en œuvre', desc: 'Nos équipes de techniciens chauffagistes et climaticiens installent sur site les équipements nécessaires au bon fonctionnement de vos installations climatiques.' },
        { name: 'Maintenir & Garantir', desc: 'Afin de préserver la qualité de vos installations, nous proposons un service d\'intervention rapide sur l\'ensemble du territoire, ainsi que toute une gamme de prestations adaptées.' },
        { name: 'Accompagner', desc: 'Nous accompagnons vos projets de développement au plan national grâce à la coordination de nos différentes entités implantées sur le territoire.' }
      ],
      image: '/energetique_froid_AdobeStock_2956959112.jpg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'GÉNIE ÉLECTRIQUE',
      subtitle: 'Distribution de Puissance & Courant Fort',
      description: 'Acteur National de premier plan en Génie Électrique. FSG s\'associe à ses clients industriels, tertiaires, et collectivités pour concevoir et réaliser leurs équipements et les assister dans l\'exploitation et la maintenance.',
      icon: <FaBolt />,
      details: [
        'Distribution de puissance (haute et moyenne tension)',
        'Installation électrique industrielle complète',
        'Mise aux normes et conformité électrique',
        'Tableaux électriques et armoires de distribution',
        'Câblage et distribution de puissance',
        'Bornes de recharge pour véhicules électriques',
        'Maintenance préventive et curative',
        'Intervention 24/7 - Agréé & Assuré',
        'Chargés d\'affaires expérimentés dédiés'
      ],
      specialties: [
        { name: 'Expertise CVC', desc: 'Le métier de l\'électricité dans le milieu de la CVC demande un savoir-faire à part entière. En plus des compétences électriques traditionnelles, l\'électricité CVC nécessite un fort acquis dans les domaines de l\'hydraulique et l\'aéraulique.' },
        { name: 'Process', desc: 'Adaptation à l\'environnement de chaque client pour répondre précisément aux besoins de process industriels.' },
        { name: 'Confort', desc: 'Solutions optimisées pour le confort des occupants dans les bâtiments tertiaires et résidentiels.' },
        { name: 'Gestion d\'énergie', desc: 'Systèmes intelligents de gestion et d\'optimisation de la consommation énergétique.' }
      ],
      image: '/ElectInstal01.jpg',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'FROID INDUSTRIEL & COMMERCIAL',
      subtitle: 'Solutions Professionnelles de Réfrigération',
      description: 'Une offre globale pour vos besoins professionnels en matière de froid. Nous intervenons dans multiples domaines d\'activités pour garantir le maintien d\'une température idéale pour vos produits.',
      icon: <FaWrench />,
      details: [
        'Chambres froides positives & négatives',
        'Vitrines réfrigérées (groupe logé/déporté)',
        'Centrales positives & négatives, Centrale CO2',
        'Groupes à eau glacée',
        'Machines à glace/glaçon',
        'Cellules de refroidissement rapide',
        'Chambres de pousse',
        'Chariots réfrigérés',
        'Optimisation énergétique des installations',
        'Maintenance et dépannage rapide'
      ],
      specialties: [
        { name: 'Froid Industriel', desc: 'Nous concevons et mettons en place des installations sur mesure de froid industriel de forte puissance pour de nombreux secteurs.' },
        { name: 'Froid Commercial', desc: 'Nous intervenons auprès de la grande distribution (hypermarchés, supermarchés, boucheries, poissonneries) et des bases logistiques.' },
        { name: 'Optimisation Énergétique', desc: 'Nous participons à la performance énergétique de vos installations et à la maîtrise de votre consommation d\'énergie en proposant des solutions économes.' },
        { name: 'Conception', desc: 'Prise en compte de la réglementation, réalisation de plans et choix d\'une solution adaptée à vos besoins.' }
      ],
      image: '/coldroom-FSG.jpg',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'COURANT FAIBLE',
      subtitle: 'Sécurité & Connectivité des Bâtiments',
      description: 'FSG assure sécurité et connectivité intelligentes de vos espaces. Nous optimisons la performance et la sécurité de vos environnements professionnels en déployant des solutions complètes de Courant Faible.',
      icon: <FaFire />,
      details: [
        'Systèmes de Sécurité Incendie (SSI)',
        'Détection & Alarme incendie',
        'Contrôle d\'accès et anti-intrusion',
        'Vidéosurveillance professionnelle (CCTV)',
        'Câblage VDI (Voix - Données - Image)',
        'Infrastructure fibre optique',
        'Réseaux locaux (LAN/WAN)',
        'Téléphonie d\'entreprise et sonorisation',
        'Gestion Technique du Bâtiment (GTB)',
        'Supervision centralisée des équipements'
      ],
      specialties: [
        { name: 'Sécurité & Sûreté', desc: 'Nous concevons, installons et maintenons l\'ensemble des systèmes nécessaires à la protection des personnes et des biens. Mise en conformité avec les normes de sécurité en vigueur.' },
        { name: 'Réseaux & Communications', desc: 'Infrastructure de communication fiable, performante et évolutive pour supporter votre transformation numérique. Architecture de réseaux et raccordement de postes de travail.' },
        { name: 'GTB', desc: 'Intégration de systèmes pour la supervision centralisée des équipements (CVC, éclairage, gestion d\'énergie).' },
        { name: 'Garantie FSG', desc: 'Intervention 24/7, proximité et satisfaction garantie. Équipes qualifiées, assurées et licenciées.' }
      ],
      image: '/kv-sirius-180308.jpg',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <motion.div
      className="services-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="services-hero">
        <div 
          className="hero-background"
          style={{ backgroundImage: 'url(/HVAC1.jpg)' }}
        >
          <div className="hero-overlay"></div>
          <div className="container mx-auto px-4">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block bg-white/15 backdrop-blur-md px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-widest mb-4 border-2 border-white/30 shadow-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Facility Solution Group
              </motion.span>
              
              <h1 className="hero-title">Nos Services</h1>
              <p className="hero-subtitle">
                Des solutions complètes et professionnelles pour tous vos besoins industriels et tertiaires
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Sections - New Modern Design */}
      <section className="services-modern-sections">
        {services.map((service, index) => {
          const serviceId = service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
          return (
            <motion.div
              key={index}
              id={serviceId}
              className={`service-modern-section ${index % 2 === 1 ? 'reverse' : ''}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
            <div className="container mx-auto px-4">
              <div className="service-modern-grid">
                {/* Image Side */}
                <motion.div 
                  className="service-modern-image-wrapper"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="service-modern-image">
                    <img src={service.image} alt={service.title} />
                    <div className={`service-modern-overlay bg-gradient-to-br ${service.color}`}></div>
                    
                    {/* Floating Icon */}
                    <motion.div 
                      className={`service-floating-icon bg-gradient-to-br ${service.color}`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  className="service-modern-content"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {/* Badge */}
                  <motion.span 
                    className="service-modern-badge"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Facility Solution Group
                  </motion.span>

                  {/* Title */}
                  <h3 className="service-modern-title">{service.title}</h3>
                  <p className="service-modern-subtitle">{service.subtitle}</p>

                  {/* Description */}
                  <p className="service-modern-description">{service.description}</p>

                  {/* Key Features - First 4 */}
                  <div className="service-modern-features">
                    {service.details.slice(0, 4).map((detail, idx) => (
                      <motion.div
                        key={idx}
                        className="service-feature-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={`feature-icon-wrapper bg-gradient-to-br ${service.color}`}>
                          <FaCheckCircle />
                        </div>
                        <span>{detail}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Expandable Section */}
                  <div className="service-expandable">
                    <button
                      className="expand-button"
                      onClick={() => toggleService(index)}
                    >
                      <span>
                        {expandedService === index ? 'Voir moins' : 'Voir plus de détails'}
                      </span>
                      {expandedService === index ? <FaChevronUp /> : <FaChevronDown />}
                    </button>

                    {expandedService === index && (
                      <motion.div
                        className="expanded-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {/* Remaining Details */}
                        <div className="expanded-details">
                          <h4 className="expanded-title">Services Complets</h4>
                          <div className="expanded-grid">
                            {service.details.slice(4).map((detail, idx) => (
                              <div key={idx} className="expanded-item">
                                <FaCheckCircle className="expanded-icon" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Specialties */}
                        {service.specialties && (
                          <div className="expanded-specialties">
                            <h4 className="expanded-title">Nos Enjeux</h4>
                            <div className="specialties-modern-grid">
                              {service.specialties.map((specialty, idx) => (
                                <div key={idx} className="specialty-modern-card">
                                  <div className={`specialty-accent bg-gradient-to-r ${service.color}`}></div>
                                  <h5 className="specialty-modern-name">{specialty.name}</h5>
                                  <p className="specialty-modern-desc">{specialty.desc}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="/contact"
                    className={`service-modern-button bg-gradient-to-r ${service.color}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Demander un devis
                    <FaArrowRight />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        );
        })}
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary-dark to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-6">
              Besoin d'un service personnalisé ?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Notre équipe d'experts est à votre disposition pour étudier vos besoins spécifiques et vous proposer une solution sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactez-nous
                <FaArrowRight />
              </motion.a>
              <motion.a
                href="tel:+212664518537"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-secondary px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                +212 664 518 537
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default ServicesPage;
