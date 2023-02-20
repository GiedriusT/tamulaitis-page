import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { ArticleMarkdown } from '../components';
import { MY_NAME } from '../constants';
import { secretBySlug } from '../utils/secdec';

const nonExistentSecret = {
  title: 'No secret found at this address!',
  article: '# No secret found at this address!\n\nPlease visit the [homepage](/) to find other interesting information.',
};

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = secretBySlug(slug || '') || nonExistentSecret.article;
  const title = article ? `This is a secret page! - ${MY_NAME}` : nonExistentSecret.title;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ArticleMarkdown>{article}</ArticleMarkdown>
    </>
  );
};

export default ProjectPage;
