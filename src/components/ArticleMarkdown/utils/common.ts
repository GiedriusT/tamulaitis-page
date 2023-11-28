// Defining subset type here, because wasn't able to find it in any package
export interface AstNode {
  type: 'root' | 'link' | 'html' | 'text' | 'image' | 'paragraph' | 'break' | 'heading' | 'pre';
  value: string;
  children?: AstNode[];
  properties?: Record<string, any>;
}

export interface AstLinkNode extends AstNode {
  url: string;
}

export interface AstImageNode extends AstNode {
  url: string;
  alt: string;
}

export interface AstHeadingNode extends AstNode {
  depth: number;
}

// We consider the link inline if it's not the only child of a paragraph, this
// check seems to be doing the job for now.
export const isInlineLink = (parent: AstNode) => !(parent.type === 'paragraph' && parent.children?.length === 1);

export const extractCustomImageClasses = (node: AstImageNode): string[] => {
  if (node.url.indexOf('#') === -1) return [];

  return node.url.substring(node.url.indexOf('#') + 1).split(',');
};
