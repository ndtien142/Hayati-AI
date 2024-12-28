import { GIRLFRIENDS_MOCK } from "@/_mock/profile.mock";
import BottomNavigation from "@/common/components/BottomNavigation";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import GirlfriendItem from "./components/GirlfriendItem";

const GirlfriendsContainer = () => {
  const navigate = useNavigate();
  return (
    <main className="w-[100vw] h-[100vh] relative">
      <div className="px-4 mt-12 flex items-center justify-between w-full">
        <IoArrowBack
          size={30}
          onClick={() => {
            navigate(-1);
          }}
        />
        <h3
          className="text-2xl text-[#ECECEC] font-editorial_regular"
          style={{
            fontSize: "28px",
          }}
        >
          Girlfriends
        </h3>
        <div className="w-[30px]" />
      </div>
      <div className="w-full h-[calc(100vh-200px)] overflow-y-auto no-scrollbar mt-5">
        <div className="px-4 w-full flex items-center gap-4 flex-col">
          {GIRLFRIENDS_MOCK.map((item, index) => {
            return (
              <GirlfriendItem
                id={item.id}
                key={index}
                image={item.image}
                isClaim={item.isClaim}
                name={item.name}
                value={item.value}
              />
            );
          })}
        </div>
      </div>
      <BottomNavigation activeTab="Profile" />
    </main>
  );
};

export default GirlfriendsContainer;
