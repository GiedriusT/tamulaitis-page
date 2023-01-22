import React from "react";
import { useParams } from "react-router-dom";
import { ArticleTitle } from "../../components";

const ProjectPage: React.FC = () => {
  const data: any = {
    contentfulProject: undefined
  };

  const { slug } = useParams<{ slug: string }>();

  return (
    <>
      <ArticleTitle>{slug}{data.contentfulProject?.title}</ArticleTitle>
      <div dangerouslySetInnerHTML={{ __html: data.contentfulProject?.article?.childMarkdownRemark?.html || '' }}></div>
    </>
  )
}

export default ProjectPage
