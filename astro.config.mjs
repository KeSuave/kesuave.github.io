import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://kesuave.github.io",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
});
