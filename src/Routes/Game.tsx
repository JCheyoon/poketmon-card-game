import { GameBackgroundImage } from "./Game.style";
import GameNav from "../Component/UI/GameNav.component";
import GameInfo from "../Component/UI/GameInfo.component";
import Cards from "../Component/UI/Cards.component";
import { useGameContext } from "../Component/Context/gameContext";
import { MusicDiv } from "./Home.style";
import ReactAudioPlayer from "react-audio-player";

const Game = () => {
  const { tries, bestScore } = useGameContext();
  return (
    <>
      <GameNav />
      <GameBackgroundImage>
        <MusicDiv>
          <ReactAudioPlayer src="/Game.mp3" autoPlay controls loop />
        </MusicDiv>
        <GameInfo tries={tries} best={bestScore} />
        <Cards />
      </GameBackgroundImage>
    </>
  );
};

export default Game;
