import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { ArticleContainer, ArticleMarkdown } from '../components';
import { MY_NAME, NOT_FOUND_PROJECT_ARTICLE, NOT_FOUND_PROJECT_TITLE } from '../constants';
import projects from '../projects';
import { fetchArticle, getProjectMedia } from '../projects/utils';
import NotFoundPage from './NotFoundPage';

const ProjectPage: React.FC = () => {
  const [article, setArticle] = useState<string>('');
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find((obj) => obj.slug === slug);
  useEffect(() => {
    if (!project) return;

    const projectMedia = getProjectMedia(project.slug);
    fetchArticle(projectMedia.articleUrl).then(result =>
      setArticle(result));
  }, [project, slug]);

  if (!project)
    return <NotFoundPage title={NOT_FOUND_PROJECT_TITLE} article={NOT_FOUND_PROJECT_ARTICLE(slug)} />;

  const title = `${project.title} - ${project.subtitle} - ${MY_NAME}`;

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
