import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ProjectList, Hero } from '../components';
import { BRAND_NAME, TAGLINE } from '../constants';
import projects from '../projects';

const IndexPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{BRAND_NAME} - {TAGLINE}</title>
      </Helmet>
      <Hero />
      <ProjectList projects={projects} />
    </>
  );
};

export default IndexPage;
