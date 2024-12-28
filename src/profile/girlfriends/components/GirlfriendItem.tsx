import { PiCoins } from "react-icons/pi";
import { IGirlfriendItemProps } from "../girlfriend.interface";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const GirlfriendItem = ({
  image,
  isClaim,
  name,
  value,
}: IGirlfriendItemProps) => {
  return (
    <>
      {!isClaim ? (
        <Sheet>
          <SheetTrigger asChild>
            <div
              className="w-full flex gap-5 rounded-[8px] bg-[#241E33]"
              onClick={() => console.log("claim")}
            >
              <div className="w-[88px] h-[89px] rounded-[8px]">
                <img
                  src={image}
                  alt="gallery"
                  className="w-full h-full object-cover rounded-[8px]"
                />
              </div>
              <div className="flex gap-3 items-center justify-between w-[calc(100%-88px)] pr-4">
                <div className="flex w-full items-center justify-between">
                  <h4 className="text-xl font-bold">{name}</h4>
                  <span className="flex gap-2 items-center text-base text-[#FF9BE3]">
                    <PiCoins size={20} color="#FF9BE3" />
                    <span className="block">{value}</span>
                  </span>
                </div>
              </div>
            </div>
          </SheetTrigger>
          <SheetContent
            side={"bottom"}
            className="bg-[#241E33] border-[#241E33] [&>button]:hidden"
          >
            <div className="flex flex-col w-full px-6 items-center gap-6 mb-2">
              <span className="flex gap-2 items-center text-base text-[#FF9BE3] w-full justify-end">
                <PiCoins size={20} color="#FF9BE3" />
                <span className="block font-bold">450</span>
              </span>
              <div className="w-[150px] h-[175px] overflow-hidden rounded-[8px]">
                <img src={image} className="w-full h-full object-cover" />
              </div>
              <span className="text-xl color-white font-bold">
                Make {name} yours
              </span>
              <SheetClose className="w-full">
                <Button className="font-bold focus:outline-none hover:bg-[#FF9BE3AA] text-base bg-[#FF9BE3] w-full rounded-[22px]">
                  Unlock for <PiCoins size={20} color="#000" />
                  <span className="block font-bold">450</span>{" "}
                </Button>
              </SheetClose>
              <SheetClose className="w-full">
                <Button
                  variant={"link"}
                  className="text-white outline-none border-none font-bold text-base hover:no-underline"
                >
                  No Thanks
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <div
          className="w-full flex gap-5 rounded-[8px] bg-[#241E33]"
          onClick={() => console.log("claim")}
        >
          <div className="w-[88px] h-[89px] rounded-[8px]">
            <img
              src={image}
              alt="gallery"
              className="w-full h-full object-cover rounded-[8px]"
            />
          </div>
          <div className="flex gap-3 items-center justify-between w-[calc(100%-88px)] pr-4">
            <div className="flex w-full items-center justify-between">
              <h4 className="text-xl font-bold">{name}</h4>
              <span className="flex gap-2 items-center text-base text-[#7B496D]">
                Already yours
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GirlfriendItem;
