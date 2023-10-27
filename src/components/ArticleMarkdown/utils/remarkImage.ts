/* eslint-disable no-param-reassign */
import { visit } from 'unist-util-visit';
import { AstImageNode, AstNode } from './common';

const extractParams = (node: AstImageNode): string[] => {
  if (node.url.indexOf('#') === -1) return [];

  return node.url.substring(node.url.indexOf('#') + 1).split(',');
};

const isStandaloneImage = (node: AstNode, parent: AstNode) => parent.type === 'paragraph' && parent.children?.length === 1;

const processImage = (node: AstNode, _indexInParent: number, parent: AstNode) => {
  if (!isStandaloneImage(node, parent)) return;

  const image = node as AstImageNode;
  const params = extractParams(image);
  const imageParams = [
    `src="${image.url}"`,
    `alt="${image.alt}"`,
  ];
  if (params.length > 0) imageParams.push(`class="${params.join(' ')}"`);

  node.type = 'html';
  node.value = `<img ${imageParams.join(' ')} />`;
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkImageGallery = () => function transformer(tree: AstNode) {
  visit(tree, 'image', processImage);
};

export default remarkImageGallery;
