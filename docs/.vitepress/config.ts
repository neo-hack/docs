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
          ],
        },
      ],
    },
  },
})
