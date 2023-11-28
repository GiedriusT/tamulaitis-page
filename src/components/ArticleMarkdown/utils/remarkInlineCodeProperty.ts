/* eslint-disable no-param-reassign */
import { visit } from 'unist-util-visit';
import { AstNode } from './common';

// const addInlinePropertyToCodeElement = (node: AstNode, indexInParent: number, parent: AstNode) => {
const addInlinePropertyToCodeElement = (node: AstNode) => {
  if (!node.properties) {
    node.properties = {};
  }

  // TODO: the approach below doesn't work for some reason, when getting the node in ArticleMarkdown `components` map `code` processor
  // the properties object is always empty, even if we set it here.
  // eslint-disable-next-line no-console
  console.error('Inline code not supported currently, they will not render correctly')!;
  node.properties.inline = true;
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkInlineCodeProperty = () => function transformer(tree: AstNode) {
  visit(tree, 'inlineCode', addInlinePropertyToCodeElement);
};

export default remarkInlineCodeProperty;
