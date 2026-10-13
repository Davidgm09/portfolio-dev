// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // TODO: pon aquí la URL donde se publica la web (p. ej. 'https://tudominio.com').
  // Con ella se activan la URL canónica y la imagen de vista previa al compartir el enlace.
  // site: 'https://...',
  integrations: [tailwind()]
});
