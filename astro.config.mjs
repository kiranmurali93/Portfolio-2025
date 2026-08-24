// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    syntaxHighlight: false
  },
  site: "https://kiranpk.dev/"
});