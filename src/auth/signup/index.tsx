// Component
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// React Icon
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { PiGoogleLogoBold } from "react-icons/pi";
// Router
import { PATH_AUTH } from "@/common/routes/path";
import { useNavigate } from "react-router-dom";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const SignupContainer = () => {
  const navigate = useNavigate();
  const handleToLogin = () => {
    navigate(PATH_AUTH.login);
  };
  return (
    <main className="px-4 pt-12 w-full overflow-hidden">
      <div className="flex items-center gap-2 mb-4 w-[325px] overflow-hidden relative">
        <Swiper
          spaceBetween={8}
          slidesPerView={3}
          autoplay={{ delay: 100, stopOnLastSlide: false }}
          modules={[Autoplay]}
          centeredSlides={true}
          className="signupSwiper"
        >
          <SwiperSlide>
            <div className="w-[90px] h-[100px]">
              <img
                className="w-full h-full object-cover"
                alt=""
                src="/images/signup/signup-1.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[90px] h-[100px]">
              <img
                className="w-full h-full object-cover"
                alt=""
                src="/images/signup/signup-2.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[90px] h-[100px]">
              <img
                className="w-full h-full object-cover"
                alt=""
                src="/images/signup/signup-3.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[90px] h-[100px]">
              <img
                className="w-full h-full object-cover"
                alt=""
                src="/images/signup/signup-4.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[90px] h-[100px]">
              <img
                className="w-full h-full object-cover"
                alt=""
                src="/images/signup/signup-5.png"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full mb-5">
        <p className="text-[16px]">
          Hey big guy, do you want to register?
          <span className="block">So you can remember me</span>
        </p>
      </div>
      <form className="mb-2">
        <div className="grid w-full items-center gap-3">
          <div className="flex flex-col space-y-1.5">
            <Input
              id="name"
              name="name"
              placeholder="Name"
              type="name"
              className="border-none bg-[#333333] rounded-none text-white placeholder:text-white text-[14px]"
            />
          </div>
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
              Sign Up With Email
            </Button>
          </div>
        </div>
      </form>
      <div className="w-full mb-2">
        <p>or</p>
      </div>
      <div className="w-full flex flex-col gap-3 items-center mb-1">
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
      <div className="w-full">
        <p className="text-nowrap text-[16px]">
          Already have an account?{" "}
          <Button
            onClick={handleToLogin}
            variant={"link"}
            className="text-primary font-semibold inline-block p-0 text-[16px]"
          >
            Login
          </Button>
        </p>
      </div>
      <div className="w-full mb-4">
        <p className="w-max-[200px] text-[12px] text-[#888888]">
          By continuing, you agree to our{" "}
          <span className="block">Privacy Policy and Terms of Use</span>
        </p>
      </div>
    </main>
  );
};

export default SignupContainer;
