import React from 'react';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-12 pt-28 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Servicios Disponibles
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-10">
        Encuentra profesionales y servicios para todas tus necesidades. Desde fontaneros hasta clases de yoga,
        ¡la ayuda que buscas está a un clic!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder para tarjetas de servicios */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div
            key={item}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: item * 0.1, duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Servicio Ejemplo {item}</h3>
            <p className="text-gray-600 mb-4">
              Descripción breve del servicio y sus beneficios. ¡Pronto tendrás servicios de verdad aquí!
            </p>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
              Reservar
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesPage;