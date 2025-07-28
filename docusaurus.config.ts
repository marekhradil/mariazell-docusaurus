import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Mariazell",
  tagline: "Mariazell - Benefit CZ ubytov8n9, informace",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "cs",
    locales: ["cs"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
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
      title: "Mariazell",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Informace",
          items: [
            {
              label: "Benefit CZ",
              href: "https://www.benefitcz.cz/",
            },
          ],
        },
        {
          title: "Mariazell",
          items: [
            {
              label: "Obec Mariazell",
              href: "https://www.mariazell.gv.at/",
            },
            {
              label: "Mariazell informace",
              href: "https://www.mariazell.at/",
            },
          ],
        },
        {
          title: "Zima",
          items: [
            {
              label: "Burger alpe",
              href: "https://www.buergeralpe.at/winter/",
            },
            {
              label: "Gemeinde alpe",
              href: "https://www.gemeindealpe.at/",
            },
            {
              label: "Otscher",
              href: "https://www.oetscher.at/en",
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
