import { TAGS, type Tag } from "./tags"

export interface Job {
  date: string
  title: string
  company: string
  description: string
  tags?: Tag[]
  link?: string
}

export const EXPERIENCE: Job[] = [
  {
    date: "Octubre 2025 – septiembre 2026",
    title: "Responsable de Informática de Gestión y Sistemas de Información",
    company: "BAU, Centre Universitari d'Arts i Disseny",
    description:
      "Encargado de la gestión de usuarios con Microsoft Azure, la administración de la plataforma Moodle y la gestión del campus virtual de la universidad. Desarrollé desde cero sus webs El Cub y BAU News, y la aplicación interna de gestión académica: notas de alumnos, profesorado, asignación docente y más.",
    tags: [TAGS.NEXT, TAGS.REACT, TAGS.TAILWIND, TAGS.WORDPRESS, TAGS.AZURE, TAGS.MOODLE],
    link: "https://www.linkedin.com/school/bau-centre-universitari-darts-i-disseny/",
  },
  {
    date: "Abril 2025 – octubre 2025",
    title: "Full Stack Developer",
    company: "Soccer System Pro",
    description:
      "Desarrollaba las funcionalidades y cambios que pedía cada club en el software de gestión deportiva de la empresa, trabajando en toda la plataforma: planes de dieta y nutrición, datos y fichas de los jugadores, seguimiento de lesiones y otras áreas.",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.PHP, TAGS.SQL, TAGS.JS],
    link: "https://www.linkedin.com/company/soccersystempro/",
  },
  {
    date: "2021 – 2024",
    title: "Entrenador Docente de Informática y Comunicaciones",
    company: "Instituto Tecnológico Master.D",
    description:
      "Formación de alumnos en Informática y Comunicaciones y en Videojuegos: talleres, seguimiento personalizado y supervisión de prácticas.",
    link: "https://www.linkedin.com/school/master-d/",
  },
  {
    date: "Marzo 2021 – julio 2021",
    title: "Prácticas",
    company: "Instituto Tecnológico Master.D",
    description: "Apoyo a los alumnos de informática y elaboración de manuales.",
  },
]
