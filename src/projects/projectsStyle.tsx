import styled from "@emotion/styled";
import projectBackground from "./project-background.png";
import { externalLinkColor } from "../colorCode/color";

const ProjectContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom: 3px solid black;
  background-image: url(${projectBackground});
`;

const ExternalLink = styled.a`
  position: absolute;
  bottom: 5px;
  right: 15px;
  font-size: 30px;
  cursor: pointer;
  color: ${externalLinkColor};
  &:hover {
    filter: brightness(125%);
  }
`;

export { ProjectContainer, ExternalLink };
