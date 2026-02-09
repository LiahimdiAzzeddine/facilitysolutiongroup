import { motion } from 'framer-motion';

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-secondary via-secondary-dark to-gray-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img 
            src="/logowebdark.png" 
            alt="Facility Solution Group" 
            className="h-20 w-auto mx-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </motion.div>

        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto">
          <motion.div
            className="absolute inset-0 border-4 border-white/20 rounded-full"
          />
          <motion.div
            className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Loading Text */}
        <motion.p
          className="mt-6 text-white text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Chargement...
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Loader;
