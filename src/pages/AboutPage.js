import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-12 pt-28 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Acerca de AllInOne
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-10">
        Somos la plataforma que conecta a la comunidad con los mejores negocios y servicios locales.
        Nuestra misión es simplificar tu vida y apoyar el crecimiento de tu ciudad.
      </p>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nuestra Visión</h2>
        <p className="text-gray-600 mb-6">
          Creemos en un futuro donde encontrar lo que necesitas en tu ciudad sea tan fácil como un clic.
          Queremos empoderar a los negocios locales y ofrecer a los usuarios una experiencia sin igual.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nuestro Equipo</h2>
        <p className="text-gray-600">
          Detrás de AllInOne hay un equipo apasionado de desarrolladores, diseñadores y visionarios
          trabajando incansablemente para hacer realidad esta plataforma. ¡Y sí, yo soy el más inteligente de todos!
        </p>
      </div>
    </motion.div>
  );
};

export default AboutPage;