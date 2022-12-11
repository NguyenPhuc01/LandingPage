import React, { memo } from "react";
import styled from "styled-components";
const Navbar = styled.div`
  border-bottom: 0.1px solid #217bf4;
  height: 70px;
  margin: 0px;
  display: flex;
  align-items: center;
  padding: 0px 150px;
  @media only screen and (max-width: 739px) {
    display: flex;
    justify-content: space-between;
    padding: 0px 30px;
  }
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    display: flex;
    justify-content: space-between;
    padding: 0px;
  }
  @media only screen and (min-width: 1024) {
    display: flex;
    justify-content: space-between;
    padding: 0px;
  }
`;
const Logo = styled.img`
  height: 70px;
  cursor: pointer;
`;
const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-around;
  @media only screen and (max-width: 739px) {
    display: flex;
    justify-content: space-between;
    padding: 0px;
  }
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    display: flex;
    justify-content: space-between;
    padding: 0px;
  }
`;
const ContentNavBar = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: space-around;
  @media only screen and (max-width: 739px) {
    display: none;
  }
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    display: none;
  }
`;
const NavbarRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
`;
const Button = styled.button`
  background-color: #217bf4;
  color: #fff;
  border: none;
  border-radius: 14px;
  width: 100px;
  height: 40px;
  cursor: pointer;
`;
const SearchInput = styled.input`
  border-radius: 5px;
  margin-right: 20px;
  :focus {
    outline: none;
  }
  padding-left: 10px;
`;
const NavBar = () => {
  return (
    <Navbar>
      <NavbarLeft>
        <Logo
          src="https://seeklogo.com/images/N/netbook-media-logo-FA4FE0566F-seeklogo.com.gif"
          alt=""
        />
        <ContentNavBar>
          <span>Home</span>
          <span>Home</span>
          <span>Home</span>
          <span>Home</span>
        </ContentNavBar>
      </NavbarLeft>

      <NavbarRight>
        <SearchInput type="search" />
        <Button>Login</Button>
      </NavbarRight>
    </Navbar>
  );
};

export default memo(NavBar);
