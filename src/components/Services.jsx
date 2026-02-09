import { motion } from 'framer-motion';
import { FaSnowflake, FaBolt, FaFire, FaWrench, FaArrowRight } from 'react-icons/fa';

function Services() {
  const services = [
    {
      title: 'CVC',
      description: 'FSG Maroc assure la maintenance de vos systèmes CVC : Climatisation - Ventilation - Chauffage.',
      icon: <FaSnowflake />,
      link: '/services',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Electricité Industrielle',
      description: 'Hors-terre, sous-terre, la transmission de l\'énergie qui provient d\'un distributeur d\'énergie',
      icon: <FaBolt />,
      link: '/services',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Gaz, Fluides Spéciaux',
      description: 'Travaux d\'installation et de maintenance de gaz et fluides spéciaux.',
      icon: <FaFire />,
      link: '/services',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Froid Industriel',
      description: 'Vos besoins professionnels en matière de froid passent par le maintien d\'une température idéale pour vos produits.',
      icon: <FaWrench />,
      link: '/services',
      color: 'from-purple-500 to-indigo-500'
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
    <section id="services" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-semibold text-base md:text-lg mb-3 uppercase tracking-wide">
            Votre fidélité est la preuve de notre #Expertise
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary uppercase tracking-wide px-4">
            Un service global pour une efficacité maximal
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col"
              variants={itemVariants}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
            >
              {/* Gradient Background with Icon */}
              <div className={`relative h-48 md:h-56 bg-gradient-to-br ${service.color} flex items-center justify-center overflow-hidden`}>
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                {/* Icon */}
                <motion.div 
                  className="relative z-10 text-white text-6xl md:text-7xl drop-shadow-2xl"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-black text-secondary mb-3 uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <motion.a 
                  href={service.link} 
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors duration-300 text-sm md:text-base group/link mt-auto"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  En savoir plus 
                  <FaArrowRight className="transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
