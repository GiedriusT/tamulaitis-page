import React from "react";
import { Layout, ArticleTitle } from "../../components";

const ProjectPage = () => {
  const data: any = {
    contentfulProject: undefined
  };

  return (
    <Layout>
      <ArticleTitle>{data.contentfulProject?.title}</ArticleTitle>
      <div dangerouslySetInnerHTML={{ __html: data.contentfulProject?.article?.childMarkdownRemark?.html || '' }}></div>
    </Layout>
  )
}

// export const query = graphql`
//   query ContentfulProject($contentful_id: String) {
//     contentfulProject(contentful_id: {eq: $contentful_id}) {
//       title
//       article {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `

export default ProjectPage
