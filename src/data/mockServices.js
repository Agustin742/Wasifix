import { 
  FaBolt, 
  FaWrench, 
  FaPaintRoller, 
  FaFire, 
  FaHammer, 
  FaTools, 
  FaKey, 
  FaSnowflake,
  FaBroom,
  FaLeaf,
  FaTruck,
  FaHardHat
} from 'react-icons/fa'

export const mockServices = [
  {
    id: 1,
    name: "Electricidad",
    description: "Servicio integral de instalación, reparación y mantenimiento eléctrico para hogares y comercios. Incluye cableado, tableros, iluminación y detección de fallas, garantizando seguridad, eficiencia y cumplimiento de normas vigentes.",
    icon: FaBolt,
    rating: 4.8,
    reviewsCount: 234,
    priceFrom: 1500,
    professionals: 45,
  },
  {
    id: 2,
    name: "Plomería",
    description: "Solución completa para pérdidas, cañerías tapadas, instalaciones nuevas y mantenimiento de agua fría y caliente. Trabajo preciso, diagnóstico rápido y reparación duradera para evitar daños y garantizar correcto funcionamiento.",
    icon: FaWrench,
    rating: 4.7,
    reviewsCount: 189,
    priceFrom: 2000,
    professionals: 38
  },
  {
    id: 3,
    name: "Pintura",
    description: "Aplicación de pintura interior y exterior con preparación profesional de superficies. Mejora estética, protección contra humedad y acabado duradero. Incluye reparaciones menores y asesoramiento sobre colores y materiales adecuados.",
    icon: FaPaintRoller,
    rating: 4.6,
    reviewsCount: 156,
    priceFrom: 3500,
    professionals: 52
  },
  {
    id: 4,
    name: "Gasista",
    description: "Instalación, reparación y mantenimiento de artefactos y cañerías de gas. Pruebas de hermeticidad, habilitaciones y detección segura de fugas. Trabajo certificado para cumplir con normativas y asegurar máxima seguridad.",
    icon: FaFire,
    rating: 4.9,
    reviewsCount: 142,
    priceFrom: 2500,
    professionals: 28
  },
  {
    id: 5,
    name: "Carpintería",
    description: "Fabricación, ajuste y reparación de muebles, puertas, marcos y estructuras de madera. Acabados prolijos, adaptados a medida y con materiales de calidad, asegurando durabilidad y estética acorde al espacio.",
    icon: FaHammer,
    rating: 4.7,
    reviewsCount: 198,
    priceFrom: 4000,
    professionals: 34
  },
  {
    id: 6,
    name: "Albañilería",
    description: "Construcción y reparación de paredes, revoques, pisos y estructuras menores. Trabajo sólido, prolijo y resistente, ideal para reformas, ampliaciones o mantenimiento general, garantizando soluciones duraderas y profesionales.",
    icon: FaHardHat,
    rating: 4.5,
    reviewsCount: 167,
    priceFrom: 5000,
    professionals: 41
  }
]