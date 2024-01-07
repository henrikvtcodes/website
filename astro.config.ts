import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

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
    react(),
    sitemap(),
  ],
  prefetch: true,
});
