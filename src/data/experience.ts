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
    date: "Julio 2026",
    title: "Responsable de Informática de Gestión y Sistemas de Información",
    company: "BAU, Centre Universitari d'Arts i Disseny",
    description:
      "Encargado de la gestión de usuarios con Microsoft Azure, la administración de la plataforma Moodle y la gestión del campus virtual de la universidad. Desarrollé desde cero sus webs El Cub y BAU News, y la aplicación interna de gestión académica: notas de alumnos, profesorado, asignación docente y más.",
    tags: [TAGS.NEXT, TAGS.REACT, TAGS.TAILWIND, TAGS.WORDPRESS, TAGS.AZURE, TAGS.MOODLE],
    link: "https://www.linkedin.com/school/bau-centre-universitari-darts-i-disseny/",
  },
  {
    date: "Octubre 2025",
    title: "Full Stack Developer",
    company: "Soccer System Pro",
    description:
      "Desarrollaba las funcionalidades y cambios que pedía cada club en el software de gestión deportiva de la empresa, trabajando en toda la plataforma: planes de dieta y nutrición, datos y fichas de los jugadores, seguimiento de lesiones y otras áreas.",
      tags: [TAGS.HTML, TAGS.CSS, TAGS.PHP,TAGS.SQL,TAGS.JS],
    link: "https://www.linkedin.com/company/soccersystempro/",

  },
  {
    date: "Febrero 2024",
    title: "Entrenador Docente de Informática y Comunicaciones",
    company: "MasterD",
    description:
      "Entrenador docente en el centro de formación ITMD (Instituto Tecnológico Master.D) de Barcelona, formando y capacitando a los alumnos en las áreas de Informática y Comunicaciones como en las áreas de Videojuegos.",
    link: "https://www.linkedin.com/school/master-d/",
  },
  {
    date: "Septiembre 2021",
    title: "Prácticas de Empresa",
    company: "MasterD",
    description:
      "Prácticas de empresa en Master D, encargado de ayudar a los alumnos de informática mientras desarrollaba manuales.",
  },
  {
    date: "Junio 2020",
    title: "Prácticas de Empresa",
    company: "Everis",
    description:
      "Participé en diferentes proyectos donde adquirí conocimientos técnicos, también de organización y gestión en equipo.",
  },
]
