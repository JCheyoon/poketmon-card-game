import { BackgroundImage, ButtonContainer } from "./Home.style";
import Button from "../Component/UI/Button.component";
import DropdownButton from "../Component/UI/DropdownButton.component";
import { DeckSizeType } from "./Game.types";
import { useGameContext } from "../Component/Context/gameContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { setDeckSize, startGame } = useGameContext();
  return (
    <BackgroundImage>
      <img src="/assets/pokemon-title.png" alt="" />
      <ButtonContainer>
        <DropdownButton
          options={Object.values(DeckSizeType)}
          onSelect={(option) => setDeckSize(option as DeckSizeType)}
        />
        <Button
          message="START NEW GAME"
          clickHandler={() => {
            startGame();
            navigate("/game");
          }}
        />
      </ButtonContainer>
    </BackgroundImage>
  );
};
export default Home;
