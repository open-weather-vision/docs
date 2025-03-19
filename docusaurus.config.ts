import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const organizationName = "open-weather-vision";
const projectName = "docs";

const config: Config = {
    title: "open weather vision",
    tagline: "Create your own weather control center!",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: `https://${organizationName}.github.io`,
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: `/${projectName}/`,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "open-weather-vision", // Usually your GitHub org/user name.
    projectName: "owvision", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Useful options to enforce blogging best practices
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "owvision",
            logo: {
                alt: "Logo",
                src: "img/logo-2.svg",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "usersSidebar",
                    position: "left",
                    label: "User Documentation",
                },
                {
                    type: "docSidebar",
                    sidebarId: "developersSidebar",
                    position: "left",
                    label: "For Developers",
                },
                {
                    href: "https://github.com/open-weather-vision",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Documentation",
                    items: [
                        {
                            label: "User starter quide",
                            to: "/docs/users/intro",
                        },
                        {
                            label: "Development starter quide",
                            to: "/docs/developers/intro",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Github",
                            href: "https://github.com/open-weather-vision",
                        },
                        {
                            label: "Discord",
                            href: "https://discord.gg/YxVmbrYy",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} owvision. Built with 🦖.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
