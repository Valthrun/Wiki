import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Valthrun Zenith',
    tagline: 'Valthrun Zenith, an hypervisor-backed driver for undetectable, low-level memory access',
    favicon: 'img/favicon.ico',

    url: 'https://zenith.valth.run/',
    baseUrl: '/',

    onBrokenLinks: 'warn',
    trailingSlash: true,

    markdown: {
        hooks: {
            onBrokenMarkdownLinks: "throw",
            onBrokenMarkdownImages: "throw",
        },
    },

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en', /*'zh-cn'*/],
    },

    presets: [
        [
            'classic',
            {
                blog: false,
                docs: {
                    routeBasePath: "/",
                    path: "docs/020_drivers/020_implementation/010_zenith",
                    sidebarPath: './sidebar-zenith.ts',
                    editUrl: ({ versionDocsDirPath, docPath }) =>
                        `https://github.com/Valthrun/Wiki/edit/master/${versionDocsDirPath}/${docPath}`,
                    editLocalizedFiles: true,
                    editCurrentVersion: true,
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        //image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Valthrun Zenith',
            logo: {
                alt: 'Valthrun Logo',
                src: 'img/logo-zenith.svg',
            },
            items: [
                // {
                //     type: 'docSidebar',
                //     sidebarId: 'tutorialSidebar',
                //     position: 'left',
                //     label: 'Documentation',
                // },
                // {
                //     href: 'https://valth.run/portal',
                //     label: 'Portal',
                //     position: 'left',
                // },
                // {
                //     type: 'localeDropdown',
                //     position: 'left',
                // }
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Websites',
                    items: [
                        {
                            label: 'Valthrun Homepage',
                            href: 'https://valth.run/',
                        },
                        {
                            label: 'Valthrun Portal',
                            href: 'https://valth.run/portal',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/ecKbpAPW5T',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Latest Release',
                            href: 'https://github.com/Valthrun/Valthrun/releases/latest',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Valthrun/Valthrun',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Valthrun. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        colorMode: {
            defaultMode: "dark",
            respectPrefersColorScheme: true
        },
    } satisfies Preset.ThemeConfig,

    clientModules: ["./src/fix-url.ts"]
};

export default config;
