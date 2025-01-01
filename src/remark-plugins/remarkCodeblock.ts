import { visit } from 'unist-util-visit';
import hljs from 'highlight.js';
import type { AstLinkNode, AstNode } from './types';
import {
  isGitHubUrl,
  isRemoteCodeUrl,
  processRemoteCodeUrl,
  shouldBeEmbedded,
} from './remarkCodeblock.utils';
import { getTranslations } from '../i18n/utils';

// This is one ugly ass file right here and I hate all the code that I wrote here. The reason why I resorted
// to this HTML + JS as strings nonsense is because I didn't find the way how to pass custom component
// to Markdown renderer. It should support it for MDX files, but not for MD files, and I want to use MD,
// because GitHub displays them nicely. It was written much nicer in original implementation that I had in
// vanilla React witout Astro, this was a quick and dirty way to mimic the same functionality in Astro. It
// does the job for now, but should be rewritten, I'm sure there should be cleaner way to implement this properly.

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkLink = () => async function transformer(tree: AstNode) {
  const t = getTranslations();
  const transformations: (() => Promise<void>)[] = [];
  visit(tree, 'link', (node: AstLinkNode) => {
    if ((isGitHubUrl(node.url) || isRemoteCodeUrl(node.url)) && shouldBeEmbedded(node.url)) {
      transformations.push((async () => {
        const response = await fetch(processRemoteCodeUrl(node.url));
        const remoteCode = await response.text();
        const remoteCodeProcessed = hljs.highlightAuto(remoteCode).value;
        const codeblockId = `codeblock-${Math.round(Math.random() * 10000000).toString()}`;
        node.type = 'html';
        node.value = `
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css">
          <div class="codeblock-container">
            <div class="codeblock-content">
              <div class="codeblock-activation-overlay" id="${codeblockId}">
                <div class="codeblock-activation-overlay-text">
                  <span class="text">${t('codeblock.activationText')}</span>
                  <span class="text-mobile">${t('codeblock.activationTextMobile')}</span>
                </div>
              </div>
              <pre><code>${remoteCodeProcessed}</code></pre>
              <div class="codeblock-bottom-fade"></div>
            </div>
          </div>
          <script>
            document.getElementById('${codeblockId}').addEventListener('click', function (event) {
              event.target.closest('.codeblock-content').classList.add('activated');
            });
            window.addEventListener('scroll', function () {
              document.querySelectorAll('.codeblock-content.activated').forEach(function (el) {
                el.classList.remove('activated');
              });
            });
          </script>
        `;
        delete node.children;
      }));
    }
  });
  await Promise.all(transformations.map((transformation) => transformation()));
};

export default remarkLink;
