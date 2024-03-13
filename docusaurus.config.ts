import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Valthrun',
    tagline: 'Valthrun, an open source external Counter-Strike 2 read only kernel-level gameplay enhancer.',
    favicon: 'img/favicon.ico',

    url: 'https://wiki.valth.run/',
    baseUrl: '/',

    organizationName: 'valthrun',
    projectName: 'valthrun-wiki',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh-cn'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
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
            title: 'Valthrun',
            logo: {
                alt: 'Valthrun Logo',
                src: 'img/logo-icon.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    href: 'https://github.com/Valthrun/Wiki',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                }
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorial',
                            to: '/docs/intro',
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
                            href: 'https://github.com/facebook/docusaurus',
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
        }
    } satisfies Preset.ThemeConfig,
};

export default config;
