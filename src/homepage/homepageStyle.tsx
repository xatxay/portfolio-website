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
  height: 80px;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const HeaderText = styled.h3`
  color: ${headerText};
  text-decoration: underline;
  cursor: pointer;
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
