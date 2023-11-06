/* eslint-disable no-param-reassign */
import { visit } from 'unist-util-visit';
import { AstImageNode, AstNode, extractCustomImageClasses } from './common';

const isStandaloneImage = (node: AstNode, parent: AstNode) => parent.type === 'paragraph' && parent.children?.length === 1;

const processImage = (node: AstNode, _indexInParent: number, parent: AstNode) => {
  if (!isStandaloneImage(node, parent)) return;

  const image = node as AstImageNode;
  const classes = extractCustomImageClasses(image);
  const imageParams = [
    `src="${image.url}"`,
    `alt="${image.alt}"`,
  ];
  if (classes.length > 0) imageParams.push(`class="${classes.join(' ')}"`);

  node.type = 'html';
  node.value = `<img ${imageParams.join(' ')} />`;
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkImageGallery = () => function transformer(tree: AstNode) {
  visit(tree, 'image', processImage);
};

export default remarkImageGallery;
