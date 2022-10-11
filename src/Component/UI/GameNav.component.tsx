import { RightDiv, NavContainer } from "./GameNav.style";
import DropdownButton from "./DropdownButton.component";
import Button from "./Button.component";
import { useNavigate } from "react-router-dom";
import { DeckSizeType } from "../../Routes/Game.types";
import { useGameContext } from "../Context/gameContext";
import { Difficulty } from "../../Routes/Home.style";
import { startBtnAudio } from "../Data/Audio";

export const GameNav = () => {
  const navigate = useNavigate();
  const { setDeckSize, startGame, deckSize } = useGameContext();

  const goToHome = () => {
    navigate("/");
    startBtnAudio.play();
  };
  return (
    <NavContainer>
      <Button message="HOME" clickHandler={goToHome} />
      <DropdownButton
        options={Object.values(DeckSizeType)}
        onSelect={(option) => setDeckSize(option as DeckSizeType)}
      />
      <Button message="START NEW GAME" clickHandler={startGame} />

      <RightDiv>
        <Difficulty>{deckSize}</Difficulty>
      </RightDiv>
    </NavContainer>
  );
};
export default GameNav;
