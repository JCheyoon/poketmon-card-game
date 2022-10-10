import { DeckSizeType } from "../../Routes/Game.types";

export interface CardType {
  id: number;
  item: string;
}

const GameData: CardType[] = [
  { id: 1, item: "/assets/card-poke1.png" },
  { id: 2, item: "/assets/card-poke2.png" },
  { id: 3, item: "/assets/card-poke3.png" },
  { id: 4, item: "/assets/card-poke4.png" },
  { id: 5, item: "/assets/card-poke5.png" },
  { id: 6, item: "/assets/card-poke6.png" },
  { id: 7, item: "/assets/card-poke7.png" },
  { id: 8, item: "/assets/card-poke8.png" },
  { id: 9, item: "/assets/card-poke9.png" },
  { id: 10, item: "/assets/card-poke10.png" },
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
  return [...baseCards, ...baseCards].sort((id, item) => 0.5 - Math.random());
};

//usememo로 렌더링 유지 재시작시 섞기
