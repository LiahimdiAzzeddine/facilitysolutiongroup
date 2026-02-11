import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaSnowflake, FaBolt, FaFire, FaWrench, FaArrowRight } from 'react-icons/fa';

function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (e, link) => {
    e.preventDefault();
    const [path, hash] = link.split('#');
    
    // Navigate to the page
    navigate(path);
    
    // Wait for navigation and scroll to section
    setTimeout(() => {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 100);
  };
  const services = [
    {
      title: 'CVC',
      description: 'Climatisation, ventilation et chauffage pour tous secteurs.',
      icon: <FaSnowflake />,
      link: '/services#génie-climatique',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Électricité',
      description: 'Installation électrique industrielle et distribution de puissance.',
      icon: <FaBolt />,
      link: '/services#génie-électrique',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Froid Industriel',
      description: 'Chambres froides, vitrines et systèmes de réfrigération.',
      icon: <FaWrench />,
      link: '/services#froid-industriel--commercial',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Courant Faible',
      description: 'Sécurité, vidéosurveillance, contrôle d\'accès et câblage VDI.',
      icon: <FaFire />,
      link: '/services#courant-faible',
      color: 'from-red-500 to-pink-500'
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
            Un service global pour une efficacité maximale
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
              <div className={`relative h-40 md:h-44 bg-gradient-to-br ${service.color} flex items-center justify-center overflow-hidden`}>
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                {/* Icon */}
                <motion.div 
                  className="relative z-10 text-white text-5xl md:text-6xl drop-shadow-2xl"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-black text-secondary mb-2 uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="mt-auto"
                >
                  <Link 
                    to={service.link} 
                    onClick={(e) => handleServiceClick(e, service.link)}
                    className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors duration-300 text-xs md:text-sm group/link"
                  >
                    En savoir plus 
                    <FaArrowRight className="transform group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
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
