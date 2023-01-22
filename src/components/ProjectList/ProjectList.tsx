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

  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <ProjectsItemsListContainer>
        {/* {data.allContentfulProject.edges.map(({ node }) => <ProjectListItem node={node} />)} */}
      </ProjectsItemsListContainer>
    </ProjectsContainer>
  )
}

export default ProjectList
