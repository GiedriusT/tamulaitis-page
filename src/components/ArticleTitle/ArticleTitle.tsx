import React from 'react';
import { ArticleTitleContainer } from './ArticleTitle.styles';

const ArticleTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ArticleTitleContainer>
      <h1>{children}</h1>
    </ArticleTitleContainer>
  );
};

export default ArticleTitle;
