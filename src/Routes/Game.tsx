import { useParams } from "react-router-dom";
import { GameBackgroundImage } from "./Game.style";
import GameNav from "../Component/UI/GameNav.component";
import GameInfo from "../Component/UI/GameInfo.component";
import Cards from "../Component/UI/Cards.component";
import { DeckSizeType } from "./Game.types";

const Game = () => {
  const { type } = useParams<{ type: DeckSizeType }>();
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
