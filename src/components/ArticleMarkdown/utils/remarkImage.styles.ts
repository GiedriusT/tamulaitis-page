import { css } from 'styled-components';
import { ArticleContainer } from '../ArticleMarkdown.styles';
import { mediaEmbed, mediaEmbedFullWidthOnMobile } from '../../../theme/mixins';

const generateAnimatedStripKeyframes = (numberOfFrames: number, isReversed: boolean = false) => {
  const keyframes = [];
  const sign = isReversed ? '' : '-';
  for (let i = 0; i < numberOfFrames; i += 1) {
    const percentage = ((i / numberOfFrames) * 100).toFixed(2);
    keyframes.push(`${percentage}% { transform: translateX(${sign}${percentage}%); }`);
  }
  return keyframes.join('\n');
};

// Styles shared between single image and image gallery
export const remarkSharedImageStyles = css`
  img, .animated-frames-container {
    display: block;
    ${mediaEmbed}
    ${mediaEmbedFullWidthOnMobile}

    &.full-width {
      max-width: none;
    }

    &.padding-on-mobile {
      @media (max-width: 499px) {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
      }
    }

    @keyframes float {
      0% { transform: translate(0,  0px); }
      75% { transform: translate(0, 8px); }
      100% { transform: translate(0, 0px); }
    }

    &.floating {
      animation: float 4s infinite linear;
    }
  }
`;

export const animatedStripKeyframeStyles = css`
  @keyframes move8FrameStrip {
    ${generateAnimatedStripKeyframes(8)}
  }
  @keyframes move8FrameStripReversed {
    ${generateAnimatedStripKeyframes(8, true)}
  }
  @keyframes move4FrameStrip {
    ${generateAnimatedStripKeyframes(4)}
  }
  @keyframes move4FrameStripReversed {
    ${generateAnimatedStripKeyframes(4, true)}
  }
`;

export const remarkImageStyles = css`
  ${ArticleContainer} {
    ${remarkSharedImageStyles}

    ${animatedStripKeyframeStyles}
    .animated-frames-container {
      position: relative;
      overflow: hidden;

      img {
        display: block;
        width: 100%;
        max-width: none;
        margin-left: 0;
        margin-right: 0;
        padding-left: 0;
        padding-right: 0;
      }

      img:first-child {
        left: 0;
      }

      img:nth-child(2) {
        position: absolute;
        width: 100%;
        top: 0;
        left: 100%;
      }
      &.reversed img:nth-child(2) {
        left: -100%;
      }

      &.frames-8 {
        img { animation: move8FrameStrip 1s infinite step-start; }
        &.reversed img { animation: move8FrameStripReversed 1s infinite step-start; }
      }

      &.frames-4 {
        img { animation: move4FrameStrip 2s infinite step-start; }
        &.reversed img { animation: move4FrameStripReversed 2s infinite step-start; }
      }
    }
  }
`;
