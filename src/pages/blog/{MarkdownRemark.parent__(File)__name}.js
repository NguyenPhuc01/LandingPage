import { Col, Row } from "antd";
import { graphql } from "gatsby";
import React, { memo } from "react";
import BlogTemplate from ".";
import Layout from "../../Component/Layout";

const Coffee = ({ data }) => {
  const html = data?.markdownRemark?.html;
  const item = data.markdownRemark.frontmatter.rightItem;

  return (
    <Layout>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ marginTop: "20px" }}
      />
    </Layout>
  );
};

export default Coffee;
export const query = graphql`
  query myQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        path
        slug
        stack
        title
        rightItem
      }
    }
  }
`;
