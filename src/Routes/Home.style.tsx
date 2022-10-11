import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url("/assets/background-start.png");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 40px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 440px) {
    flex-direction: row;
  }
`;

export const Difficulty = styled.h3`
  width: 130px;
  font-size: 30px;
  color: var(--white);
  font-family: 'Silkscreen', cursive;
  margin: 0;
  animation: blinker 1s linear infinite;
  @keyframes blinker {
    50% {
      opacity: 0;
    }
`;

export const MusicDiv = styled.div`
  position: fixed;
  bottom: 15px;
  left: 15px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--white);
`;
