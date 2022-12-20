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
          text: 'API',
          link: '/software-engineering/api.md',
          collapsible: true,
        },
        {
          text: 'DevOps',
          link: '/software-engineering/devops/',
          collapsible: true,
          children: [
            '/software-engineering/devops/docker.md',
          ],
        },
        {
          text: 'Front end',
          link: '/software-engineering/front-end/',
          collapsible: true,
          children: [
            '/software-engineering/front-end/css.md',
            '/software-engineering/front-end/html.md',
          ],
        },
        {
          text: 'Git',
          link: '/software-engineering/git.md',
          collapsible: true,
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
          children: [
            '/software-engineering/javascript/vue.md',
          ],
        },
        {
          text: 'PHP',
          link: '/software-engineering/php/',
          collapsible: true,
        },
        {
          text: 'Software Testing',
          link: '/software-engineering/software-testing/',
          collapsible: true,
          children: [
            '/software-engineering/software-testing/unit-javascript.md',
          ],
        },
        '/software-engineering/state-machines.md',
        {
          text: 'Web',
          link: '/software-engineering/web/',
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
