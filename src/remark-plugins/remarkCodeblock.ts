import { visit } from 'unist-util-visit';
import hljs from 'highlight.js';
import type { AstLinkNode, AstNode } from './types';
import {
  isGitHubUrl,
  isRemoteCodeUrl,
  processRemoteCodeUrl,
  shouldBeEmbedded,
} from './remarkCodeblock.utils';

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkCodeblock = () => async function transformer(tree: AstNode) {
  const transformations: (() => Promise<void>)[] = [];
  visit(tree, 'link', (node: AstLinkNode) => {
    if ((isGitHubUrl(node.url) || isRemoteCodeUrl(node.url)) && shouldBeEmbedded(node.url)) {
      transformations.push((async () => {
        const response = await fetch(processRemoteCodeUrl(node.url));
        const remoteCode = await response.text();
        const remoteCodeProcessed = hljs.highlightAuto(remoteCode).value;
        const codeblockId = `codeblock-${Math.round(Math.random() * 10000000).toString()}`;
        
        node.type = 'mdxJsxFlowElement';
        node.name = 'ArticleCodeblock';
        node.attributes = [
          { type: 'mdxJsxAttribute', name: 'codeHtml', value: remoteCodeProcessed },
          { type: 'mdxJsxAttribute', name: 'codeblockId', value: codeblockId },
        ];
        node.children = [];
        delete node.value;
      }));
    }
  });
  await Promise.all(transformations.map((transformation) => transformation()));
};

export default remarkCodeblock;
