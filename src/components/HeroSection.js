import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Store, ShoppingBag } from 'lucide-react';

const HeroSection = () => {
  return (
    <motion.section
      className="relative bg-gradient-to-br from-blue-500 to-purple-600 text-white py-20 md:py-32 overflow-hidden rounded-b-3xl shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Tu Ciudad, <br className="md:hidden" />Tus Servicios, <br className="md:hidden" />Todo en Uno.
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Encuentra y conecta con negocios locales, servicios y experiencias.
          Simplifica tu vida, apoya lo tuyo.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <motion.button
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin className="w-5 h-5" />
            Explorar Ahora
          </motion.button>
          <motion.button
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Store className="w-5 h-5" />
            Registra tu Negocio
          </motion.button>
        </motion.div>
      </div>

      {/* Background elements for visual flair */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
      >
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400 opacity-20 rounded-full filter blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-400 opacity-20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-400 opacity-20 rounded-full filter blur-3xl"></div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;