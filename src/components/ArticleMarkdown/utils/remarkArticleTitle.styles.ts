import { css } from 'styled-components';
import { COLORS } from '../../../theme/constants';


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
        background-color: ${COLORS.footerBackground};
        color: ${COLORS.footerText};
        font-size: 1.1rem;
        padding: 0.415em 0.83em;
        margin-top: 0.415em;
      }
    }

    @media (max-width: 499px) {
    }
  }
`;