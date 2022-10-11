import styled from "styled-components";

export const GameInfoContainer = styled.div`
  height: 80px;
  width: 60vw;
  display: flex;
  justify-content: space-between;

  > p {
    display: flex;
    align-items: center;
    font-size: 28px;
    font-family: "Myfont", sans-serif;
    color: var(--yellow-color);

    span {
      width: 80px;
      font-size: 48px;
    }
  }
`;
