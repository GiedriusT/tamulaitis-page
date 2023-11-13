# Tooling set-up

Page uses quite some tooling around the development pipeline that can be quite hard to grasp after you haven't touched it for a while. Therefore this document outlines what tools are used and where does the configuration for each of them reside.

## ESLint

ESLint is set up to lint the project and integrate well with IDEs. Configuration is available in [.eslintrc](../.eslintrc). You can run `pnpm run lint` to lint the whole project or `pnpm run lint:fix` to lint and fix it. Linting is also run automatically before each commit thanks to Husky.

## Husky (and lint-staged)

Husky is currently set up to run scripts before each commit. Pre-commit hook is configured in [.husky/pre-commit](../.husky/pre-commit) and currently set to run `pnpm pre-commit` command that is defined in [package.json](../package.json).

Running `pnpm pre-commit` in turn executes `lint-staged` that lints files that are staged for being committed, `lint-staged` config can be found in [.lintstagedrc](../.lintstagedrc)

## Playwright

Playwright is set up to run automated end-to-end tests. They can be run manually by following instructions in [src/tests/README.md](../src/tests/README.md) and are run automatically via GitHub action before the deployment as defined in [.github/workflows/main.yml](../.github/workflows/main.yml).

Configuration for Playwright can be found in [playwright.config.ts](../playwright.config.ts)

## NVM

For generation of markdown files from templates we need to be on specific node version. For this NVM is set up with fixed Node version in [.nvmrc](../.nvmrc) file. You need to [install it](https://github.com/nvm-sh/nvm#installing-and-updating) and run `nvm use` in the root folder.