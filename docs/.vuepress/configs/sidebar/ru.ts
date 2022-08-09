import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarRu: SidebarConfig = {
  '/': [
    {
      text: 'Заметки',
      children: [
        '/ru/',
        '/ru/writing/digital-garden.md',
        '/ru/writing/static-website-vuepress-github-pages.md',
      ],
    },
  ],
}
