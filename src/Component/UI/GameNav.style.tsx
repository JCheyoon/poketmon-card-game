import styled from "styled-components";

export const NavContainer = styled.div`
  align-items: center;
  background-color: var(--dark-blue);
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 700px) {
    width: 100%;
  }
`;

export const RightDiv = styled.div`
  margin-left: 20px;
`;
