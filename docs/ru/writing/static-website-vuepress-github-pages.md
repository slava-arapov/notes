---
lang: ru-RU 
title: Размещение сайта VuePress на GitHub Pages
---
# Размещение сайта VuePress на GitHub Pages

I started Jekyll project first to host on Github Pages but GitHub [released new GitHub Actions integrations on July 27th, 2022](https://github.blog/changelog/2022-07-27-github-pages-custom-github-actions-workflows-beta/) so I moved to VuePress.

You can use GitHub Actions to build any static website and GitHub Pages to host it. 

GitHub actions and VuePress documentation is great so I list the sequence of steps briefly.

## Static website setup instructions
1. Register (sub)domain and set DNS CNAME record to `<your-username>.github.io`
1. Create VuePress site and make a repository
1. Host the repository on GitHub
1. Add new workflow at GitHub actions tab according to [VuePress Guide](https://v2.vuepress.vuejs.org/guide/deployment.html#github-pages)
1. If you use sample config and custom domain add `fqdn` parameter in the last `docs` job step
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
1. GitHub action will build and push updated static site to `gh-pages` branch
1. Check your repository Settings -> Pages page and select `gh-pages` branch to deploy from

## Links
- [GitHub Pages Deployment](https://v2.vuepress.vuejs.org/guide/deployment.html#github-pages) — VuePress manual
- [A GitHub Action to deploy to GitHub Pages](https://github.com/crazy-max/ghaction-github-pages) by CrazyMax
- [Quickstart for GitHub Pages](https://docs.github.com/en/pages/quickstart) — GitHub guide
