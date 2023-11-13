import { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const remarkArticleTitleStyles = css`
  h1 {
    .separator, .subtitle {
      font-weight: 300;
    }

    @media (max-width: 560px) {
      .separator {
        display: none;
      }
      .subtitle {
        display: table;
        background-color: ${(props) => props.theme.colors.footerBackground};
        color: ${(props) => props.theme.colors.footerText};
        font-size: 1.1rem;
        padding: 0.415em 0.83em;
        margin-top: 0.415em;
      }
    }

    @media (max-width: 499px) {
    }
  }
`;
