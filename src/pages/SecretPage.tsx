import React from 'react';
import { Helmet } from 'react-helmet';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useParams } from 'react-router-dom';
import { secretBySlug } from '../utils/secdec';

const nonExistentSecret = {
  title: 'No secret found at this address!',
  article: '# No secret found at this address!\n\nPlease visit the [homepage](/) to find other interesting information.',
};

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = secretBySlug(slug || '') || nonExistentSecret.article;
  const title = article ? 'This is a secret page!' : nonExistentSecret.title;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ReactMarkdown>{article}</ReactMarkdown>
    </>
  );
};

export default ProjectPage;
