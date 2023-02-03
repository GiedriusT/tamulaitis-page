import React from 'react';
import { ProjectList, Hero } from '../../components';
import projects from '../../projects';

const IndexPage: React.FC = () => {
  return (
    <>
      <Hero />
      <ProjectList projects={projects} />
    </>
  );
};

export default IndexPage;
