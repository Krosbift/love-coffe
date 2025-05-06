// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@assets': '/src/assets'
      }
    }
  },
  site: 'https://Krosbift.github.io',
  base: '/love-coffe/'
});
