import React from 'react';
// Importamos los íconos necesarios desde lucide-react
import { Search, UserCheck, CalendarDays, ThumbsUp } from 'lucide-react';

const HowItWorksSection = () => {

  // Definimos los colores de la marca para usarlos en el código
  const colors = {
    green: '#10B981',  // Verde WasiFix
    orange: '#F97316', // Naranja CTA
    dark: '#1F2937',   // Texto Oscuro
    gray: '#F9FAFB'    // Fondo Claro
  };

  // Array con los datos de los 4 pasos (para no repetir código HTML)
  const steps = [
    {
      id: 1,
      title: "Busca el servicio",
      description: "Indica qué servicio necesitas (plomería, gas, luz) y tu ubicación actual.",
      icon: <Search size={32} color="white" />, // Ícono Lupa
      bgColor: colors.green // Fondo del ícono verde
    },
    {
      id: 2,
      title: "Elige tu profesional",
      description: "Compara perfiles verificados, precios y lee reseñas reales de otros clientes.",
      icon: <UserCheck size={32} color="white" />, // Ícono Usuario/Check
      bgColor: colors.orange // Fondo naranja para destacar
    },
    {
      id: 3,
      title: "Coordina y contrata",
      description: "Contacta directamente y coordina la fecha, hora y detalles del trabajo.",
      icon: <CalendarDays size={32} color="white" />, // Ícono Calendario
      bgColor: colors.green
    },
    {
      id: 4,
      title: "Disfruta del resultado",
      description: "Recibe un servicio de calidad y comparte tu experiencia con la comunidad.",
      icon: <ThumbsUp size={32} color="white" />, // Ícono Pulgar Arriba
      bgColor: colors.green
    }
  ];

  return (
    // Sección principal con fondo gris muy claro (según requerimiento)
    <section className="py-5" style={{ backgroundColor: colors.gray }}>
      <div className="container">
        
        {/* Título y Subtítulo de la sección */}
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="fw-bold display-6 mb-3" style={{ color: colors.dark }}>
              ¿Cómo funciona?
            </h2>
            <p className="lead text-secondary">
              Es muy fácil, solo sigue estos 4 pasos simples
            </p>
          </div>
        </div>

        {/* Contenedor de las Tarjetas */}
        <div className="row g-4">
          {steps.map((step) => (
            // Configuración de la Grilla (Bootstrap):
            // col-12: Ocupa todo el ancho en celulares (1 por fila)
            // col-md-6: Ocupa la mitad en tablets (2 por fila)
            // col-lg-3: Ocupa un cuarto en monitores grandes (4 por fila)
            <div key={step.id} className="col-12 col-md-6 col-lg-3">
              
              {/* Tarjeta Individual */}
              <div 
                className="card h-100 border-0 shadow-sm text-center p-4"
                style={{ borderRadius: '16px', transition: 'transform 0.3s' }}
                // Efecto hover simple: al pasar el mouse sube un poquito
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                
                {/* Círculo del Ícono */}
                <div 
                  className="mx-auto mb-4 d-flex align-items-center justify-content-center shadow"
                  style={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: step.bgColor,
                    borderRadius: '50%'
                  }}
                >
                  {step.icon}
                </div>

                {/* Número del Paso (Badge) */}
                <div className="mb-3">
                  <span 
                    className="badge rounded-pill text-bg-light border"
                    style={{ fontSize: '0.9rem', color: colors.dark }}
                  >
                    Paso {step.id}
                  </span>
                </div>

                {/* Título del Paso */}
                <h3 className="h5 fw-bold mb-3" style={{ color: colors.dark }}>
                  {step.title}
                </h3>

                {/* Descripción */}
                <p className="text-secondary small mb-0">
                  {step.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;