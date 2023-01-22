import { useQuery } from "@apollo/client";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams } from "react-router-dom";
import { ArticleTitle } from "../../components";
import { GET_PROJECT, GetProjectQueryResponse, GetProjectQueryVariables } from "../../queries/GetProject";

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data } = useQuery<GetProjectQueryResponse, GetProjectQueryVariables>(
    GET_PROJECT,
    {
      variables: { slug: slug || '' },
      skip: !slug
    }
  );

  if (!data) return null;

  const project = data?.projectCollection?.items[0];

  return (
    <>
      <ArticleTitle>{project.title}</ArticleTitle>
      <ReactMarkdown>{project.article}</ReactMarkdown>
    </>
  )
}

export default ProjectPage
