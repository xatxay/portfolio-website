import styled from "@emotion/styled";
import contactMeBackground from "./contact-me-background.png";

const ContactMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 35vh;
  background-image: url(${contactMeBackground});
`;

const ContactMeText = styled.h1`
  font-size: 50px;
`;

export { ContactMeContainer, ContactMeText };
