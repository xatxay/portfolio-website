import styled from "@emotion/styled";
import aboutMeBackground from "./second-slide-background.png";
import { Variants } from "framer-motion";

const AboutMeContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${aboutMeBackground});
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid black;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-right: 3px solid black;
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ContainerCard = styled.div`
  background-color: white;
  width: 300px;
  height: 450px;
  border-radius: 8px;
  border: 2px solid black;
  position: relative;
  box-shadow: -190px 97px 85px rgba(0, 0, 0, 0.01),
    -107px 55px 72px rgba(0, 0, 0, 0.03), -47px 24px 53px rgba(0, 0, 0, 0.04),
    -12px 6px 29px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.05);
`;

const ContainerImgCard = styled.img`
  display: block;
  height: 225px;
  border-bottom: 2px solid black;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;
`;

const ContainerTextCard = styled.div<{ projects?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
  span {
    margin-bottom: 10px;
    padding-left: ${(props) => (props.projects ? "25px" : "0px")};
    padding-right: ${(props) => (props.projects ? "25px" : "0xpx")};
  }
`;

const AboutMeDescription = styled.div`
  width: 500px;
  text-align: start;
  h1 {
    font-size: 50px;
  }

  span {
    font-size: 20px;
  }
`;

const Icons = styled.div<{ right?: boolean; contact?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.contact ? "center" : "space-around")};
  width: 100%;
  height: auto;
  font-size: ${(props) =>
    props.right ? "50px" : props.contact ? "60px" : "35px"};
  margin-top: ${(props) =>
    props.right ? "60px" : props.contact ? "0px" : "30px"};
  bottom: 0;
  gap: ${(props) => (props.contact ? "80px" : "0px")};
`;

const IconsLink = styled.a`
  cursor: pointer;
  color: black;
  &:hover {
    color: gray;
  }
`;

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 15,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export {
  AboutMeContainer,
  LeftContainer,
  RightContainer,
  ContainerCard,
  ContainerImgCard,
  ContainerTextCard,
  Icons,
  AboutMeDescription,
  IconsLink,
  cardVariants,
};
