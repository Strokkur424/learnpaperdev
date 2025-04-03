// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://learnpaperdev.com",
  integrations: [
    starlight({
      title: "Learn Paper Dev",
      social: {
        github: "https://github.com/Strokkur424/learnpaperdev",
      },
      sidebar: [
        {
          label: "Starter Guides",
          autogenerate: { directory: "starter" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/custom.css"],
    }),
  ],
});
