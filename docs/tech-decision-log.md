# Log of technical decisions

Here is the list of technical decisions and transformations the project went through:

- At first I tried building this with `Gatsby` and `Contentful CMS` on the backend. Dropped the idea after few days of struggling. Gatsby is an over-engineered piece of crap in my opinion. If you have decent experience with React and GraphQL, it will actually be harder for you understand Gatsby. Everything is happening magically under the hood, there are Gatsby specific ways and tools for every action, error message are terrible, everything gets wrapped and re-wrapped in some Gatsby specific layers without you knowing about it (for example remote GraphQL schema being completely changed to Gatsby specific ugly nested monstrosity). Last drop for me when I tried to import a simple image and display it on the page, instead of simple img tag I got some picture element with many different sources inside, and the image wasn't even displaying. After this I decided that it's just not worth my time.
- Created first version with `Create React App` and `NPM` as version manager, `styled-components` for styling, `Apollo Client` for data retrieval via GraphQL. This all worked reasonably well.
- Ditched GraphQL data fetching and decided not to use any CMS and keep all articles in `.md` format inside the repo and use `Remark / Rehype` plug-ins for custom markdown transformations. Then the idea of making repository public and articles readable directly inside the repository came to mind.
- Properly configured `ESLint` with `eslint-config-airbnb-typescript` rule set.
- Added automatic deployment via `GitHub Actions`.
- Changed `Create React App` to `Vite` (with `Rollup` under the hood), `NPM` to `Yarn`. Was really impressed by the speed of `Vite` and how easy it is to configure it.
- Added `Playwright` for running automated end to end tests.
- Added `Husky` with `lint-staged` to automatically lint files before each commit.
- Added `Storybook` integration.
- Changed `Yarn` to `PNPM`, was impressed with the speed.
- Tried add server side generation with `Vite SSR`, dropped after few hours because it seemed too messy.
- Tried to move project to `Next.js`, dropped after few hours because it seemed too messy.
- As a temporary solution added index `PHP` script that injects title, description and other meta parameters before serving the HTML. Needed to write `custom Vite plug-in` for generating the metadata into JSON format. Was pretty happy how plug-in system works.
- Understood that I definitely need server side generation approach as articles were not showing up in Google. Started the project over with `Astro` and moved all functionality to the new project. Ditched `styled-components` and refactored styles to `SCSS` as `Astro` was working much better with this approach. Vite + React version is preserved in [`vite-react-version-pre-2024`](https://github.com/GiedriusT/tamulaitis-page/tree/vite-react-version-pre-2024) branch.
- Decided to use `SCSS modules` for importing and managing styles and having auto-complete functionality.