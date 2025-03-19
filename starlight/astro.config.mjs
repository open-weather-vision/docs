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
            sidebar: [
                {
                    label: "User Guides",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: "Starter Guide", slug: "user-guides/starter" },
                    ],
                },
                {
                    label: "Developer Guides",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        {
                            label: "Station interfaces",
                            slug: "developer-guides/station-interface",
                        },
                        {
                            label: "Plugins",
                            slug: "developer-guides/plugin",
                        },
                        {
                            label: "Themes",
                            slug: "developer-guides/theme",
                        },
                    ],
                },
                {
                    label: "Reference",
                    autogenerate: { directory: "reference" },
                },
            ],
        }),
    ],
});
