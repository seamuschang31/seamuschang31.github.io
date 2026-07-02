// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://seamuschang31.github.io',
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
