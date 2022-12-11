// import { Col, Row } from "antd";
import React, { memo } from "react";

import styled from "styled-components";
import { graphql, Link, useStaticQuery } from "gatsby";
import { useState } from "react";
import { Col, Row } from "antd";
import NavBar from "./NavBar";
import NavbarCVS from "./NavbarCVS";
const StyledButton = styled.div`
  border: none;
  padding: 10px;
  margin: 10px 10px 0px 10px;
  color: black;
  :hover {
    background-color: #f0f0f0;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const BtnRightItem = styled.button`
  margin: 10px 0px 0px 30px;
  background-color: #fff;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

const Layout = ({ children }) => {
  const [idActivate, setIdActivate] = useState("");
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          html
          frontmatter {
            slug
            title
            stack
            path
            rightItem
          }
          id
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  `);

  console.log(data.allMarkdownRemark.nodes);
  return (
    <>
      <NavbarCVS />
      <Row>
        <Col md={4}>
          {data.allMarkdownRemark.nodes.map((e) => {
            return (
              <Link to={`/blog/${e.parent.name}`} key={e.id}>
                <StyledButton
                  onClick={() => {
                    setIdActivate(e.id);
                  }}
                >
                  {e.frontmatter.title}
                </StyledButton>
              </Link>
            );
          })}
        </Col>
        <Col md={16}>{children}</Col>

        <Col md={4}>
          {data.allMarkdownRemark.nodes.map((e) => {
            return (
              <div key={e.id}>
                <BtnRightItem>{e.frontmatter.stack}</BtnRightItem>
              </div>
            );
          })}
        </Col>
      </Row>
    </>
    /*   {<div>
      {data.allMarkdownRemark.nodes.map((e) => {
        return (
          <Link to={`/blog/${e.parent.name}`} key={e.id}>
            <StyledButton
              onClick={() => {
                setIdActivate(e.id);
              }}
            >
              {e.frontmatter.title}
            </StyledButton>
          </Link>
        );
      })}
    </div> }*/
  );
};
export default memo(Layout);
