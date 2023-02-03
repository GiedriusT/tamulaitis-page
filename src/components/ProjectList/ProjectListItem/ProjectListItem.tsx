import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../../types';
import { ProjectListItemContainer, ProjectListItemImage, ProjectListItemIternalContainer, ProjectListItemTitle } from './ProjectListItem.styles';
import placeholderImage from './project-placeholder.jpg';

interface ProjectListItemProps {
  project?: Project
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ project }) => {
  const renderInternalContainer = () => (
    <ProjectListItemIternalContainer>
      {project && <ProjectListItemImage src={placeholderImage} />}
      <ProjectListItemTitle $loading={!project}>{project ? project.title : 'Loading...'}</ProjectListItemTitle>
    </ProjectListItemIternalContainer>
  );

  return (
    <ProjectListItemContainer>
      {project ? (
        <Link to={`/project/${project.slug}`}>
          {renderInternalContainer()}
        </Link>
      ) : renderInternalContainer()}
    </ProjectListItemContainer>
  );
};

export default ProjectListItem;
