import { motion } from 'framer-motion';
import { FaEnvelope, FaClock, FaPhone, FaMapMarkerAlt, FaHeadset } from 'react-icons/fa';

function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'NOUS CONTACTER',
      content: ['contact@facilitysolutiongroup.ma'],
      link: 'mailto:contact@facilitysolutiongroup.ma',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaClock />,
      title: 'HORAIRES',
      content: ['Lundi - Vendredi 8.00 - 18.00', 'Samedi 8.00 - 13.00'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaPhone />,
      title: 'CENTRE D\'APPELS',
      content: ['+212 664 518 537'],
      link: 'tel:+212664518537',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'ADRESSE',
      content: ['Bd Mohamed V, Technoparc T215', '90100 Tanger, Maroc'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary uppercase tracking-wide mb-4">
            Pour de plus amples informations sur nos prestations
          </h2>
          <p className="text-xl md:text-2xl text-primary font-bold">
            N'hésitez pas à nous contacter!
          </p>
        </motion.div>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-primary transition-all duration-300 group overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                <div className="text-white text-2xl">{info.icon}</div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-black text-secondary uppercase tracking-wide mb-4 group-hover:text-primary transition-colors duration-300">
                {info.title}
              </h3>
              
              {/* Content */}
              <div className="space-y-2">
                {info.content.map((line, i) => (
                  info.link && i === 0 ? (
                    <a
                      key={i}
                      href={info.link}
                      className="block text-gray-600 hover:text-primary font-medium transition-colors duration-300 break-words"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={i} className="text-gray-600 font-medium break-words">
                      {line}
                    </p>
                  )
                ))}
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Assistance 24/7 */}
        <motion.div
          className="relative bg-gradient-to-br from-secondary via-secondary-dark to-gray-900 rounded-2xl p-8 md:p-12 text-center overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <motion.div
              className="inline-block mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <FaHeadset className="text-white text-4xl" />
              </div>
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-wide mb-4">
              Bénéficiez de l'Assistance Technique 24/7
            </h3>
            
            <a
              href="tel:+212664518537"
              className="inline-block text-3xl md:text-4xl lg:text-5xl font-black text-primary hover:text-white transition-colors duration-300"
            >
              +212 664 518 537
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
