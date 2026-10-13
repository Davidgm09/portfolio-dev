import HTML from "../components/icons/HTML.astro"
import CSS from "../components/icons/CSS.astro"
import JS from "../components/icons/JS.astro"
import PHP from "../components/icons/PHP.astro"
import SQL from "../components/icons/SQL.astro"
import SEO from "../components/icons/SEO.astro"
import Tailwind from "../components/icons/TailwindCSS.astro"
import Wordpress from "../components/icons/Wordpress.astro"
import WooCommerce from "../components/icons/WooCommerce.astro"
import Astro from "../components/icons/AIcon.astro"
import ReactIcon from "../components/icons/React.astro"
import NextJS from "../components/icons/NextJS.astro"
import Azure from "../components/icons/Azure.astro"
import Moodle from "../components/icons/Moodle.astro"
import Supabase from "../components/icons/Supabase.astro"
import Figma from "../components/icons/Figma.astro"
import GitHub from "../components/icons/GitHub.astro"

// Tecnologías compartidas por experiencia, proyectos y skills
export const TAGS = {
  HTML: { name: "HTML5", icon: HTML },
  CSS: { name: "CSS3", icon: CSS },
  JS: { name: "JavaScript", icon: JS },
  PHP: { name: "PHP", icon: PHP },
  SQL: { name: "MySQL", icon: SQL },
  SEO: { name: "SEO", icon: SEO },
  TAILWIND: { name: "Tailwind CSS", icon: Tailwind },
  WORDPRESS: { name: "WordPress", icon: Wordpress },
  WOOCOMMERCE: { name: "WooCommerce", icon: WooCommerce },
  ASTRO: { name: "Astro", icon: Astro },
  REACT: { name: "React", icon: ReactIcon },
  NEXT: { name: "Next.js", icon: NextJS },
  AZURE: { name: "Azure", icon: Azure },
  MOODLE: { name: "Moodle", icon: Moodle },
  SUPABASE: { name: "Supabase", icon: Supabase },
  FIGMA: { name: "Figma", icon: Figma },
  GITHUB: { name: "GitHub", icon: GitHub },
}

export type Tag = (typeof TAGS)[keyof typeof TAGS]
