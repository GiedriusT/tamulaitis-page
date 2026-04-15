# Refactor a remark plugin to an MDX component mapping

Goal: keep **remark** for detection/transformation, but stop emitting raw HTML strings. Instead emit an **MDX JSX element**, and map that element to a real **React component** with **CSS module** styles.

This is the pattern used for `remarkArticleVersion` → `ArticleVersion`.

## Prereqs

- MD content is rendered as **MDX** (this repo uses temporary `temp/*/*.mdx` files).
- `astro.config.mjs` includes `@astrojs/mdx`.
- The page rendering MDX passes a `components` map to `<Content />` (see `src/pages/project/[slug].astro`).

## Steps

### 1) Keep detection logic inside the remark plugin

Keep the existing “is this the node I want?” logic unchanged.

For example, `remarkArticleVersion` keeps:

- Node type check (`paragraph`)
- Position check (must be last root child)
- Regex check for `vX.Y ... article`

### 2) Emit an MDX JSX node instead of HTML

In the visitor callback, replace:

- `node.type = 'html'`
- `node.value = '<div ...>...</div>'`

With:

- `node.type = 'mdxJsxFlowElement'` (or `mdxJsxTextElement` for inline)
- `node.name = 'YourComponentName'`
- `node.attributes = []` (important for MDX tooling)
- `node.children = [{ type: 'text', value: '...' }]`

Notes:

- If your plugin previously deleted children, you typically still want to control `node.children` explicitly.
- If you need props, use `node.attributes` (MDX attribute objects) and read them in the component.

### 3) Create the React component

Create:

- `src/components/YourComponent/YourComponent.tsx`
- `src/components/YourComponent/YourComponent.module.scss`

Component should return the same structure the old plugin produced (but in React).

### 4) Move styles to a CSS module

Take the old `remark-plugins/*.scss` rules and port them into the module.

For `ArticleVersion`, old:

- `.article-version { color: ...; font-size: ... }`

Became:

- `.articleVersion { color: ...; font-size: ... }`

### 5) Wire the MDX component mapping

In the page that renders the MDX content, import the component and add it to the mapping:

- `import YourComponent from '...'`
- `<markdownInstance.Content components={{ ..., YourComponent }} />`

Key detail:

- The mapping key must match the emitted MDX JSX element name (`node.name`), e.g. `ArticleVersion`.

### 6) Verify

- Run `pnpm run build`
- Inspect one `dist/project/*/index.html` for:
  - A rendered element with the component’s hashed CSS-module class
  - No raw HTML string output from the remark plugin

If MDX build crashes with errors around `.some` on undefined, ensure your emitted MDX JSX node includes:

- `node.attributes = []`

## Reference implementation

- **remark plugin**: `src/remark-plugins/remarkArticleVersion.ts`
- **component**: `src/components/ArticleVersion/ArticleVersion.tsx`
- **styles**: `src/components/ArticleVersion/ArticleVersion.module.scss`
- **mapping**: `src/pages/project/[slug].astro`

