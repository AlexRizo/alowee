import {
  Building2,
  Projector,
  SendToBack,
  ThumbsUp,
  Video,
  Youtube,
} from "lucide-react";

export const servicesWithLongDescription = [
  {
    id: 1,
    title: "Spots / Videos",
    subtitle: "Producciones digitales",
    description:
      "Producción de comerciales, contenidos sociales e informativos para televisión o eventos, redes, pantallas gigantes o cualquier otro medio.",
    image: "services-spots-video.webp",
    icon: Video,
  },
  {
    id: 2,
    title: "Redes Sociales",
    subtitle: "Producción de contenido",
    description:
      "Reels, stories y videos optimizados para cada plataforma, diseñados para captar la atención y reforzar el branding.",
    image: "services-social-media.webp",
    icon: ThumbsUp,
  },
  {
    id: 3,
    title: "YouTube",
    subtitle: "Contenido para YouTube",
    description:
      "Contenido, entrevistas, eventos, vlogs, demostraciones y videos educativos.",
    image: "services-youtube.webp",
    icon: Youtube,
  },
  {
    id: 4,
    title: "Animación 2D",
    subtitle: "Animación profesional",
    description:
      "Animación promocional o storytelling visual, ideales para aumentar la retención de la audiencia.",
    image: "services-2d.webp",
    icon: SendToBack,
  },
  {
    id: 5,
    title: "Empresarial",
    subtitle: "Contenido corporativo",
    description:
      "Videos corporativos, capacitaciones e inducción de personal con un enfoque profesional.",
    image: "services-enterprise.webp",
    icon: Building2,
  },
  {
    id: 6,
    title: "Cine Digital",
    subtitle: "Contenido cinematográfico",
    description:
      "Conversión de videos a formatos listos para proyectarse en salas de Cinépolis y Cinemex.",
    image: "services-cine.webp",
    icon: Projector,
  },
];

export const servicesWithShortDescription = [
  {
    id: 1,
    title: "Spots / Videos",
    description: "Comerciales y videos para redes, eventos o pantallas.",
    icon: Video,
  },
  {
    id: 2,
    title: "Redes Sociales",
    description: "Reels y stories hechos para destacar tu marca.",
    icon: ThumbsUp,
  },
  {
    id: 3,
    title: "YouTube",
    description: "Entrevistas, vlogs, eventos y contenido educativo.",
    icon: Youtube,
  },
  {
    id: 4,
    title: "Animación 2D",
    description: "Animaciones que explican, venden o cuentan historias.",
    icon: SendToBack,
  },
  {
    id: 5,
    title: "Empresarial",
    description: "Videos para capacitación, inducción o imagen interna.",
    icon: Building2,
  },
  {
    id: 6,
    title: "Cine Digital",
    description: "Preparamos tu video para proyectarlo en el cine.",
    icon: Projector,
  },
];

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Spots / Videos",
    description:
      "Producción de comerciales, contenidos sociales e informativos para televisión o eventos, redes, pantallas gigantes o cualquier otro medio.",
    icon: "spots-y-video",
  },
  {
    id: 2,
    title: "Redes Socialese",
    description:
      "Reels, stories y videos optimizados para cada plataforma, diseñados para captar la atención y reforzar el branding.",
    icon: "redes-sociales",
  },
  {
    id: 3,
    title: "YouTube",
    description:
      "Contenido, entrevistas, eventos, vlogs, demostraciones y videos educativos.",
    icon: "youtube",
  },
  {
    id: 4,
    title: "Animación 2D",
    description:
      "Animación promocional o storytelling visual, ideales para aumentar la retención de la audiencia.",
    icon: "animacion-2d",
  },
  {
    id: 5,
    title: "Empresarial",
    description:
      "Videos corporativos, capacitaciones e inducción de personal con un enfoque profesional.",
    icon: "empresarial",
  },
  {
    id: 6,
    title: "Cine Digital",
    description:
      "Conversión de videos a formatos listos para proyectarse en salas de Cinépolis y Cinemex.",
    icon: "cine-digital",
  },
];
