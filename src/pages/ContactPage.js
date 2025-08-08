import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-12 pt-28 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Contáctanos
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-10">
        ¿Tienes preguntas, sugerencias o quieres registrar tu negocio? ¡Estamos aquí para ayudarte!
      </p>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 max-w-3xl mx-auto">
        <div className="space-y-6 mb-8">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-blue-500" />
            <p className="text-gray-700 text-lg">info@allinone.com</p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-blue-500" />
            <p className="text-gray-700 text-lg">+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-blue-500" />
            <p className="text-gray-700 text-lg">123 Calle Principal, Ciudad Ejemplo, País</p>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;