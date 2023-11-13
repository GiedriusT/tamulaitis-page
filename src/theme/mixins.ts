import { css } from 'styled-components';

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
    width: calc(100% + 2 * ${(props) => props.theme.pagePaddingHorizontal});
    margin-left: -${(props) => props.theme.pagePaddingHorizontal};
    margin-right: -${(props) => props.theme.pagePaddingHorizontal};
  }
`;
