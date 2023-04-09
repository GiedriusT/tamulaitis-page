import styled from 'styled-components';
import { mediaEmbed } from '../../theme/GlobalStyle';

export const ArticleContainer = styled.div`
  min-height: 100vh;

  & img {
    display: block;
    ${mediaEmbed}
  }
`;
