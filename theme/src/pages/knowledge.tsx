import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import {graphql} from "gatsby";
import {Page} from "../utils/models";
import Subheader from "../components/subheader";
import SEO from "../components/seo";
import PageGrid from "../components/page-grid";

interface KnowledgePageProps {
  data: {
    allPages: {
      edges: Array<{ node: Page }>;
    };
  };
  location: Location;
}

const KnowledgePage: FunctionComponent<KnowledgePageProps> = ({data, location}) => {
  const pages = data.allPages.edges.map(node => node.node) as Page[];

  return (
    <Layout bigHeader={false}>
      <SEO
        location={location}
        title={`Knowledge Base`}
        type={`Series`}
      />
      <Subheader title={`Knowledge Base`} subtitle={`${pages.length} pages`}/>
      <PageGrid pages={pages} />
    </Layout>
  );
};

export default KnowledgePage;

export const query = graphql`
  query {
    allPages: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(knowledgebase)/.*\\\\.md$/" } }
        sort: { fields: frontmatter___created, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              path
              excerpt
            }
          }
        }
      }
  }
`;