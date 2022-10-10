import { GameInfoContainer } from "./GameInfo.style";
import Button from "./Button.component";
import { useGameContext } from "../Context/gameContext";

type GameInfoProp = {
  tries: number;
  best: number;
};
const GameInfo = ({ tries, best }: GameInfoProp) => {
  const { startGame } = useGameContext();

  return (
    <GameInfoContainer>
      <p>
        CURRENT TRIES:&nbsp;<span>{tries}</span>
      </p>

      <p>
        BEST:&nbsp;<span>{best}</span>
      </p>
      <Button message="RESTART" clickHandler={startGame} />
    </GameInfoContainer>
  );
};

export default GameInfo;
