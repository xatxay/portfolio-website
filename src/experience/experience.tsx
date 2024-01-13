import { ExperienceContainer, TextContainer } from "./experienceStyle";

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <TextContainer>
        <h1>Experience :</h1>
        <h2>Huma News Dashboard</h2>
        <h3>From Dec 2023 - Now</h3>
        <span>
          -Created real-time data ingestion micro-services, supplementing a
          variety of candle data processing from Binance <br />
          -Integrated Postgres database to assist clients news headline
          dashboard <br />
          -Set up a REST api <br />
          -Created an entire fullstack web app <br />
          -Tech involved: Javascript/Typescript, React, Nodejs, Postgresql,
          Express, Lightweight chart, AWS, Binance,...
        </span>
        <h2>INVESTOR/TRADER</h2>
        <h3>From 2021 - Now</h3>
        <span>
          -I mainly invest in cryptocurrency, and trade narratives. <br />
          -I use AI and twitter feed to help me gauge the market sentiment and
          make trading decision based on the sentiment <br />
          -I've also built a personal AI news trading terminal and tool (stink
          biddorrr) to assist my trading <br />
          -News trading terminal gives me the speed advantage that allow me to
          enter position before majority of the people <br />I built Stink
          -Biddorrr to automate placing bids and rebalance my orders every 24
          hours
        </span>
        <h2>SNEAKERSSOLES</h2>
        <h3>From 2017 - Now</h3>
        <span>
          -Optimized business calendaring to appropriate sales with sneaker
          releases <br />
          -Increased sales by an average of 15% month to month by accommodating
          sale promotions with calendar sneaker releases <br />
          -Provided an intersection of commerce between consumers and latest
          fashion trends. <br />
        </span>
        {/* <h2>News Dashboard</h2>
        <h3>From Dec 2023 - Now</h3>
        <span>
          Building a fullstack web app for cryptocurrency news headline events
          with live price data chart from scratch. It's a tool to help traders
          do research and stay inform on cryptocurrency market.
        </span> */}
      </TextContainer>
    </ExperienceContainer>
  );
};

export default Experience;
