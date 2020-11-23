import React from "react";
import { Wrapper } from "./styles";

export const Footer = () => (
  <Wrapper>
    <div>
      <span>© {new Date().getFullYear()} Jeannie Nguyen</span>
    </div>
  </Wrapper>
);
