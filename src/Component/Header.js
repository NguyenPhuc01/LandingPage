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
const Body = styled.div`
  padding: 0px 150px;
  padding-top: 100px;
  display: flex;
  height: 80vh;
  background: linear-gradient(311.76deg, #d4e7fe -15.24%, #ffffff 78.85%);
  @media only screen and (max-width: 739px) {
    display: flex;
    flex-direction: column;
    padding: 0px;
    width: 100%;
    height: 120vh;
  }
  @media only screen and (min-width: 740px) and (max-width: 1199px) {
    display: flex;
    flex-direction: column;
    height: 100vh;

    padding: 0px;
  }
  @media only screen and (min-width: 1024) {
  }
`;
const BodyLeft = styled.div`
  @media only screen and (max-width: 739px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
  }
  @media only screen and (min-width: 740px) and (max-width: 1199px) {
    display: flex;
    padding: 20px 150px;

    flex-direction: column;
  }
`;
const BodyRight = styled.div`
  position: relative;
  @media only screen and (min-width: 740px) and (max-width: 1199px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
  }
  @media only screen and (max-width: 739px) {
    margin-top: 30px;
  }
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
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    display: flex;
    justify-content: space-around;
  }

  @media only screen and (max-width: 739px) {
    display: flex;
    justify-content: space-around;
  }
`;
const WrapImage = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    width: 100%;
  }
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
  top: 0px;
  left: 100px;
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    width: 169.63px;
    height: 155.18px;
  }
  @media only screen and (max-width: 739px) {
    width: 109.63px;
    height: 105.18px;
    top: 28px;
    left: 30px;
  }
`;
const ImageAvatar2 = styled.img`
  position: absolute;
  width: 276.59px;
  height: 271.1px;
  top: 0px;
  left: 400px;
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    width: 169.63px;
    height: 155.18px;
  }
  @media only screen and (max-width: 739px) {
    width: 109.63px;
    height: 105.18px;
    top: 28px;
    left: 180px;
  }
`;
const ImageAvatar3 = styled.img`
  position: absolute;
  width: 253.42px;
  height: 230.69px;
  top: 250px;
  left: 250px;
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    width: 169.63px;
    height: 155.18px;
  }
  @media only screen and (max-width: 739px) {
    width: 109.63px;
    height: 105.18px;
    top: 170px;
    left: 120px;
  }
`;
const ImageAvatar4 = styled.img`
  position: absolute;
  width: 89.15px;
  height: 35.95px;
  top: 28px;
  left: 350px;
  @media only screen and (max-width: 739px) {
    width: 38.63px;
    height: 25.18px;
    top: 28px;
    left: 130px;
  }
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
            <ImageAvatar1 src={Avatar} alt="" />
            <ImageAvatar2 src={Avatar1} alt="" />
            <ImageAvatar3 src={Avatar2} alt="" />
            <ImageAvatar4 src={Chat} alt="" />
          </WrapImage>
        </BodyRight>
      </Body>
    </>
  );
};

export default Header;
