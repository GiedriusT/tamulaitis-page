import { css } from 'styled-components';
import { ArticleContainer } from '../ArticleMarkdown.styles';

// Styles shared between single image and image gallery
export const remarkSharedImageStyles = css`
  img.full-width, .animated-image-container.full-width {
    max-width: none;
  }

  img.padding-on-mobile, .animated-image-container.padding-on-mobile {
    @media (max-width: 499px) {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

export const remarkImageStyles = css`
  ${ArticleContainer} {    
    ${remarkSharedImageStyles}

    @keyframes moveOneStep {
      0% {
        transform: translateX(0);
      }
      10% {
        transform: translateX(-10%);
      }
      20% {
        transform: translateX(-20%);
      }
      30% {
        transform: translateX(-30%);
      }
      40% {
        transform: translateX(-40%);
      }
      50% {
        transform: translateX(-50%);
      }
      60% {
        transform: translateX(-60%);
      }
      70% {
        transform: translateX(-70%);
      }
      80% {
        transform: translateX(-80%);
      }
      90% {
        transform: translateX(-90%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    .animated-image-container {
      position: relative;
      overflow: hidden;

      img {
        animation: moveOneStep 1s infinite step-start;

        &:first-child {
          left: 0;
        }

        &:nth-child(2) {
          position: absolute;
          width: 100%;
          top: 0;
          left: 100%;
        }
      }
    }
  }
`;
