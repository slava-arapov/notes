---
lang: ru-RU 
title: Как разместить сайт VuePress на GitHub Pages
---
# Как разместить сайт VuePress на GitHub Pages

Я хотел разместить этот проект на Github Pages. Сначала собрал статический сайт на Jekyll, но вдруг GitHub [выпустил интеграцию с GitHub Actions](https://github.blog/changelog/2022-07-27-github-pages-custom-github-actions-workflows-beta/), поэтому я быстро перевёл проект на VuePress и новый способ деплоя.

По новой схеме статический сайт на любом движке можно собрать с помощью GitHub Actions и разместить на GitHub Pages — быстро и бесплатно.

У GitHub Actions и VuePress прекрасная документация, поэтому тут краткая памятка.

## Настройка статического сайта
1. Зарегистрировать (под)домен, установить DNS-запись CNAME: `<your-username>.github.io`
1. Создать новый сайт VuePress и создать репозиторий
1. Разместить репозиторий на GitHub
1. В GitHub на вкладке Actions добавить новый Workflow по инструкции из [VuePress Guide](https://v2.vuepress.vuejs.org/guide/deployment.html#github-pages)
1. Если используется конфиг из документации и свой домен, нужно добавить параметр `fqdn` для последнего шага job `docs`
    ```yml{10-11}
    # please check out the docs of the workflow for more details
    # @see https://github.com/crazy-max/ghaction-github-pages
    - name: Deploy to GitHub Pages
    uses: crazy-max/ghaction-github-pages@v2
    with:
      # deploy to gh-pages branch
      target_branch: gh-pages
      # deploy the default output dir of VuePress
      build_dir: docs/.vuepress/dist
      # domain name to set in CNAME file
      fqdn: notes.arapov.net
    ```
1. При каждом коммите GitHub Action будет собирать и пушить обновлённый статический сайт в ветку `gh-pages`
1. Зайти на страницу Settings -> Pages и выбрать ветку `gh-pages` для деплоя на GitHub Pages

## Ссылки
- [GitHub Pages Deployment](https://v2.vuepress.vuejs.org/guide/deployment.html#github-pages) — VuePress manual
- [A GitHub Action to deploy to GitHub Pages](https://github.com/crazy-max/ghaction-github-pages) by CrazyMax
- [Quickstart for GitHub Pages](https://docs.github.com/en/pages/quickstart) — GitHub guide
