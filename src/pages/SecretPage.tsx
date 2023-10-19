import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { ArticleContainer, ArticleMarkdown } from '../components';
import { NOT_FOUND_SECRET_ARTICLE, NOT_FOUND_SECRET_TITLE } from '../constants';
import { secretBySlug } from '../utils/secdec';
import NotFoundPage from './NotFoundPage';
import { getSecretPageTitle } from '../utils/metadata';

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = secretBySlug(slug || '');

  if (!article)
    return <NotFoundPage title={NOT_FOUND_SECRET_TITLE} article={NOT_FOUND_SECRET_ARTICLE} />;

  return (
    <>
      <Helmet>
        <title>{getSecretPageTitle()}</title>
      </Helmet>
      <ArticleContainer>
        <ArticleMarkdown>{article}</ArticleMarkdown>
      </ArticleContainer>
    </>
  );
};

export default ProjectPage;
