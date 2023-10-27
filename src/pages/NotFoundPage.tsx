import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArticleContainer, ArticleMarkdown } from '../components';
import { NOT_FOUND_PAGE_TITLE, NOT_FOUND_PAGE_ARTICLE } from '../constants';

type NotFoundPageProps = {
  title?: string;
  article?: string;
};

function NotFoundPage({ title, article }: NotFoundPageProps) {
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
}

export default NotFoundPage;
