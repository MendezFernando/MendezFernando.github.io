// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://MendezFernando.github.io',
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components'
      }
    }
  },
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  server: {
    host: true,
    port: 4321,
  }
});
