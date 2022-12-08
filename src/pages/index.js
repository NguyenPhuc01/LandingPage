import { graphql } from "gatsby";
import * as React from "react";

const IndexPage = ({ data }) => {
  console.log({ data });
  return <div>index page::{data.site.siteMetadata.title}</div>;
};

export default IndexPage;
export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
  }
`;

export const Head = () => <title>Home Page</title>;
