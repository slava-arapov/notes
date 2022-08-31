import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarRu: SidebarConfig = {
  '/': [
    {
      text: 'Заметки',
      link: '/ru/',
    },
    {
      text: 'Разработка',
      link: '/ru/software-engineering/',
      collapsible: true,
      children: [
        {
          text: 'DevOps',
          link: '/ru/software-engineering/devops/',
          collapsible: true,
        },
        {
          text: 'GitHub',
          link: '/ru/software-engineering/github.md',
          collapsible: true,
        },
      ],
    },
    {
      text: 'Пишу',
      link: '/ru/writing/',
      collapsible: true,
      children: [
        '/ru/writing/static-website-vuepress-github-pages.md',
        '/ru/writing/digital-garden.md',
      ],
    },
    {
      text: 'Работа',
      link: '/ru/work/',
      collapsible: true,
      children: [
        '/ru/work/job-search.md',
        '/ru/work/cv.md',
        {
          text: 'Собеседование',
          link: '/ru/work/interview/',
          collapsible: true,
          children: [
            '/ru/work/interview/trivia.md',
            '/ru/work/interview/coding.md',
            '/ru/work/interview/system-design.md',
            '/ru/work/interview/behavioral.md',
          ],
        },
        '/ru/work/offer.md',
        '/ru/work/freelance.md',
      ],
    },
  ],
}
