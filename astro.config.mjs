import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://iyokan.com",
  integrations: [preact()],
  output: "server",
  adapter: netlify()
});