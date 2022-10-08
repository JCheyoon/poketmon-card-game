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
  flex-direction: row;
`;
