import styled from "styled-components";

export const GameBackgroundImage = styled.div`
  width: 100vw;
  height: calc(100vh - 72px);
  background-size: cover;
  background-position: center;
  background-image: url("/assets/background-game.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
