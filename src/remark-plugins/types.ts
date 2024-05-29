// Defining subset types here, because I wasn't able to find it in any package
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
