import { cardData as initialCardData } from "@/_mock/onboarding.mock";
import React, { useState, useRef, useMemo } from "react";
import TinderCard from "react-tinder-card";
import { Badge } from "@/components/ui/badge";
import ProgressBar from "./ProgressBar";

const SwiperCards = () => {
  const [cardData, setCardData] = useState(initialCardData);
  const [lastDirection, setLastDirection] = useState<string | null>(null);

  const childRefs = useMemo(
    () =>
      Array(cardData.length)
        .fill(0)
        .map(() => React.createRef()),
    [cardData]
  );

  const swiped = (direction: string, nameToDelete: string, index: number) => {
    const reversedIndex = cardData.length - 1 - index; // Đổi index
    setLastDirection(direction);
    setCardData((prev) => prev.filter((_, i) => i !== reversedIndex));
  };

  const outOfFrame = (id: number, idx: number) => {
    console.log(`Card (${id}) at index ${idx} left the screen!`);
  };

  const swipe = async (dir: string) => {
    if (cardData.length > 0) {
      const currentIndex = cardData.length - 1;
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-[93vw] h-[75vh]">
        {[...cardData].reverse().map((card, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="absolute top-0 left-0"
            key={index}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, card.name, index)}
            onCardLeftScreen={() => outOfFrame(card.id, index)}
          >
            <div
              style={{
                backgroundImage: "url(" + card.url + ")",
                boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.3)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="relative flex items-end bg-[#FFF] w-[93vw] h-[75vh] rounded-[20px]"
            >
              <div className="px-4 pb-4 flex flex-col items-start w-full">
                <h3 className="text-[32px] leading-10 font-[800] mb-3">
                  {card.name} - {card.age}
                </h3>
                <div className="flex flex-row gap-2 mb-8">
                  {card.describe.map((desc, idx) => (
                    <Badge
                      key={`${card.id}-${idx}`}
                      color="#CCC"
                      style={{
                        textWrap: "nowrap",
                        backgroundColor:
                          idx === 0
                            ? "#3A7DF1"
                            : idx === 1
                            ? "#F583F5"
                            : "#FFE501",
                      }}
                    >
                      {desc}
                    </Badge>
                  ))}
                </div>
                <div className="mb-4 w-full">
                  <ProgressBar activeIndex={index} totalTabs={5} />
                </div>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default SwiperCards;
