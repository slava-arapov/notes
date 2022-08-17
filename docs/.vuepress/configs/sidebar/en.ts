import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/': [
    {
      text: 'Notes',
      link: '/',
    },
    {
      text: 'Work',
      link: '/work/',
      collapsible: true,
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
