import React from "react";
import { Link } from 'react-router-dom';
import { ProjectListItemContainer, ProjectListItemImage, ProjectListItemIternalContainer, ProjectListItemTitle } from "./ProjectListItem.styles";

interface ProjectListItemProps {
  node: any
};

const ProjectListItem: React.FC<ProjectListItemProps> = ({ node }) => {
  return (
    <ProjectListItemContainer>
      <Link to={`/project/${node.contentful_id}`}>
        <ProjectListItemIternalContainer>
          <ProjectListItemImage src="/project-placeholder.jpg" />
          <ProjectListItemTitle>{node.title}</ProjectListItemTitle>
        </ProjectListItemIternalContainer>
      </Link>
    </ProjectListItemContainer>
  )
}

export default ProjectListItem
