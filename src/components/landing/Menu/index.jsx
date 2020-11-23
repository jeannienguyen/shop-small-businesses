import React from "react";
import { Col } from "react-bootstrap";
import { Wrapper } from "./styles";
import businesses from "../Businesses/businesses.json";

export const Menu = () => {
  function scrollToHash(hash) {
    let section = document.getElementById(hash);
    section.scrollIntoView({
      behavior: "smooth",
    });
  }

  function removeActiveLinks() {
    let anchorSelector = 'a[href^="#"]';
    let anchorList = document.querySelectorAll(anchorSelector);

    anchorList.forEach(link => {
      link.classList.remove("is-active");
    });
  }

  function setActiveLinkAndScrollToHash(hash) {
    removeActiveLinks();
    let link = document.querySelector('a[href="#' + hash + '"]');
    link.classList.add("is-active");

    if (window.innerWidth <= 768) {
      document.getElementById("mobile-menu").click();
    }
    scrollToHash(hash);
  }

  return (
    <Col id="menu" className="menu" sm={12} md={4}>
      <Wrapper>
        {businesses.map(({ id, group }) => (
          <li key={id}>
            <a
              href={"#" + group.replace(/ /g, "-").toLowerCase()}
              onClick={() =>
                setActiveLinkAndScrollToHash(
                  group.replace(/ /g, "-").toLowerCase()
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
