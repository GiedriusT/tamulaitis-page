import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { ArticleContainer, ArticleMarkdown } from '../components';
import { MY_NAME, NOT_FOUND_SECRET_ARTICLE, NOT_FOUND_SECRET_TITLE } from '../constants';
import { secretBySlug } from '../utils/secdec';
import NotFoundPage from './NotFoundPage';

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = secretBySlug(slug || '');

  if (!article)
    return <NotFoundPage title={NOT_FOUND_SECRET_TITLE} article={NOT_FOUND_SECRET_ARTICLE} />;

  const title = `This is a secret page! - ${MY_NAME}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ArticleContainer>
        <ArticleMarkdown>{article}</ArticleMarkdown>
      </ArticleContainer>
    </>
  );
};

export default ProjectPage;
