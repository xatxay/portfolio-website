import styled from "@emotion/styled/macro";
import { headerText } from "../colorCode/color";
import homepageBackground from "./home-image.webp";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${homepageBackground});
  border-bottom: 3px solid black;
`;

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 72px;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const HeaderText = styled.h3`
  color: ${headerText};
  cursor: pointer;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: black;
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform 0.5s cubic-bezier(0.93, -0.38, 0.78, -0.02);
    z-index: 1;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:hover {
    color: black;
  }
`;

const HomePageDescription = styled.div`
  color: black;
  font-size: 40px;
  width: 600px;
  height: 400px;
  margin-top: 80px;
  text-align: center;
`;

const HomeLogo = styled.img`
  height: 60px;
  width: auto;
  cursor: pointer;
`;

const ImageBottom = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  width: 100%;
  bottom: 0;
`;

const GojoImg = styled.img<{ left?: boolean }>`
  height: ${(props) => (props.left ? "250px" : "300px")};
  width: auto;
`;

export {
  HeaderContainer,
  HomePageStyled,
  HeaderText,
  HomeLogo,
  HomePageDescription,
  ImageBottom,
  GojoImg,
};
