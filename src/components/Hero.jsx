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
      buttonLink: '/maintenance-multitechnique',
      image: '/ElectInstal01.jpg'
    },
    {
      id: 2,
      title: 'Installation & Maintenance CVC',
      subtitle: 'Solutions complètes pour vos systèmes de climatisation',
      buttonText: 'DEVIS GRATUIT',
      buttonLink: '/contact',
      image: '/HVAC1.jpg'
    },
    {
      id: 3,
      title: 'Installation Électrique Industrielle',
      subtitle: 'Expertise et fiabilité pour vos installations',
      buttonText: 'Découvrir',
      buttonLink: '/services',
      image: '/MultiTechniFSG-2.jpg'
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
    <section className="relative mt-0">
      <div className="relative w-full">
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
          className="hero-slider h-screen"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div 
                className="relative h-full w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/85 to-primary/75 z-[1]"></div>
                <div className="container mx-auto px-4">
                  <motion.div 
                    className="relative z-[2] text-center text-white max-w-4xl mx-auto px-4 md:px-5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <motion.span 
                      className="inline-block bg-white/15 backdrop-blur-md px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider md:tracking-widest mb-4 md:mb-6 border-2 border-white/30 shadow-lg"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Facility Solution Group
                    </motion.span>
                    
                    <motion.h1
                      className="text-2xl md:text-4xl lg:text-6xl mb-4 md:mb-6 font-black uppercase tracking-wide md:tracking-wider leading-tight"
                      style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p
                      className="text-base md:text-xl lg:text-2xl mb-6 md:mb-10 font-normal opacity-95 leading-relaxed"
                      style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
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
                      <a 
                        href={slide.buttonLink} 
                        className="inline-flex items-center gap-2 md:gap-3 bg-white text-primary px-6 md:px-10 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base uppercase tracking-wide shadow-2xl border-2 border-white hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-primary/40 transition-all duration-300"
                      >
                        {slide.buttonText}
                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2 text-sm md:text-base" />
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="bg-gradient-to-r from-secondary to-secondary-dark p-0 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {infoItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 md:gap-5 p-6 md:p-10 bg-white/5 backdrop-blur-md border-b md:border-b-0 md:border-r border-white/10 last:border-b-0 last:border-r-0 hover:bg-primary/90 hover:-translate-y-1 transition-all duration-400 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl text-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-primary group-hover:text-white mb-1 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider transition-colors duration-300">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a href={item.link} className="text-gray-200 text-sm md:text-base leading-relaxed hover:text-white transition-colors duration-300">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed m-0">
                      {item.content}
                    </p>
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
