import { GameInfoContainer } from "./GameInfo.style";
import Button from "./Button.component";

type GameInfoProp = {
  tries: number;
  best: number;
};
const GameInfo = ({ tries, best }: GameInfoProp) => {
  const restartGame = () => {
    console.log("restart");
  };
  return (
    <GameInfoContainer>
      <p>
        CURRENT TRIES:&nbsp;<span>{tries}</span>
      </p>

      <p>
        BEST:&nbsp;<span>{best}</span>
      </p>
      <Button message="RESTART" clickHandler={restartGame} />
    </GameInfoContainer>
  );
};

export default GameInfo;
