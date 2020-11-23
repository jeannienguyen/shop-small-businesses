import React from "react";
import { Col } from "react-bootstrap";
import { Wrapper, CloseButton } from "./styles";
import businesses from "../Businesses/businesses.json";
import closeButton from "../../../assets/icons/close-button.png";

export const Menu = () => {
  function scrollToHash(hash) {
    let section = document.getElementById(hash);
    section.scrollIntoView({
      behavior: "smooth",
    });
  }

  function setActiveLinkAndScrollToHash(hash) {
    let anchorSelector = 'a[href^="#"]';
    let anchorList = document.querySelectorAll(anchorSelector);

    anchorList.forEach(link => {
      link.classList.remove("is-active");
    });

    let link = document.querySelector('a[href="' + hash + '"]');
    link.classList.add("is-active");
    scrollToHash(hash);
  }

  return (
    <Col id="menu" className="menu" lg={4}>
      <Wrapper>
        {businesses.map(({ id, group }) => (
          <li key={id}>
            <a
              href={"#" + group.replace(/ /g, "-").toLowerCase()}
              onClick={() =>
                setActiveLinkAndScrollToHash(
                  "#" + group.replace(/ /g, "-").toLowerCase()
                )
              }
            >
              {group}
            </a>
          </li>
        ))}
      </Wrapper>
    </Col>
  );
};
