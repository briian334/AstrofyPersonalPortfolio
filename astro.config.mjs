import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from "./src/locales";

// https://astro.build/config
export default defineConfig({
  site: "https://astrofy-template.netlify.app",
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: DEFAULT_LOCALE_SETTING,
    locales: Object.keys(LOCALES_SETTING),
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
