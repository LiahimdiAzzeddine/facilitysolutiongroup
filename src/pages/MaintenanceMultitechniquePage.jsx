import { motion } from 'framer-motion';
import {
  FaSnowflake, FaBolt, FaFire, FaWrench,
  FaClock, FaTools,
  FaCogs, FaUsers, FaShieldAlt, FaChartLine, FaMoneyBillWave,
  FaClipboardCheck, FaLeaf
} from 'react-icons/fa';
import SEO from '../components/SEO';
import './MaintenanceMultitechniquePage.css';
import { PiFanDuotone } from 'react-icons/pi';
import { GiElectricalResistance } from 'react-icons/gi';

function MaintenanceMultitechniquePage() {
  const services = [
    {
      title: 'CVC',
      subtitle: 'Climatisation, Ventilation & Chauffage',
      icon: <PiFanDuotone />,
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
      title: 'Froid',
      subtitle: 'Froid & Commercial',
      icon: <FaSnowflake />,
      description: 'Systèmes de réfrigération pour l\'industrie et le commerce',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Courant Faible',
      subtitle: 'Sécurité',
      icon: <GiElectricalResistance />,
      description: 'Centrale d\'Incendie, vidéosurveillance, contrôle d\'accès et câblage VDI.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const sectors = [
    { name: 'Industrie', percentage: 90, color: '#d62828' },
    { name: 'Logistique & Grande Distribution', percentage: 75, color: '#003049' },
    { name: 'Infrastructures de Transport', percentage: 50, color: '#d62828' },
    { name: 'Bâtiment, Santé & Loisirs', percentage: 40, color: '#003049' }
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

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase mb-4">
              Qu'est-ce que la <span className="text-primary">Maintenance Multitechnique</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Une approche globale pour coordonner l'ensemble des interventions techniques sur vos installations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100 h-full overflow-hidden group hover:border-primary transition-all duration-300">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="bg-gradient-to-br from-primary to-red-600 p-4 rounded-xl shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <FaTools className="text-4xl text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-black uppercase text-secondary">Définition</h3>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    La maintenance multitechnique regroupe toutes les activités d'entretien et de réparation liées aux équipements d'un bâtiment ou d'une infrastructure.
                  </p>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                    <h4 className="text-xl font-bold mb-5 uppercase text-secondary flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary rounded-full"></span>
                      Domaines Couverts
                    </h4>
                    <ul className="space-y-4">
                      <motion.li 
                        className="flex items-start gap-3 group/item"
                        whileHover={{ x: 5 }}
                      >
                        <div className="bg-yellow-100 p-2 rounded-lg group-hover/item:bg-yellow-200 transition-colors duration-300">
                          <FaBolt className="text-yellow-600 text-xl flex-shrink-0" />
                        </div>
                        <span className="text-gray-700 pt-1">Électricité (courants forts et faibles)</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-start gap-3 group/item"
                        whileHover={{ x: 5 }}
                      >
                        <div className="bg-blue-100 p-2 rounded-lg group-hover/item:bg-blue-200 transition-colors duration-300">
                          <PiFanDuotone className="text-blue-600 text-xl flex-shrink-0" />
                        </div>
                        <span className="text-gray-700 pt-1">Chauffage, Ventilation et Climatisation (CVC)</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-start gap-3 group/item"
                        whileHover={{ x: 5 }}
                      >
                        <div className="bg-cyan-100 p-2 rounded-lg group-hover/item:bg-cyan-200 transition-colors duration-300">
                          <FaSnowflake className="text-cyan-600 text-xl flex-shrink-0" />
                        </div>
                        <span className="text-gray-700 pt-1">Froid industriel et commercial</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-start gap-3 group/item"
                        whileHover={{ x: 5 }}
                      >
                        <div className="bg-orange-100 p-2 rounded-lg group-hover/item:bg-orange-200 transition-colors duration-300">
                          <FaFire className="text-orange-600 text-xl flex-shrink-0" />
                        </div>
                        <span className="text-gray-700 pt-1">Sécurité incendie</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-start gap-3 group/item"
                        whileHover={{ x: 5 }}
                      >
                        <div className="bg-purple-100 p-2 rounded-lg group-hover/item:bg-purple-200 transition-colors duration-300">
                          <GiElectricalResistance className="text-purple-600 text-xl flex-shrink-0" />
                        </div>
                        <span className="text-gray-700 pt-1">Systèmes de sécurité et contrôle d'accès</span>
                      </motion.li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100 h-full overflow-hidden group hover:border-secondary transition-all duration-300">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="bg-gradient-to-br from-secondary to-secondary-dark p-4 rounded-xl shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <FaCogs className="text-4xl text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-black uppercase text-secondary">Objectifs Clés</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <motion.div 
                      className="bg-gradient-to-r from-gray-50 to-white p-5 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-all duration-300 group/card"
                      whileHover={{ x: 8 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg group-hover/card:bg-primary/20 transition-colors duration-300">
                          <FaShieldAlt className="text-primary text-2xl" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-secondary mb-1">Fiabilité & Sécurité</h4>
                          <p className="text-sm text-gray-600">
                            Assurer le bon fonctionnement et la sécurité de toutes vos installations techniques
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-r from-gray-50 to-white p-5 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-all duration-300 group/card"
                      whileHover={{ x: 8 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg group-hover/card:bg-primary/20 transition-colors duration-300">
                          <FaChartLine className="text-primary text-2xl" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-secondary mb-1">Prévention des Pannes</h4>
                          <p className="text-sm text-gray-600">
                            Réduire les interruptions de service grâce à la maintenance préventive planifiée
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-r from-gray-50 to-white p-5 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-all duration-300 group/card"
                      whileHover={{ x: 8 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg group-hover/card:bg-primary/20 transition-colors duration-300">
                          <FaMoneyBillWave className="text-primary text-2xl" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-secondary mb-1">Optimisation des Coûts</h4>
                          <p className="text-sm text-gray-600">
                            Mutualisation des interventions et prolongation de la durée de vie des équipements
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-r from-gray-50 to-white p-5 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-all duration-300 group/card"
                      whileHover={{ x: 8 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg group-hover/card:bg-primary/20 transition-colors duration-300">
                          <FaClipboardCheck className="text-primary text-2xl" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-secondary mb-1">Conformité Réglementaire</h4>
                          <p className="text-sm text-gray-600">
                            Garantir la conformité de vos installations aux normes en vigueur
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-r from-gray-50 to-white p-5 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-all duration-300 group/card"
                      whileHover={{ x: 8 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg group-hover/card:bg-primary/20 transition-colors duration-300">
                          <FaLeaf className="text-primary text-2xl" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-secondary mb-1">Efficacité Énergétique</h4>
                          <p className="text-sm text-gray-600">
                            Améliorer les performances énergétiques et le confort des occupants
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bonnes Pratiques */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-black text-secondary uppercase mb-8 text-center">
              Nos <span className="text-primary">Bonnes Pratiques</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="text-4xl mb-4 text-primary inline-block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <FaClock />
                </motion.div>
                <h4 className="text-xl font-bold text-secondary mb-3 uppercase group-hover:text-primary transition-colors duration-300">Planification</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Plan de maintenance précis avec fréquences d'intervention, priorités et équipements à surveiller
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="text-4xl mb-4 text-primary inline-block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <FaCogs />
                </motion.div>
                <h4 className="text-xl font-bold text-secondary mb-3 uppercase group-hover:text-primary transition-colors duration-300">GMAO</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Digitalisation avec logiciel GMAO pour centraliser les données et suivre les interventions
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="text-4xl mb-4 text-primary inline-block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <FaUsers />
                </motion.div>
                <h4 className="text-xl font-bold text-secondary mb-3 uppercase group-hover:text-primary transition-colors duration-300">Formation</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Équipes formées et coordination des prestataires pour une exécution fluide
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="text-4xl mb-4 text-primary inline-block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <FaChartLine />
                </motion.div>
                <h4 className="text-xl font-bold text-secondary mb-3 uppercase group-hover:text-primary transition-colors duration-300">Suivi KPIs</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mesure de l'efficacité via indicateurs (MTTR, ratio préventif/correctif)
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Services Grid Section */}
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
              Nos Domaines <span className="text-primary">d'Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une couverture complète de tous vos besoins techniques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className={`h-32 bg-gradient-to-br ${service.color} relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  <motion.div
                    className="relative z-10 h-full flex items-center justify-center text-white text-6xl drop-shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black text-secondary mb-2 uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-base font-semibold text-primary mb-3">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de Maintenance Section */}
      <section className="py-20 bg-gray-50">
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
                Types de <span className="text-primary">Maintenance</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Notre approche repose sur un plan structuré combinant maintenance <strong className="text-primary">préventive, corrective et prédictive</strong> pour garantir sécurité et continuité de service.
                </p>
                <div className="bg-gradient-to-br from-secondary to-secondary-dark p-6 rounded-xl shadow-lg text-white mt-6">
                  <h3 className="text-xl font-bold mb-4 uppercase">Nos Interventions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <FaClock className="text-primary text-xl mt-1 flex-shrink-0" />
                      <span><strong>Maintenance Préventive :</strong> Planification et inspections régulières pour prévenir les pannes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaWrench className="text-primary text-xl mt-1 flex-shrink-0" />
                      <span><strong>Maintenance Corrective :</strong> Interventions rapides pour réparer les défaillances</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCogs className="text-primary text-xl mt-1 flex-shrink-0" />
                      <span><strong>Maintenance Prédictive :</strong> Surveillance proactive et suivi énergétique</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl mt-6">
                  <p className="text-xl font-bold text-secondary uppercase mb-3">
                    Installations Électriques
                  </p>
                  <p className="text-gray-700">
                    Maintenance des postes MT, tableaux BT, groupes électrogènes et onduleurs pour garantir la <strong>fiabilité</strong> et la <strong>continuité</strong> de vos installations.
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
                alt="Types de Maintenance"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
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
              Nos Secteurs <span className="text-primary">d'Activité</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise reconnue dans différents domaines stratégiques
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

      {/* Avantages FSG Section */}
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
              Pourquoi Choisir <span className="text-primary">FSG</span> ?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Des services multisites, multi-activités et multi-métiers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:bg-white/15 hover:border-primary transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="text-6xl mb-6 text-center text-white inline-block w-full"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
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
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="text-6xl mb-6 text-center text-white inline-block w-full"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
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
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="text-6xl mb-6 text-center text-white inline-block w-full"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
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

      {/* Notre Approche Section */}
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
                Gestion de la Maintenance Multitechnique
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  La maintenance multitechnique coordonne l'ensemble des interventions techniques pour assurer la <strong className="text-primary">fiabilité, durabilité et efficacité énergétique</strong> de vos équipements.
                </p>
                <p>
                  <strong className="text-primary">FSG</strong> offre des services <strong>multisites, multi-activités et multi-métiers</strong> avec des équipes réparties sur tout le Maroc, intervenant <strong className="text-primary">24h/24 et 7j/7</strong>.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary mt-6">
                  <h3 className="text-xl font-bold text-secondary mb-4 uppercase">Nos Objectifs</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Assurer la fiabilité et la sécurité des installations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Réduire les pannes grâce à la maintenance préventive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Optimiser les coûts d'exploitation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Garantir la conformité réglementaire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Améliorer l'efficacité énergétique</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section 2 - Types de Maintenance */}
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
                Types de Maintenance
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Notre approche repose sur un plan structuré combinant maintenance <strong className="text-primary">préventive, corrective et prédictive</strong> pour garantir sécurité et continuité de service.
                </p>
                <div className="bg-gradient-to-br from-secondary to-secondary-dark p-6 rounded-xl shadow-lg text-white mt-6">
                  <h3 className="text-xl font-bold mb-4 uppercase">Nos Interventions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <FaClock className="text-primary text-xl mt-1 flex-shrink-0" />
                      <span><strong>Maintenance Préventive :</strong> Planification et inspections régulières pour prévenir les pannes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaWrench className="text-primary text-xl mt-1 flex-shrink-0" />
                      <span><strong>Maintenance Corrective :</strong> Interventions rapides pour réparer les défaillances</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCogs className="text-primary text-xl mt-1 flex-shrink-0" />
                      <span><strong>Maintenance Prédictive :</strong> Surveillance proactive et suivi énergétique</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl mt-6">
                  <p className="text-xl font-bold text-secondary uppercase mb-3">
                    Installations Électriques
                  </p>
                  <p className="text-gray-700">
                    Maintenance des postes MT, tableaux BT, groupes électrogènes et onduleurs pour garantir la <strong>fiabilité</strong> et la <strong>continuité</strong> de vos installations.
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
                alt="Types de Maintenance"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Footer Section */}
      {/* <section className="py-16 bg-gradient-to-br from-secondary to-secondary-dark text-white">
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
      </section> */}
    </motion.div>
  );
}

export default MaintenanceMultitechniquePage;
