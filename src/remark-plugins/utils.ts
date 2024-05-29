import type { AstImageNode, AstNode } from './types';

// We consider the link inline if it's not the only child of a paragraph, this
// check seems to be doing the job for now.
export const isInlineLink = (parent: AstNode) => !(parent.type === 'paragraph' && parent.children?.length === 1);

export const extractCustomImageClasses = (node: AstImageNode): string[] => {
  if (node.url.indexOf('#') === -1) return [];

  return node.url.substring(node.url.indexOf('#') + 1).split(',');
};
