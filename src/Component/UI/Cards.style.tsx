import styled from "styled-components";

export const CardsGrid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
`;

export const CardStyle = styled.div`
  width: 60px;
  height: 60px;
`;
