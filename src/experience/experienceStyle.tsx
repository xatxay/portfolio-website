import styled from "@emotion/styled";
import experienceBackground from "./third-slide-background.png";
import { experienceColor } from "../colorCode/color";

const ExperienceContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid black;
  background-image: url(${experienceBackground});
`;

const TextContainer = styled.div`
  text-align: start;
  width: 800px;
  height: auto;
  h1 {
    text-decoration: underline;
  }
  h2 {
    font-style: italic;
  }
  h3 {
    color: ${experienceColor};
  }
`;

export { ExperienceContainer, TextContainer };
