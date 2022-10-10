import { BackCard, CardsGrid, CardStyle, FrontCard } from "./Cards.style";
import { useGameContext } from "../Context/gameContext";

const Cards = () => {
  const { cards, gridClass, clickCard, flippedIndexes } = useGameContext();

  return (
    <>
      <CardsGrid className={gridClass}>
        {cards.map((item, i) => (
          <CardStyle
            key={i}
            className={flippedIndexes.includes(i) ? "flipped" : ""}
          >
            <FrontCard onClick={() => clickCard(i)}>
              <img src="/assets/card-back.png" alt="" />
            </FrontCard>
            <BackCard>
              <img src={item.item} alt="" />
            </BackCard>
          </CardStyle>
        ))}
      </CardsGrid>
    </>
  );
};
export default Cards;
