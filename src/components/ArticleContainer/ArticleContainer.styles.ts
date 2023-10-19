import styled from 'styled-components';

export type ArticleContainerStyledProps = {
  $minHeight: number
};

export const ArticleContainerStyled = styled.div<ArticleContainerStyledProps>`
  min-height: ${props => props.$minHeight}vh;
`;
