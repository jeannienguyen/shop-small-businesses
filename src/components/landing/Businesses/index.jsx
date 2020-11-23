import React from "react";
import { Col } from "react-bootstrap";
import businesses from "./businesses.json";
import { Wrapper, Link } from "./styles";
import externalLinkIcon from "../../../assets/icons/external-link.svg";

export const Businesses = () => {
  return (
    <Col sm={12} md={8}>
      {businesses.map(({ id, group, companies }) => (
        <Wrapper key={id} id={group.replace(/ /g, "-").toLowerCase()}>
          <h2>{group}</h2>
          {companies.map(({ id, name, link, description }) => (
            <div key={id}>
              <Link href={link} target="_blank" rel="noreferrer">
                {name} <img src={externalLinkIcon} alt=""></img>
              </Link>
              <p>{description}</p>
            </div>
          ))}
        </Wrapper>
      ))}
    </Col>
  );
};
