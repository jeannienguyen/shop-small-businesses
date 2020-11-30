import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #000;
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  transition: 0.3s;

  ${({ error }) =>
    error &&
    `
    border-color: #ff4136;
	`}

  &::placeholder {
    color: #a7a7a7;
  }
`;
