import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Project } from "../../types";
import { ProjectsContainer, ProjectsItemsListContainer } from "./ProjectList.styles";
import ProjectListItem from "./ProjectListItem/ProjectListItem";

const renderEmptyItem = (count: number) => {
  const emptyItems = [];
  for (let i = 0; i < count; i++) {
    emptyItems.push(<ProjectListItem key={i} />);
  }
  return emptyItems;
}

interface ProjectListProps {
  projects?: Project[]
};

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  console.log(projects);

  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <ProjectsItemsListContainer>
        {projects ? projects.map((project) => <ProjectListItem key={project ? project.slug : uuidv4()} project={project} />) : renderEmptyItem(6)}
      </ProjectsItemsListContainer>
    </ProjectsContainer>
  )
}

export default ProjectList
