import styled from 'styled-components';
import { mediaEmbed, mediaEmbedFullWidthOnMobile } from '../../theme/mixins';

// eslint-disable-next-line import/prefer-default-export
export const ArticleContainer = styled.div`
  & img {
    display: block;
    ${mediaEmbed}
    ${mediaEmbedFullWidthOnMobile}
  }
`;
