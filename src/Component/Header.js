import React from "react";
import styled from "styled-components";
import Avatar from "../images/Avater.png";
import Avatar1 from "../images/Avater (1).png";
import Avatar2 from "../images/Avater (2).png";
import Vector from "../images/Vector.png";
import Chat from "../images/Chat.png";
const Navbar = styled.div`
  border-bottom: 0.1px solid #217bf4;
  height: 70px;
  margin: 0px;
  display: flex;
  align-items: center;
  padding: 0px 150px;
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
`;
const ContentNavBar = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: space-around;
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
const Body = styled.div`
  padding: 0px 150px;
  padding-top: 100px;
  display: flex;
  height: 80vh;
  background: linear-gradient(311.76deg, #d4e7fe -15.24%, #ffffff 78.85%);
`;
const BodyLeft = styled.div`
  width: 50%;
`;
const BodyRight = styled.div`
  width: 50%;
`;
const ButtonNetBook = styled.div`
  width: 177px;
  height: 36px;
  left: 135px;
  top: 215px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  background-color: #e7f1fe;
  color: #217bf4;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Title = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 66px;
  /* or 118% */

  color: #0a093d;
`;
const Description = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #656464;
`;
const ButtonAbout = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  border: none;
  color: #ffffff;
  background: #217bf4;
  box-shadow: 0px 7px 22px -6px rgba(33, 123, 244, 0.34);
  border-radius: 14px;
  width: 142px;
  height: 42px;
  cursor: pointer;
`;
const ButtonInvite = styled.button`
  width: 142px;
  height: 42px;
  margin-left: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #217bf4;
  opacity: 0.5;
  border: 1px solid #217bf4;
  border-radius: 14px;
  cursor: pointer;
`;
const WrapBtn = styled.div`
  margin-top: 30px;
`;
const WrapImage = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
const ImageVector = styled.img`
  width: 350.78px;
  margin-top: 100px;
  height: 275.59px;
`;
const ImageAvatar1 = styled.img`
  width: 219.63px;
  height: 245.18px;
  position: absolute;
  margin-top: 100px;
  left: 800px;
  top: 82px;
`;
const ImageAvatar2 = styled.img`
  position: absolute;
  margin-top: 100px;
  width: 276.59px;
  height: 271.1px;
  left: 1050.93px;
  top: 102px;
`;
const ImageAvatar3 = styled.img`
  position: absolute;
  width: 253.42px;
  height: 230.69px;
  left: 924.64px;
  margin-top: 100px;
  top: 302.78px;
`;
const ImageAvatar4 = styled.img`
  position: absolute;
  width: 89.15px;
  height: 35.95px;
  left: 1012.89px;
  margin-top: 100px;
  top: 121.13px;
`;
const Header = () => {
  return (
    <>
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
      <Body>
        <BodyLeft>
          <ButtonNetBook>Netbook community</ButtonNetBook>
          <Title>Your Solutions For Community!</Title>
          <Description>
            More than 2 billion people in over countries use socibook to stay in
            touch with friends & family.
          </Description>
          <WrapBtn>
            <ButtonAbout>About More</ButtonAbout>
            <ButtonInvite>Invite Friend</ButtonInvite>
          </WrapBtn>
        </BodyLeft>
        <BodyRight>
          <WrapImage>
            <ImageVector src={Vector} alt="" />
          </WrapImage>
          <ImageAvatar1 src={Avatar} alt="" />
          <ImageAvatar2 src={Avatar1} alt="" />
          <ImageAvatar3 src={Avatar2} alt="" />
          <ImageAvatar4 src={Chat} alt="" />
        </BodyRight>
      </Body>
    </>
  );
};

export default Header;
