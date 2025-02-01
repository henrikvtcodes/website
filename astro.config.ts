// import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://henrikvt.com",
  integrations: [tailwind(), react(), sitemap(), svelte()],
  prefetch: true,
  output: "server",
  adapter: cloudflare()
});