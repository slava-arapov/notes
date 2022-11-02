import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarRu: SidebarConfig = {
  '/': [
    {
      text: 'Дом и быт',
      link: '/ru/home/',
      collapsible: true,
      children: [
        '/ru/home/konmari.md',
      ],
    },
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
      text: 'Менеджмент',
      link: '/ru/management/',
      collapsible: true,
    },
    {
      text: 'Письмо',
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
      text: 'Разработка',
      link: '/ru/software-engineering/',
      collapsible: true,
      children: [
        {
          text: 'API',
          link: '/ru/software-engineering/api.md',
          collapsible: true,
        },
        {
          text: 'DevOps',
          link: '/ru/software-engineering/devops/',
          collapsible: true,
          children: [
            '/ru/software-engineering/devops/docker.md',
          ],
        },
        {
          text: 'Front end',
          link: '/ru/software-engineering/front-end/',
          collapsible: true,
          children: [
            '/ru/software-engineering/front-end/css.md',
            '/ru/software-engineering/front-end/html.md',
          ],
        },
        {
          text: 'Git',
          link: '/ru/software-engineering/git.md',
          collapsible: true,
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
          children: [
            '/ru/software-engineering/javascript/vue.md',
          ],
        },
        {
          text: 'PHP',
          link: '/ru/software-engineering/php/',
          collapsible: true,
        },
        {
          text: 'Web',
          link: '/ru/software-engineering/web/',
          collapsible: true,
        },
        '/ru/software-engineering/state-machines.md',
        {
          text: 'Тестирование ПО',
          link: '/ru/software-engineering/software-testing/',
          collapsible: true,
        },
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
      children: [
        '/ru/productivity/smartphone.md',
        {
          text: 'Цели',
          link: '/ru/productivity/goals/',
          collapsible: true,
          children: [
            '/ru/productivity/goals/perfect-day.md',
          ],
        },
      ],
    },
  ],
}
