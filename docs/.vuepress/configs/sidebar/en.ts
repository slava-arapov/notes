import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/': [
    {
      text: 'Notes',
      children: [
        '/',
        '/writing/digital-garden.md',
        '/writing/static-website-vuepress-github-pages.md',
      ],
    },
  ],
}
