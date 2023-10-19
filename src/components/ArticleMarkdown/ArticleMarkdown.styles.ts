import styled from 'styled-components';
import { mediaEmbed, mediaEmbedFullWidthOnMobile } from '../../theme/mixins';

export const ArticleContainer = styled.div`
  & img {
    display: block;
    ${mediaEmbed}
    ${mediaEmbedFullWidthOnMobile}
  }
`;
