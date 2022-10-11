import { GameBackgroundImage } from "./Game.style";
import GameNav from "../Component/UI/GameNav.component";
import GameInfo from "../Component/UI/GameInfo.component";
import Cards from "../Component/UI/Cards.component";
import { useGameContext } from "../Component/Context/gameContext";
import { MusicDiv } from "./Home.style";
import AudioPlayer from "react-h5-audio-player";
import { useEffect } from "react";

const Game = () => {
  const { tries, bestScore, startGame } = useGameContext();
  useEffect(() => {
    startGame();
  }, []);
  return (
    <>
      <GameNav />
      <GameBackgroundImage>
        <MusicDiv>
          <AudioPlayer
            src="/Game.mp3"
            autoPlay
            loop
            customVolumeControls={[]}
            showJumpControls={false}
            customAdditionalControls={[]}
          />
        </MusicDiv>
        <GameInfo tries={tries} best={bestScore} />
        <Cards />
      </GameBackgroundImage>
    </>
  );
};

export default Game;
