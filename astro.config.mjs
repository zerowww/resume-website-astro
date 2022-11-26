import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://alexandremartinez.dev/",
  integrations: [
    tailwind(),
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
