import { GameBackgroundImage } from "./Game.style";
import GameNav from "../Component/UI/GameNav.component";
import GameInfo from "../Component/UI/GameInfo.component";
import Cards from "../Component/UI/Cards.component";

const Game = () => {
  return (
    <>
      <GameNav />
      <GameBackgroundImage>
        <GameInfo tries={0} best={0} />
        <Cards />
      </GameBackgroundImage>
    </>
  );
};

export default Game;
