---
lang: ru-RU 
title: Тестирование JavaScript-приложений
---
# Тестирование JavaScript-приложений

Для запуска юнит-тестов используют фреймворк, например:
- [Jest](https://jestjs.io/) — самый популярный фреймворк для тестирования JavaScript-приложений от Facebook.
- [Vitest](https://vitest.dev/) — свежий фреймворк на базе Vite.

У основных фреймворков есть свои библиотеки, которые помогают тестировать компоненты, например:
- [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro) на основе [Vue Test Utils](https://test-utils.vuejs.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) на основе [React Test Utilities](https://reactjs.org/docs/test-utils.html)

[Cypress](https://www.cypress.io/) — стандарт для e2e-тестирования веб-приложений.

## Тестирование компонентов

Необходимо проверить:
1. Отличия в рендеринге при разных входных параметрах (props);
1. Отличия в рендеринге в зависимости от свойств и вычисляемых свойств глобального хранилища (store)
1. Компонент обрабатывает пользовательские события, поля для ввода
1. Компонент вызывает внешние функции
1. Компонент вызывает действия и мутации в store
1. Происходят нужные изменения в дочерних компонентах

## Ссылки

### JavaScript
- [Jest](https://jestjs.io/) — Delightful JavaScript Testing Framework by Facebook
- [JavaScript & Node.js testing best practices](https://github.com/goldbergyoni/javascript-testing-best-practices) — Yoni Goldberg, GitHub (2022)
- [Тестирование JavaScript от А до Я (Jest, React Testing Library, e2e, screenshot)](https://youtu.be/y2emL1fMRyY) — Ulbi TV (2022)

### Vue.js
- [Руководство по тестированию Vue приложений](https://lmiller1990.github.io/vue-testing-handbook/v3/ru/) — Lachlan Miller (2022)
- [Vue Testing Handbook](https://lmiller1990.github.io/vue-testing-handbook/v3/) — Lachlan Miller (2022)
- [Vue Test Utils](https://test-utils.vuejs.org/) — The official testing suite utils for Vue.js 3
- [Vue Testing Library Test Examples](https://github.com/testing-library/vue-testing-library/tree/main/src/__tests__) — GitHub
- [Vitest Runner](https://plugins.jetbrains.com/plugin/19220-vitest-runner) — A simple WebStorm plugin to run Vitest tests

### End-to-end
- [Cypress](https://www.cypress.io/) — End-to-end test runner
