// Defining subset type here, because wasn't able to find it in any package
export interface AstNode {
  type: 'root' | 'link' | 'html' | 'text' | 'image' | 'paragraph';
  value: string;
  children?: AstNode[];
}

export interface AstLinkNode extends AstNode {
  url: string;
}

// We consider the link inline if it's not the only child of a paragraph, this
// check seems to be doing the job for now.
export const isInlineLink = (parent: AstNode) => {
  return !(parent.type === 'paragraph' && parent.children?.length === 1);
};