import styled from "styled-components";

export const Wrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 1.2rem;

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
      }
    }
  }

  @media (max-width: 768px) {
    padding-top: 1.5rem;
    text-align: center;
  }
`;
