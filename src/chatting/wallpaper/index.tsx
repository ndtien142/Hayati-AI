import { IMAGE_WALLPAPER_MOCK } from "@/_mock/chatting.mock";
import BottomNavigation from "@/common/components/BottomNavigation";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setWallpaperUrl } from "../chatting.slice";
import { PATH_MAIN } from "@/common/routes/path";

const WallpaperContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
          Chat wallpaper
        </h3>
        <div className="w-[30px]" />
      </div>
      <div className="w-full h-[calc(100vh-200px)] overflow-y-auto no-scrollbar mt-4">
        <div className="w-full items-center justify-center flex flex-wrap gap-4 m-auto">
          {IMAGE_WALLPAPER_MOCK.data.map((item) => {
            return (
              <img
                className="w-[45%]"
                src={item.url}
                key={item.id}
                alt="image"
                onClick={() => {
                  dispatch(setWallpaperUrl(item.url));
                  navigate(PATH_MAIN.chatting.wallpaperPreview);
                }}
              />
            );
          })}
        </div>
      </div>
      <BottomNavigation activeTab="Chat" />
    </main>
  );
};

export default WallpaperContainer;
