import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://yoursitehere.netlify.app/",
  integrations: [vue()],
  adapter: netlify(),
  server: {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0"
    }
  }
});