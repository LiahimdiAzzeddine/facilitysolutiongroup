import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

function About() {
  const aboutCards = [
    {
      title: 'CVC',
      description: 'Climatisation, Ventilation, Chauffage',
      image: '/energetique_froid_AdobeStock_2956959112.jpg',
      link: '/contact'
    },
    {
      title: 'Electricité Industrielle',
      description: 'Solutions électriques complètes',
      image: '/kv-sirius-180308.jpg',
      link: '/contact'
    },
    {
      title: 'Froid Industriel',
      description: 'Systèmes de réfrigération',
      image: '/coldroom-FSG.jpg',
      link: '/contact'
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary uppercase tracking-wide mb-4 md:mb-6">
            FACILITY SOLUTION GROUP
          </h2>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed px-4">
            Nous Opérons dans le Secteur Industrielle et Bâtiment, Offrant des Services de Rénovation, d'Agencement et d'Entretien.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {aboutCards.map((card, index) => (
            <motion.div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-80 md:h-96 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/90 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500"></div>
                
                {/* Badge - Position fixe en haut */}
                <motion.span 
                  className="absolute top-6 left-6 md:top-8 md:left-8 inline-block bg-primary/90 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  Facility Solution Group
                </motion.span>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-black uppercase mb-2 md:mb-3 transform transition-transform duration-500 drop-shadow-lg">
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-200 mb-4 md:mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 leading-relaxed">
                    {card.description}
                  </p>
                  
                  {/* Button */}
                  <motion.a 
                    href={card.link} 
                    className="inline-flex items-center gap-2 md:gap-3 bg-primary hover:bg-primary-dark text-white px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-bold text-xs md:text-sm uppercase tracking-wide self-start opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    CONTACT <FaArrowRight className="text-sm" />
                  </motion.a>
                </div>
              </div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-secondary mt-12 md:mt-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          FSG Vous assure un service personnalisé et clé en main pour tous vos travaux
        </motion.p>
      </div>
    </section>
  );
}

export default About;
