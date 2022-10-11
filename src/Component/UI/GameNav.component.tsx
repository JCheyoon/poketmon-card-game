import { RightDiv, NavContainer } from "./GameNav.style";
import DropdownButton from "./DropdownButton.component";
import Button from "./Button.component";
import { useNavigate } from "react-router-dom";
import { DeckSizeType } from "../../Routes/Game.types";
import { useGameContext } from "../Context/gameContext";
import { Difficulty } from "../../Routes/Home.style";
import { startBtnAudio } from "../Data/Audio";
import { useMediaQuery } from "usehooks-ts";

export const GameNav = () => {
  const matches = useMediaQuery("(min-width: 700px)");

  const navigate = useNavigate();
  const { setDeckSize, startGame, deckSize } = useGameContext();
  const goToHome = () => {
    navigate("/");
    startBtnAudio.play();
  };
  return (
    <NavContainer>
      <Button
        message="HOME"
        responsive={true}
        icon="home"
        clickHandler={goToHome}
      />
      <DropdownButton
        responsive={true}
        icon="aspect_ratio"
        options={Object.values(DeckSizeType)}
        onSelect={(option) => setDeckSize(option as DeckSizeType)}
      />
      <Button
        icon="play_arrow"
        message="START NEW GAME"
        responsive={true}
        clickHandler={startGame}
      />
      <RightDiv>
        <Difficulty>{deckSize}</Difficulty>
      </RightDiv>
    </NavContainer>
  );
};
export default GameNav;
