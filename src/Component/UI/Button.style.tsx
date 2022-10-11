import styled from "styled-components";

export const ButtonStyle = styled.button`
  font-family: "Myfont", sans-serif;
  font-size: 28px;
  background-color: var(--yellow-color);
  border: none;
  border-radius: 18px;
  cursor: pointer;
  margin: 10px;

  p {
    padding: 0;
    margin: 8px 16px;
  }
`;

export const DropdownButtonStyle = styled.button`
  font-family: "Myfont", sans-serif;
  font-size: 28px;
  background-color: var(--blue-color);
  border: none;
  border-radius: 18px;
  margin: 10px 10px 10px 10px;
  cursor: pointer;

  @media (min-width: 440px) {
    margin: 10px 10px 10px 40px;
  }

  p {
    padding: 0;
    margin: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      margin-right: 4px;
      &.material-symbols-outlined {
        font-size: 34px;
      }
    }
  }
`;

export const DropdownCardStyle = styled.div`
  position: absolute;
  z-index: 7;
  background-color: var(--white);
  width: 140px;
  ul {
    padding-left: 0;
    margin: 0;
    list-style-type: none;
    text-align: start;

    li {
      padding-left: 5px;
      border: 1px solid var(--gray);
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
  }
`;
