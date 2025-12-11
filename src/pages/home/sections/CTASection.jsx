import React from 'react';
// Importamos íconos: Herramientas (Wrench) y Gorro (GraduationCap)
import { LuWrench, LuGraduationCap } from "react-icons/lu";

const CTASection = () => {
  return (

    <section className="p-8 bg-[#ECFDF5] max-w-6xl mt-8 mx-auto rounded-xl shadow-xl mb-16">
      <div className="container mx-auto px-4">
        
        {/* Contenedor Flex Vertical: Las tarjetas estarán una debajo de la otra */}
        <div className="flex flex-col gap-8">

          {/* === TARJETA 1: PARA PROFESIONALES (VERDE) === */}
          {/* Usamos etiqueta 'a' para que toda la tarjeta sea clickeable */}
          <a 
            href="#" 
            className="group relative overflow-hidden rounded-3xl bg-[#4ADE80] p-8 md:p-12 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] block"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              
              {/* Texto */}
              <div className="text-center md:text-left text-white max-w-2xl">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <LuWrench className="text-3xl bg-white/20 p-1.5 rounded-lg" />
                  <h2 className="text-3xl font-bold">¿Eres Profesional?</h2>
                </div>
                <p className="text-lg font-medium opacity-90 mb-6">
                  Únete a nuestra red de profesionales y empieza a recibir solicitudes de trabajo en tu zona hoy mismo.
                </p>
                
                {/* Botón visual (simulado) */}
                <span className="inline-block bg-white text-[#4ADE80] px-8 py-3 rounded-full font-bold shadow-sm transition group-hover:bg-gray-50">
                  Registrarse como Profesional
                </span>
              </div>

              {/* Imagen/Icono decorativo grande (Opcional, pero queda genial) */}
              <div className="hidden md:block opacity-30 transform group-hover:scale-110 transition duration-500">
                <LuWrench size={120} color="white" />
              </div>
            </div>
          </a>

          {/* === TARJETA 2: CAPACITACIONES (NARANJA) === */}
          <a 
            href="#" 
            className="group relative overflow-hidden rounded-3xl bg-[#FF6B35] p-8 md:p-12 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] block"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              
              {/* Columna Izquierda: Texto */}
              <div className="text-center lg:text-left text-white flex-1">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                  <LuGraduationCap className="text-3xl bg-white/20 p-1.5 rounded-lg" />
                  <h2 className="text-3xl font-bold">¿No sos Profesional?</h2>
                </div>
                <p className="text-lg font-medium opacity-90 mb-6">
                  Tenemos capacitaciones para vos - aprende un oficio con nosotros y Cáritas Buenos Aires.
                </p>
                
                {/* Botón visual */}
                <span className="inline-block bg-white text-[#FF6B35] px-8 py-3 rounded-full font-bold shadow-sm transition group-hover:bg-gray-50">
                  Ver Capacitaciones
                </span>
              </div>

              {/* Columna Derecha: Mini Grid de Cáritas */}
              <div className="w-full lg:w-auto">
                <p className="text-white/80 text-sm mb-3 text-center lg:text-left uppercase tracking-wider font-semibold">
                  Cursos Disponibles:
                </p>
                {/* Grid de 6 tarjetitas (3 columnas x 2 filas) */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {/* Generamos 6 tarjetas idénticas con un map para no repetir código */}
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-lg flex flex-col items-center justify-center gap-1 text-white hover:bg-white/20 transition">
                      <LuGraduationCap size={20} />
                      <span className="text-[10px] font-bold text-center leading-tight">
                        Cáritas<br/>Bs As
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default CTASection;