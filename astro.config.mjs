// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Dirección pública: activa la URL canónica y la imagen de vista previa al compartir el enlace
  site: 'https://davidgarcia-dev.vercel.app',
  integrations: [tailwind()]
});
