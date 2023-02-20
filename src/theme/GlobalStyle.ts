import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
    padding: 0;
    margin: 0;
    border: 0;
    width: 100%;
    height: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-color: #dddddd;
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
    width: 100%;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    & iframe {
      width: 100%;
      aspect-ratio: 16 / 9;
    }
  }
`;
