import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaHeadset, FaPaperPlane, FaComments } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import './ContactPage.css';

function ContactPage() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Remplacez ces valeurs par vos propres identifiants EmailJS
    // Obtenez-les sur https://www.emailjs.com/
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('Email envoyé avec succès:', result.text);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setIsSubmitting(false);
      }, (error) => {
        console.error('Erreur lors de l\'envoi:', error.text);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'contact@facilitysolutiongroup.ma',
      link: 'mailto:contact@facilitysolutiongroup.ma',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaPhone />,
      title: 'Téléphone',
      content: '+212 664 518 537',
      link: 'tel:+212664518537',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Adresse',
      content: 'Bd Mohamed V, Technoparc T215, 90100 Tanger, Maroc',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaClock />,
      title: 'Horaires',
      content: 'Lun - Ven : 8h00 - 18h00 | Sam : 8h00 - 13h00',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO 
        title="Contactez-nous - Facility Solution Group Maroc"
        description="Contactez FSG Maroc pour vos besoins en maintenance multitechnique, climatisation et services industriels. Disponibles 24/7. Devis gratuit et intervention rapide."
        keywords="contact fsg maroc, devis maintenance maroc, contact climatisation maroc, urgence maintenance, service client fsg"
        url="https://facilitysolutiongroup.ma/contact"
      />
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] overflow-hidden pt-20 md:pt-[120px]">
        <div 
          className="hero-background"
          style={{ backgroundImage: 'url(/MultiTechniFSG-2.jpg)' }}
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
                <FaComments className="inline-block text-white drop-shadow-2xl" />
              </div>
              <h1 className="text-xl md:text-3xl lg:text-4xl font-black uppercase mb-4 leading-tight max-w-5xl mx-auto" style={{ textShadow: '2px 4px 12px rgba(0, 0, 0, 0.3)' }}>
                <span className="text-primary">Parlons de votre projet</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl opacity-95 mb-6" style={{ textShadow: '1px 2px 6px rgba(0, 0, 0, 0.3)' }}>N'hésitez pas à nous contacter pour toute demande d'information</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-card-premium"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Icon Header */}
                <div className={`contact-icon-header bg-gradient-to-br ${info.color}`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  <motion.div 
                    className="relative z-10 text-white text-4xl drop-shadow-2xl"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {info.icon}
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-black text-secondary mb-3 uppercase tracking-wide">
                    {info.title}
                  </h3>
                  
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-primary font-medium transition-colors break-words"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 font-medium break-words leading-relaxed">
                      {info.content}
                    </p>
                  )}
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          {/* Form and Emergency Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <h2 className="text-3xl font-black text-secondary uppercase tracking-wide mb-6">
                  Envoyez-nous un message
                </h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg text-green-700 font-semibold">
                    ✓ Message envoyé avec succès ! Nous vous contacterons bientôt.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-lg text-red-700 font-semibold">
                    ✗ Erreur lors de l'envoi. Veuillez réessayer.
                  </div>
                )}
                
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-secondary uppercase tracking-wide mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-secondary uppercase tracking-wide mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-secondary uppercase tracking-wide mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-secondary uppercase tracking-wide mb-2">
                        Sujet *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-secondary uppercase tracking-wide mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-lg font-bold text-base uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    <FaPaperPlane />
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Emergency Assistance */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-secondary via-secondary-dark to-gray-900 rounded-2xl p-8 text-center overflow-hidden shadow-2xl h-full flex flex-col justify-center">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>
                
                <div className="relative z-10">
                  <motion.div
                    className="inline-block mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg mx-auto">
                      <FaHeadset className="text-white text-4xl" />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide mb-4">
                    Assistance Technique 24/7
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    Notre équipe est disponible à tout moment pour répondre à vos urgences
                  </p>
                  
                  <a
                    href="tel:+212664518537"
                    className="inline-block text-3xl md:text-4xl font-black text-primary hover:text-white transition-colors duration-300"
                  >
                    +212 664 518 537
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default ContactPage;
