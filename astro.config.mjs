// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://learnpaperdev.com",
  integrations: [
    starlight({
      title: "Learn Paper Dev",
      logo: {
        src: "./src/assets/logo.svg",
      },
      social: {
        github: "https://github.com/Strokkur424/learnpaperdev",
      },
      components: {
        Footer: "./src/components/Footer.astro",
        Header: "./src/components/Header.astro",
        ContentPanel: "./src/components/ContentPanel.astro",
      },
      sidebar: [
        {
          label: "Beginner Guide",
          items: [
            { label: "Introduction", link: "/beginner/introduction" },
            { label: "Project Setup", link: "/beginner/project-setup" },
            {
              label: "Creating a Plugin",
              link: "/beginner/creating-a-plugin",
            },
            {
              label: "Listening to Events",
              link: "/beginner/listening-to-events",
            },
            {
              label: "Working with Players",
              link: "/beginner/working-with-players",
            },
          ],
        },
        {
          label: "Adventure Series",
          items: [
            { label: "Components", link: "/adventure/components" },
            { label: "Tag Resolvers", link: "/adventure/tag-resolvers" },
            { label: "Audiences", link: "/adventure/audiences" },
            { label: "Common Issues", link: "/adventure/common-issues" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "API Changelogs",
          items: [
            //     { label: "1.21.4", link: "/changelogs/1.21.4" },
            { label: "1.21.3", link: "/changelogs/1.21.3" },
            { label: "1.21.2", link: "/changelogs/1.21.2" },
            { label: "1.21.1", link: "/changelogs/1.21.1/" },
            //     { label: "1.21", link: "/changelogs/1.21" },
          ],
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
