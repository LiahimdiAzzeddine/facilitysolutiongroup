import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import Loader from './components/Loader.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Home from './pages/Home.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import RealisationsPage from './pages/RealisationsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import MaintenanceMultitechniquePage from './pages/MaintenanceMultitechniquePage.jsx';
import EPlaquettePage from './pages/EPlaquettePage.jsx';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <HelmetProvider>
      <Router>
        <AnimatePresence mode="wait">
          {loading ? (
            <Loader key="loader" />
          ) : (
            <motion.div 
              key="app"
              className="App"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Header />
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/a-propos" element={<AboutPage />} />
                  <Route path="/realisations" element={<RealisationsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/maintenance-multitechnique" element={<MaintenanceMultitechniquePage />} />
                  <Route path="/e-plaquette" element={<EPlaquettePage />} />
                </Routes>
              </AnimatePresence>
              <Contact />
              <Footer />

              {/* WhatsApp Floating Button */}
              <WhatsAppButton showScrollTop={showScrollTop} />

              {/* Scroll to Top Button */}
              <motion.button
                className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                initial={{ scale: 0 }}
                animate={{ scale: showScrollTop ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowUp />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </Router>
    </HelmetProvider>
  );
}

export default App;
