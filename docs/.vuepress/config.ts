import { defineUserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { head, navbarEn, navbarRu, sidebarEn, sidebarRu } from './configs'


const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({

  // set site base to default value
  base: '/',

  // extra tags in `<head>`
  head,

  // site-level locales config
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Slava Arapov Notes',
      description: 'Knowledge Base and Digital Garden',
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'Заметки Вячеслава Арапова',
      description: 'Цифровой сад и база знаний',
    },
  },

  // configure default theme
  theme: defaultTheme({
    repo: 'slava-arapov/notes.arapov.net',
    docsDir: 'docs',

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbarEn,
        // sidebar
        sidebar: sidebarEn,
        sidebarDepth: 0,
        // page meta
        editLinkText: 'Edit this page on GitHub',
      },

      /**
       * Russian locale config
       */
      '/ru/': {
        // navbar
        navbar: navbarRu,
        selectLanguageName: 'Russian',
        selectLanguageText: 'Russian',
        selectLanguageAriaLabel: 'Russian',
        // sidebar
        sidebar: sidebarRu,
        sidebarDepth: 0,
        // page meta
        editLinkText: 'Редактировать на GitHub',
        lastUpdatedText: 'Обновлено',
        contributorsText: 'Текст писали',
        // custom containers
        tip: 'СОВЕТ',
        warning: 'ПРЕДУПРЕЖДЕНИЕ',
        danger: 'ВНИМАНИЕ',
        // 404 page
        notFound: [
          'Не найдено',
        ],
        backToHome: 'На главную',
        // a11y
        openInNewWindow: 'открыть в новом окне',
        toggleColorMode: 'сменить тему',
        toggleSidebar: 'показать/скрыть панель',
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // use shiki plugin in production mode instead
      prismjs: !isProd,
    },
  }),

  // configure markdown
  markdown: {
    html: true,
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          path.resolve(__dirname, '../../packages/@vuepress')
        ),
    },
  },

	extendsMarkdown: md => {
	  md.use(require('markdown-it-task-lists'))
	},

  // use plugins
  plugins: [
    docsearchPlugin({
      appId: 'CTPT4KWVAH',
      apiKey: '483d76188f3b7c296aa219ec0cc58539',
      indexName: 'notes',
      searchParameters: {
        facetFilters: ['tags:v2'],
      },
      locales: {
        '/ru/': {
          placeholder: 'Поиск',
          translations: {
            button: {
              buttonText: 'Поиск',
              buttonAriaLabel: 'Поиск',
            },
            modal: {
              searchBox: {
                resetButtonTitle: 'Очистить',
                resetButtonAriaLabel: 'Очистить',
                cancelButtonText: 'Отменить',
                cancelButtonAriaLabel: 'Отменить',
              },
              startScreen: {
                recentSearchesTitle: 'Последнее',
                noRecentSearchesText: 'Нет последних запросов',
                saveRecentSearchButtonTitle: 'Сохранить поиск',
                removeRecentSearchButtonTitle: 'Удалить поиск из истории',
                favoriteSearchesTitle: 'Избранное',
                removeFavoriteSearchButtonTitle: 'Удалить из избранного',
              },
              errorScreen: {
                titleText: 'Не удаётся получить результаты',
                helpText: 'Проверьте соединение',
              },
              footer: {
                selectText: 'выбрать',
                navigateText: 'переместиться',
                closeText: 'закрыть',
                searchByText: 'Поиск от',
              },
              noResultsScreen: {
                noResultsText: 'Нет результатов по запросу',
                suggestedQueryText: 'Попробуйте поискать по запросу',
                reportMissingResultsText: 'Уверены, что такая информация есть на сайте?',
                reportMissingResultsLinkText: 'Дайте нам знать',
              },
            },
          },
        },
      },
    }),
    // only enable shiki plugin in production mode
    isProd ? shikiPlugin({ theme: 'dark-plus' }) : [],
  ],


})