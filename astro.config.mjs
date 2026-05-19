import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://paatna-motoklubi.pages.dev',
  i18n: {
    defaultLocale: 'et',
    locales: ['et', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
