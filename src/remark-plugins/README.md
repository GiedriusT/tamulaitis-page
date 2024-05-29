# Remark plug-in set-up

We use Remark plug-ins as a means to adjust how project article markdown is translated into HTML. Here we describe how the whole Remark ecosystem is set-up. If instead you are looking for supported extended syntax in MD files check [Extended markdown syntax section](../../docs/extended-markdown-syntax.md).

Astro provides markdown processing support out of the box with the ability to extend it via Remark plug-in ecosystem. It is set-up like this:

- All plug-ins exported from [`index.ts`](./index.ts) are passed to Astro via [`/astro.config.mjs`](../../astro.config.mjs)
- Styling for each plug-in has to be imported separately into [`styles.scss`](./styles.scss)
- All parsed markdown is rendered inside [`ArticleContainer`](../components/ArticleContainer/ArticleContainer.tsx) component that imports all the styles from [`styles.scss`](./styles.scss)
- Plug-in files should be named with prefix `remark`, styles should be defined in separate SCSS file that has to be included into [`styles.scss`](./styles.scss). Simplest example is article title processing plug-in: [`remarkArticleTitle.ts`](./remarkArticleTitle.ts), [`remarkArticleTitle.scss`](./remarkArticleTitle.scss)