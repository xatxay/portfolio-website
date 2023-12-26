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
    filter: brightness(115%);
  }
`;

const projectsVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export { ProjectContainer, ExternalLink, projectsVariant };
