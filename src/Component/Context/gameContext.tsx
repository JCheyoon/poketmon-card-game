import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  CardType,
  getCardsForType,
  getCurrentScoreByType,
  handleScore,
} from "../Data/GameData";
import { DeckSizeType } from "../../Routes/Game.types";
import { cardAudio, startBtnAudio } from "../Data/Audio";
import { useContextModal } from "./modalContext";

type ProviderProps = {
  children: React.ReactNode;
};

export type GameContextType = {
  cards: CardType[];
  startGame: () => void;
  clickCard: (card: CardType) => void;
  deckSize: DeckSizeType;
  gridClass: string;
  setDeckSize: Dispatch<SetStateAction<DeckSizeType>>;
  choiceOne: CardType | null;
  choiceTwo: CardType | null;
  disable: boolean;
  tries: number;
  bestScore: number;
};

const FLIP_TIMEOUT = 500;

const GameContext = createContext({} as GameContextType);

export const GameProvider = ({ children }: ProviderProps) => {
  const { showModal } = useContextModal();
  const [cards, setCards] = useState<CardType[]>([]);
  const [deckSize, setDeckSize] = useState<DeckSizeType>(DeckSizeType.EASY);
  const [gridClass, setGridClass] = useState<string>("");
  const [choiceOne, setChoiceOne] = useState<CardType | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<CardType | null>(null);
  const [disable, setDisable] = useState<boolean>(false);
  const [tries, setTries] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      const newTries = tries + 1;
      setTries(newTries);

      if (choiceOne.id === choiceTwo.id) {
        const newCards = cards.map((card) => {
          if (card.id === choiceOne.id) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        });
        setCards(newCards);
        if (newCards.every((card) => card.matched)) {
          const { isHighScore } = handleScore(newTries, deckSize);
          showModal({
            title: "Congrats!",
            message: `You found all matches${
              isHighScore ? " and you have a new high score" : ""
            }!`,
            onHideFn: () => startGame,
          });
        }
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, FLIP_TIMEOUT);
      }
    }
  }, [choiceOne, choiceTwo]);

  const startGame = () => {
    startBtnAudio.play();
    setBestScore(getCurrentScoreByType(deckSize));
    setTries(0);
    resetTurn();
    setCards(cards.map((card) => ({ ...card, matched: false })));
    setTimeout(() => {
      setCards(getCardsForType(deckSize));
      setGridClass(deckSize);
    }, FLIP_TIMEOUT);
  };

  const clickCard = (card: CardType) => {
    cardAudio.play();
    setDisable(true);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    setTimeout(() => {
      setDisable(false);
    }, FLIP_TIMEOUT);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  const value = {
    cards,
    startGame,
    clickCard,
    deckSize,
    setDeckSize,
    gridClass,
    choiceOne,
    choiceTwo,
    disable,
    tries,
    bestScore,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
  return useContext(GameContext);
};
