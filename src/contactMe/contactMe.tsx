import { ContactIcons } from "../aboutMe/aboutMe";
import { ContactMeContainer, ContactMeText } from "./contactMeStyle";

const ContactMe = () => {
  return (
    <ContactMeContainer id="contact">
      <ContactMeText>Contact Me</ContactMeText>
      <ContactIcons contact />
    </ContactMeContainer>
  );
};

export default ContactMe;
