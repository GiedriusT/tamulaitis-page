import styled from 'styled-components';

export type ArticleContainerProps = {
  $minHeight: number
};

export const ArticleContainer = styled.div<ArticleContainerProps>`
  min-height: ${props => props.$minHeight}vh;
`;
