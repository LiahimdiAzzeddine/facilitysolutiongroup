import { motion } from 'framer-motion';
import { FaTools, FaExclamationTriangle, FaClipboardCheck, FaCheckCircle } from 'react-icons/fa';

function Features() {
  const features = [
    {
      title: 'ÉQUIPES CERTIFIÉES',
      description: 'Des techniciens qualifiés et formés aux dernières normes techniques. Chaque intervention est réalisée par des spécialistes certifiés dans leur domaine.',
      icon: <FaTools />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'RÉACTIVITÉ 24/7',
      description: 'Service d\'urgence disponible jour et nuit, week-ends et jours fériés. Intervention rapide garantie pour minimiser vos temps d\'arrêt.',
      icon: <FaExclamationTriangle />,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'EXPERTISE CONSEIL',
      description: 'Audit énergétique, diagnostic technique et recommandations personnalisées. Nous vous accompagnons dans l\'optimisation de vos installations.',
      icon: <FaClipboardCheck />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'GARANTIE QUALITÉ',
      description: 'Respect strict des normes marocaines et internationales. Traçabilité complète des interventions et garantie sur tous nos travaux.',
      icon: <FaCheckCircle />,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="relative py-12 md:py-20 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-semibold text-base md:text-lg mb-3 uppercase tracking-wide">
            Pourquoi Choisir FSG
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary uppercase tracking-wide px-4">
            Nos Avantages Compétitifs
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="relative bg-white rounded-2xl p-6 md:p-8 border-2 border-gray-100 hover:border-primary transition-all duration-500 shadow-lg hover:shadow-2xl group flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Number Badge */}
              <div className="absolute top-4 right-4 text-5xl md:text-6xl font-black text-gray-100 group-hover:text-primary/10 transition-colors duration-500">
                0{index + 1}
              </div>
              
              {/* Icon */}
              <motion.div 
                className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 md:mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-white text-2xl md:text-3xl">{feature.icon}</div>
              </motion.div>
              
              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-md md:text-lg font-black text-secondary uppercase tracking-wide mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative line at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
