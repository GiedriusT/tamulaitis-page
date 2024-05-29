import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Project } from '../../types';
import S from './ProjectList.module.scss';
import ProjectListItem from '../ProjectListItem/ProjectListItem';
import { getTranslations } from '../../i18n/utils';

type ProjectListProps = {
  projects: Project[]
};

function ProjectList({ projects }: ProjectListProps) {
  const t = getTranslations();

  return (
    <section className={S.projectsContainer}>
      <h2>{t('projectList.title')}</h2>
      <div className={S.projectsItemsListContainer}>
        {projects.map((project) => <ProjectListItem key={project ? project.slug : uuidv4()} project={project} />)}
      </div>
      <div className={S.projectsComingSoonContainer}>
        {t('projectList.comingSoonText')}
      </div>
    </section>
  );
}

export default ProjectList;
