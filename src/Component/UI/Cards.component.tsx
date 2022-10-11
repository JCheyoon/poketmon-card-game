import { BackCard, CardsGrid, CardStyle, FrontCard } from "./Cards.style";
import { useGameContext } from "../Context/gameContext";

const Cards = () => {
  const { cards, gridClass, clickCard, choiceOne, choiceTwo, disable } =
    useGameContext();

  return (
    <>
      <CardsGrid className={gridClass}>
        {cards.map((card, i) => (
          <CardStyle
            key={i}
            className={
              card.matched || card === choiceTwo || card === choiceOne
                ? "flipped"
                : ""
            }
          >
            <FrontCard onClick={disable ? undefined : () => clickCard(card)}>
              <img src="/assets/card-back.png" alt="" />
            </FrontCard>
            <BackCard>
              <img src={card.pic} alt="" />
            </BackCard>
          </CardStyle>
        ))}
      </CardsGrid>
    </>
  );
};
export default Cards;
