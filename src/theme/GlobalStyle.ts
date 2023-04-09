import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { PAGE_PADDING_HORIZONTAL } from './constants';

export const mediaEmbed = css`
  width: 100%;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  & iframe {
    width: 100%;
  }
  @media (max-width: 499px) {
    width: calc(100% + 2 * ${PAGE_PADDING_HORIZONTAL});
    margin-left: -${PAGE_PADDING_HORIZONTAL};
    margin-right: -${PAGE_PADDING_HORIZONTAL};
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
    padding: 0;
    margin: 0;
    border: 0;
    width: 100%;
    height: 100%;
    font-family: 'Sora', sans-serif;
    background-color: #e8f1f5;
    line-height: 1.9;
    letter-spacing: 0.5px;
  }

  a {
    color: black;
    &:hover {
      text-decoration: none;
    }
  }

  // We use class name for YouTube embeds, because the style is added by Remark
  // plugin and we can't use styled-components.
  .youtube-embed {
    ${mediaEmbed}
    & iframe {
      /* aspect-ratio: 16 / 9; */
      aspect-ratio: 4 / 3;
    }
  }

  // We use class name for Spotify embeds, because the style is added by Remark
  // plugin and we can't use styled-components.
  .spotify-embed {
    ${mediaEmbed}
  }

  p {
    font-size: 1.1rem;
    margin-block-end: 1.66em;
    font-weight: 400;
  }

  h1 {
    line-height: 1.3;
    padding-bottom: calc(0.83em);
  }

  h2, h3, h4 {
    margin-block-start: 1.66em;
  }
`;
