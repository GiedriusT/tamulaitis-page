import { visit } from 'unist-util-visit';
import { AstImageNode, AstNode } from './common';

const extractParams = (node: AstImageNode): string[] => {
  if (node.url.indexOf('#') === -1)
    return [];

  return node.url.substring(node.url.indexOf('#') + 1).split(',');
};

const isStandaloneImage = (node: AstNode, parent: AstNode) => {
  return parent.type === 'paragraph' && parent.children?.length === 1;
};

const processImage = (node: AstNode, _indexInParent: number, parent: AstNode) => {
  if (!isStandaloneImage(node, parent))
    return;

  const image = node as AstImageNode;
  const params = extractParams(image);
  const classString = params.length > 0 ? ` class="${params.join(' ')}"` : '';

  node.type = 'html';
  node.value = `<img${classString} src="${image.url}" alt="${image.alt}" />`;
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkImageGallery = () => {
  return function transformer(tree: AstNode) {
    visit(tree, 'image', processImage);
  };
};

export default remarkImageGallery;
