import styled from "styled-components";

export const GameInfoContainer = styled.div`
  height: 80px;
  width: 300px;
  display: flex;
  justify-content: space-between;

  > p {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-family: "Myfont", sans-serif;
    color: var(--yellow-color);

    @media (min-width: 440px) {
      font-size: 28px;
    }

    span {
      width: 80px;
      font-size: 26px;

      @media (min-width: 440px) {
        font-size: 48px;
      }
    }
  }

  @media (min-width: 440px) {
    width: 400px;
  }
  @media (min-width: 790px) {
    width: 60vw;
  }
`;
