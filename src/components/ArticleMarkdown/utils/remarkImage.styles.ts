import { css } from 'styled-components';
import { ArticleContainer } from '../ArticleMarkdown.styles';

// Styles shared between single image and image gallery
export const remarkSharedImageStyles = css`
  img.full-width {
    max-width: none;
  }

  img.padding-on-mobile {
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
  }
`;
