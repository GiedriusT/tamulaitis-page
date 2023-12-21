/* eslint-disable no-param-reassign */
import { visit } from 'unist-util-visit';
import { AstImageNode, AstNode, extractCustomImageClasses } from './common';

const isStandaloneImage = (node: AstNode, parent: AstNode) => parent.type === 'paragraph' && parent.children?.length === 1;

type AnimatedFrameData = {
  animatedFrameClass: string;
  numberOfFrames: number;
  isReversed: boolean;
};

const extractAnimatedFrameData = (classes: string[]): AnimatedFrameData | null => {
  for (const cssClass of classes) {
    if (cssClass.startsWith('animated-frames-')) {
      const match = cssClass.match(/^animated-frames-(\d+)(-reversed)?$/);
      if (match) {
        const numberOfFrames = parseInt(match[1], 10);
        const isReversed = !!match[2];
        return {
          animatedFrameClass: cssClass,
          numberOfFrames,
          isReversed,
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
    node.value = `<img ${imageParams.join(' ')} />`;
  }
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkImageGallery = () => function transformer(tree: AstNode) {
  visit(tree, 'image', processImage);
};

export default remarkImageGallery;
