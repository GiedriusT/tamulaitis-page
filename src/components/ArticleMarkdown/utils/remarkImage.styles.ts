import { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const remarkImageStyles = css`
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
