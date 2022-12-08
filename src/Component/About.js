import React from "react";
import styled from "styled-components";
import image from "../images/Image.png";
import image1 from "../images/Image (1).png";
import image2 from "../images/Image (2).png";
const Container = styled.div`
  height: 90vh;
  padding: 0px 135px;
  display: flex;
`;
const LeftContainer = styled.div`
  margin-top: 96px;
  width: 50%;
`;
const RightContainer = styled.div`
  margin-top: 96px;
  width: 50%;
`;
const NetbooksTitle = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;

  color: #217bf4;
`;
const TitleAbout = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  color: #0a093d;
`;
const DescriptionAbout = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #656464;
`;
const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #217bf4;
  position: absolute;
  top: 5px;
  left: 5px;
`;
const CircleLarge = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background: #e9f2fe;
`;
const WrapCircle = styled.div`
  position: relative;
`;
const GroupCircle = styled.div`
  display: flex;
  margin-top: 16px;
`;
const TitleCircle = styled.span`
  margin-left: 17px;
`;
const Box = styled.div`
  width: 406px;
  height: 352px;
`;
const BoxImage = styled.div`
  display: flex;
  align-items: center;
`;
const GroupImageRight = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImageLan = styled.img`
  width: 265px;
  height: 238px;
  padding-top: 32px;
`;
const ImageVideo = styled.img`
  width: 270px;
  height: 368px;
  margin-right: 29px;
`;

const About = () => {
  return (
    <Container>
      <LeftContainer>
        <Box>
          <NetbooksTitle>Whats Netboks?</NetbooksTitle>
          <TitleAbout>Why Join to Netbook Social Network?</TitleAbout>
          <DescriptionAbout>
            Recent surveys have indicated that small businesses recognise the
            need they have to connect with consumer.
          </DescriptionAbout>
          <GroupCircle>
            <WrapCircle>
              <CircleLarge></CircleLarge>
              <Circle></Circle>
            </WrapCircle>
            <TitleCircle>Groups</TitleCircle>
          </GroupCircle>

          <GroupCircle>
            <WrapCircle>
              <CircleLarge></CircleLarge>
              <Circle></Circle>
            </WrapCircle>
            <TitleCircle>Messages</TitleCircle>
          </GroupCircle>
          <GroupCircle>
            <WrapCircle>
              <CircleLarge></CircleLarge>
              <Circle></Circle>
            </WrapCircle>
            <TitleCircle>Share</TitleCircle>
          </GroupCircle>
        </Box>
      </LeftContainer>
      <RightContainer>
        <BoxImage>
          <ImageVideo src={image} alt="" />
          <GroupImageRight>
            <ImageLan src={image1} alt="" />
            <ImageLan src={image2} alt="" />
          </GroupImageRight>
        </BoxImage>
      </RightContainer>
    </Container>
  );
};

export default About;
