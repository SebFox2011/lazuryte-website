import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  // The site is served from the root of lazuryte.fr, not a repository subpath.
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        creationSiteInternet: resolve(import.meta.dirname, 'creation-site-internet/index.html'),
        applicationMetier: resolve(import.meta.dirname, 'application-metier/index.html'),
      },
    },
  },
});
