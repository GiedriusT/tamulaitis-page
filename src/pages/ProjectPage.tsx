import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useParams } from 'react-router-dom';
import projects from '../projects';

const nonExistentProject = (slug: string | undefined) => ({
  title: 'Nothing found at this address',
  article: `Maybe it got renamed. Please visit the [homepage](/) and try to find info related to '${slug}'.`,
});

const ProjectPage: React.FC = () => {
  const [article, setArticle] = useState<string>('');
  const { slug } = useParams<{ slug: string }>();

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
      <ReactMarkdown>{article}</ReactMarkdown>
    </>
  );
};

export default ProjectPage;
