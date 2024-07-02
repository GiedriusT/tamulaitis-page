/* eslint-disable no-param-reassign */
import { visit } from 'unist-util-visit';
import type { AstHeadingNode, AstNode } from './types';

// const processParagraph = (node: AstNode, _indexInParent: number, _parent: AstNode) => {
const processHeading = (node: AstHeadingNode) => {
  if (node.depth !== 1) return;

  const children = node.children || [];



  const segments = children[0].value.split(' - ');
  const hasSubtitle = segments.length > 1;
  let title = hasSubtitle ? segments.slice(0, -1).join(' - ') : segments[0];
  let subtitle = hasSubtitle ? segments.slice(-1)[0] || '' : '';

  node.type = 'html';
  node.value = `
    <h1>${title || ''}${subtitle ? `<span class="separator"> - </span><span class="subtitle">${subtitle}</span>` : ''}</h1>
  `;
  delete node.children;
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkArticleTitle = () => function transformer(tree: AstNode) {
  visit(tree, 'heading', processHeading);
};

export default remarkArticleTitle;
