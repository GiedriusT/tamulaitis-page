import { gql } from '@apollo/client';
import { Project } from '../types';

export const GET_PROJECT = gql`
  query GetProject($slug: String!) {
    projectCollection(where: {slug: $slug}) {
      items {
        title
        article
      }
    }
  }
`;

export interface GetProjectQueryResponse {
  projectCollection: {
    items: Project[]
  }
}

export interface GetProjectQueryVariables {
  slug: string
}