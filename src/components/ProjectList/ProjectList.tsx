import React from "react";
import { ProjectsContainer, ProjectsItemsListContainer } from "./ProjectList.styles";
import ProjectListItem from "./ProjectListItem/ProjectListItem";

const ProjectList: React.FC = () => {
  // const data = useStaticQuery<AllContentfulProjectQuery>(graphql`
  //   query AllContentfulProject {
  //     allContentfulProject {
  //       edges {
  //         node {
  //           contentful_id
  //           title
  //         }
  //       }
  //     }
  //   }
  // `);
  const data: any = null;

  const renderEmptyItem = (count: number) => {
    const emptyItems = [];
    for (let i = 0; i < count; i++) {
      emptyItems.push(<ProjectListItem key={i} />);
    }
    return emptyItems;
  }

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
