import { ExperienceContainer, TextContainer } from "./experienceStyle";

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <TextContainer>
        <h1>Experience :</h1>
        <h2>Coder</h2>
        <h3>From July 2023 - Now</h3>
        <span>
          A fullstack developer specialized in javascript/typescript, react,
          nodejs, postgresql, express and more.{" "}
        </span>
        <h2>INVESTOR/TRADER</h2>
        <h3>From 2021 - Now</h3>
        <span>
          I mainly invest in cryptocurrency, and trade narratives. I use AI and
          twitter feed to help me gauge the market sentiment. I've also built a
          personal AI news trading terminal and tool (stink biddorrr) to assist
          my trading
        </span>
        <h2>SNEAKERSSOLES</h2>
        <h3>From 2017 - Now</h3>
        <span>
          I optimized business calendaring to appropriate sales with sneaker
          releases and also provided an intersection of commerce between
          consumers and latest fashion trends.
        </span>
        <h2>News Dashboard</h2>
        <h3>From Dec 2023 - Now</h3>
        <span>
          Building a fullstack web app for cryptocurrency news headline events
          with live price data chart from scratch. It's a tool to help traders
          do research and stay inform on cryptocurrency market.
        </span>
      </TextContainer>
    </ExperienceContainer>
  );
};

export default Experience;
