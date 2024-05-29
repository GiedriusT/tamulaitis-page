/* eslint-disable no-param-reassign */
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

  const imageParams = [
    `src="${image.url}"`,
    `alt="${image.alt}"`,
  ];

  node.type = 'html';

  if (hasAnimatedFramesClass) {
    const containerClasses = ['animated-frames-container', `frames-${animatedFrameData.numberOfFrames}`, ...imageClasses];
    if (animatedFrameData.isReversed) containerClasses.push('reversed');
    const imageStyles = [];
    if (animatedFrameData.duration) imageStyles.push(`animation-duration: ${animatedFrameData.duration};`);
    if (imageStyles.length > 0) imageParams.push(`style="${imageStyles.join(' ')}"`);
    const containerParams = [
      `class="${containerClasses.join(' ')}"`,
    ];
    node.value = `
      <div ${containerParams.join(' ')}>
        <img ${imageParams.join(' ')} />
        <img ${imageParams.join(' ')} />
      </div>
    `;
  } else {
    if (imageClasses.length > 0) imageParams.push(`class="${imageClasses.join(' ')}"`);
    node.value = `
      <img ${imageParams.join(' ')} />
    `;
  }
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkImageGallery = () => function transformer(tree: AstNode) {
  visit(tree, 'image', processImage);
};

export default remarkImageGallery;
