# Remark plug-in set-up

We use Remark plug-ins as a means to adjust how project article markdown is translated into the final page HTML. Here we describe how the whole Remark ecosystem is set up. If instead you are looking for supported extended syntax in MD files check [Extended markdown syntax section](../../docs/extended-markdown-syntax.md).

Astro provides markdown processing support out of the box with the ability to extend it via the Remark plug-in ecosystem. It is set up like this:

- Plug-ins are exported from [`index.ts`](./index.ts) and passed to Astro via [`/astro.config.mjs`](../../astro.config.mjs)
- Plug-ins detect patterns in Markdown AST and transform nodes into MDX JSX elements (for example `mdxJsxFlowElement`), instead of emitting raw HTML
- Those MDX JSX element names are mapped to React components in [`src/pages/project/[slug].astro`](../pages/project/%5Bslug%5D.astro) via `<markdownInstance.Content components={{ ... }} />`
- Styling lives next to components as CSS modules (`*.module.scss`)

## Naming conventions

- Plug-ins are prefixed with `remark` (for example `remarkImage.ts`, `remarkYoutubeEmbed.ts`)
- Emitted MDX element names are prefixed with `Article` and match the component default export name (for example `ArticleImage`, `ArticleYoutubeEmbed`)
- Components live in `src/components/*` (one folder per component)

## Where styles are loaded

Component styles are loaded by importing the component in `[slug].astro`. The legacy global stylesheet `src/remark-plugins/styles.scss` used to aggregate plugin SCSS; it is no longer needed for migrated plugins.