import React from 'react';
import * as S from './ArticleTitle.styles';

function ArticleTitle({ children }: { children: React.ReactNode }) {
  return (
    <S.ArticleTitleContainer>
      <h1>{children}</h1>
    </S.ArticleTitleContainer>
  );
}

export default ArticleTitle;
