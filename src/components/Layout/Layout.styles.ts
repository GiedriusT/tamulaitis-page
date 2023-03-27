import styled from 'styled-components';
import { PAGE_PADDING_HORIZONTAL } from '../../theme/constants';

export const LayoutContainer = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${PAGE_PADDING_HORIZONTAL};
  padding-right: ${PAGE_PADDING_HORIZONTAL};
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  padding-top: 20px;
  flex: 1;
`;
