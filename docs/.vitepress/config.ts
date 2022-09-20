import { defineConfig } from 'vitepress'

const ogDescription = 'Local & Fast starter template manager'

export default defineConfig({
  title: 'NEO',
  description: ogDescription,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'NEO' }],
    ['meta', { property: 'og:image', content: '/banner.png' }],
    ['meta', { property: 'og:url', content: 'http://neo-hack.com' }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'theme-color', content: '#00F900' }]
  ],
  themeConfig: {
    nav: [
      {
        text: 'Guide',
        link: '/guide/what-is-neo',
        activeMatch: '/guide',
      },
      {
        text: 'Configuration',
        link: '/configuration/neorc',
        activeMatch: '/configuration',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            {
              text: 'What is neo',
              link: '/guide/what-is-neo'
            },
            {
              text: 'Get started',
              link: '/guide/get-started'
            },
            {
              text: 'Manage with preset',
              link: '/guide/manage-with-preset'
            },
            {
              text: 'Run mario',
              link: '/guide/run-mario'
            },
          ],
        },
        {
          text: 'Commands',
          items: [
            {
              text: 'neo add',
              link: '/guide/commands/add'
            },
            {
              text: 'neo create',
              link: '/guide/commands/create'
            },
            {
              text: 'neo list',
              link: '/guide/commands/list'
            },
            {
              text: 'neo run',
              link: '/guide/commands/run'
            },
          ],
        },
        {
          text: 'APIs',
          items: [
            {
              text: 'Mario API',
              link: '/guide/mario-api'
            },
            {
              text: 'Preset API',
              link: '/guide/preset-api'
            },
          ],
        },
      ],
    },
  },
})
