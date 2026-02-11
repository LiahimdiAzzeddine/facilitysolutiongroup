import { motion } from 'framer-motion';
import { FaTools, FaExclamationTriangle, FaClipboardCheck, FaCheckCircle } from 'react-icons/fa';

function Features() {
  const features = [
    {
      title: 'INSTALLATION & MAINTENANCE',
      description: 'Toutes les installations sont assurées par nos équipes techniques spécialisées et certifiées.',
      icon: <FaTools />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'INTERVENTION D\'URGENCE',
      description: 'Nos équipes s\'adaptent à vos contraintes et interviennent rapidement sur site, 24h/24 et 7j/7.',
      icon: <FaExclamationTriangle />,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'CONSEILS & AUDIT',
      description: 'Nos experts réalisent une évaluation gratuite des risques en fonction des besoins spécifiques de votre site.',
      icon: <FaClipboardCheck />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'ENGAGEMENT QUALITÉ',
      description: 'Personnel qualifié, procédures rigoureuses, respect de votre cahier des charges et conformité aux normes en vigueur.',
      icon: <FaCheckCircle />,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-br from-gray-900 via-secondary to-secondary-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide mb-3 md:mb-4 px-4">
            FACILITY SOLUTION GROUP
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-primary px-4">
            Bénéficiez de l'Assistance Technique 24/7
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border-2 border-white/20 hover:bg-white/15 hover:border-primary transition-all duration-500 group flex flex-col"
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
              <div className="absolute top-4 right-4 text-5xl md:text-6xl font-black text-white/5 group-hover:text-primary/10 transition-colors duration-500">
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
                <h3 className="text-md md:text-lg font-black text-white uppercase tracking-wide mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative line at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
