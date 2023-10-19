import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArticleContainer, ArticleMarkdown } from '../components';
import { NOT_FOUND_PAGE_TITLE, NOT_FOUND_PAGE_ARTICLE } from '../constants';

interface NotFoundPageProps {
  title?: string;
  article?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ title, article }) => {
  return (
    <>
      <Helmet>
        <title>{title || NOT_FOUND_PAGE_TITLE}</title>
      </Helmet>
      <ArticleContainer $minHeight={30}>
        <ArticleMarkdown>{article || NOT_FOUND_PAGE_ARTICLE}</ArticleMarkdown>
      </ArticleContainer>
    </>
  );
};

export default NotFoundPage;
