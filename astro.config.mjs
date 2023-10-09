// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://henrikvt.com",
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ["plausible"],
      },
    }),
    prefetch(),
    react(),
    sitemap(),
  ],
});
