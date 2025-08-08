import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Negocios', href: '/businesses' },
  { name: 'Servicios', href: '/services' },
  { name: 'Acerca de', href: '/about' },
  { name: 'Contacto', href: '/contact' },
];

const Navigation = ({ isMobile = false, onLinkClick = () => {} }) => {
  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav>
      <ul className={`flex ${isMobile ? 'flex-col space-y-4' : 'space-x-6'}`}>
        {navLinks.map((link, index) => (
          <motion.li
            key={link.name}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: isMobile ? index * 0.1 : 0.3 + index * 0.1 }}
          >
            <a
              href={link.href}
              className={`font-medium ${
                isMobile
                  ? 'text-gray-800 hover:text-blue-600 text-lg'
                  : 'text-gray-600 hover:text-blue-600 transition-colors'
              }`}
              onClick={onLinkClick}
            >
              {link.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;