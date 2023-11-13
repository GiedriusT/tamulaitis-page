import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const PaddedContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${(props) => props.theme.pagePaddingHorizontal};
  padding-right: ${(props) => props.theme.pagePaddingHorizontal};
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.article`
  padding-top: 20px;
  margin-bottom: calc(2 * 1.66em);
  flex: 1;
`;
