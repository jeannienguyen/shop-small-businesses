import React from "react";
import { Contact } from "../../landing";
import { Wrapper, Copyright, Link } from "./styles";

export const Footer = () => (
  <Wrapper>
    <div>
      <Contact />
      <Copyright>
        <Link href="https://github.com/jeannienguyen" target="_blank">
          GitHub
        </Link>{" "}
        |{" "}
        <Link
          href="https://www.linkedin.com/in/jeannie-t-nguyen/"
          target="_blank"
        >
          LinkedIn
        </Link>
        <br />© {new Date().getFullYear()} Jeannie Nguyen
      </Copyright>
    </div>
  </Wrapper>
);
