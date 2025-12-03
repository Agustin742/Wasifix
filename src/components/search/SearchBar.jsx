import React, { useState } from 'react';
import { FiSearch, FiMapPin, FiTarget } from 'react-icons/fi';
import Input from '../ui/Input';
import Button from '../ui/Button';

// Lista de servicios para el autocompletado (en una app real, vendría de una API)
const serviceSuggestions = [
  'Electricidad', 'Plomería', 'Gasista', 'Carpintería', 
  'Pintura', 'Albañilería', 'Aire Acondicionado', 'Jardinería'
];

// Tags de servicios populares
const popularServices = ['Electricidad', 'Plomería', 'Gasista', 'Carpintería', 'Pintura', 'Albañilería'];

/**
 * Componente principal de búsqueda con geolocalización.
 * 
 * @param {object} props - Propiedades del componente.
 * @param {(searchData: { service: string; location: string }) => void} props.onSearch - Callback que se ejecuta al iniciar una búsqueda.
 */
const SearchBar = ({ onSearch }) => {
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');
  const [geoStatus, setGeoStatus] = useState({ loading: false, error: null });

  // --- Manejadores de Eventos ---

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ service, location });
    }
    console.log('Buscando:', { service, location });
  };

  const handleTagClick = (tagService) => {
    setService(tagService);
    if (onSearch) {
      onSearch({ service: tagService, location });
    }
    console.log('Buscando por tag:', { service: tagService, location });
  };

  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      setGeoStatus({ loading: false, error: 'La geolocalización no es soportada por tu navegador.' });
      return;
    }

    setGeoStatus({ loading: true, error: null });
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // NOTA: Para convertir coords a dirección, se necesita una API de Geocoding Inverso (ej. Google Maps, Mapbox).
        // Aquí, simplemente mostramos las coordenadas como ejemplo.
        const { latitude, longitude } = position.coords;
        setLocation(`Mi ubicación actual (${latitude.toFixed(2)}, ${longitude.toFixed(2)})`);
        setGeoStatus({ loading: false, error: null });
      },
      () => {
        setGeoStatus({ loading: false, error: 'No se pudo obtener la ubicación. Revisa los permisos.' });
      }
    );
  };

  // --- Renderizado ---

  return (
    <div>
        <div className="bg-white p-6 rounded-xl shadow-lg w-full">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            {/* Input de Servicio */}
            <div className="md:col-span-2">
            <Input
                label="¿Qué servicio necesitas?"
                type="text"
                placeholder="Ej: Plomería, Electricidad..."
                icon={<FiSearch />}
                value={service}
                onChange={(e) => setService(e.target.value)}
                list="service-suggestions" // Para el autocompletado nativo
            />
            <datalist id="service-suggestions">
                {serviceSuggestions.map(s => <option key={s} value={s} />)}
            </datalist>
            </div>

            {/* Input de Ubicación */}
            <div className="md:col-span-2 relative">
            <Input
                label="Tu ubicación"
                type="text"
                placeholder="Ej: Ciudad, Dirección..."
                icon={<FiMapPin />}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                disabled={geoStatus.loading}
            />
            <button
                type="button"
                onClick={handleGeolocation}
                className="absolute right-2 top-[38px] text-gray-500 hover:text-green-600 transition-colors"
                aria-label="Usar mi ubicación actual"
                disabled={geoStatus.loading}
            >
                {geoStatus.loading ? (
                <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                <FiTarget size={20} />
                )}
            </button>
            </div>

            {/* Botón de Búsqueda */}
            <div className="md:col-span-1">
            <Button type="submit" size="lg" fullWidth>
                Buscar
            </Button>
            </div>
        </form>

        {/* Mensaje de error de Geolocalización */}
        {geoStatus.error && (
            <p className="text-red-500 text-sm mt-2 text-center md:text-left">{geoStatus.error}</p>
        )}

        
        </div>

    
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-white mr-2">Populares:</span>
        {popularServices.map((tag) => (
          <div className="bg-[#C5E5D8]  rounded-full" >
            <Button 
                key={tag} 
                variant="ghost"
                size="sm"
                onClick={() => handleTagClick(tag)}
            
            >
                {tag}
            </Button>
          </div>
        ))}
      </div>

    </div>

  );
};

export default SearchBar;