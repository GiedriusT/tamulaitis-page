import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { ArticleContainer, ArticleMarkdown } from '../components';
import { NOT_FOUND_PROJECT_ARTICLE, NOT_FOUND_PROJECT_TITLE } from '../constants';
import projects from '../projects';
import { fetchArticle, getProjectArticleUrl } from '../projects/utils';
import NotFoundPage from './NotFoundPage';
import { getProjectPageCanonicalUrl, getProjectPageTitle } from '../utils/metadata';

function ProjectPage() {
  const [article, setArticle] = useState<string>('');
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find((obj) => obj.slug === slug);
  useEffect(() => {
    if (!project) return;

    const projectArticleUrl = getProjectArticleUrl(project.slug);
    fetchArticle(projectArticleUrl).then((result) => setArticle(result));
  }, [project, slug]);

  if (!project) {
    return (
      <NotFoundPage
        title={NOT_FOUND_PROJECT_TITLE}
        article={NOT_FOUND_PROJECT_ARTICLE(slug)}
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>{getProjectPageTitle(project)}</title>
        <link rel="canonical" href={getProjectPageCanonicalUrl(project)} />
      </Helmet>
      <ArticleContainer>
        <ArticleMarkdown>{article}</ArticleMarkdown>
      </ArticleContainer>
    </>
  );
}

export default ProjectPage;
