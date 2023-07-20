import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { ArticleMarkdown } from '../components';
import { MY_NAME } from '../constants';
import projects from '../projects';
import { fetchArticle, getProjectMedia } from '../projects/utils';

const nonExistentProject = (slug: string | undefined) => ({
  title: 'Nothing found at this address',
  article: `# Nothing found at this address\n\nMaybe it got renamed. Please visit the [homepage](/) and try to find info related to '${slug}'.`,
});

const ProjectPage: React.FC = () => {
  const [article, setArticle] = useState<string>('');
  const { slug } = useParams<{ slug: string }>();

  // TODO: maybe move this to custom hook
  const project = projects.find((obj) => obj.slug === slug);
  useEffect(() => {
    if (!project) {
      setArticle(nonExistentProject(slug).article);
      return;
    }

    const projectMedia = getProjectMedia(project.slug);
    fetchArticle(projectMedia.articleUrl).then(result => setArticle(result));
  }, [project, slug]);

  const title = project ? `${project.title} - ${project.subtitle} - ${MY_NAME}` : nonExistentProject(slug).title;

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
