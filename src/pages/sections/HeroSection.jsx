import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- Configuración de Animación ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Delay entre cada elemento animado
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const HeroSection = () => {
  // Estado para manejar el "slide" activo, como en un carrusel.
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [0, 1, 2]; // 3 puntos de navegación

  return (
    <section 
      className="relative h-screen w-full flex items-center justify-center text-white"
      // La imagen de fondo se define aquí. Asegúrate de que la ruta sea correcta.
      
    >
      
      {/* Contenedor del contenido principal (centrado y animado) */}
      <motion.div 
        className="relative z-10 flex flex-col items-center text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* "Píldora" superior */}
        <motion.div 
          className="mb-4 border border-white/25 bg-[#CECECE]/10  backdrop-blur-lg rounded-lg px-6 py-2 text-sm sm:text-base shadow-xl shadow-black/50"
          variants={itemVariants}
        >
          Plataforma líder en servicios del hogar
        </motion.div>

        {/* Título principal */}
        <motion.h4
          className="font-bold text-4xl sm:text-3xl md:text-4xl"
          variants={itemVariants}
        >
          Bienvenido a
        </motion.h4>
        
        <motion.h1 
          className="font-bold text-6xl sm:text-7xl md:text-8xl text-orange-500 mt-1"
          variants={itemVariants}
        >
          WasiFix
        </motion.h1>

        {/* Subtítulo */}
        <motion.p 
          className="mt-4 text-lg sm:text-xl md:text-2xl"
          variants={itemVariants}
        >
          Profesionales en tu celular
        </motion.p>
      </motion.div>

      {/* Puntos de navegación en la parte inferior */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="transition-all duration-300"
          >
            {activeIndex === index ? (
              // Indicador activo: Cuadrado con borde verde y fondo transparente
              <div className="w-3 h-3 bg-green-500 border-2 border-green-400 rounded-sm"></div>
            ) : (
              // Indicador inactivo: Cuadrado blanco sólido
              <div className="w-3 h-3 bg-white/70 rounded-sm hover:bg-white"></div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;