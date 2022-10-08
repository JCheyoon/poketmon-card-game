import { CardsGrid, CardStyle } from "./Cards.style";
import { MixCardList } from "../Data/GameData";

type CardsProps = {
  type?: string;
};

const Cards = () => {
  return (
    <>
      <CardsGrid>
        {MixCardList.map((item, i) => (
          <CardStyle key={i}>
            <img src={item.item} />
          </CardStyle>
        ))}
      </CardsGrid>
      ;
    </>
  );
};
export default Cards;
