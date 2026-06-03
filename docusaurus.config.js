// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Bryan Tan',
  tagline: 'Game Designer & Programmer.',
  url: 'https://bryantan.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/faviconA.ico',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  organizationName: 'bryanT4N', // Usually your GitHub org/user name.
  projectName: 'bryantan-pw', // Usually your repo name.
  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['en', "zh-cn"],
    localeConfigs: {
      en: {
        label: "English",
      },
      "zh-cn": {
        label: "中文",
      },
    },
  },

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/faviconA.ico',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#F5F1E8',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/faviconA.ico',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/faviconA.ico',
            color: '#B05A3B',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/faviconA.ico',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          // recentPosts: 10,
          showReadingTime: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/bryanT4N/bryantan-pw/edit/master/',
          feedOptions: {
            type: 'all',
          },
          postsPerPage: 'ALL',
          truncateMarker: /<!--\s*(truncate)\s*-->/,
        },
        googleAnalytics: {
          trackingID: 'UA-204542359-2',
          anonymizeIP: true, // Should IPs be anonymized?
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    blog: {
      sidebar: {
        groupByYear: false,
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: false,            // v1.1: 关，让 anime avatar 常驻承担人格识别符号
      title: 'Bryan Tan',
      logo: {
        alt: 'Bryan Tan',
        src: 'img/avatar.png',        // v1.1: 用 anime avatar 替代 plain avatar_c
        width: 32,
        height: 32,
      },
      items: [
        // v1.2 rollback: 恢复 Individual + Teamwork 两 page navbar 入口（spec 4 page 硬要求）
        { to: '/individual', label: '作品 · Individual', position: 'right' },
        { to: '/teamwork',   label: '团队 · Teamwork',  position: 'right' },
        { to: '/personal',   label: '关于 · Personal',  position: 'right' },
        {
          href: 'https://github.com/bryanT4N/',
          label: 'GitHub',
          position: 'right',
        },
        // { type: 'localeDropdown', position: 'right'},  // v2 enable when 英文 locale 内容补全
        // { to: '/blog', label: 'Blog', position: 'left' },  // Bryan 明确不开放 blog 到 navbar
      ],
    },
    footer: {
      // style: 'light',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/bryanT4N',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Leixuan Tan. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      { name: 'robots', content: 'max-image-preview:large' },
      { name: 'monetization', content: '$ilp.uphold.com/fYPB8Pjyig3z' }
    ],
  },

};
