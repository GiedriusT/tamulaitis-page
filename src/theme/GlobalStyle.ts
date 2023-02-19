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
`;
