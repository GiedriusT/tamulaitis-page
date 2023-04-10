import { css } from 'styled-components';
import { PAGE_PADDING_HORIZONTAL } from '../../../theme/constants';

export const remarkImageGalleryStyles = css`
  .image-gallery {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.66rem;
    padding-bottom: 0.83rem;

    .image-gallery-item {
      width: 100%;
      height: auto;

      img {
        width: 100%;
        display: block;
      }
    }

    @media (max-width: 560px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 499px) {
      .image-gallery-item {

        img {
          width: calc(100% + 2 * ${PAGE_PADDING_HORIZONTAL});
        }
      }
    }
  }
`;