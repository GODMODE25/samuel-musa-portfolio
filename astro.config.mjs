import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://samuelmusagraphics.vercel.app',
  integrations: [tailwind()],
});
