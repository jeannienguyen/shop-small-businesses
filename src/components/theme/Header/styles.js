import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  // padding: 2rem 0;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 18px;
    height: 12px;
    position: fixed;
    right: 2rem;
    z-index: 2;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;

    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: #7fddd6;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
    }

    span:nth-child(1) {
      top: 0px;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }

    span:nth-child(2) {
      top: 9px;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }

    &.open span {
      background: #fff;
    }

    &.open span:nth-child(1) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      top: -1px;
      left: 3px;
    }

    &.open span:nth-child(2) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
      top: 12px;
      left: 3px;
    }
  }
`;
