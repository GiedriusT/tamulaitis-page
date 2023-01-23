import { gql } from "@apollo/client";
import { Project } from "../types";

export interface GetProjectListResponse {
  projectCollection: {
    items: Project[];
  };
}

export const GET_PROJECT_LIST = gql`
  query GetProjects {
    projectCollection {
      items {
        slug
        title
      }
    }
  }
`;
