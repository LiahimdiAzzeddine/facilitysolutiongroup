import { motion } from 'framer-motion';
import { 
  FaSnowflake, FaBolt, FaFire, FaWrench, FaPhone, FaEnvelope, 
  FaMapMarkerAlt, FaClock, FaTools, FaBuilding, FaIndustry,
  FaShoppingCart, FaHardHat, FaCheckCircle, FaArrowRight,
  FaCogs, FaShieldAlt, FaUsers
} from 'react-icons/fa';
import SEO from '../components/SEO';
import './MaintenanceMultitechniquePage.css';

function MaintenanceMultitechniquePage() {
  const services = [
    {
      title: 'CVC',
      subtitle: 'Climatisation, Ventilation & Chauffage',
      icon: <FaSnowflake />,
      description: 'Solutions complètes pour vos systèmes de climatisation, ventilation et chauffage',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Génie Électrique',
      subtitle: 'Installations Électriques',
      icon: <FaBolt />,
      description: 'Expertise en installations électriques industrielles et tertiaires',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Froid Industriel',
      subtitle: 'Froid Industriel & Commercial',
      icon: <FaWrench />,
      description: 'Systèmes de réfrigération pour l\'industrie et le commerce',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Gaz & Fluides',
      subtitle: 'Gaz & Fluides Spéciaux',
      icon: <FaFire />,
      description: 'Installation et maintenance de systèmes de gaz et fluides spéciaux',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const sectors = [
    { name: 'Bâtiment, Santé & Loisirs', percentage: 40, color: '#d62828' },
    { name: 'Logistique & Grande Distribution', percentage: 75, color: '#003049' },
    { name: 'Industrie', percentage: 90, color: '#d62828' },
    { name: 'Infrastructures de Transport', percentage: 50, color: '#003049' }
  ];

  return (
    <motion.div
      className="maintenance-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO 
        title="Maintenance Multitechnique - Solutions Complètes FSG Maroc"
        description="Maintenance multitechnique professionnelle au Maroc : CVC, électricité, froid industriel, plomberie. Contrats de maintenance préventive et curative. Intervention 24/7."
        keywords="maintenance multitechnique maroc, contrat maintenance maroc, maintenance préventive, maintenance curative, facility management maroc, maintenance industrielle"
        url="https://facilitysolutiongroup.ma/maintenance-multitechnique"
      />
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] overflow-hidden pt-20 md:pt-[120px]">
        <div 
          className="hero-background"
          style={{ backgroundImage: 'url(/ElectInstal01.jpg)' }}
        >
          <div className="hero-overlay"></div>
          <div className="container mx-auto px-4">
            <motion.div
              className="relative z-[3] min-h-[55vh] flex flex-col justify-center items-center text-center text-white py-8 md:py-24"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                                    className="inline-block bg-white/15 backdrop-blur-md px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider md:tracking-widest mb-4 md:mb-6 border-2 border-white/30 shadow-lg"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                  >
                                   Performance. Fiabilité. Durabilité.
                                  </motion.span>
              <div className="text-3xl md:text-5xl mb-4 md:mb-6">
                <FaTools className="inline-block text-white drop-shadow-2xl" />
              </div>
              <h1 className="text-xl md:text-3xl lg:text-4xl font-black uppercase mb-4 leading-tight max-w-5xl mx-auto" style={{ textShadow: '2px 4px 12px rgba(0, 0, 0, 0.3)' }}>Maintenance Multitechnique</h1>
              <p className="text-base md:text-lg lg:text-xl opacity-95" style={{ textShadow: '1px 2px 6px rgba(0, 0, 0, 0.3)' }}>Votre fidélité est la preuve de notre expertise</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase mb-4">
              Nos <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-gray-600">
              Une expertise complète pour tous vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card-premium"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Icon Header */}
                <div className={`service-icon-header-maintenance bg-gradient-to-br ${service.color}`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  <motion.div 
                    className="relative z-10 text-white text-6xl drop-shadow-2xl"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-black text-secondary mb-2 uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-base font-semibold text-primary mb-3">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Progress Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase mb-4">
              Nos Secteurs d'Activité
            </h2>
            <p className="text-xl text-gray-600">
              Une expertise reconnue dans différents domaines
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                className="sector-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-bold text-secondary">{sector.name}</h4>
                  <span className="text-2xl font-black text-primary">{sector.percentage}%</span>
                </div>
                <div className="progress-bar-container">
                  <motion.div
                    className="progress-bar-fill"
                    style={{ backgroundColor: sector.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${sector.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary-dark to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-4">
              Pourquoi Choisir FSG ?
            </h2>
            <p className="text-xl text-gray-200">
              Des services multisites, multi activités et multi métiers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:bg-white/15 hover:border-primary transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-6xl mb-6 text-center text-white"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <FaCogs className="inline-block" />
              </motion.div>
              <h3 className="text-2xl font-black text-white uppercase mb-4 text-center">Multisites</h3>
              <p className="text-gray-200 text-center leading-relaxed">
                Nos équipes sont réparties sur tout le Maroc pour intervenir rapidement où que vous soyez
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:bg-white/15 hover:border-primary transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-6xl mb-6 text-center text-white"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <FaClock className="inline-block" />
              </motion.div>
              <h3 className="text-2xl font-black text-white uppercase mb-4 text-center">Réactivité 24/7</h3>
              <p className="text-gray-200 text-center leading-relaxed">
                Interventions avec la plus grande réactivité, 24h/24 et 7j/7 pour vos urgences
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:bg-white/15 hover:border-primary transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-6xl mb-6 text-center text-white"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <FaUsers className="inline-block" />
              </motion.div>
              <h3 className="text-2xl font-black text-white uppercase mb-4 text-center">Multi-Métiers</h3>
              <p className="text-gray-200 text-center leading-relaxed">
                Une expertise complète couvrant tous vos besoins en maintenance technique
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section 1 - Maintenance Multitechnique */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="/ElectInstal01.jpg" 
                alt="Maintenance Multitechnique" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-secondary uppercase mb-6">
                Maintenance Multitechnique
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  <strong className="text-primary">FSG</strong> offre à l'ensemble de ses clients une panoplie de services 
                  <strong> multisites, multi-activités et multi-métiers</strong>. Nos équipes sont réparties sur tout le Maroc.
                </p>
                <p>
                  Elles interviennent avec la plus grande réactivité, <strong className="text-primary">24h/24 et 7j/7</strong>, sur 
                  des prestations de maintenance.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary mt-6">
                  <h3 className="text-xl font-bold text-secondary mb-4 uppercase">Maintenance de Bâtiments</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Réalisation de travaux</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Installations électriques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Climatisation, chauffage et ventilation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Sécurité incendie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Matériel téléphonique et électrique</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section 2 - Optimiser vos Outils */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-secondary uppercase mb-6">
                Expertise Multitechnique
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Notre expertise <strong className="text-primary">multitechnique</strong> couvre l'ensemble des besoins 
                  de vos installations industrielles et tertiaires.
                </p>
                <div className="bg-gradient-to-br from-secondary to-secondary-dark p-6 rounded-xl shadow-lg text-white mt-6">
                  <h3 className="text-xl font-bold mb-4 uppercase">Nos Domaines d'Expertise</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <FaBolt className="text-primary text-xl mt-1 flex-shrink-0" />
                      <span><strong>Génie Climatique :</strong> Installation et maintenance de systèmes CVC</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaBolt className="text-primary text-xl mt-1 flex-shrink-0" />
                      <span><strong>Génie Électrique :</strong> Courants forts et faibles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaWrench className="text-primary text-xl mt-1 flex-shrink-0" />
                      <span><strong>Maintenance :</strong> Équipements industriels et bâtiments</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl mt-6">
                  <p className="text-xl font-bold text-secondary uppercase mb-3">
                    La Fiabilité de Vos Équipements
                  </p>
                  <p className="text-gray-700">
                    Le bon fonctionnement de vos bâtiments conditionne la <strong>sécurité</strong>, 
                    le <strong>confort</strong> et la <strong>performance</strong> de votre activité.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="/HVAC1.jpg" 
                alt="Multitechnique" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Footer Section */}
      <section className="py-16 bg-gradient-to-br from-secondary to-secondary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FaClock className="text-4xl mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Horaires</h3>
              <p className="text-sm opacity-90">Lundi - Vendredi</p>
              <p className="text-sm opacity-90">8h00 - 18h00</p>
              <p className="text-sm opacity-90 mt-2">Samedi : 8h00 - 13h00</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FaMapMarkerAlt className="text-4xl mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Adresse</h3>
              <p className="text-sm opacity-90">Bd Mohamed V, Technoparc T215</p>
              <p className="text-sm opacity-90">90100 Tanger, Maroc</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaPhone className="text-4xl mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Téléphone</h3>
              <a href="tel:+212664518537" className="text-sm opacity-90 hover:text-primary transition-colors">
                +212 664 518 537
              </a>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FaEnvelope className="text-4xl mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:contact@facilitysolutiongroup.ma" className="text-sm opacity-90 hover:text-primary transition-colors">
                contact@facilitysolutiongroup.ma
              </a>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black mb-4">Besoin d'une intervention ?</h3>
            <p className="mb-6 opacity-90">Notre équipe est disponible 24h/24 et 7j/7</p>
            <a
              href="/contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
            >
              Contactez-nous
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default MaintenanceMultitechniquePage;
