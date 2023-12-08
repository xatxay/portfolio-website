import styled from "@emotion/styled";
import aboutMeBackground from "./second-slide-background.png";

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
};
