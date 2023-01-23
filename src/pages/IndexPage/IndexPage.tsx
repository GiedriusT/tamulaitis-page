import { useQuery } from "@apollo/client";
import React from "react";
import { ProjectList, Hero } from "../../components";
import { GetProjectListResponse, GET_PROJECT_LIST } from "../../queries/GetProjectList";

const IndexPage = () => {
  const { data } = useQuery<GetProjectListResponse>(GET_PROJECT_LIST);

  const projects = data?.projectCollection?.items;

  return (
    <>
      <Hero />
      <ProjectList projects={projects} />
    </>
  );
};

export default IndexPage
