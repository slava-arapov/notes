import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarRu: SidebarConfig = {
  '/': [
    {
      text: 'Заметки',
      link: '/ru/',
    },
    {
      text: 'Здоровье',
      link: '/ru/health/',
      collapsible: true,
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
          text: 'Front end',
          link: '/ru/software-engineering/front-end/',
          collapsible: true,
          children: [
            '/ru/software-engineering/front-end/html.md',
            '/ru/software-engineering/front-end/vue.md',
          ],
        },
        {
          text: 'GitHub',
          link: '/ru/software-engineering/github.md',
          collapsible: true,
        },
        {
          text: 'JavaScript',
          link: '/ru/software-engineering/javascript/',
          collapsible: true,
        },
        {
          text: 'PHP',
          link: '/ru/software-engineering/php/',
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
    {
      text: 'Фитнес',
      link: '/ru/fitness/',
      collapsible: true,
      children: [
        '/ru/fitness/exercises.md',
        '/ru/fitness/stretching.md',
      ],
    },
    {
      text: 'Эффективность',
      link: '/ru/productivity/',
      collapsible: true,
    },
  ],
}
