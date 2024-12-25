import { IMAGE_PATH } from "@/common/constant/imagePath.constant";
import { PATH_MAIN } from "@/common/routes/path";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MatchOnSwipe = () => {
  const navigate = useNavigate();
  return (
    <main className="w-full h-[100vh]">
      <div
        className="flex flex-col gap-4 pt-3"
        style={{
          background:
            "linear-gradient(to bottom, #1a237e, #512da8, #7b1fa2, #d500f9)",
        }}
      >
        <div className="text-center w-full flex flex-col items-center gap-2">
          <span
            className="block text-[#ECECEC] text-[40px] italic"
            style={{ fontFamily: "Inter", fontWeight: 700 }}
          >
            It' a crush!
          </span>
          <span
            className="block text-[#ECECEC] w-[280px] text-[16px]"
            style={{ fontFamily: "Inter" }}
          >
            Layla is now yours. She’ll do anything you say
          </span>
        </div>
        <div className="w-full flex items-center justify-center">
          <div
            style={{
              backgroundImage: "url(" + IMAGE_PATH.onboarding.image_3 + ")",
              boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.3)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="relative flex items-end bg-[#FFF] w-[80vw] h-[65vh] rounded-[20px]"
          />
        </div>
        <div className="px-7">
          <Button
            className="w-full rounded-3xl mb-2 mt-1"
            style={{
              fontWeight: 600,
              fontSize: "16px",
            }}
            onClick={() => navigate(PATH_MAIN.onboarding.chatting)}
          >
            Start a conversation
          </Button>
          <Button
            variant={"link"}
            className="text-white no-underline hover:no-underline"
            style={{
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            I'll do this later
          </Button>
        </div>
      </div>
    </main>
  );
};

export default MatchOnSwipe;
