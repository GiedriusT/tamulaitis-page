import styled from 'styled-components';
import { mediaEmbed, mediaEmbedFullWidthOnMobile } from '../../theme/GlobalStyle';

export const ArticleContainer = styled.div`
  min-height: 100vh;

  & img {
    display: block;
    ${mediaEmbed}
    ${mediaEmbedFullWidthOnMobile}
  }
`;
