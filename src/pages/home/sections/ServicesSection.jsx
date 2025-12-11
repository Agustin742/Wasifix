import { useNavigate } from "react-router";
import ServicesCarousel from "../../../components/services/ServicesCarousel";
import { mockServices } from "../../../data/mockServices";

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleMoreInfo = (serviceName) => {
    navigate(`/buscar?servicio=${encodeURIComponent(serviceName)}`);
  };

  const renderServiceCard = (service) => {
    const Icon = service.icon;

    return (
      <div className="bg-white overflow-hidden max-w-4xl mx-auto rounded-xl shadow-2xl h-120 transition-300">
        {/* Parte superior: imagen */}
        <div className="relative h-1/2 w-full">
          <img
            src={`/imgs/mockups/${service.name}.jpg`}
            alt={service.name}
            className="w-full h-full object-cover"
          />

          {/* Icono arriba a la derecha */}
          <div className="absolute top-3 right-3 bg-orange-400 p-3 rounded-full shadow-xl">
            <Icon size={28} className="text-white" />
          </div>
        </div>

        {/* Parte inferior verde */}
        <div className="bg-[#10B981] text-white p-5 flex flex-col h-1/2 justify-between">
          <div>
            <h3 className="text-2xl font-bold">{service.name}</h3>
            <p className="text-md opacity-90 mt-1">{service.description}</p>
          </div>

          <button
            onClick={() => handleMoreInfo(service.name)}
            className="bg-white text-green-700 font-semibold px-4 py-2 rounded-lg text-md hover:scale-101 hover:shadow-xl transition duration-300"
          >
            Más información
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 p-8 bg-[#ECFDF5] max-w-6xl mt-8 mx-auto rounded-xl shadow-xl mb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Qué servicio necesitas hoy?
        </h2>

        <ServicesCarousel
          items={mockServices.slice(0, 6)}
          renderItem={renderServiceCard}
          autoPlay={false}
          slidesPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
