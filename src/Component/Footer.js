import React from "react";
import styled from "styled-components";
import Linkedin from "../images/Linkedin.png";
import instagram from "../images/instagram.png";
import Twitter from "../images/Twitter.png";
import facebook from "../images/facebook.png";
const FooterContainer = styled.div`
  height: 485px;
  display: flex;
  background: #2b2b39;
  position: relative;
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
  @media only screen and (max-width: 739px) {
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
`;
const Footer02 = styled.div`
  height: 96px;
  background: #20202d;
  width: 100%;
  position: absolute;
  bottom: 0px;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Icon = styled.div`
  @media only screen and (max-width: 739px) {
    display: none;
  }
`;
const IconImage = styled.img`
  margin-right: 8px;
`;
const Logo = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #ffffff;
`;
const Besnik = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;

  color: #f6f6f6;
`;
const Menu = styled.div`
  width: 668px;
  height: 226px;
  color: #fff;
  padding: 78px 135px 0px 135px;
  display: flex;
  justify-content: space-between;
  width: 50%;
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    display: flex;
    justify-content: space-between;
    height: auto;
    width: auto;
  }
  @media only screen and (max-width: 739px) {
    display: flex;
    justify-content: space-between;
    height: auto;
    width: auto;
    padding: 0px 20px;
  }
`;
const Home = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextFooter = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 46px;
  letter-spacing: 0.0125em;
  color: #e7e7e7;
  @media only screen and (max-width: 739px) {
    font-size: 12px;
  }
`;
const Subscribe = styled.div`
  width: 339px;
  height: 218px;
  padding: 90px 135px 0px 0px;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    display: none;
  }
  @media only screen and (max-width: 739px) {
    display: none;
  }
`;
const Title = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  color: #ffffff;
`;
const SubscribeDescription = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  color: #e7e7e7;
  margin-top: 18px;
`;
const InputSubscribe = styled.input`
  margin-top: 32px;
  width: 339px;
  height: 48px;
`;
const ButtonSub = styled.button`
  border: none;
  width: 126px;
  height: 48px;
`;
const SearchSub = styled.div`
  display: flex;
  align-items: center;
`;

const TitleFooter = styled.h3`
  @media only screen and (max-width: 739px) {
    font-size: 16px;
  }
`;
const Footer = () => {
  return (
    <FooterContainer>
      <Menu>
        <Home>
          <TitleFooter>Home</TitleFooter>
          <TextFooter>Home</TextFooter>
          <TextFooter>Community</TextFooter>
          <TextFooter>Events</TextFooter>
          <TextFooter>Events</TextFooter>
        </Home>
        <Home>
          <TitleFooter>Resources</TitleFooter>
          <TextFooter>Blog</TextFooter>
          <TextFooter>News</TextFooter>
          <TextFooter>Guides</TextFooter>
          <TextFooter>Help Center</TextFooter>
        </Home>
        <Home>
          <TitleFooter>Community</TitleFooter>
          <TextFooter>NewsFeed</TextFooter>
          <TextFooter>Profile</TextFooter>
          <TextFooter>Friends</TextFooter>
          <TextFooter>Forums</TextFooter>
        </Home>
        <Home>
          <TitleFooter>Main links</TitleFooter>
          <TextFooter>Members</TextFooter>
          <TextFooter>Activity</TextFooter>
          <TextFooter>Groups</TextFooter>
          <TextFooter>Private Group</TextFooter>
        </Home>
      </Menu>
      <Subscribe>
        <Title>Subscribe Cirkle Newsletter</Title>
        <SubscribeDescription>
          Subscribe to be the first one to know about updates. Enter your email
        </SubscribeDescription>

        <SearchSub>
          <InputSubscribe type="search" name="" />
          <ButtonSub>Subscribe</ButtonSub>
        </SearchSub>
      </Subscribe>

      <Footer02>
        <Besnik>Besnik Creative Agency</Besnik>

        <Logo>NetBooks</Logo>
        <Icon>
          <IconImage src={Twitter} />
          <IconImage src={instagram} />
          <IconImage src={facebook} />
          <IconImage src={Linkedin} />
        </Icon>
      </Footer02>
    </FooterContainer>
  );
};

export default Footer;
