import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const allCategories = {
  'Todos': [],
  'Restaurantes': ['Comida Rápida', 'Gourmet', 'Temáticos', 'Cafeterías', 'Bares'],
  'Tiendas': ['Ropa', 'Electrónica', 'Hogar', 'Libros', 'Deportes'],
  'Servicios del Hogar': ['Fontanería', 'Electricidad', 'Limpieza', 'Jardinería', 'Reformas'],
  'Belleza y Salud': ['Peluquerías', 'Spas', 'Gimnasios', 'Clínicas', 'Farmacias'],
  'Automotriz': ['Talleres', 'Lavado de Coches', 'Concesionarios', 'Repuestos'],
  'Educación': ['Academias', 'Clases Particulares', 'Idiomas', 'Música', 'Arte'],
  'Entretenimiento': ['Cines', 'Teatros', 'Bares', 'Discotecas', 'Parques de Atracciones'],
  'Deportes y Fitness': ['Gimnasios', 'Centros Deportivos', 'Tiendas de Deportes', 'Entrenadores Personales'],
  'Mascotas': ['Tiendas de Mascotas', 'Veterinarias', 'Peluquerías Caninas', 'Guarderías'],
  'Tecnología': ['Tiendas de Electrónica', 'Reparación de Dispositivos', 'Desarrollo de Software', 'Consultoría IT'],
  'Arte y Cultura': ['Galerías de Arte', 'Museos', 'Teatros', 'Librerías', 'Centros Culturales'],
  'Viajes y Turismo': ['Agencias de Viajes', 'Hoteles', 'Tours', 'Alquiler de Coches'],
  'Finanzas y Seguros': ['Bancos', 'Asesoría Financiera', 'Seguros', 'Préstamos'],
  'Legal y Consultoría': ['Abogados', 'Consultores', 'Asesoría Empresarial'],
  'Eventos y Fiestas': ['Salones de Eventos', 'Catering', 'Decoración', 'Fotografía', 'Música para Eventos'],
  'Inmobiliaria': ['Agencias Inmobiliarias', 'Alquileres', 'Venta de Propiedades', 'Administración de Fincas'],
  'Moda y Accesorios': ['Tiendas de Ropa', 'Zapatos', 'Joyas', 'Accesorios', 'Diseñadores'],
  'Joyería': ['Joyerías', 'Diseño de Joyas', 'Reparación de Joyas'],
  'Libros y Papelería': ['Librerías', 'Papelerías', 'Material Escolar'],
  'Juguetes y Hobbies': ['Jugueterías', 'Tiendas de Hobbies', 'Juegos de Mesa'],
  'Música y Video': ['Tiendas de Música', 'Instrumentos Musicales', 'Estudios de Grabación'],
  'Electrónica': ['Tiendas de Electrónica', 'Reparación de Electrónica', 'Componentes'],
  'Jardinería y Paisajismo': ['Viveros', 'Servicios de Jardinería', 'Diseño de Paisajes'],
  'Construcción y Reformas': ['Materiales de Construcción', 'Contratistas', 'Arquitectos', 'Diseño de Interiores'],
  'Limpieza': ['Servicios de Limpieza', 'Productos de Limpieza'],
  'Seguridad': ['Sistemas de Seguridad', 'Alarmas', 'Vigilancia'],
  'Transporte y Logística': ['Servicios de Mensajería', 'Transporte de Carga', 'Mudanzas'],
  'Marketing y Publicidad': ['Agencias de Marketing', 'Diseño Web', 'Publicidad Digital'],
  'Diseño Gráfico': ['Diseñadores Gráficos', 'Imprentas'],
  'Fotografía y Video': ['Fotógrafos', 'Videógrafos', 'Estudios de Fotografía'],
  'Desarrollo Web y Software': ['Desarrolladores Web', 'Desarrolladores de Software', 'Apps Móviles'],
  'Salud y Bienestar': ['Nutricionistas', 'Psicólogos', 'Fisioterapeutas', 'Yoga', 'Pilates'],
  'Farmacias': ['Farmacias', 'Parafarmacias'],
  'Clínicas y Hospitales': ['Clínicas', 'Hospitales', 'Consultas Médicas'],
  'Veterinarias': ['Clínicas Veterinarias', 'Hospitales Veterinarios'],
  'Guarderías y Cuidado Infantil': ['Guarderías', 'Niñeras', 'Centros de Cuidado Infantil'],
  'Cuidado de Mayores': ['Cuidado a Domicilio', 'Residencias de Ancianos'],
  'Terapias Alternativas': ['Acupuntura', 'Quiropráctica', 'Masajes Terapéuticos'],
  'Nutrición': ['Nutricionistas', 'Dietistas'],
  'Psicología': ['Psicólogos', 'Terapeutas'],
  'Coaching': ['Coaching Personal', 'Coaching Empresarial'],
  'Reparaciones': ['Reparación de Electrodomésticos', 'Reparación de Calzado', 'Sastrería'],
  'Alquileres': ['Alquiler de Vehículos', 'Alquiler de Maquinaria', 'Alquiler de Equipos'],
  'Donaciones': ['Centros de Donación', 'Organizaciones Benéficas'],
  'Voluntariado': ['Programas de Voluntariado', 'ONGs'],
  'Gobierno y Servicios Públicos': ['Ayuntamientos', 'Oficinas de Gobierno', 'Servicios Comunitarios'],
  'Organizaciones sin Fines de Lucro': ['Asociaciones', 'Fundaciones'],
};

const sortOptions = [
  'Recomendados',
  'Más Recientes',
  'Mejor Calificados',
  'A-Z',
];

const BusinessesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedSubcategory, setSelectedSubcategory] = useState('Todos');
  const [selectedSort, setSelectedSort] = useState('Recomendados');

  // Reset subcategory when main category changes
  useEffect(() => {
    setSelectedSubcategory('Todos');
  }, [selectedCategory]);

  // Datos de ejemplo para simular negocios
  const businesses = [
    { id: 1, name: 'Restaurante El Sabor', category: 'Restaurantes', subcategory: 'Gourmet', rating: 4.5, date: '2023-01-15' },
    { id: 2, name: 'Boutique Elegancia', category: 'Moda y Accesorios', subcategory: 'Ropa', rating: 4.8, date: '2023-02-20' },
    { id: 3, name: 'Fontanería Rápida', category: 'Servicios del Hogar', subcategory: 'Fontanería', rating: 4.2, date: '2023-03-10' },
    { id: 4, name: 'Salón Glamour', category: 'Belleza y Salud', subcategory: 'Peluquerías', rating: 4.7, date: '2023-04-01' },
    { id: 5, name: 'Taller Mecánico AutoFix', category: 'Automotriz', subcategory: 'Talleres', rating: 4.6, date: '2023-05-05' },
    { id: 6, name: 'Academia de Idiomas', category: 'Educación', subcategory: 'Idiomas', rating: 4.9, date: '2023-06-12' },
    { id: 7, name: 'Cine Estrella', category: 'Entretenimiento', subcategory: 'Cines', rating: 4.0, date: '2023-07-20' },
    { id: 8, name: 'Cafetería Aroma', category: 'Restaurantes', subcategory: 'Cafeterías', rating: 4.3, date: '2023-08-01' },
    { id: 9, name: 'Gimnasio Fuerza Total', category: 'Deportes y Fitness', subcategory: 'Gimnasios', rating: 4.6, date: '2023-09-01' },
    { id: 10, name: 'Clínica Veterinaria Patitas', category: 'Mascotas', subcategory: 'Veterinarias', rating: 4.9, date: '2023-10-01' },
    { id: 11, name: 'Tienda de Electrónica MegaByte', category: 'Tecnología', subcategory: 'Tiendas de Electrónica', rating: 4.2, date: '2023-11-01' },
    { id: 12, name: 'Galería de Arte Moderno', category: 'Arte y Cultura', subcategory: 'Galerías de Arte', rating: 4.7, date: '2023-12-01' },
    { id: 13, name: 'Agencia de Viajes Aventura', category: 'Viajes y Turismo', subcategory: 'Agencias de Viajes', rating: 4.4, date: '2024-01-05' },
    { id: 14, name: 'Banco Seguro', category: 'Finanzas y Seguros', subcategory: 'Bancos', rating: 4.1, date: '2024-02-10' },
    { id: 15, name: 'Abogados Asociados', category: 'Legal y Consultoría', subcategory: 'Abogados', rating: 4.6, date: '2024-03-15' },
    { id: 16, name: 'Salón de Eventos Celebración', category: 'Eventos y Fiestas', subcategory: 'Salones de Eventos', rating: 4.8, date: '2024-04-20' },
  ];

  const filteredAndSortedBusinesses = businesses
    .filter(business => selectedCategory === 'Todos' || business.category === selectedCategory)
    .filter(business => selectedSubcategory === 'Todos' || business.subcategory === selectedSubcategory)
    .sort((a, b) => {
      if (selectedSort === 'Más Recientes') {
        return new Date(b.date) - new Date(a.date);
      }
      if (selectedSort === 'Mejor Calificados') {
        return b.rating - a.rating;
      }
      if (selectedSort === 'A-Z') {
        return a.name.localeCompare(b.name);
      }
      return 0; // Recomendados (sin orden específico por ahora)
    });

  const availableSubcategories = allCategories[selectedCategory] || [];

  return (
    <motion.div
      className="container mx-auto px-4 py-12 pt-28 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Negocios Locales
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-10">
        Descubre una amplia variedad de negocios en tu área. Desde restaurantes hasta tiendas de ropa,
        ¡todo lo que necesitas está aquí!
      </p>

      {/* Controles de Filtro y Ordenamiento */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        {/* Filtro por Categoría Principal */}
        <div className="relative w-full md:w-auto">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-sm"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {Object.keys(allCategories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Filtro por Subcategoría (solo si hay subcategorías disponibles) */}
        {availableSubcategories.length > 0 && (
          <div className="relative w-full md:w-auto">
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-sm"
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
            >
              <option value="Todos">Todas las Subcategorías</option>
              {availableSubcategories.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        )}

        {/* Ordenar por */}
        <div className="relative w-full md:w-auto">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-sm"
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Lista de Negocios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAndSortedBusinesses.length > 0 ? (
          filteredAndSortedBusinesses.map((business, index) => (
            <motion.div
              key={business.id}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{business.name}</h3>
              <p className="text-gray-600 text-sm mb-2">Categoría: {business.category}</p>
              {business.subcategory && (
                <p className="text-gray-600 text-sm mb-2">Subcategoría: {business.subcategory}</p>
              )}
              <p className="text-gray-600 text-sm mb-4">Calificación: {business.rating} ⭐</p>
              <p className="text-gray-600 mb-4">
                Descripción breve del negocio y lo que ofrece. ¡Pronto tendrás negocios de verdad aquí!
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Ver Detalles
              </button>
            </motion.div>
          ))
        ) : (
          <motion.div
            className="col-span-full text-center py-10 bg-white rounded-xl shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 text-lg">No se encontraron negocios con los filtros seleccionados.</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default BusinessesPage;