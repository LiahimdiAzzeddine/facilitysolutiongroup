import { motion } from 'framer-motion';
import { 
  FaTools, FaSnowflake, FaBolt, FaFire, FaWrench, 
  FaIndustry, FaBuilding, FaHospital, FaHotel, 
  FaUtensils, FaShoppingCart, FaHardHat, FaCogs,
  FaWind, FaDraftingCompass, FaCheckCircle, FaArrowRight
} from 'react-icons/fa';
import SEO from '../components/SEO';
import './AboutPage.css';

function AboutPage() {
  const stats = [
    { number: '10', label: "Ans d'Expérience" },
    { number: '75', label: 'Projets Réalisés' },
    { number: '150', label: 'Clients Satisfaits' }
  ];

  const energyStats = [
    { percentage: 45, label: "La Consommation d'énergie" },
    { percentage: 90, label: 'Temps Moyen par Ménage' },
    { percentage: 50, label: "Coûts d'Energie Réduits" },
    { percentage: 40, label: 'Coûts Mensuels Économisés' }
  ];

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO 
        title="À Propos - Facility Solution Group Maroc"
        description="Découvrez FSG Maroc : 10 ans d'expérience en maintenance multitechnique. Leader en climatisation, électricité et froid industriel. Plus de 150 clients satisfaits au Maroc."
        keywords="à propos fsg maroc, entreprise maintenance maroc, histoire fsg, expertise maintenance, société climatisation maroc, facility management maroc"
        url="https://facilitysolutiongroup.ma/a-propos"
      />
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] overflow-hidden pt-20 md:pt-[120px]">
        <div 
          className="hero-background"
          style={{ backgroundImage: 'url(/energetique_froid_AdobeStock_2956959112.jpg)' }}
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
                <FaBuilding className="inline-block text-white drop-shadow-2xl" />
              </div>
              <h1 className="text-xl md:text-3xl lg:text-4xl font-black uppercase mb-4 leading-tight max-w-5xl mx-auto" style={{ textShadow: '2px 4px 12px rgba(0, 0, 0, 0.3)' }}>
                <span className="text-primary">L'agilité et la solidité</span> d'une entreprise à taille humaine pour répondre aux <span className="text-primary">enjeux énergétiques de vos bâtiments</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A Propos FSG Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase text-center mb-8">
              À PROPOS <span className="text-primary">FACILITY SOLUTION GROUP</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-primary">FSG</strong> intervient sur tout le Maroc pour réaliser, exploiter et maintenir les installations de nos clients des secteurs <strong>industriel et tertiaire : hôpitaux, hôtels, restaurants, grande distribution...</strong>
              </p>
              
              <p>
                Avec nos <strong className="text-primary">50 collaborateurs</strong>, nous pouvons répondre aux besoins de nos clients en travaux et maintenance, et suivre leurs projets d'un bout à l'autre.
              </p>
              
              <p>
                Du <strong>génie climatique</strong> au <strong>froid industriel</strong>, en passant par <strong>l'électricité</strong> et la <strong>ventilation</strong>, nous déployons nos expertises via notre bureau d'études, nos concepteurs et nos monteurs.
              </p>
              
              <p>
                Nous réalisons également la <strong className="text-primary">maintenance multitechnique et électrique</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <motion.div
                className="text-center p-6 bg-gradient-to-br from-primary to-primary-dark rounded-xl text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-black mb-2">50+</div>
                <div className="text-sm uppercase">Collaborateurs</div>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-black mb-2">100%</div>
                <div className="text-sm uppercase">Maroc</div>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-gradient-to-br from-primary to-primary-dark rounded-xl text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-black mb-2">24/7</div>
                <div className="text-sm uppercase">Disponibilité</div>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-black mb-2">Multi</div>
                <div className="text-sm uppercase">Secteurs</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos Secteurs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-black text-secondary uppercase text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nos <span className="text-primary">Secteurs d'Intervention</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaIndustry />, title: 'Industriel', desc: 'Installations industrielles complètes', color: 'from-blue-500 to-cyan-500' },
              { icon: <FaBuilding />, title: 'Tertiaire', desc: 'Bureaux et espaces professionnels', color: 'from-purple-500 to-indigo-500' },
              { icon: <FaHospital />, title: 'Hôpitaux', desc: 'Équipements médicaux spécialisés', color: 'from-green-500 to-emerald-500' },
              { icon: <FaHotel />, title: 'Hôtels', desc: 'Confort et efficacité énergétique', color: 'from-yellow-500 to-orange-500' },
              { icon: <FaUtensils />, title: 'Restaurants', desc: 'Systèmes de ventilation et froid', color: 'from-red-500 to-pink-500' },
              { icon: <FaShoppingCart />, title: 'Grande Distribution', desc: 'Froid commercial et climatisation', color: 'from-indigo-500 to-purple-500' },
              { icon: <FaHardHat />, title: 'Bâtiments', desc: 'Tous types de constructions', color: 'from-gray-500 to-gray-700' },
              { icon: <FaCogs />, title: 'Multi-technique', desc: 'Solutions complètes intégrées', color: 'from-teal-500 to-cyan-500' }
            ].map((sector, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Icon Header */}
                <div className={`relative h-32 bg-gradient-to-br ${sector.color} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  <motion.div 
                    className="relative z-10 text-white text-5xl drop-shadow-2xl"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {sector.icon}
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-black text-secondary mb-2 uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                    {sector.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{sector.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Expertises Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-black text-secondary uppercase text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nos <span className="text-primary">Expertises</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <FaSnowflake />, title: 'Génie Climatique', desc: 'Climatisation, ventilation et chauffage', color: 'from-blue-500 to-cyan-500' },
              { icon: <FaWrench />, title: 'Froid Industriel', desc: 'Chambres froides et systèmes de réfrigération', color: 'from-purple-500 to-indigo-500' },
              { icon: <FaBolt />, title: 'Électricité', desc: 'Installations électriques complètes', color: 'from-yellow-500 to-orange-500' },
              { icon: <FaWind />, title: 'Ventilation', desc: 'Systèmes de ventilation et d\'extraction', color: 'from-teal-500 to-cyan-500' },
              { icon: <FaTools />, title: 'Maintenance Multitechnique', desc: 'Entretien préventif et curatif', color: 'from-red-500 to-pink-500' },
              { icon: <FaDraftingCompass />, title: 'Bureau d\'Études', desc: 'Conception et dimensionnement', color: 'from-indigo-500 to-purple-500' }
            ].map((expertise, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Icon Header */}
                <div className={`relative h-40 bg-gradient-to-br ${expertise.color} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  <motion.div 
                    className="relative z-10 text-white text-6xl drop-shadow-2xl"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {expertise.icon}
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-secondary mb-3 uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                    {expertise.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{expertise.desc}</p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CVC Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="/coldroom-FSG.jpg" 
                alt="CVC" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                style={{ maxHeight: '800px', objectFit: 'cover' }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-black text-secondary uppercase mb-4">
                <span className="text-primary">FSG</span> assure la maintenance de vos systèmes <span className="text-primary">CVC</span>
              </h2>
              <p className="text-xl text-gray-600 mb-4">Climatisation, Ventilation et Chauffage</p>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>FSG</strong> apporte des solutions de maintenance pour vos systèmes de génie climatique. Nos techniciens interviennent sur l'ensemble des techniques de Climatisation, Ventilation et Chauffage (CVC) en adéquation avec le matériel déjà en place ou installé par nos soins.
                </p>
                <p>
                  De la pompe à chaleur air-air ou air-eau, en passant par les VMC simples et doubles flux, les hottes, aérothermes, radiants, chauffe-eau, adoucisseurs d'eau... nos équipes ont la compétence pour intervenir sur tout type de matériel.
                </p>
                <p>
                  Proximité, réactivité, adaptabilité, pérennité et confiance sont les valeurs que notre entreprise met à votre service.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-5xl font-black text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Installation Électrique Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-secondary uppercase mb-6">
                Installation Électrique Industrielle
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                FSG vous propose ses services pour l'installation complète de votre système électrique. En construction neuve comme en rénovation, nous vous garantissons une intervention rapide et soignée.
              </p>
              <motion.a
                href="/services"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lire la suite
                <FaArrowRight />
              </motion.a>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="/kv-sirius-180308.jpg" 
                alt="Installation Électrique" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Energy Stats Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary-dark to-secondary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl mb-4 uppercase tracking-wider">FACILITY SOLUTION GROUP</p>
            <h2 className="text-4xl font-black uppercase">
              <span className="text-primary">L'électricité et le CVC</span> sont nos métiers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {energyStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <svg className="transform -rotate-90 w-40 h-40">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#eee"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#fac514"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 70}`}
                      strokeDashoffset={`${2 * Math.PI * 70 * (1 - stat.percentage / 100)}`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-black">{stat.percentage}%</span>
                  </div>
                </div>
                <p className="text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Énergie Propre Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="/HVAC1.jpg" 
                alt="Énergie Propre" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-secondary uppercase mb-6">
                Au Service d'une Énergie Propre et Durable
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Fort de 10 ans d'expérience, FSG s'engage à vous proposer des solutions adaptées pour réaliser des économies d'énergie et vous accompagner dans votre transition énergétique.
              </p>
              <motion.a
                href="/services"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lire la suite
                <FaArrowRight />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default AboutPage;
