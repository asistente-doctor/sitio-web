import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Asistente Doctor',
  tagline: 'Tu asistente de salud',
  favicon: 'img/favicon.ico',
  // 55 9654 3234

  // Set the production url of your site here
  url: 'https://asistente.doctor',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'la-rebelion', // Usually your GitHub org/user name.
  projectName: 'asistente-doctor', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          routeBasePath: '/blog', // Serve the blog at the site's root
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      // https://docusaurus.io/docs/blog#multiple-blogs
      '@docusaurus/plugin-content-blog',
      {
        id: 'alex-garcia',
        routeBasePath: 'alejandro-garcia',
        path: './alejandro-garcia',
      }]
  ],


  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      { name: 'keywords', content: 'asistente, doctor, salud' },
      {name: 'twitter:card', content: 'summary'}],
    navbar: {
      title: 'Asistente Doctor',
      logo: {
        alt: 'Asistente Doctor Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Directorio',
        },
        { to: '/docs/periodoncia/alejandro-garcia', label: 'Alex García', position: 'left' },
        { href: 'tel:+525596606606', label: 'Llamar para cita', position: 'left' },
        {
          href: 'https://go.rebelion.la/contact-us',
          label: 'Contacto',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Médicos',
          items: [
            {
              label: 'Médicos',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'X',
              href: 'https://x.com/',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/asistente-doctor',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI Doctor, S.A. de C.V. Built with Docusaurus by La Rebelion.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
