import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <motion.section
        className="container mx-auto px-4 py-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          ¡El futuro de tu ciudad está aquí!
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Pronto, este espacio se llenará con todos los negocios y servicios que puedas imaginar.
          ¡Paciencia, Roma no se construyó en un día, y tu "All in One" tampoco!
        </p>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;