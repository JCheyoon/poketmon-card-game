import { NavContainer } from "./GameNav.style";
import DropdownButton from "./DropdownButton.component";
import Button from "./Button.component";
import { useNavigate } from "react-router-dom";
import { DeckSizeType } from "../../Routes/Game.types";
import { useState } from "react";

export const GameNav = () => {
  const navigate = useNavigate();
  const [deckSize, setDeckSize] = useState<DeckSizeType>(DeckSizeType.EASY);
  const goToGame = () => {
    navigate(`/game/${deckSize}`);
  };

  const goToHome = () => {
    navigate("/");
  };
  return (
    <NavContainer>
      <Button message="HOME" clickHandler={goToHome} />
      <DropdownButton
        options={Object.values(DeckSizeType)}
        onSelect={(option) => setDeckSize(option as DeckSizeType)}
      />
      <Button message="START NEW GAME" clickHandler={goToGame} />
    </NavContainer>
  );
};
export default GameNav;
