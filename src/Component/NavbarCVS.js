import { Button, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
const Logo = styled.img`
  height: 35px;
  margin: 10px 30px;
  width: 200px;
`;
const WrapBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;
const NavbarCVS = () => {
  return (
    <Row style={{ borderBottom: "0.5px solid gray" }}>
      <Col md={4}>
        <div>
          <Logo
            src="https://www.docs.computervision.com.vn/static/logo-cvs-8d7e167d315ede0146bebe3e494a5898.svg"
            alt=""
          />
        </div>
      </Col>
      <Col md={18}> </Col>
      <Col md={2}>
        <WrapBtn>
          <Button type="danger">vi</Button>
          <Button>en</Button>
        </WrapBtn>{" "}
      </Col>
    </Row>
  );
};

export default NavbarCVS;
