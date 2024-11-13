// Component
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// React Icon
import { BiArrowBack } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { PiGoogleLogoBold } from "react-icons/pi";
// Router
import { PATH_AUTH } from "@/common/routes/path";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const navigate = useNavigate();
  const handleForgotPassword = () => {
    // Navigate to forgot password page
    navigate(PATH_AUTH.forgotPassword);
  };
  const handleGoBack = () => {
    console.log("Go back to");
    navigate(PATH_AUTH.singup);
  };
  return (
    <main className="px-4 pt-10 w-full">
      <div className="w-full flex items-center justify-between mb-12 min-w-[325px]">
        <BiArrowBack
          size={"25px"}
          onClick={handleGoBack}
          className="cursor-pointer"
        />
        <h1 className="text-2xl font-semibold capitalize">Sign In</h1>
        <div className="w-6 h-6"></div>
      </div>
      <form className="mb-4">
        <div className="grid w-full items-center gap-3">
          <div className="flex flex-col space-y-1.5">
            <Input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              className="border-none bg-[#333333] rounded-none text-white placeholder:text-white text-[14px]"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Input
              name="password"
              id="password"
              placeholder="Password"
              type="password"
              className="border-none bg-[#333333] rounded-none text-white placeholder:text-white text-[14px]"
            />
          </div>
          <div className="flex flex-col space-y-1.5 mt-[10px]">
            <Button className="w-full rounded-[68px] text-white capitalize text-[14px] font-semibold bg-[#A53385]">
              Sign In
            </Button>
          </div>
        </div>
      </form>
      <div className="w-full mb-4">
        <p className="text-nowrap text-[16px]">
          Forgot your password?{" "}
          <Button
            onClick={handleForgotPassword}
            variant={"link"}
            className="text-primary font-semibold inline-block p-0 text-[16px]"
          >
            Reset it here
          </Button>
        </p>
        <p>or</p>
      </div>
      <div className="w-full flex flex-col gap-3 items-center">
        <Button
          variant={"outline"}
          className="w-full rounded-[12px] border-[#666666] text-[14px]"
        >
          <FaTelegramPlane size={"20px"} color="#62BDFF" />
          Log In with Telegram
        </Button>
        <Button
          variant={"outline"}
          className="w-full rounded-[12px] border-[#666666] text-[14px]"
        >
          <FaWhatsapp size={"20px"} color="#4FFF56" />
          Log In with WhatsApp
        </Button>
        <Button
          variant={"outline"}
          className="w-full rounded-[12px] border-[#666666] text-[14px]"
        >
          <PiGoogleLogoBold size={"20px"} color="#FFF" />
          Log In with Google
        </Button>
      </div>
    </main>
  );
};

export default LoginContainer;
