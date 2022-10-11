import styled from "styled-components";

export const CardsGrid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-gap: 10px;
  position: relative;

  &.easy {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  &.medium {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  &.hard {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);

    @media (min-width: 560px) {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }
  }
`;

export const CardStyle = styled.div`
  width: 80px;
  height: 80px;
  perspective: 500px;
  transform-style: preserve-3d;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  @media (min-width: 440px) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 800px) {
    width: 150px;
    height: 150px;
  }
  &.flipped {
    transform: rotatey(180deg);
  }
`;
export const FrontCard = styled.div`
  backface-visibility: hidden;
  position: absolute;
  border-radius: 6px;

  img {
    width: 80px;
    height: 80px;

    @media (min-width: 440px) {
      width: 100px;
      height: 100px;
    }
    @media (min-width: 800px) {
      width: 150px;
      height: 150px;
    }
  }
`;

export const BackCard = styled.div`
  backface-visibility: hidden;
  position: absolute;
  transform: rotatey(180deg);
  img {
    width: 80px;
    height: 80px;

    @media (min-width: 440px) {
      width: 100px;
      height: 100px;
    }
    @media (min-width: 800px) {
      width: 150px;
      height: 150px;
    }
  }
`;
