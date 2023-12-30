import GlobalStyle from "../globalStyle/globalStyle";
import {
  GojoImg,
  HeaderContainer,
  HeaderText,
  HomeLogo,
  HomePageDescription,
  HomePageStyled,
  ImageBottom,
} from "./homepageStyle";
import { Global } from "@emotion/react";
import logo from "./logo.png";
import gojoLeft from "./gojo-bottom-left.png";
import gojoRight from "./Gojo-bottom-right.png";
import { Link } from "react-scroll";

const HomePage = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <HomePageStyled id="home">
        <HeaderContainer>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <HeaderText>About Me</HeaderText>
          </Link>
          <Link to="experience" spy={true} smooth={true} duration={500}>
            <HeaderText>Experience</HeaderText>
          </Link>
          <Link to="home" spy={true} smooth={true} duration={500}>
            <HomeLogo src={logo} />
          </Link>
          <Link to="project" spy={true} smooth={true} duration={500}>
            <HeaderText>Projects</HeaderText>
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <HeaderText>Contact Me</HeaderText>
          </Link>
        </HeaderContainer>
        <HomePageDescription>
          Hello, my name is Xatxay Sengmeuangkhoun or you can call me Jame. I'm
          a fullstack web dev who is looking for an opportunity to contribute
          and be apart of a team.
        </HomePageDescription>
        <ImageBottom>
          <GojoImg left src={gojoLeft} />
          <GojoImg src={gojoRight} />
        </ImageBottom>
      </HomePageStyled>
    </>
  );
};

export default HomePage;
