import React from "react";
import { Wrapper, MobileMenu } from "./styles";

export const Header = () => {
  function toggleMobileMenu() {
    let mobileMenuButton = document.getElementById("mobile-menu");
    let menu = document.getElementById("menu");
    if (!mobileMenuButton.classList.contains("open")) {
      mobileMenuButton.classList.add("open");
      menu.classList.add("menu-open");
      document.body.classList.add("menu-fixed");
    } else {
      mobileMenuButton.classList.remove("open");
      menu.classList.remove("menu-open");
      document.body.classList.remove("menu-fixed");
    }
  }

  return (
    <Wrapper>
      <div>Shop Small Businesses</div>
      <MobileMenu id="mobile-menu" onClick={() => toggleMobileMenu()}>
        <span></span>
        <span></span>
      </MobileMenu>
    </Wrapper>
  );
};
