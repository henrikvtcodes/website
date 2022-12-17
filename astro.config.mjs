// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), partytown({
    config: {
      forward: ["plausible"]
    }
  }), prefetch(), react()]
});