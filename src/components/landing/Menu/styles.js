import styled from "styled-components";

export const Wrapper = styled.ul`
  font-family: "Montserrat";
  font-size: 1.2rem;
  padding: 0;
  list-style-type: none;

  li {
    a {
      color: #000;
      @media (max-width: 768px) {
        color: #fff;
      }
    }

    @media (min-width: 769px) {
      a:hover {
        color: #7fddd6;
      }
      a.is-active {
        color: #7fddd6;
        font-weight: bold;
        border-left: 4px solid #7fddd6;
        padding-left: 0.5rem;
      }
    }

    @media (max-width: 768px) {
      margin: 0.5rem 0;
    }
  }

  @media (max-width: 768px) {
    padding-top: 4rem;
    text-align: center;
  }
`;
