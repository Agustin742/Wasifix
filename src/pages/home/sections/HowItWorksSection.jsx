import React from 'react';
// Importamos los íconos desde react-icons
import { LuSearch, LuUserCheck, LuCalendarDays, LuThumbsUp } from "react-icons/lu";

const HowItWorksSection = () => {

  const steps = [
    {
      id: 1,
      title: "Busca el servicio",
      description: "Indica qué servicio necesitas (plomería, gas, luz) y tu ubicación actual.",
      icon: <LuSearch size={32} color="white" />, 
      colorTheme: "green"
    },
    {
      id: 2,
      title: "Elige tu profesional",
      description: "Compara perfiles verificados, precios y lee reseñas reales de otros clientes.",
      icon: <LuUserCheck size={32} color="white" />, 
      colorTheme: "orange"
    },
    {
      id: 3,
      title: "Coordina y contrata",
      description: "Contacta directamente y coordina la fecha, hora y detalles del trabajo.",
      icon: <LuCalendarDays size={32} color="white" />, 
      colorTheme: "green"
    },
    {
      id: 4,
      title: "Disfruta del resultado",
      description: "Recibe un servicio de calidad y comparte tu experiencia con la comunidad.",
      icon: <LuThumbsUp size={32} color="white" />, 
      colorTheme: "green"
    }
  ];

  const getBgColorClass = (theme) => {
    if (theme === 'orange') return 'bg-[#F97316]'; 
    return 'bg-[#10B981]'; 
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-gray-600">
            Es muy fácil, solo sigue estos 4 pasos simples
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md ${getBgColorClass(step.colorTheme)}`}>
                {step.icon}
              </div>

              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200">
                  Paso {step.id}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;