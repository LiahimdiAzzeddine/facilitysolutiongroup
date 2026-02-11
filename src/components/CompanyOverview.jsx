import { motion } from 'framer-motion';
import { FaArrowRight, FaUsers, FaAward, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './CompanyOverview.css';

function CompanyOverview() {
  const stats = [
    { 
      icon: <FaUsers />, 
      number: '50+', 
      label: 'Collaborateurs',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: <FaAward />, 
      number: '10+', 
      label: 'Ans d\'Expérience',
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      icon: <FaMapMarkerAlt />, 
      number: '100%', 
      label: 'Maroc',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: <FaClock />, 
      number: '24/7', 
      label: 'Disponibilité',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section className="company-overview py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Facility Solution Group
            </motion.span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary uppercase mb-6 leading-tight">
              Votre Partenaire en <span className="text-primary">Solutions Techniques</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-primary">FSG</strong> intervient sur tout le Maroc pour réaliser, exploiter et maintenir les installations de nos clients des secteurs <strong>industriel et tertiaire</strong>.
            </p>

            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Du génie climatique au froid industriel, en passant par l'électricité et la ventilation, nous déployons nos expertises via notre bureau d'études, nos concepteurs et nos monteurs.
            </p>

            <motion.a
              href="/a-propos"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              En savoir plus
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Right Side - Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`stat-icon-wrapper bg-gradient-to-br ${stat.color}`}>
                  <motion.div
                    className="stat-icon"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.icon}
                  </motion.div>
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CompanyOverview;
