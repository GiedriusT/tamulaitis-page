import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ProjectList, Hero } from '../components';
import projects from '../projects';
import { getIndexPageTitle } from '../utils/metadata';

const IndexPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{getIndexPageTitle()}</title>
      </Helmet>
      <Hero />
      <ProjectList projects={projects} />
    </>
  );
};

export default IndexPage;
