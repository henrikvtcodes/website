// import partytown from "@astrojs/partytown";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://henrikvt.com",
  integrations: [tailwind(), react(), sitemap(), svelte()],
  prefetch: true,
  image: {
    service: passthroughImageService(),
  },
  output: "server",
  adapter: cloudflare(),
});
