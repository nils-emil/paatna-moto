import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://paatnamoto.ee',
  i18n: {
    defaultLocale: 'et',
    locales: ['et', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'et',
        locales: { et: 'et-EE', en: 'en' },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
