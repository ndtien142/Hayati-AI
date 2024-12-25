export interface ICardSwiper {
  id: number;
  url: string;
  name: string;
  age: number;
  describe: string[];
}

export interface ISwiperProps {
  id: number;
  url: string;
  setCards: React.Dispatch<React.SetStateAction<ICardSwiper[]>>;
  cards: ICardSwiper[];
}
