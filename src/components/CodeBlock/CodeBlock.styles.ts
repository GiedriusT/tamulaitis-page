import styled from 'styled-components';
import { mediaEmbedFullWidthOnMobile } from '../../theme/mixins';

export const CodeBlockContainer = styled.div`
  position: relative;
  font-size: .75rem;
`;

export const CodeBlockContent = styled.div`
  height: 70vh;
  background: rgb(240, 240, 240);
  overflow-y: scroll;
  ${mediaEmbedFullWidthOnMobile}
`;
