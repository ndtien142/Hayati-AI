import BottomNavigation from "@/common/components/BottomNavigation";
import { IMAGE_PATH } from "@/common/constant/imagePath.constant";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSparkle, PiSparkleFill } from "react-icons/pi";
import { PiCoins } from "react-icons/pi";
import GalleryItems from "./components/GalleryItems";
import { GALLERY_ITEM } from "./profileHome.constant";

const ProfileHomeContainer = () => {
  return (
    <main className="w-[100vw] h-[100vh]">
      <div className="flex items-center justify-between mt-5 mb-6 px-5">
        <div className="w-[30px]" />
        <h3
          className="text-2xl"
          style={{ fontFamily: "Instrument Sans, sans-serif", fontWeight: 500 }}
        >
          Profile
        </h3>
        <IoSettingsOutline size={30} />
      </div>
      <div
        className="px-4 flex items-center justify-between mb-5"
        style={{ fontFamily: "Instrument Sans, sans-serif", fontWeight: 500 }}
      >
        <div className="flex flex-col items-start gap-3">
          <span className="text-2xl font-bold">Chris Wood</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <PiSparkle size={20} color="#FF9BE3" />
              <span>3-day streak</span>
            </div>
            <div className="flex items-center gap-1">
              <PiCoins size={20} color="#FF9BE3" />
              <span>150 credits</span>
            </div>
          </div>
        </div>
        <div className="w-[72px] h-[72px] bg-gray-300 rounded-full overflow-hidden">
          <img
            src={IMAGE_PATH.avatars.you}
            className="object-cover w-[72px] h-[72px]"
            alt="image"
          />
        </div>
      </div>

      <Tabs defaultValue="subscription" className="w-full">
        <TabsList className="flex items-center justify-start pl-4 gap-3 bg-transparent">
          <TabsTrigger
            className="data-[state=active]:bg-white data-[state=active]:font-bold data-[state=active]:text-black data-[state=active]:border-white data-[state=inactive]:bg-[#241E33] data-[state=inactive]:font-normal data-[state=inactive]:text-white data-[state=inactive]:border-[#453F54] border"
            value="subscription"
            style={{
              height: "40px",
              padding: "8px 16px",
              gap: "8px",
              borderRadius: "20px",
            }}
          >
            Hayati Pro
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-white data-[state=active]:font-bold data-[state=active]:text-black data-[state=active]:border-white data-[state=inactive]:bg-[#241E33] data-[state=inactive]:font-normal data-[state=inactive]:text-white data-[state=inactive]:border-[#453F54] border"
            value="trophies"
            style={{
              height: "40px",
              padding: "8px 16px",
              gap: "8px",
              borderRadius: "20px",
            }}
          >
            Trophies
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-white data-[state=active]:font-bold data-[state=active]:text-black data-[state=active]:border-white data-[state=inactive]:bg-[#241E33] data-[state=inactive]:font-normal data-[state=inactive]:text-white data-[state=inactive]:border-[#453F54] border"
            value="gallery"
            style={{
              height: "40px",
              padding: "8px 16px",
              gap: "8px",
              borderRadius: "20px",
            }}
          >
            Gallery
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="subscription"
          className="overflow-x-hidden overflow-y-auto"
        >
          <div className="mt-5 flex items-center justify-center gap-3 flex-nowrap overflow-x-hidden w-[100vw]">
            {Object.values(IMAGE_PATH.subscribe1).map((image, index) => (
              <div className="min-w-[88px] min-h-[89px]">
                <img
                  key={index}
                  src={image}
                  alt={`subscription-${index + 1}`}
                  className="w-[88px] h-[89px] object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 flex-nowrap overflow-x-hidden w-[100vw] h-[90px] mt-4">
            {Object.values(IMAGE_PATH.subscribe2).map((image, index) => (
              <div className="min-w-[88px] min-h-[89px]">
                <img
                  key={index}
                  src={image}
                  alt={`subscription-${index + 1}`}
                  className="w-[88px] h-[89px] object-cover"
                />
              </div>
            ))}
          </div>
          <div className="w-full px-4 mt-6 flex flex-col items-start gap-4">
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
                Unlimited messages
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
                Unlimited images
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
                Access to all assets {`(>>>)`}
              </span>
            </div>
          </div>
          <div className="w-full px-8 mt-10 mb-36">
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
              Start with 2 days free
            </Button>
            <span
              className="mt-4 block"
              style={{
                fontFamily: "Instrument Sans, sans-serif",
                fontWeight: 500,
                color: "#A1A1A1",
              }}
            >
              $10 per month after free trial ends
            </span>
          </div>
        </TabsContent>
        <TabsContent value="trophies">{}</TabsContent>
        <TabsContent value="gallery">
          <div className="flex flex-col gap-4 px-4 mt-5">
            {GALLERY_ITEM.map((item, index) => {
              return (
                <GalleryItems
                  completedItem={item.completedItem}
                  id={item.id}
                  image={item.image}
                  label={item.label}
                  navigate={item.navigate}
                  totalItems={item.totalItems}
                  key={index}
                />
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
      <BottomNavigation activeTab="Profile" />
    </main>
  );
};

export default ProfileHomeContainer;
