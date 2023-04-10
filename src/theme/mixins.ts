import { css } from 'styled-components';
import { PAGE_PADDING_HORIZONTAL } from './constants';

export const mediaEmbed = css`
  width: 100%;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  & iframe {
    width: 100%;
  }
`;

export const mediaEmbedFullWidthOnMobile = css`
  @media (max-width: 499px) {
  /* @media (max-width: 560px) { */
    width: calc(100% + 2 * ${PAGE_PADDING_HORIZONTAL});
    margin-left: -${PAGE_PADDING_HORIZONTAL};
    margin-right: -${PAGE_PADDING_HORIZONTAL};
  }
`;
