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

export interface CardService {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const adServices: CardService[] = [
  {
    id: 1,
    title: "Native",
    description: "Anuncios integrados de forma orgánica dentro del contenido, diseñados para no interrumpir la experiencia del usuario.",
    image: "img/campanas-interactivas/service-native-ads.webp",
  },
  {
    id: 2,
    title: "Facebook",
    description: "Campañas optimizadas para la plataforma, diseñadas para aumentar la interacción y atraer clientes potenciales.",
    image: "img/campanas-interactivas/service-facebook-ads.webp",
  },
  {
    id: 3,
    title: "Display",
    description: "Banners y anuncios en imagen o GIF distribuidos en la red de partners de Google, ampliando el alcance de tu campaña.",
    image: "img/campanas-interactivas/service-google-ads.webp",
  },
  {
    id: 4,
    title: "Instagram",
    description: "Contenido visual estratégico para generar interacción y fortalecer la presencia de marca en la plataforma.",
    image: "img/campanas-interactivas/service-instagram-ads.webp",
  },
  {
    id: 5,
    title: "Búsqueda",
    description: "Anuncios en Google Search que posicionan tu producto o servicio frente a personas interesadas en tu sector.",
    image: "img/campanas-interactivas/service-busqueda.webp",
  },
  {
    id: 6,
    title: "YouTube",
    description: "Publicidad en video o imagen dentro de YouTube, ideal para promocionar productos, servicios o contenido de marca.",
    image: "img/campanas-interactivas/service-youtube-ads.webp",
  },
];

export const webServices: CardService[] = [
  {
    id: 1,
    title: "Sitios Web",
    description: "Creamos sitios estratégicos, alineados a necesidades reales, incluso no detectadas por el cliente.",
    image: "img/desarrollo-web/service-sitios-web.webp",
  },
  {
    id: 2,
    title: "Desarrollo a Medida",
    description: "Simplificamos el desarrollo: prototipamos, validamos requerimientos y entregamos justo lo que imaginaste.",
    image: "img/desarrollo-web/service-desarrollo-a-medida.webp",
  },
  {
    id: 3,
    title: "E-commerce",
    description: "Creamos tiendas online eficientes con Shopify, WooCommerce o a medida, listas para escalar.",
    image: "img/desarrollo-web/service-e-commerce.webp",
  },
  {
    id: 4,
    title: "Infraestructura",
    description: "Usamos Cloudflare, microservicios y servidores optimizados para plataformas rápidas, seguras y escalables.",
    image: "img/desarrollo-web/service-infraestructura.webp",
  }
];

export const audiovisualServices: CardService[] = [
  {
    id: 1,
    title: "Animación 2D",
    description: "Animación promocional o storytelling visual, ideales para aumentar la retención de la audiencia.",
    image: "img/experiencias-audiovisuales/servicio-animacion-2d.webp",
  },
  {
    id: 2,
    title: "Redes Sociales",
    description: "Reels, stories y videos optimizados para cada plataforma, diseñados para captar la atención y reforzar el branding.",
    image: "img/experiencias-audiovisuales/servicio-redes-sociales.webp",
  },
  {
    id: 3,
    title: "Spots / Videos",
    description: "Producción de comerciales, contenidos sociales e informativos para televisión o eventos, redes, pantallas gigantes o cualquier otro.",
    image: "img/experiencias-audiovisuales/servicio-spots-videos.webp",
  },
  {
    id: 4,
    title: "Empresarial",
    description: "Videos corporativos, capacitaciones e inducción de personal con un enfoque profesional.",
    image: "img/experiencias-audiovisuales/servicio-empresarial.webp",
  },
  {
    id: 5,
    title: "YouTube",
    description: "Producción de comerciales, contenidos sociales e informativos para televisión o eventos, redes, pantallas gigantes o cualquier otro.",
    image: "img/experiencias-audiovisuales/servicio-youtube.webp",
  },
  {
    id: 6,
    title: "Cine Digital",
    description: "Conversión de videos a formatos listos para proyectarse en salas de Cinépolis y Cinemex.",
    image: "img/experiencias-audiovisuales/servicio-cine-digital.webp",
  }
];

export const printedServices: CardService[] = [
  {
    id: 1,
    title: "Gran Formato",
    description: "Lona, mesh, traslúcida, backlight.",
    image: "img/soluciones-impresas/servicio-gran-formato.webp",
  },
  {
    id: 2,
    title: "Alta Resolución",
    description: "Impresión en calidad fotográfica.",
    image: "img/soluciones-impresas/servicio-alta-resolucion.webp",
  },
  {
    id: 3,
    title: "Material Pop",
    description: "Viniles, piso, colgantes, etiquetas, letreros.",
    image: "img/soluciones-impresas/servicio-material-pop.webp",
  },
  {
    id: 4,
    title: "Especiales",
    description: "PVC, sublimación, corte láser y router, laminado, UV.",
    image: "img/soluciones-impresas/servicio-especiales.webp",
  },
  {
    id: 5,
    title: "Textil",
    description: "Playeras en DTF, serigrafía, vinil textil.",
    image: "img/soluciones-impresas/servicio-textil.webp",
  },
  {
    id: 6,
    title: "Rígidos",
    description: "Corplast, trovicel, estireno, mdf.",
    image: "img/soluciones-impresas/servicio-rigidos.webp",
  },
  {
    id: 7,
    title: "Promocional y esctructuras",
    description: "Display wall, demo stands, caballetes, anuncios luminosos, figuras clones.",
    image: "img/soluciones-impresas/servicio-promocional-y-estructuras.webp",
  },
  {
    id: 8,
    title: "Offset",
    description: "Flyers, trípticos, tarjetas, calidad fotográfica.",
    image: "img/soluciones-impresas/servicio-offset.webp",
  }
];

export const formatosUsuales: CardService[] = [
  {
    id: 1,
    title: "Digital",
    description: "Banners o imágenes para cualquier tipo de plataforma.",
    image: "img/diseno-digital/digital.webp",
  },
  {
    id: 2,
    title: "UX / UI",
    description: "Interfaces o prototipos para web / sistemas",
    image: "img/diseno-digital/ux-ui.webp",
  },
  {
    id: 3,
    title: "Identidad",
    description: "Logotipos, manuales de marca, ilustraciones.",
    image: "img/diseno-digital/identidad.webp",
  },
  {
    id: 4,
    title: "Redes",
    description: "Post, Infografías, Stories o Ads Google/Meta.",
    image: "img/diseno-digital/redes.webp",
  },
  {
    id: 5,
    title: "Impresos",
    description: "Gran formato, papeleria, vinil, materiales especiales de marca.",
    image: "img/diseno-digital/impresos.webp",
  },
  {
    id: 6,
    title: "Visual Merchandising",
    description: "Visual y estratégico del P.V. para mejorar la experiencia y promover productos.",
    image: "img/diseno-digital/visual-merchandising.webp",
  }
];