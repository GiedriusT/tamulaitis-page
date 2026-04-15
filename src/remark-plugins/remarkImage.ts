import { visit } from 'unist-util-visit';
import { extractCustomImageClasses } from './utils';
import type { AstImageNode, AstNode } from './types';

const isStandaloneImage = (_node: AstNode, parent: AstNode) => parent.type === 'paragraph' && parent.children?.length === 1;

function isDurationFlag(flag: string): boolean {
  const regexPattern = /^(\d+(\.\d+)?)s$/;
  const match = flag.match(regexPattern);

  return !!match;
}

type AnimatedFrameData = {
  animatedFrameClass: string;
  numberOfFrames: number;
  isReversed: boolean;
  duration?: string;
};

const extractAnimatedFrameData = (classes: string[]): AnimatedFrameData | null => {
  for (const cssClass of classes) {
    if (cssClass.startsWith('animated-frames-')) {
      const match = cssClass.match(/^animated-frames-(\d+)(-(.*))?$/);
      if (match) {
        const numberOfFrames = parseInt(match[1], 10);
        const flagsString = match[3] || '';
        const flags = flagsString.split('-').filter((flag) => flag.length > 0);
        const isReversed = flags.includes('reversed');
        const duration = flags.find((flag) => isDurationFlag(flag) != null);
        return {
          animatedFrameClass: cssClass,
          numberOfFrames,
          isReversed,
          duration,
        };
      }
    }
  }

  return null;
};

const processImage = (node: AstNode, _indexInParent: number, parent: AstNode) => {
  if (!isStandaloneImage(node, parent)) return;

  const image = node as AstImageNode;
  const classes = extractCustomImageClasses(image);
  const animatedFrameData = extractAnimatedFrameData(classes);
  const hasAnimatedFramesClass = animatedFrameData != null;
  const imageClasses = animatedFrameData ? classes.filter((c) => c !== animatedFrameData.animatedFrameClass) : [...classes];

  parent.type = 'mdxJsxFlowElement';
  parent.name = hasAnimatedFramesClass ? 'ArticleAnimatedStrip' : 'ArticleImage';
  parent.attributes = [
    { type: 'mdxJsxAttribute', name: 'src', value: image.url },
    { type: 'mdxJsxAttribute', name: 'alt', value: image.alt },
    { type: 'mdxJsxAttribute', name: 'classes', value: imageClasses.join(' ') },
    ...(hasAnimatedFramesClass ? [
      { type: 'mdxJsxAttribute', name: 'frames', value: animatedFrameData.numberOfFrames },
      { type: 'mdxJsxAttribute', name: 'reversed', value: animatedFrameData.isReversed },
      { type: 'mdxJsxAttribute', name: 'duration', value: animatedFrameData.duration || '' },
    ] : []),
  ];  
  parent.children = [];
  delete parent.value;
  delete parent.properties;
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkImage = () => function transformer(tree: AstNode) {
  visit(tree, 'image', processImage);
};

export default remarkImage;
