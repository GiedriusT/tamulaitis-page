import { visit } from 'unist-util-visit';
import { AstNode } from './common';

const extractText = (node: AstNode): string => {
  if (node.type === 'text')
    return node.value;

  if (node.children)
    return node.children.map(extractText).join('');

  return '';
};

const isArticleVersionParagraph = (node: AstNode, indexInParent: number, parent: AstNode) => {
  if (node.children?.length !== 1)
    return false;

  const [textNode] = node.children;
  if (textNode.type !== 'text')
    return false;

  if (parent.type !== 'root')
    return false;

  const childrenCount = parent.children?.length || 0;
  if (indexInParent !== childrenCount - 1)
    return false;

  const regex = /v\d+\.\d+(?:\s+\w+)*\s+article/i;
  const textLooksValid = regex.test(textNode.value);
  if (!textLooksValid)
    return false;

  return true;
};

const processParagraph = (node: AstNode, indexInParent: number, parent: AstNode) => {
  if (!isArticleVersionParagraph(node, indexInParent, parent))
    return;

  node.type = 'html';
  node.value = `<div class="article-version">${extractText(node)}</div>`;
  delete node.children;
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkArticleVersion = () => {
  return function transformer(tree: AstNode) {
    visit(tree, 'paragraph', processParagraph);
  };
};

export default remarkArticleVersion;
