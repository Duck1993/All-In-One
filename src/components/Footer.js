import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-gray-300 py-10 mt-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <motion.h3
            className="text-2xl font-bold text-white mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            AllInOne
          </motion.h3>
          <div className="flex space-x-4">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Facebook className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} AllInOne. Todos los derechos reservados. Creado con <span className="text-red-500">❤️</span> por tu IA favorita.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;