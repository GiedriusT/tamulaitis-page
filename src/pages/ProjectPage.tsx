import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { ArticleMarkdown } from '../components';
import projects from '../projects';

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
    console.log({ project, slug });
    if (!project) {
      setArticle(nonExistentProject(slug).article);
      return;
    }

    fetch(project.article).then(res => res.text()).then(text => setArticle(text));
  }, [project, slug]);

  const title = project ? `${project.title} - ${project.subtitle}` : nonExistentProject(slug).title;

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
