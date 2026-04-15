import { visit } from 'unist-util-visit';
import { isInlineLink } from './utils';
import type { AstLinkNode, AstNode } from './types';

const isYoutubeLink = (node: AstLinkNode) => node.url.indexOf('https://www.youtube.com/') === 0;

const isYoutubeImageLink = (node: AstLinkNode) => isYoutubeLink(node)
    && node.children?.findIndex((child) => child.type === 'image') !== -1;

const isYoutubeTextLink = (node: AstLinkNode) => isYoutubeLink(node)
    && node.children?.findIndex((child) => child.type === 'image') === -1
    && node.children?.findIndex((child) => child.type === 'text') !== -1;

const processLink = (node: AstLinkNode, _indexInParent: number, parent: AstNode) => {
  if (!isYoutubeLink(node) || isInlineLink(parent)) return;

  if (isYoutubeTextLink(node)) {
    const title = node.children?.find((child) => child.type === 'text')?.value || 'YouTube Video Player';
    const embedUrl = node.url.replace('watch?v=', 'embed/');
    const aspectIdx = embedUrl.indexOf('#aspect_');
    const aspectDigits = aspectIdx === -1
      ? null
      : embedUrl
        .substring(aspectIdx + 8)
        .split('_')
        .map((digit) => parseInt(digit, 10));
    const aspectW = aspectDigits && aspectDigits[0] ? aspectDigits[0] : null;
    const aspectH = aspectDigits && aspectDigits[1] ? aspectDigits[1] : null;

    node.type = 'mdxJsxFlowElement';
    node.name = 'ArticleYoutubeEmbed';
    node.attributes = [
      { type: 'mdxJsxAttribute', name: 'url', value: node.url },
      { type: 'mdxJsxAttribute', name: 'title', value: title },
      ...(aspectW && aspectH ? [
        { type: 'mdxJsxAttribute', name: 'aspectW', value: aspectW },
        { type: 'mdxJsxAttribute', name: 'aspectH', value: aspectH },
      ] : []),
    ];
    node.children = [];
    delete node.value;
  } else if (isYoutubeImageLink(node)) {
    node.type = 'text';
    node.value = '';
    delete node.children;
  }
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkYoutubeEmbed = () => function transformer(tree: AstNode) {
  visit(tree, 'link', processLink);
};

export default remarkYoutubeEmbed;

