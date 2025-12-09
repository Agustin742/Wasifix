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
    description: "Instalaciones, reparaciones y mantenimiento eléctrico profesional",
    icon: FaBolt,
    rating: 4.8,
    reviewsCount: 234,
    priceFrom: 1500,
    professionals: 45
  },
  {
    id: 2,
    name: "Plomería",
    description: "Solución de filtraciones, destapes y instalaciones sanitarias",
    icon: FaWrench,
    rating: 4.7,
    reviewsCount: 189,
    priceFrom: 2000,
    professionals: 38
  },
  {
    id: 3,
    name: "Pintura",
    description: "Pintura interior y exterior, acabados profesionales",
    icon: FaPaintRoller,
    rating: 4.6,
    reviewsCount: 156,
    priceFrom: 3500,
    professionals: 52
  },
  {
    id: 4,
    name: "Gasista",
    description: "Instalación y reparación de gas, calefones y estufas",
    icon: FaFire,
    rating: 4.9,
    reviewsCount: 142,
    priceFrom: 2500,
    professionals: 28
  },
  {
    id: 5,
    name: "Carpintería",
    description: "Muebles a medida, reparaciones y trabajos en madera",
    icon: FaHammer,
    rating: 4.7,
    reviewsCount: 198,
    priceFrom: 4000,
    professionals: 34
  },
  {
    id: 6,
    name: "Albañilería",
    description: "Construcción, reformas y reparaciones de mampostería",
    icon: FaHardHat,
    rating: 4.5,
    reviewsCount: 167,
    priceFrom: 5000,
    professionals: 41
  },
  {
    id: 7,
    name: "Cerrajería",
    description: "Apertura de puertas, cambio de cerraduras y llaves",
    icon: FaKey,
    rating: 4.8,
    reviewsCount: 223,
    priceFrom: 1800,
    professionals: 31
  },
  {
    id: 8,
    name: "Refrigeración",
    description: "Instalación y reparación de aires acondicionados",
    icon: FaSnowflake,
    rating: 4.6,
    reviewsCount: 178,
    priceFrom: 3000,
    professionals: 26
  },
  {
    id: 9,
    name: "Limpieza",
    description: "Limpieza profunda de hogares y oficinas",
    icon: FaBroom,
    rating: 4.7,
    reviewsCount: 312,
    priceFrom: 2500,
    professionals: 67
  },
  {
    id: 10,
    name: "Jardinería",
    description: "Mantenimiento de jardines y espacios verdes",
    icon: FaLeaf,
    rating: 4.5,
    reviewsCount: 145,
    priceFrom: 2800,
    professionals: 22
  },
  {
    id: 11,
    name: "Mudanzas",
    description: "Servicio completo de mudanzas y fletes",
    icon: FaTruck,
    rating: 4.4,
    reviewsCount: 134,
    priceFrom: 8000,
    professionals: 19
  },
  {
    id: 12,
    name: "Reparaciones",
    description: "Reparaciones generales del hogar",
    icon: FaTools,
    rating: 4.6,
    reviewsCount: 201,
    priceFrom: 1200,
    professionals: 58
  }
]