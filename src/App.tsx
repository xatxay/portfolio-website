import { AboutMe } from "./aboutMe/aboutMe";
import ContactMe from "./contactMe/contactMe";
import Experience from "./experience/experience";
import HomePage from "./homepage/homepage";
import Projects from "./projects/projects";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Element name="home">
        <HomePage />
      </Element>
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="project">
        <Projects />
      </Element>
      <Element name="contact">
        <ContactMe />
      </Element>
    </>
  );
}

export default App;
