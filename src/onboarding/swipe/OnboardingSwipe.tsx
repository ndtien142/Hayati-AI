import SwiperCards from "@/common/components/swiper/SwiperCards";
import { Button } from "@/components/ui/button";
import { PiHandWavingLight } from "react-icons/pi";

const OnboardingSwipe = () => {
  return (
    <div className="flex flex-col gap-4 mt-3">
      <span className="text-xl block text-[#ECECEC] font-editorial_regular">
        Swipe to choose your <span className="block">first girlfriend</span>
      </span>
      <SwiperCards />
      <div className="px-7">
        <Button
          variant={"secondary"}
          className="w-full rounded-3xl font-bold mb-5 mt-1"
        >
          Start a conversation
          <PiHandWavingLight size={"30px"} fontWeight={"800"} />
        </Button>
      </div>
    </div>
  );
};

export default OnboardingSwipe;
