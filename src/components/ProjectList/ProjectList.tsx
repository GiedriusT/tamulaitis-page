import { gql, useQuery } from "@apollo/client";
import React from "react";
import { ProjectsContainer, ProjectsItemsListContainer } from "./ProjectList.styles";
import ProjectListItem from "./ProjectListItem/ProjectListItem";

const GET_PROJECTS = gql`
  query GetProjects {
    projectCollection {
      items {
        title
      }
    }
  }
`;

const renderEmptyItem = (count: number) => {
  const emptyItems = [];
  for (let i = 0; i < count; i++) {
    emptyItems.push(<ProjectListItem key={i} />);
  }
  return emptyItems;
}

const ProjectList: React.FC = () => {

  const { loading, error, data } = useQuery(GET_PROJECTS);

  console.log(data);

  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <ProjectsItemsListContainer>
        {data ? renderEmptyItem(3) : renderEmptyItem(6)}
        {/* {data.allContentfulProject.edges.map(({ node }) => <ProjectListItem node={node} />)} */}
      </ProjectsItemsListContainer>
    </ProjectsContainer>
  )
}

export default ProjectList
