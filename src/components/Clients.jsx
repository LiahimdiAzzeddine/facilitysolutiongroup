import { motion } from 'framer-motion';

function Clients() {
  const clients = [
    { name: 'Arenor', logo: '/clients/arenorlog-1.png' },
    { name: 'CIR', logo: '/clients/Cir.png' },
    { name: 'City Mall', logo: '/clients/citymalllog.png' },
    { name: 'McDonald\'s', logo: '/clients/mcdolog.png' },
    { name: 'Paper', logo: '/clients/paper.png' }
    
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary uppercase tracking-wide mb-3 md:mb-4">
            NOS CLIENTS
          </h2>
          <p className="text-base md:text-xl text-gray-600">
            Ils nous font confiance.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="relative flex items-center justify-center p-6 md:p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300 group overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <img 
                src={client.logo} 
                alt={client.name}
                className="w-full h-auto max-h-16 md:max-h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10"
              />
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
