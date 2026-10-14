import type { ImageMetadata } from "astro"
import { TAGS, type Tag } from "./tags"
import elcub from "../assets/projects/elcub.webp"
import baunews from "../assets/projects/baunews.webp"
import norma from "../assets/projects/norma.webp"
import moto from "../assets/projects/moto.webp"
import tesla from "../assets/projects/tesla.webp"
import gallery from "../assets/projects/gallery.webp"

export interface Project {
  title: string
  description: string
  image: ImageMetadata
  tags: Tag[]
  link?: string
  video?: string
}

// Para añadir un proyecto: guarda la captura en src/assets/projects, impórtala arriba y añade un objeto aquí.
// El orden es el de la página
export const PROJECTS: Project[] = [
  {
    title: "El Cub, tienda online de BAU",
    description:
      "Tienda online y copistería de BAU hecha con WooCommerce: material para cada área de estudios, catálogo de BAU Edicions, cuenta de usuario con inicio de sesión de Microsoft y pedidos con pago online y recogida en tienda. La desarrollé desde cero.",
    link: "https://elcub.bau.cat/",
    image: elcub,
    tags: [TAGS.WORDPRESS, TAGS.WOOCOMMERCE, TAGS.PHP, TAGS.AZURE, TAGS.CSS],
  },
  {
    title: "BAU News",
    description:
      "Web de noticias de BAU y BAU Research, en castellano y catalán: noticias, agenda de eventos, investigación, entrevistas y artículos, con buscador y suscripción a la newsletter. La desarrollé desde cero.",
    link: "https://news.baued.es/",
    image: baunews,
    tags: [TAGS.WORDPRESS, TAGS.PHP, TAGS.SEO, TAGS.CSS],
  },
  {
    title: "NormaComics",
    description:
      "Réplica de la tienda de cómics y figuras NormaComics, con catálogo y base de datos en PHP y MySQL. La desarrollé como material para los talleres de programación de Master.D.",
    video: "/video.mp4",
    image: norma,
    tags: [TAGS.PHP, TAGS.SQL, TAGS.HTML, TAGS.CSS],
  },
  {
    title: "Scroll Moto Animation Experience",
    description:
      "Experiencia interactiva con animaciones fluidas que avanzan con el scroll, inspirada en el diseño minimalista japonés de Ichiban Bike.",
    link: "https://davidgm09.github.io/scroll-moto/",
    image: moto,
    tags: [TAGS.JS, TAGS.CSS, TAGS.HTML],
  },
  {
    title: "Réplica de la landing de Tesla",
    description:
      "Réplica de la página de inicio de Tesla hecha con Astro y Tailwind CSS, cuidando la estructura y el rendimiento.",
    link: "https://davidgm09.github.io/Tesla-Replica/",
    image: tesla,
    tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.CSS],
  },
  {
    title: "Galería de dibujos",
    description:
      "Galería con mis propios dibujos, el proyecto con el que aprendí Astro y Tailwind CSS.",
    link: "https://galeriadgm.es/",
    image: gallery,
    tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.CSS],
  },
]
