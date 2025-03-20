// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    site: "https://open-weather-vision.github.io",
    base: "docs",
    integrations: [
        starlight({
            title: "owvision",
            social: {
                github: "https://github.com/open-weather-vision/core",
            },
            customCss: ["./src/custom.css"],
            sidebar: [
                {
                    label: "User Guides",
                    autogenerate: { directory: "user-guides" },
                },
                {
                    label: "Developer Guides",
                    autogenerate: { directory: "developer-guides" },
                },
                {
                    label: "Plugins",
                    autogenerate: { directory: "plugins" },
                },
                {
                    label: "Reference",
                    autogenerate: { directory: "reference" },
                },
            ],
        }),
    ],
});
