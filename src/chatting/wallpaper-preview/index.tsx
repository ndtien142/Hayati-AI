import { RootState } from "@/common/redux/store";
import { useSelector } from "react-redux";
import { EXAMPLES_MESSAGE } from "./wallpaperPreview.constant";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const WallpaperPreviewContainer = () => {
  const wallpaperUrl = useSelector(
    (state: RootState) => state.chatting.wallpaperUrl
  );
  const navigate = useNavigate();

  return (
    <main className="w-[100vw] h-[100vh] relative">
      <div
        className="absolute inset-0 w-[100vw] h-[100vh]"
        style={{
          backgroundImage: `url(${wallpaperUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3.5px)",
          backdropFilter: "blur(6.800000190734863px)",
        }}
      ></div>
      <div className="text-center relative w-full bg-[rgba(255,255,255,0.9)] h-[10%] flex items-end justify-center pb-4">
        <span className="text-black text-base">Preview</span>
      </div>
      <div className="w-[100vw] h-[70%] relative overflow-y-auto p-4 no-scrollbar">
        {EXAMPLES_MESSAGE.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.isSender ? "justify-end" : "justify-start"
            } mb-2`}
          >
            {!message.isSender && (
              <div className="flex items-end ">
                <img
                  src={message.avatarUrl}
                  alt="avatar"
                  className="w-8 h-8 rounded-full object-cover mr-2"
                />
              </div>
            )}
            <div
              className={`p-0 max-w-[300px] ${
                message.isSender
                  ? "bg-white text-black"
                  : "bg-[#D1C5FF] text-black"
              }`}
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                borderBottomLeftRadius: message.isSender ? "20px" : "0px",
                borderBottomRightRadius: message.isSender ? "0px" : "20px",
              }}
            >
              <p className="font-[Inter] text-left px-4 py-3">
                {message.message}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[100vw] h-[10%] px-4 flex items-center justify-center relative gap-4">
        <Button
          onClick={() => navigate(-1)}
          style={{
            width: "127px",
            height: "43px",
            padding: "10px 20px",
            borderRadius: "24px",
            backgroundColor: "#00000061",
            color: "#fff",
            fontWeight: "600",
            fontSize: "16px",
          }}
        >
          Cancel
        </Button>
        <Button
          style={{
            width: "127px",
            height: "43px",
            padding: "10px 20px",
            borderRadius: "24px",
            backgroundColor: "#00000061",
            color: "#fff",
            fontWeight: "600",
            fontSize: "16px",
          }}
        >
          Set
        </Button>
      </div>
    </main>
  );
};

export default WallpaperPreviewContainer;
