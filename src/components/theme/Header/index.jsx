import React from "react";
import { Wrapper, MobileMenuBackground, MobileMenu } from "./styles";

export const Header = () => {
  function toggleMobileMenu() {
    let mobileMenuButton = document.getElementById("mobile-menu");
    let menu = document.getElementById("menu");
    if (!mobileMenuButton.classList.contains("open")) {
      mobileMenuButton.classList.add("open");
      menu.classList.add("menu-open");
    } else {
      mobileMenuButton.classList.remove("open");
      menu.classList.remove("menu-open");
    }
  }

  return (
    <Wrapper>
      <h1>shop small businesses</h1>
      <MobileMenuBackground>
        <MobileMenu id="mobile-menu" onClick={() => toggleMobileMenu()}>
          <span></span>
          <span></span>
        </MobileMenu>
      </MobileMenuBackground>
    </Wrapper>
  );
};
