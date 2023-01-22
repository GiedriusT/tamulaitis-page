import React from "react";
import { Link } from 'react-router-dom';
import { ProjectListItemContainer, ProjectListItemImage, ProjectListItemIternalContainer, ProjectListItemTitle } from "./ProjectListItem.styles";

interface ProjectListItemProps {
  node?: any
};

const ProjectListItem: React.FC<ProjectListItemProps> = ({ node }) => {
  const renderInternalContainer = () => (
    <ProjectListItemIternalContainer>
      {node && <ProjectListItemImage src="/project-placeholder.jpg" />}
      <ProjectListItemTitle $loading={true}>{node ? node.title : 'Loading...'}</ProjectListItemTitle>
    </ProjectListItemIternalContainer>
  );

  return (
    <ProjectListItemContainer>
      {node ? (
        <Link to={`/project/${node.contentful_id}`}>
          {renderInternalContainer()}
        </Link>
      ) : renderInternalContainer()}
    </ProjectListItemContainer>
  )
}

export default ProjectListItem
