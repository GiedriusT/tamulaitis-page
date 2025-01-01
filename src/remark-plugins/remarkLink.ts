import { visit } from 'unist-util-visit';
import type { AstLinkNode, AstNode } from './types';
import { SITE_URL } from '../constants';

const extractLinkText = (node: AstLinkNode): string => {
  const [textNode] = node.children || [];
  if (!textNode || textNode.type !== 'text') return '';

  return textNode.value;
};

const isExternalLink = (node: AstLinkNode): boolean => {
  if (!node.url) return false;

  const domainName = SITE_URL.replace(/^https?:\/\//, '');
  const relativeRegex = /^\/(?!\/)/;
  const absoluteInternalRegex = new RegExp(`^https?://${domainName}`, 'i');
  const internalSearchRegex = new RegExp(`google.*search.*site.*${domainName}`, 'i');

  return !relativeRegex.test(node.url) && !absoluteInternalRegex.test(node.url) && !internalSearchRegex.test(node.url);
};

// const processLink = (node: AstLinkNode, indexInParent: number, parent: AstNode) => {
const processLink = (node: AstLinkNode) => {
  const linkParams = [
    `href="${node.url}"`,
  ];

  if (isExternalLink(node)) {
    linkParams.push('target="_blank"', 'rel="noopener"');
  }

  node.type = 'html';
  node.value = `
    <a ${linkParams.join(' ')}>${extractLinkText(node)}</a>
  `;
  delete node.children;
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkLink = () => function transformer(tree: AstNode) {
  visit(tree, 'link', processLink);
};

export default remarkLink;
