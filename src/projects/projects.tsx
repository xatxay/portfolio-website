import {
  ContainerCard,
  ContainerImgCard,
  ContainerTextCard,
} from "../aboutMe/aboutMeStyle";
import { ExternalLink, ProjectContainer } from "./projectsStyle";
import irregularLogo from "./irregular-trading-terminal.png";
import friendTechLogo from "./Friend.tech-logo.jpeg";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import stinkbid from "./stinkbid.jpg";

const projectData = [
  {
    title: "Irregular Trading Terminal",
    description: `A one click execution news trading terminal with addition option for news headline sentiment analyze and automate trading with AI.`,
    url: process.env.REACT_APP_TRADING_TERMINAL,
    image: irregularLogo,
  },
  {
    title: "FriendTech x Discord",
    description: `A chatroom aggregator for FriendTech and Discord. The app allow users to chat with friends on FriendTech through their own Discord server. It can also track users buy/sell keys activies`,
    url: process.env.REACT_APP_FRIENDTECH,
    image: friendTechLogo,
  },
  {
    title: "Stink Biddorrr",
    description: `A personal trading tool that help me automatically place bids at a certain price to take advantage in the event of big liquidation and open interest wipe out`,
    url: process.env.REACT_APP_STINK_BID,
    image: stinkbid,
  },
];

const Projects = () => {
  return (
    <ProjectContainer id="project">
      {projectData.map((project, index) => (
        <ContainerCard key={index}>
          <ContainerImgCard src={project.image} />
          <ContainerTextCard projects>
            <h2>{project.title}</h2>
            <span>{project.description}</span>
            <ExternalLink
              href={project.url}
              target="_blank"
              rel="noopener noreferer"
            >
              <FaExternalLinkSquareAlt />
            </ExternalLink>
          </ContainerTextCard>
        </ContainerCard>
      ))}
    </ProjectContainer>
  );
};

export default Projects;
