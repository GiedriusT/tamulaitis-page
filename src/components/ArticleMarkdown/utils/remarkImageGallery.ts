import { visit } from 'unist-util-visit';
import { AstImageNode, AstNode } from './common';

const extractValidItems = (node: AstNode) => {
  return node.children?.filter((child) => !(child.type === 'break' || (child.type === 'text' && child.value === '\n'))) || [];
};

const extractValidImages = (node: AstNode) => {
  return extractValidItems(node).filter((child) => child.type === 'image') as AstImageNode[];
};

const isImageGallery = (node: AstNode) => {
  const extractedItems = extractValidItems(node);
  if (!extractedItems || extractedItems.length < 2)
    return false;

  for (const item of extractedItems) {
    if (item.type !== 'image')
      return false;
  }
  return true;
};

// const processParagraph = (node: AstNode, _indexInParent: number, _parent: AstNode) => {
const processParagraph = (node: AstNode) => {
  if (!isImageGallery(node))
    return;

  node.type = 'html';
  node.value = '<div class="image-gallery">';
  const images = extractValidImages(node);
  for (const image of images)
    node.value += `<div class="image-gallery-item"><img src="${image.url}" alt="${image.alt}" /></div>`;
  node.value += '</div>';
  delete node.children;
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkImageGallery = () => {
  return function transformer(tree: AstNode) {
    visit(tree, 'paragraph', processParagraph);
  };
};

export default remarkImageGallery;
