---
lang: en-EN
title: JavaScript testing
---
# JavaScript testing

A testing framework is used to run unit tests, for example:
- [Jest](https://jestjs.io/) — the most popular JavaScript application testing framework by Facebook.
- [Vitest](https://vitest.dev/) — brand new framework based on Vite.

The main frameworks have their own libraries that help to test components, for example
- [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro) built on top of [Vue Test Utils](https://test-utils.vuejs.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) built on top of [React Test Utilities](https://reactjs.org/docs/test-utils.html)

[Cypress](https://www.cypress.io/) is used for end-to-end testing.

## Component testing

It is necessary to check:
1. Differences in rendering with different input parameters (props);
1. Differences in rendering depending on the properties and computed properties of the global storage (store)
1. Component handles custom events, input fields
1. Component calls external functions
1. Component calls actions and mutations in store
1. Required changes in child components take place

## Links

### JavaScript
- [Jest](https://jestjs.io/) — Delightful JavaScript Testing Framework by Facebook
- [JavaScript & Node.js testing best practices](https://github.com/goldbergyoni/javascript-testing-best-practices) — Yoni Goldberg, GitHub (2022)
- [Тестирование JavaScript от А до Я (Jest, React Testing Library, e2e, screenshot)](https://youtu.be/y2emL1fMRyY) — Ulbi TV (2022) 🇷🇺

### Vue.js
- [Vue Testing Handbook](https://lmiller1990.github.io/vue-testing-handbook/v3/ru/) — Lachlan Miller (2022)
- [Vue Testing Handbook](https://lmiller1990.github.io/vue-testing-handbook/v3/) — Lachlan Miller (2022)
- [Vue Test Utils](https://test-utils.vuejs.org/) — The official testing suite utils for Vue.js 3
- [Vue Testing Library Test Examples](https://github.com/testing-library/vue-testing-library/tree/main/src/__tests__) — GitHub
- [Vitest Runner](https://plugins.jetbrains.com/plugin/19220-vitest-runner) — A simple WebStorm plugin to run Vitest tests

### End-to-end
- [Cypress](https://www.cypress.io/) — End-to-end test runner
