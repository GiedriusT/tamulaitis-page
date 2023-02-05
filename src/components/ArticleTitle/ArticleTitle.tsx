import React from 'react';
import * as S from './ArticleTitle.styles';

const ArticleTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <S.ArticleTitleContainer>
      <h1>{children}</h1>
    </S.ArticleTitleContainer>
  );
};

export default ArticleTitle;
