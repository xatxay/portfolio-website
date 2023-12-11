import {
  ContainerCard,
  AboutMeContainer,
  AboutMeDescription,
  ContainerImgCard,
  ContainerTextCard,
  Icons,
  LeftContainer,
  RightContainer,
  IconsLink,
  cardVariants,
} from "./aboutMeStyle";
import ichigo from "./ichigo-about-me.jpg";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMinutemailer,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { motion } from "framer-motion";

type IconsProps = {
  right?: boolean;
  contact?: boolean;
};

const aboutMeData = [
  {
    IconComponent: SiMinutemailer,
    url: `mailto:${process.env.REACT_APP_EMAIL}`,
  },
  { IconComponent: SiGithub, url: "https://github.com/xatxay" },
  {
    IconComponent: SiLinkedin,
    url: "https://www.linkedin.com/in/xatxay-sengmeuangkhoun-2b3973297/",
  },
];

const AboutMe = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <AboutMeContainer id="about">
      <LeftContainer>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={cardVariants}>
            <ContainerCard>
              <ContainerImgCard src={ichigo} />
              <ContainerTextCard>
                <h2>Xatxay Sengmeuangkhoun</h2>
                <span>Age: {currentYear - 2000}</span>
                <span>Junior Dev, but Senior Chef</span>
                <Icons>
                  <SiTypescript />
                  <SiNodedotjs />
                  <SiReact />
                  <SiJavascript />
                </Icons>
              </ContainerTextCard>
            </ContainerCard>
          </motion.div>
        </motion.div>
      </LeftContainer>
      <RightContainer>
        <AboutMeDescription>
          <h1>About Me</h1>
          <span>
            I started coding in late July 2023. I've learned most of my coding
            skills through doing personal projects. Three projects i've done so
            far are my personal AI news trading terminal, stink biddor, and
            FriendTech Discord chatroom aggregator. I find coding to be really
            fun and interesting. I enjoy solving problems and turning ideas into
            reality.
          </span>
          <h1>Contact Details</h1>
          <ContactIcons right />
        </AboutMeDescription>
      </RightContainer>
    </AboutMeContainer>
  );
};

const ContactIcons = (props: IconsProps) => {
  return (
    <Icons {...props}>
      {aboutMeData.map(({ IconComponent, url }, index) => (
        <IconsLink
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferer"
        >
          <IconComponent />
        </IconsLink>
      ))}
    </Icons>
  );
};

export { ContactIcons, AboutMe };
