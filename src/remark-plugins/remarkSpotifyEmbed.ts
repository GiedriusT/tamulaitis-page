/* eslint-disable no-param-reassign */
import { visit } from 'unist-util-visit';
import { isInlineLink } from './utils';
import type { AstLinkNode, AstNode } from './types';

const isSpotifyLink = (node: AstLinkNode) => node.url.indexOf('https://open.spotify.com') === 0;

const processLink = (node: AstLinkNode, _indexInParent: number, parent: AstNode) => {
  if (!isSpotifyLink(node) || isInlineLink(parent)) return;

  const url = node.url.replace('https://open.spotify.com/', 'https://open.spotify.com/embed/');
  const iFrameParams = [
    'style="border-radius:12px"',
    `src="${url}"`,
    'width="100%"',
    'height="472"',
    'frameBorder="0"',
    'allowfullscreen=""',
    'allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"',
    'loading="lazy"',
  ];

  node.type = 'html';
  node.value = `
    <div class="spotify-embed">
      <iframe ${iFrameParams.join(' ')}></iframe>
    </div>
  `;
  delete node.children;
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkSpotifyEmbed = () => function transformer(tree: AstNode) {
  visit(tree, 'link', processLink);
};

export default remarkSpotifyEmbed;
