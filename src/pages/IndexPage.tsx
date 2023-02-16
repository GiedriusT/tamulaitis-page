import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ProjectList, Hero } from '../components';
import projects from '../projects';

const IndexPage: React.FC = () => {
  const title = 'Giedrius Tamulaitis - exploring the sweet spot where art and technology collides';

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Hero />
      <ProjectList projects={projects} />
    </>
  );
};

export default IndexPage;
