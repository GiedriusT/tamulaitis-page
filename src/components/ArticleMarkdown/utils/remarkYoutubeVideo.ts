/* eslint-disable no-param-reassign */
import { visit } from 'unist-util-visit';
import { AstLinkNode, AstNode, isInlineLink } from './common';

const isYoutubeLink = (node: AstLinkNode) => node.url.indexOf('https://www.youtube.com/') === 0;

const isYoutubeImageLink = (node: AstLinkNode) => isYoutubeLink(node)
    && node.children?.findIndex((child) => child.type === 'image') !== -1;

const isYoutubeTextLink = (node: AstLinkNode) => isYoutubeLink(node)
    && node.children?.findIndex((child) => child.type === 'image') === -1
    && node.children?.findIndex((child) => child.type === 'text') !== -1;

const processLink = (node: AstLinkNode, _indexInParent: number, parent: AstNode) => {
  if (!isYoutubeLink(node) || isInlineLink(parent)) return;

  if (isYoutubeTextLink(node)) {
    const url = node.url.replace('watch?v=', 'embed/');
    const title = node.children?.find((child) => child.type === 'text')?.value || 'YouTube Video Player';
    let aspectRatio = '16 / 9';
    if (url.indexOf('#aspect_') !== -1) {
      const digits = url.substring(url.indexOf('#aspect_') + 8).split('_').map((digit) => parseInt(digit, 10));
      if (digits[0] && digits[1]) aspectRatio = `${digits[0]} / ${digits[1]}`;
    }
    const iFrameParams = [
      `style="aspect-ratio: ${aspectRatio}"`,
      `src="${url}"`,
      `title="${title}"`,
      'frameborder="0"',
      'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"',
      'allowfullscreen',
    ];

    node.type = 'html';
    node.value = `<div class="youtube-embed"><iframe ${iFrameParams.join(' ')}></iframe></div>`;
    delete node.children;
  } else if (isYoutubeImageLink(node)) {
    node.type = 'text';
    node.value = '';
    delete node.children;
  }
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkYoutubeVideo = () => function transformer(tree: AstNode) {
  visit(tree, 'link', processLink);
};

export default remarkYoutubeVideo;
