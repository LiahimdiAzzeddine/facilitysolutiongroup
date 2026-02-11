import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaBars, FaTimes, FaEnvelope, FaClock } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/a-propos', label: 'À propos' },
    { path: '/maintenance-multitechnique', label: 'M. Multitechnique' },
    { path: '/e-plaquette', label: 'E-Plaquette' },
    { path: '/contact', label: 'Contact' }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        className="hidden md:block bg-gradient-to-r from-[#1a252f] to-secondary text-white py-3 border-b border-primary/20"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex gap-8 items-center">
              <motion.a 
                href="mailto:contact@facilitysolutiongroup.ma" 
                className="flex items-center gap-2 text-gray-200/90 hover:text-white transition-colors duration-300 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="text-primary text-sm" /> 
                contact@facilitysolutiongroup.ma
              </motion.a>
              <span className="flex items-center gap-2 text-gray-200/90 text-sm font-medium">
                <FaClock className="text-primary text-sm" /> 
                Lun - Sam: 8h00 - 17h00
              </span>
            </div>
            <div>
              <motion.a 
                href="tel:+212664518537" 
                className="flex items-center gap-2 text-white font-bold bg-primary/15 px-5 py-1.5 rounded-lg border border-primary/30 hover:bg-primary hover:border-primary transition-all duration-300 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone className="text-primary hover:text-white transition-colors" /> 
                +212 664 518 537
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header 
        className={`fixed left-0 right-0 z-[999] transition-all duration-300 ${
          scrolled 
            ? 'top-0 py-3 bg-white shadow-lg' 
            : 'top-0 md:top-[49px] py-4 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/" onClick={closeMenu} className="flex items-center">
                <img 
                  src="/logowebdark.png" 
                  alt="Facility Solution Group Logo" 
                  className={`w-auto object-contain transition-all duration-300 ${
                    scrolled ? 'h-10' : 'h-12'
                  }`}
                  style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }}
                />
              </Link>
            </motion.div>
            
            <motion.button 
              className={`lg:hidden text-3xl transition-colors duration-300 z-[1001] ${
                scrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary'
              }`}
              onClick={toggleMenu}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <nav className={`fixed lg:relative top-0 ${menuOpen ? 'right-0' : '-right-full'} lg:right-0 w-72 lg:w-auto h-screen lg:h-auto bg-white lg:bg-transparent flex flex-col lg:flex-row items-start lg:items-center gap-0 lg:gap-10 pt-20 lg:pt-0 px-8 lg:px-0 shadow-xl lg:shadow-none transition-all duration-400 z-[1000]`}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuOpen ? index * 0.1 : 0 }}
                  className="w-full lg:w-auto mb-5 lg:mb-0"
                >
                  <Link 
                    to={item.path}
                    className={`block lg:inline-block relative py-4 lg:py-2 px-0 lg:px-4 font-semibold text-base lg:text-sm uppercase tracking-wide transition-colors duration-300 border-b lg:border-b-0 border-gray-100 group ${
                      scrolled 
                        ? 'text-secondary hover:text-primary' 
                        : 'text-secondary lg:text-white hover:text-primary'
                    } ${location.pathname === item.path ? 'text-primary' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                    <span className={`absolute bottom-1 left-0 lg:left-4 h-0.5 bg-primary transition-all duration-300 ${
                      location.pathname === item.path ? 'w-full lg:w-[calc(100%-2rem)]' : 'w-0 group-hover:w-full lg:group-hover:w-[calc(100%-2rem)]'
                    }`}></span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
