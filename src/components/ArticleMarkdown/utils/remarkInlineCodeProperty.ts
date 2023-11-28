/* eslint-disable no-param-reassign */
import { visit } from 'unist-util-visit';
import { AstNode } from './common';

const addInlinePropertyToCodeElement = (node: AstNode, _indexInParent: number, parent: AstNode) => {
  if (!node.properties) {
    node.properties = {};
  }

  console.log('In code');
  console.log(node.properties);
  
  node.properties.inline = parent && parent.type === 'pre';
  console.log(node.properties);
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkInlineCodeProperty = () => function transformer(tree: AstNode) {
  visit(tree, 'code', addInlinePropertyToCodeElement);
};

export default remarkInlineCodeProperty;
