import { motion } from 'framer-motion';
import { FaMobileAlt, FaEye, FaClock, FaBell, FaCheckCircle, FaFileAlt } from 'react-icons/fa';
import './GMAO.css';

function GMAO() {
  const clientBenefits = [
    {
      icon: <FaEye />,
      title: 'Suivi en Temps Réel',
      description: 'Visualisez l\'avancement de vos réparations',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaBell />,
      title: 'Notifications',
      description: 'Alertes à chaque étape',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaClock />,
      title: 'Historique',
      description: 'Toutes vos interventions',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <FaFileAlt />,
      title: 'Rapports',
      description: 'Documents et photos',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Demande d\'Intervention',
      description: 'Créez une demande en 2 clics',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const technicalFeatures = [
    {
      icon: <FaCheckCircle />,
      text: 'Signaler un problème en quelques clics'
    },
    {
      icon: <FaBell />,
      text: 'Demander une intervention de maintenance'
    },
    {
      icon: <FaClock />,
      text: 'Suivi des délais et respect des engagements'
    },
    {
      icon: <FaFileAlt />,
      text: 'Documentation complète avec photos avant/après'
    }
  ];

  return (
    <section className="gmao-section">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-semibold text-base md:text-lg mb-3 uppercase tracking-wide">
            Innovation Technologique
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary uppercase tracking-wide px-4 mb-4 md:mb-6">
            Suivez vos <span className="text-primary">Réparations</span> en Direct
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Notre plateforme GMAO développée en interne vous permet de suivre l'état de vos interventions en temps réel, pour une transparence totale.
          </p>
        </motion.div>

        {/* Client Benefits Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12 md:mb-16">
          {clientBenefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="gmao-benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Icon */}
              <motion.div 
                className={`gmao-benefit-icon bg-gradient-to-br ${benefit.color}`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {benefit.icon}
              </motion.div>
              
              {/* Content */}
              <h3 className="gmao-benefit-title">
                {benefit.title}
              </h3>
              <p className="gmao-benefit-description">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile App Announcement - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left: Mobile App Info */}
          <motion.div
            className="gmao-mobile-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-md"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaMobileAlt />
                <span>Bientôt Disponible</span>
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-secondary uppercase mb-4 md:mb-6">
                Application Mobile <span className="text-blue-600">GMAO</span>
              </h3>
              
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed font-medium">
                Accédez à toutes les informations de vos interventions depuis votre smartphone. Suivez vos réparations où que vous soyez.
              </p>
              
              <div className="space-y-4">
                {technicalFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-blue-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 text-xl flex-shrink-0 mt-0.5">
                      {feature.icon}
                    </div>
                    <span className="text-gray-800 text-sm md:text-base font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Mockup */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="gmao-phone-mockup">
              <div className="gmao-phone-screen">
                <div className="gmao-screen-header">
                  <div className="gmao-status-bar"></div>
                  <h4 className="text-sm font-bold text-secondary mt-4 mb-2">Mes Interventions</h4>
                </div>
                
                <div className="gmao-screen-content">
                  {/* Intervention Card 1 */}
                  <motion.div 
                    className="gmao-intervention-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="gmao-badge gmao-badge-progress">En cours</span>
                      <span className="text-xs text-gray-500">Aujourd'hui 14:30</span>
                    </div>
                    <h5 className="text-sm font-bold text-secondary mb-1">Réparation Climatisation</h5>
                    <p className="text-xs text-gray-600 mb-2">Technicien: Ahmed M.</p>
                    <div className="gmao-progress-bar">
                      <div className="gmao-progress-fill" style={{ width: '65%' }}></div>
                    </div>
                  </motion.div>

                  {/* Intervention Card 2 */}
                  <motion.div 
                    className="gmao-intervention-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="gmao-badge gmao-badge-success">Terminé</span>
                      <span className="text-xs text-gray-500">Hier 16:45</span>
                    </div>
                    <h5 className="text-sm font-bold text-secondary mb-1">Maintenance Électrique</h5>
                    <p className="text-xs text-gray-600 mb-2">Technicien: Youssef K.</p>
                    <div className="gmao-progress-bar">
                      <div className="gmao-progress-fill gmao-progress-complete" style={{ width: '100%' }}></div>
                    </div>
                  </motion.div>

                  {/* Intervention Card 3 */}
                  <motion.div 
                    className="gmao-intervention-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="gmao-badge gmao-badge-pending">Planifié</span>
                      <span className="text-xs text-gray-500">Demain 09:00</span>
                    </div>
                    <h5 className="text-sm font-bold text-secondary mb-1">Contrôle Froid Industriel</h5>
                    <p className="text-xs text-gray-600 mb-2">Technicien: À assigner</p>
                    <div className="gmao-progress-bar">
                      <div className="gmao-progress-fill" style={{ width: '0%' }}></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default GMAO;
