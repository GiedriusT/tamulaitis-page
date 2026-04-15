import { visit } from 'unist-util-visit';
import { isInlineLink } from './utils';
import type { AstLinkNode, AstNode } from './types';

const isSpotifyLink = (node: AstLinkNode) => node.url.indexOf('https://open.spotify.com') === 0;

const processLink = (node: AstLinkNode, _indexInParent: number, parent: AstNode) => {
  if (!isSpotifyLink(node) || isInlineLink(parent)) return;

  node.type = 'mdxJsxFlowElement';
  node.name = 'ArticleSpotifyEmbed';
  node.attributes = [
    { type: 'mdxJsxAttribute', name: 'url', value: node.url },
  ];
  node.children = [];
  delete node.value;
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkSpotifyEmbed = () => function transformer(tree: AstNode) {
  visit(tree, 'link', processLink);
};

export default remarkSpotifyEmbed;
