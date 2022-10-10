import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { CardType, getCardsForType } from "../Data/GameData";
import { DeckSizeType } from "../../Routes/Game.types";
import Cards from "../UI/Cards.component";

type ProviderProps = {
  children: React.ReactNode;
};

export type GameContextType = {
  cards: CardType[];
  startGame: () => void;
  flippedIndexes: number[];
  clickCard: (i: number) => void;
  deckSize: DeckSizeType;
  gridClass: string;
  setDeckSize: Dispatch<SetStateAction<DeckSizeType>>;
};

const GameContext = createContext({} as GameContextType);

export const GameProvider = ({ children }: ProviderProps) => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [deckSize, setDeckSize] = useState<DeckSizeType>(DeckSizeType.EASY);
  const [gridClass, setGridClass] = useState<string>("");
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const startGame = () => {
    setFlippedIndexes([]);
    setTimeout(() => {
      setCards(getCardsForType(deckSize));
      setGridClass(deckSize);
    }, 500);
  };

  const clickCard = (index: number) => {
    const currentId = cards[index].id;

    if (!clickedIndex) {
      setClickedIndex(index);
    } else {
      const alreadyClickedId = cards[clickedIndex].id;
      if (currentId === alreadyClickedId) {
        console.log("dosomething");
      }
    }
    setFlippedIndexes([...flippedIndexes, index]);
    console.log(index);
    console.log(flippedIndexes);
    if (flippedIndexes.length > 1) {
      setFlippedIndexes([]);
    }
  };

  const value = {
    cards,
    startGame,
    flippedIndexes,
    clickCard,
    deckSize,
    setDeckSize,
    gridClass,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
  return useContext(GameContext);
};
