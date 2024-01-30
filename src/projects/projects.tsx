import {
  ContainerCard,
  ContainerImgCard,
  ContainerTextCard,
} from "../aboutMe/aboutMeStyle";
import {
  ExternalLink,
  ProjectContainer,
  projectsVariant,
} from "./projectsStyle";
import irregularLogo from "./irregular-trading-terminal.png";
import friendTechLogo from "./Friend.tech-logo.jpeg";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import stinkbid from "./stinkbid.jpg";
import cashHogHavenLogo from "./cashhog_haven_logo.png";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Irregular Trading Terminal",
    description: `A one click execution news trading terminal with addition option for news headline sentiment analyze and automate trading with AI.`,
    url: process.env.REACT_APP_TRADING_TERMINAL,
    image: irregularLogo,
  },
  // {
  //   title: "Token Sentiment",
  //   description: `A cryptocurrency market sentiment tracker with aggregated data from Twitter feeed, Twitter polls, Youtube, Reddit, and Tiktok`,
  //   url: process.env.REACT_APP_TOKEN_SENTIMENT,
  //   image: tokenSentimentLogo,
  // },
  {
    title: "CashHog Haven",
    description: `A Solana NFT collection of unique cashhog haven looking for new owners. This project was built on Next.Js/Create T3 App`,
    url: process.env.REACT_APP_CASHHOG_HAVEN,
    image: cashHogHavenLogo,
  },
  {
    title: "FriendTech x Discord",
    description: `A chatroom aggregator for FriendTech and Discord. Allows users to use FriendTech chatroom on their own Discord server. It can also track users buy/sell keys activies`,
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
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={projectsVariant}
          transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <ContainerCard>
            <ContainerImgCard src={project.image} />
            <ContainerTextCard projects>
              <h3>{project.title}</h3>
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
        </motion.div>
      ))}
    </ProjectContainer>
  );
};

export default Projects;
