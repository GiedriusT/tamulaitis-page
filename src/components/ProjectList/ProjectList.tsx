import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { useProjectList } from "../../hooks/useProjectList";
import { ProjectsContainer, ProjectsItemsListContainer } from "./ProjectList.styles";
import ProjectListItem from "./ProjectListItem/ProjectListItem";

const renderEmptyItem = (count: number) => {
  const emptyItems = [];
  for (let i = 0; i < count; i++) {
    emptyItems.push(<ProjectListItem key={i} />);
  }
  return emptyItems;
}

const ProjectList: React.FC = () => {

  const { projects } = useProjectList();

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
