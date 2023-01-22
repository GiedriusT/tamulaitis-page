import { gql, useQuery } from "@apollo/client";
import { Project } from "../types";

interface GetProjectsResponse {
  projectCollection: {
    items: Project[];
  };
}

const GET_PROJECTS = gql`
  query GetProjects {
    projectCollection {
      items {
        slug
        title
      }
    }
  }
`;

export const useProjectList = () => {
  const { loading, error, data } = useQuery<GetProjectsResponse>(GET_PROJECTS);
  const projects = data?.projectCollection.items;
  return { loading, error, projects };
};
