import { DeckSizeType } from "../../Routes/Game.types";

export interface CardType {
  id: number;
  pic: string;
  matched: boolean;
}

const GameData: CardType[] = [
  { id: 1, pic: "/assets/card-poke1.png", matched: false },
  { id: 2, pic: "/assets/card-poke2.png", matched: false },
  { id: 3, pic: "/assets/card-poke3.png", matched: false },
  { id: 4, pic: "/assets/card-poke4.png", matched: false },
  { id: 5, pic: "/assets/card-poke5.png", matched: false },
  { id: 6, pic: "/assets/card-poke6.png", matched: false },
  { id: 7, pic: "/assets/card-poke7.png", matched: false },
  { id: 8, pic: "/assets/card-poke8.png", matched: false },
  { id: 9, pic: "/assets/card-poke9.png", matched: false },
  { id: 10, pic: "/assets/card-poke10.png", matched: false },
];
const randomize = (array: any[]): any[] => {
  return array.sort(() => 0.5 - Math.random());
};

export const getCardsForType = (type: DeckSizeType): CardType[] => {
  const defaultCards = randomize([...GameData]);
  let baseCards: CardType[];

  switch (type) {
    case DeckSizeType.EASY:
      baseCards = defaultCards.slice(0, 3);
      break;
    case DeckSizeType.MEDIUM:
      baseCards = defaultCards.slice(0, 6);
      break;
    case DeckSizeType.HARD:
      baseCards = defaultCards;
  }
  return [...baseCards, ...baseCards.map((card) => ({ ...card }))].sort(
    (id, item) => 0.5 - Math.random()
  );
};

export const getCurrentScoreByType = (type: DeckSizeType): number => {
  const storedData = localStorage.getItem("bestTries");
  if (!storedData) {
    return 0;
  }
  const score = JSON.parse(storedData)[type];
  if (!score) {
    return 0;
  }
  return score;
};

export const saveScoreIfBest = (tries: number, type: DeckSizeType): void => {
  // check if there are any saved scores
  const storeData = localStorage.getItem("bestTries");
  // if not, save the current tries as score for this type
  if (!storeData) {
    const score = {
      [type]: tries,
    };
    localStorage.setItem("bestTries", JSON.stringify(score));
    return;
  }
  // check if there is saved score for the current type
  const scoresObject = JSON.parse(storeData);
  const score = scoresObject[type];
  // if there is a score for this type, check if the current tries are better than the saved one
  // if they are better, save the new score (also copy  the scores of other types!!!!)
  if (!score || (score && score > tries)) {
    localStorage.setItem(
      "bestTries",
      JSON.stringify({
        ...scoresObject,
        [type]: tries,
      })
    );
  }

  // if not, do nothing (not a new high score)
};
