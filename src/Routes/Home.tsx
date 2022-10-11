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
import { startBtnAudio } from "../Component/Data/Audio";
import AudioPlayer from "react-h5-audio-player";

const Home = () => {
  const navigate = useNavigate();
  const { setDeckSize, startGame, deckSize } = useGameContext();

  return (
    <BackgroundImage>
      <MusicDiv>
        <AudioPlayer
          src="/Home.mp3"
          autoPlay
          loop
          customVolumeControls={[]}
          showJumpControls={false}
          customAdditionalControls={[]}
        />
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
