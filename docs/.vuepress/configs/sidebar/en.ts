import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/': [
    {
      text: 'Notes',
      link: '/',
    },
    {
      text: 'Software Engineering',
      link: '/software-engineering/',
      collapsible: true,
      children: [
        {
          text: 'DevOps',
          link: '/software-engineering/devops/',
          collapsible: true,
        },
        {
          text: 'Front end',
          link: '/software-engineering/front-end/',
          collapsible: true,
          children: [
            '/software-engineering/front-end/html.md',
            '/software-engineering/front-end/vue.md',
          ],
        },
        {
          text: 'GitHub',
          link: '/software-engineering/github.md',
          collapsible: true,
        },
        {
          text: 'JavaScript',
          link: '/software-engineering/javascript/',
          collapsible: true,
        },
        {
          text: 'PHP',
          link: '/software-engineering/php/',
          collapsible: true,
        },
      ],
    },
    {
      text: 'Work',
      link: '/work/',
      collapsible: true,
      children: [
        '/work/freelance.md',
      ],
    },
    {
      text: 'Writing',
      link: '/writing/',
      collapsible: true,
      children: [
        '/writing/digital-garden.md',
        '/writing/static-website-vuepress-github-pages.md',
      ],
    },
  ],
}
