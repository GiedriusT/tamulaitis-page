import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Project } from '../../types';
import * as S from './ProjectList.styles';
import ProjectListItem from './ProjectListItem/ProjectListItem';
import { PROJECT_LIST_TITLE } from '../../constants';

interface ProjectListProps {
  projects: Project[]
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {

  return (
    <S.ProjectsContainer>
      <h2>{PROJECT_LIST_TITLE}</h2>
      <S.ProjectsItemsListContainer>
        {projects.map((project) => <ProjectListItem key={project ? project.slug : uuidv4()} project={project} />)}
      </S.ProjectsItemsListContainer>
    </S.ProjectsContainer>
  );
};

export default ProjectList;
