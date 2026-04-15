import { visit } from 'unist-util-visit';
import { extractCustomImageClasses } from './utils';
import type { AstImageNode, AstNode } from './types';

const extractValidItems = (node: AstNode) => node.children?.filter((child) => !(child.type === 'break' || (child.type === 'text' && child.value === '\n'))) || [];

const extractValidImages = (node: AstNode) => extractValidItems(node).filter((child) => child.type === 'image') as AstImageNode[];

const isImageGallery = (node: AstNode) => {
  const extractedItems = extractValidItems(node);
  if (!extractedItems || extractedItems.length < 2) return false;

  for (const item of extractedItems) {
    if (item.type !== 'image') return false;
  }
  return true;
};

// const processParagraph = (node: AstNode, _indexInParent: number, _parent: AstNode) => {
const processParagraph = (node: AstNode) => {
  if (!isImageGallery(node)) return;

  const images = extractValidImages(node);

  node.type = 'mdxJsxFlowElement';
  node.name = 'ArticleImageGallery';
  const imagesJson = JSON.stringify(images.map((image) => ({
    src: image.url,
    alt: image.alt,
    classes: extractCustomImageClasses(image).join(' '),
  })));
  node.attributes = [{ type: 'mdxJsxAttribute', name: 'imagesJson', value: imagesJson }];
  node.children = [];
  delete node.value;
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkImageGallery = () => function transformer(tree: AstNode) {
  visit(tree, 'paragraph', processParagraph);
};

export default remarkImageGallery;
