// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '谭磊轩',
  tagline: '系统/战斗策划，从事游戏开发，关注 RPG 和互动叙事研究。',
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
  // v1.7: defaultLocale 改为 en —— 主要受众是 SMU Guildhall 老师 / 招聘方。
  // bryantan.net/        → English (root)
  // bryantan.net/zh-cn/  → 中文
  // .tsx 源码里 <Translate message="中文…"> 作为 zh-cn fallback（i18n/zh-cn/ 不存在时显示中文 message）
  // i18n/en/code.json 里 53 个 custom keys 的英文 message 是 en locale 的来源
  i18n: {
    defaultLocale: 'en',
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
      hideOnScroll: false,
      title: '谭磊轩',
      // v1.5: Font Awesome 6 house-solid icon (SVG file, ink color hardcoded #1F1B16)
      // Logo points to home, so the leftmost cluster doubles as the "home" affordance.
      logo: {
        alt: '谭磊轩',
        src: 'img/icon-home.svg',
        width: 24,
        height: 24,
      },
      items: [
        // v1.5.1: 首页 改放右上，与其他 page link 同 group（Bryan 反馈）
        // v1.7.2: activeBaseRegex 限制 active 态只在 "/" 或 "/zh-cn/" 根 URL；
        // 否则 Home 会因 startsWith("/") 在所有 sub-page 都亮起
        { to: '/',           label: '首页',     position: 'right', activeBaseRegex: '^/(zh-cn)?/?$' },
        { to: '/individual', label: '个人作品', position: 'right' },
        { to: '/teamwork',   label: '团队作品', position: 'right' },
        { to: '/personal',   label: '关于',     position: 'right' },
        // v1.6: locale switcher at far right (English locale rolled out)
        { type: 'localeDropdown', position: 'right' },
        // v1.5: 去掉 navbar 的 GitHub item（Bryan 反馈 #2 — Home hero links 已有 GitHub）
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
