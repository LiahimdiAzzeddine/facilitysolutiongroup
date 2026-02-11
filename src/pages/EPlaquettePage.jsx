import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaDownload, FaChevronLeft, FaChevronRight, FaExpand, FaBook,
  FaBuilding, FaTools, FaCheckCircle, FaUsers
} from 'react-icons/fa';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './EPlaquettePage.css';

// Configure PDF.js worker to use local file
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

function EPlaquettePage() {
  const bookRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(600);

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setPageWidth(300);
      } else if (width < 1024) {
        setPageWidth(400);
      } else {
        setPageWidth(600);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const onFlip = (e) => {
    setCurrentPage(e.data);
  };

  const nextPage = () => {
    bookRef.current?.pageFlip()?.flipNext();
  };

  const prevPage = () => {
    bookRef.current?.pageFlip()?.flipPrev();
  };

  return (
    <motion.div
      className="eplaquette-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="eplaquette-hero">
        <div 
          className="hero-background"
          style={{ backgroundImage: 'url(/energetique_froid_AdobeStock_2956959112.jpg)' }}
        >
          <div className="hero-overlay"></div>
          <div className="container mx-auto px-4">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block bg-white/15 backdrop-blur-md px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-widest mb-4 border-2 border-white/30 shadow-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Facility Solution Group
              </motion.span>
              <div className="text-5xl mb-4">
                <FaBook className="inline-block text-white drop-shadow-2xl" />
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase mb-4 leading-tight max-w-5xl mx-auto">
                <span className="text-primary">E-Plaquette</span>
              </h1>
              <p className="text-lg md:text-xl opacity-95 mb-6">Feuilletez notre catalogue comme un vrai livre</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* E-Book Viewer Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-white uppercase mb-6">
                Notre Catalogue Interactif
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Cliquez sur les bords ou utilisez les flèches pour tourner les pages
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="/e-plaquette.pdf"
                  download
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <FaDownload />
                  Télécharger le PDF
                </a>
                <a
                  href="/e-plaquette.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <FaExpand />
                  Ouvrir le PDF
                </a>
              </div>
            </div>

            {/* FlipBook Container */}
            <div className="flipbook-container">
              <Document
                file="/e-plaquette.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="loading-container">
                    <div className="loader"></div>
                    <p className="text-white mt-4">Chargement du catalogue...</p>
                  </div>
                }
                error={
                  <div className="error-container">
                    <p className="text-white text-center">
                      Erreur de chargement du PDF. Veuillez réessayer ou télécharger le fichier.
                    </p>
                  </div>
                }
              >
                {numPages && (
                  <div className="flipbook-wrapper">
                    <HTMLFlipBook
                      ref={bookRef}
                      width={pageWidth}
                      height={pageWidth * 1.414}
                      size="stretch"
                      minWidth={300}
                      maxWidth={1000}
                      minHeight={400}
                      maxHeight={1414}
                      maxShadowOpacity={0.5}
                      showCover={true}
                      mobileScrollSupport={true}
                      onFlip={onFlip}
                      className="flipbook"
                      startPage={0}
                      drawShadow={true}
                      flippingTime={1000}
                      usePortrait={true}
                      startZIndex={0}
                      autoSize={true}
                      clickEventForward={true}
                      useMouseEvents={true}
                      swipeDistance={30}
                      showPageCorners={true}
                      disableFlipByClick={false}
                    >
                      {Array.from(new Array(numPages), (el, index) => (
                        <div key={`page_${index + 1}`} className="pdf-page-wrapper">
                          <Page
                            pageNumber={index + 1}
                            width={pageWidth}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            className="pdf-page-content"
                          />
                        </div>
                      ))}
                    </HTMLFlipBook>
                  </div>
                )}
              </Document>

              {/* Navigation Controls */}
              {numPages && (
                <div className="book-controls">
                  <button
                    onClick={prevPage}
                    className="nav-button prev-button"
                    aria-label="Page précédente"
                  >
                    <FaChevronLeft />
                  </button>

                  <div className="page-indicator">
                    <span className="current-page">{currentPage + 1}</span>
                    <span className="separator">/</span>
                    <span className="total-pages">{numPages}</span>
                  </div>

                  <button
                    onClick={nextPage}
                    className="nav-button next-button"
                    aria-label="Page suivante"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-secondary uppercase mb-6">
                Que contient notre E-Plaquette ?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <FaBuilding />,
                  title: 'Présentation de FSG',
                  desc: 'Découvrez notre entreprise, nos valeurs et notre expertise',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: <FaTools />,
                  title: 'Nos Services',
                  desc: 'CVC, Électricité, Froid Industriel et Maintenance Multitechnique',
                  color: 'from-purple-500 to-indigo-500'
                },
                {
                  icon: <FaCheckCircle />,
                  title: 'Nos Réalisations',
                  desc: 'Projets réussis et références clients',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: <FaUsers />,
                  title: 'Nos Clients',
                  desc: 'Ils nous font confiance au quotidien',
                  color: 'from-red-500 to-pink-500'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="info-card-premium"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  {/* Icon Header */}
                  <div className={`info-icon-header bg-gradient-to-br ${item.color}`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    <motion.div 
                      className="relative z-10 text-white text-5xl drop-shadow-2xl"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-black text-secondary mb-3 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-2xl transition-all duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default EPlaquettePage;
