import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ProjectList, Hero } from '../components';
import projects from '../projects';
import { getIndexPageTitle } from '../utils/metadata';
import { SITE_URL } from '../constants';

function IndexPage() {
  return (
    <>
      <Helmet>
        <title>{getIndexPageTitle()}</title>
        <link rel="canonical" href={SITE_URL} />
      </Helmet>
      <Hero />
      <ProjectList projects={projects} />
    </>
  );
}

export default IndexPage;
