import React from 'react';
import * as S from './ArticleContainer.styles';

const DEFAULT_MIN_HEIGHT = 100;

type ArticleContainerProps = Partial<S.ArticleContainerProps> & {
  children: React.ReactNode;
};

const ArticleContainer: React.FC<ArticleContainerProps> = ({ children, $minHeight }) => {
  return (
    <S.ArticleContainer $minHeight={$minHeight ?? DEFAULT_MIN_HEIGHT}>
      {children}
    </S.ArticleContainer>
  );
};

export default ArticleContainer;
