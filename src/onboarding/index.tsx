import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const OnBoardingContainer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-6 items-center mt-7 w-full">
        <div className="w-[131px] h-[135px] rounded-sm overflow-hidden ml-[-8%]">
          <img
            className="w-full h-full object-cover"
            alt="image"
            src="/images/onboarding/onboarding-3.png"
          />
        </div>
        <div className="flex flex-row items-center justify-around w-full">
          <div className="w-[131px] h-[135px] rounded-sm overflow-hidden mb-[-15%]">
            <img
              className="w-full h-full object-cover"
              alt="image"
              src="/images/onboarding/onboarding-1.png"
            />
          </div>
          <div className="w-[131px] h-[135px] rounded-sm overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              alt="image"
              src="/images/signup/signup-1.png"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <span className="block italic font-normal text-[20px]">
          Your Dream Girlfriend
          <span className="block font-normal not-italic text-[20px]">
            Always Here, Always Yours
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-6 items-center mt-6 w-full">
        <div className="flex flex-row items-center justify-around w-full">
          <div className="w-[131px] h-[135px] rounded-sm overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="image"
              src="/images/onboarding/onboarding-2.png"
            />
          </div>
          <div className="w-[131px] h-[135px] rounded-sm overflow-hidden mb-[-40%]">
            <img
              className="w-full h-full object-cover"
              alt="image"
              src="/images/signup/signup-2.png"
            />
          </div>
        </div>
        <div className="mt-16 mb-12 w-full pt-3 px-8">
          <Sheet key={"bottom"}>
            <SheetTrigger asChild>
              <Button
                variant={"secondary"}
                className="w-full rounded-lg font-bold"
              >
                Get Started
              </Button>
            </SheetTrigger>
            <SheetContent
              side={"bottom"}
              className="bg-white rounded-t-[28px] [&>button]:hidden"
            >
              <SheetHeader>
                <SheetTitle className="text-black text-left">
                  Select your language
                </SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="border-b border-[#DFDFDF] pb-4">
                  <Button
                    variant={"ghost"}
                    className="text-black align-center justify-start pl-0"
                  >
                    العربية
                  </Button>
                </div>
                <div className="border-b border-[#DFDFDF] pb-4">
                  <Button
                    variant={"ghost"}
                    className="text-black align-center justify-start pl-0"
                  >
                    English
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingContainer;
