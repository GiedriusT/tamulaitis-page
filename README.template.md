# {{MY_NAME}}

{{WHO_I_AM}}


## About me

{{WHAT_I_DO}}

Contact me at [{{CONTACT_EMAIL}}](mailto:{{CONTACT_EMAIL}})

Find me on [LinkedIn]({{LINKEDIN_URL}})


## How to use the repo?

Live version is available at [{{SITE_URL}}]({{SITE_URL}}). You can also read markdown files directly in this repo, they are linked in [Projects](#projects) section below. It is also possible to clone this repository and [run the page locally](#running-locally) if you want to do that for whatever reason.


## Projects

{{PROJECT_LIST}}

{{PROJECTS_COMING_SOON_TEXT}}


## Stack

This page is built with `Astro` and `React`, using `Vite` under the hood and `PNPM` as package manager. Styling is done via `SCSS` following scoped `CSS module` pattern. `Playwright` is used for running automated end-to-end tests. `ESLint` and `Husky` (with `lint-staged`) are keeping the code clean and up to the standards. `GitHub Actions` are used for simple CI/CD pipeline.

During the time project went through many transformations and rewrites, you can find [full technical decision log here](./docs/tech-decision-log.md).


## Documentation
- [Markdown syntax](docs/extended-markdown-syntax.md)
- [Code style guide](docs/code-style-guide.md)
- [Creating animated videos for projects](docs/creating-videos.md)
- [Running locally](docs/running-locally.md)
- [Running end-to-end tests](src/tests/README.md)
- [Tooling set-up (ESLint, Husky, Playwright, etc.)](docs/tooling-set-up.md)
- [Remark set-up (custom markdown transformers)](src/remark-plugins/README.md)


> ***NOTE:*** This file is re-generated from [README.template.md](README.template.md) file before every commit. It can manually be re-generated by running `pnpm run generate:md`.
