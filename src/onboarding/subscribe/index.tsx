import { useState } from "react";
import { IMAGE_PATH } from "@/common/constant/imagePath.constant";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { PiSparkleFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";

const SubscribeContainer = () => {
  const navigate = useNavigate();
  const [tabActive, setTabActive] = useState(0);
  return (
    <main className="w-[100vw] h-[100vh] relative">
      <div
        className="absolute inset-0 w-[100vw] h-[100vh]"
        style={{
          backgroundImage: "url(" + IMAGE_PATH.subscribe.image_1 + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow:
            "0px -553px 95.7px -125px #000000BA inset, 0px 140px 49.4px 0px #00000047 inset",
        }}
      ></div>
      <div className="flex items-center flex-col gap-4 relative h-[24%] pt-10 px-6">
        <div className="flex items-stretch justify-between w-full">
          <IoCloseCircle
            size={30}
            onClick={() => navigate(-1)}
            className="cursor-pointer"
          />
          <h3
            className="text-[36px] pt-2"
            style={{ fontFamily: "Instrument Serif, serif", fontWeight: 400 }}
          >
            Hayati Pro
          </h3>
          <div className="w-[30px]" />
        </div>
        <p
          className="text-[16px] w-[200px]"
          style={{ fontFamily: "Instrument Sans, sans-serif", fontWeight: 500 }}
        >
          Unlock a deeper connection with your girls
        </p>
      </div>
      <div className="w-[100vw] mt-8 h-[70%] relative flex flex-col items-center justify-evenly">
        <div className="w-full px-6 flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            <PiSparkleFill size={20} color="#FF9BE3" />
            <span
              style={{
                fontFamily: "Instrument Sans, sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "25.6px",
                letterSpacing: "-0.1px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Unlimited messages and images
            </span>
          </div>
          <div className="flex items-center gap-4">
            <PiSparkleFill size={20} color="#FF9BE3" />
            <span
              style={{
                fontFamily: "Instrument Sans, sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "25.6px",
                letterSpacing: "-0.1px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              The description of 2nd feature
            </span>
          </div>
          <div className="flex items-center gap-4">
            <PiSparkleFill size={20} color="#FF9BE3" />
            <span
              style={{
                fontFamily: "Instrument Sans, sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "25.6px",
                letterSpacing: "-0.1px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              The description of 3rd feature
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full px-5">
          <div
            className={`w-[47%] min-h-[186px] bg-[${
              tabActive === 0 ? "#FFBBFF" : "transparent"
            }] rounded-[8px] p-4 text-start text-${
              tabActive === 0 ? "black" : "white"
            } flex flex-col justify-between border cursor-pointer`}
            style={{
              borderColor: tabActive === 0 ? "#FFBBFF" : "white",
              backgroundColor: tabActive === 0 ? "#FFBBFF" : "transparent",
            }}
            onClick={() => setTabActive(0)}
          >
            <div className="flex gap-2 flex-col">
              <span>Monthly</span>
              <span
                className=" text-[24px]"
                style={{
                  fontWeight: 500,
                }}
              >
                $10.00
              </span>
            </div>
            <span>Billed monthly</span>
          </div>
          <div
            className={`w-[47%] min-h-[186px] bg-[${
              tabActive === 1 ? "#FFBBFF" : "transparent"
            }] rounded-[8px] p-4 text-start text-${
              tabActive === 1 ? "black" : "white"
            } flex flex-col justify-between border cursor-pointer`}
            style={{
              borderColor: tabActive === 1 ? "#FFBBFF" : "white",
              backgroundColor: tabActive === 1 ? "#FFBBFF" : "transparent",
            }}
            onClick={() => setTabActive(1)}
          >
            <div className="flex gap-2 flex-col">
              <span>Yearly</span>
              <span
                className=" text-[24px]"
                style={{
                  fontWeight: 500,
                }}
              >
                $8.00 <span className="text-[16px]">per week</span>
              </span>
            </div>
            <span className="text-[16px]">Free 1 week trial</span>
          </div>
        </div>
        <div className="w-full px-8">
          <Button
            variant={"secondary"}
            className="w-full rounded-[24px] hover:bg-white"
            style={{
              fontWeight: 700,
              lineHeight: "24px",
              minHeight: "42px",
              fontSize: "16px",
            }}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </main>
  );
};

export default SubscribeContainer;
