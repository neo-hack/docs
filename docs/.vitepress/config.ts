import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NEO',
  description: 'Manage your templates like a pro',
  themeConfig: {
    nav: [
      {
        text: 'Guide',
        link: '/guide/what-is-neo',
        activeMatch: '/guide',
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
