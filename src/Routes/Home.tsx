import { BackgroundImage, ButtonContainer } from "./Home.style";
import Button from "../Component/UI/Button.component";
import DropdownButton from "../Component/UI/DropdownButton.component";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DeckSizeType } from "./Game.types";

const Home = () => {
  const navigate = useNavigate();
  const [deckSize, setDeckSize] = useState<DeckSizeType>(DeckSizeType.EASY);
  const goToGame = () => {
    navigate(`/game/${deckSize}`);
  };
  return (
    <BackgroundImage>
      <img src="/assets/pokemon-title.png" alt="" />
      <ButtonContainer>
        <DropdownButton
          options={Object.values(DeckSizeType)}
          onSelect={(option) => setDeckSize(option as DeckSizeType)}
        />
        <Button message="START NEW GAME" clickHandler={goToGame} />
      </ButtonContainer>
    </BackgroundImage>
  );
};
export default Home;
