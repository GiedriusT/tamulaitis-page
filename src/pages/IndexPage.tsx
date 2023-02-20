import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ProjectList, Hero } from '../components';
import { MY_NAME, TAGLINE } from '../constants';
import projects from '../projects';

const IndexPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{MY_NAME} - {TAGLINE}</title>
      </Helmet>
      <Hero />
      <ProjectList projects={projects} />
    </>
  );
};

export default IndexPage;
