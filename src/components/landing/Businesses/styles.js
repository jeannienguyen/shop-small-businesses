import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 0;
`;

export const Business = styled.div`
  font-family: "Montserrat";
`;

export const Link = styled.a`
  color: #000;
  font-size: 1.2rem;
  font-weight: 700;

  &:hover {
    color: #000;
  }

  img {
    height: 24px;
    width: 24px;
    mergin-left: 0.5rem;
  }
`;

export const Description = styled.p`
  margin-bottom: 2rem;
  font-size: 1.2rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
