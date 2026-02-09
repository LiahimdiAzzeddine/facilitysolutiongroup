import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { FaPhone, FaClock, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Hero.css';

function Hero() {
  const slides = [
    {
      id: 1,
      title: 'Maintenance Multitechnique',
      subtitle: 'Votre fidélité est la preuve de notre expertise',
      buttonText: 'Découvrir',
      buttonLink: '#services',
      image: '/public/ElectInstal01.jpg'
    },
    {
      id: 2,
      title: 'Installation & Maintenance CVC',
      subtitle: 'Solutions complètes pour vos systèmes de climatisation',
      buttonText: 'DEVIS GRATUIT',
      buttonLink: '/contact',
      image: '/public/HVAC1.jpg'
    },
    {
      id: 3,
      title: 'Installation Électrique Industrielle',
      subtitle: 'Expertise et fiabilité pour vos installations',
      buttonText: 'Découvrir',
      buttonLink: '/services',
      image: '/public/MultiTechniFSG-2.jpg'
    }
  ];

  const infoItems = [
    {
      icon: <FaPhone />,
      title: 'CONTACT',
      content: '+212 664 518 537',
      link: 'tel:+212664518537'
    },
    {
      icon: <FaClock />,
      title: 'HORAIRES',
      content: 'Lun - Sam 8.00 - 17.00'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'ADRESSE',
      content: 'Bd Mohamed V, Technoparc T215, 90100 Tanger'
    }
  ];

  return (
    <section className="hero">
      <div className="hero-slider-wrapper">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          loop={true}
          speed={1000}
          className="hero-slider"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div 
                className="hero-slide"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="hero-overlay"></div>
                <div className="container">
                  <motion.div 
                    className="hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <motion.span 
                      className="hero-badge"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Facility Solution Group
                    </motion.span>
                    
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      {slide.subtitle}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      <a href={slide.buttonLink} className="btn-hero">
                        {slide.buttonText}
                        <FaArrowRight className="btn-icon" />
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="hero-info">
        <div className="container">
          <div className="info-grid">
            {infoItems.map((item, index) => (
              <motion.div
                key={index}
                className="info-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="info-icon">{item.icon}</div>
                <div className="info-content">
                  <h3>{item.title}</h3>
                  {item.link ? (
                    <a href={item.link}>{item.content}</a>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
