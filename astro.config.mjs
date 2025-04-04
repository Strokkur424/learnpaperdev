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
      components: {
        Footer: "./src/components/Footer.astro",
      },
      sidebar: [
        {
          label: "Beginner Guides",
          items: [
            { label: "Introduction", link: "/beginner/introduction/" },
            { label: "Project Setup", link: "/beginner/project-setup/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/custom.css"],
      expressiveCode: {
        themes: ["one-dark-pro", "one-light"],
      },
      lastUpdated: true,
    }),
  ],
});
