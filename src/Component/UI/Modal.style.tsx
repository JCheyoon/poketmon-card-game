import styled from "styled-components";

export const BackDropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export const OverlayContainer = styled.div`
  background: var(--white);
  font-family: "Myfont",sans-serif;
  border-radius: 10px;
  position: fixed;
  top: 30vh;
  left: calc(50% - 45vw);
  width: 90vw;
  z-index: 100;
  overflow: hidden;

  @media (min-width: 768px) {
    left: calc(50% - 175px);
    width: 350px;
`;

export const Header = styled.header`
  background: var(--dark-blue);
  padding: 1rem;

  h2 {
    margin: 0;
    color: white;
  }
`;

export const Content = styled.div`
  padding: 1rem;
  font-size: 30px;
  p {
    margin: 0;
  }
`;

export const Footer = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
