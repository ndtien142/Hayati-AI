import { Button } from "@/components/ui/button";
import { ITrophiesProps } from "../profileHome.interface";

const Trophies = ({
  completedItem,
  description,
  image,
  label,
  totalItems,
  isClaimed,
}: ITrophiesProps) => {
  return (
    <div className="w-full flex gap-5 border-b border-[#FFFFFF4F] pb-4">
      <div className="w-[102px] rounded-[8px]">
        <img
          src={image}
          alt="gallery"
          className="w-full h-full object-cover rounded-[8px]"
        />
      </div>
      <div className="flex flex-col gap-3 items-center justify-start w-[calc(100%-88px)] pr-4">
        <div className="flex w-full flex-col items-start gap-0">
          <h4 className="text-xl font-bold">{label}</h4>{" "}
          <p className="text-[#B9B9B9] text-sm text-left">{description}</p>
        </div>
        <div className="w-full h-4 bg-white rounded-[1000px] ">
          {!isClaimed && completedItem === totalItems ? (
            <Button className="w-full rounded-[8px] bg-[#FFE501] text-base font-bold min-h-[42px]">
              Claim Reward
            </Button>
          ) : (
            <div
              className={`h-4 rounded-[1000px] bg-[#FF9BE3] z-50`}
              style={{ width: `${(completedItem / totalItems) * 100}%` }}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trophies;
