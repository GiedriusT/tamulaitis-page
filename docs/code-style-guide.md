# Code style guide

We use ESLint to enforce set of rules for our code. This document outlines the rules that are outside of what ESLint is handling (naming, importing, etc.) 


## Styles

We use [SASS](https://sass-lang.com/) for styling the project, and [SCSS module](https://vaihe.com/blog/astro/how-to-use-scss-modules-in-astro/) approach for importing styles. This way we get decent developer experience with autocomplete in IDE.

- Class names should be in `camelCase`
- Variable names should start with `$` and be in `$kebab-case`
- Mixin names should be in `kebab-case`
- SCSS code has to be organized in modules, named `NameOfComponent.module.scss`
- SCSS modules should be imported like this: `import S from './Header.module.scss';` and then be referenced like `S.className`. It provides nice auto-complete functionality (you need VSCode extension that adds support for CSS modules).

## Astro vs. React

We use [Astro](https://astro.build/) as static page generator, but mostly rely on [React](https://react.dev/) to implement components as it is more widely used and interchangeable. To keep things tidy we follow these rules:

- `/src/pages` is all Astro
- `/src/layouts` is all Astro
- `/src/components` is all React