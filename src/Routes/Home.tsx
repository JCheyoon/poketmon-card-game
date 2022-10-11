import {
  BackgroundImage,
  ButtonContainer,
  Difficulty,
  MusicDiv,
} from "./Home.style";
import Button from "../Component/UI/Button.component";
import DropdownButton from "../Component/UI/DropdownButton.component";
import { DeckSizeType } from "./Game.types";
import { useGameContext } from "../Component/Context/gameContext";
import { useNavigate } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { deckBtnAudio, startBtnAudio } from "../Component/Data/Audio";

const Home = () => {
  const navigate = useNavigate();
  const { setDeckSize, startGame, deckSize } = useGameContext();

  return (
    <BackgroundImage>
      <MusicDiv>
        <ReactAudioPlayer src="/Home.mp3" autoPlay controls loop />
      </MusicDiv>
      <img src="/assets/pokemon-title.png" alt="" />
      <ButtonContainer>
        <DropdownButton
          options={Object.values(DeckSizeType)}
          onSelect={(option) => setDeckSize(option as DeckSizeType)}
        />
        <Button
          message="START NEW GAME"
          clickHandler={() => {
            startBtnAudio.play();
            startGame();
            navigate("/game");
          }}
        />
      </ButtonContainer>
      <Difficulty>{deckSize}</Difficulty>
    </BackgroundImage>
  );
};
export default Home;
