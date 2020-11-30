import React from "react";
import { Wrapper, Details } from "./styles";
import ContactForm from "./ContactForm";

export const Contact = () => (
  <Wrapper id="contact">
    <Details>
      <h2>Add Your Small Business</h2>
      <ContactForm />
    </Details>
  </Wrapper>
);
