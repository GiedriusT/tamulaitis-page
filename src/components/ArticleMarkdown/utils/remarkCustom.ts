import { visit } from 'unist-util-visit';

// Defining subset type here, because wasn't able to find it in any package
// List of supported node types: https://github.com/syntax-tree/mdast
interface AstNode {
  type: 'root' | 'link' | 'html' | 'text';
  value: string;
  children?: AstNode[];
}

interface AstLinkNode extends AstNode {
  url: string;
}

const processLink = (node: AstLinkNode) => {
  console.log(node);
  if (node.url.indexOf('https://www.youtube.com/') === 0) {
    const url = node.url.replace('watch?v=', 'embed/');
    const title = node.children?.find((child) => child.type === 'text')?.value || 'YouTube Video Player';
    node.type = 'html';
    node.value = `<iframe width="560" height="315" src="${url}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    delete node.children;
  }
};

const remarkCustom = () => {
  // return function transformer(tree: Node, file) {
  return function transformer(tree: AstNode) {
    visit(tree, 'link', processLink);
  };
};

export default remarkCustom;
