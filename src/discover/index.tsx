import BottomNavigation from "@/common/components/BottomNavigation";
import SwiperCards from "./components/SwiperCards";

const DiscoverContainer = () => {
  return (
    <main className="w-full h-[100vh]">
      <div className="flex flex-col gap-4 mt-6">
        <span
          className="text-2xl block text-[#ECECEC] font-editorial_regular"
          style={{
            fontSize: "28px",
          }}
        >
          Swipe
        </span>
        <SwiperCards />
      </div>
      <BottomNavigation activeTab="Discover" />
    </main>
  );
};

export default DiscoverContainer;
