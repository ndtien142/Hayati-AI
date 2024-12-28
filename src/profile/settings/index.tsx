import { HiMiniLanguage } from "react-icons/hi2";
import SettingItem from "./components/SettingItem";
import { PiMailbox } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { PiLockKey } from "react-icons/pi";
import { BiLogoWhatsapp } from "react-icons/bi";
import { PiTelegramLogo } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import BottomNavigation from "@/common/components/BottomNavigation";

const settings = [
  {
    icon: <HiMiniLanguage size={23} color="#FFFFFF" />,
    title: "Language",
    onClick: () => alert("Language settings"),
  },
  {
    icon: <PiMailbox size={23} color="#FFFFFF" />,
    title: "Subscription",
    onClick: () => alert("Subscription settings"),
  },
  {
    icon: <BiLike size={23} color="#FFFFFF" />,
    title: "Give a review",
    onClick: () => alert("Review settings"),
  },
  {
    icon: <PiLockKey size={23} color="#FFFFFF" />,
    title: "Privacy policy",
    onClick: () => alert("Privacy settings"),
  },
];

const contacts = [
  {
    icon: <BiLogoWhatsapp size={23} color="#FFFFFF" />,
    title: "WhatsApp Us",
    subtitle: "@yourwhatsapp",
  },
  {
    icon: <PiTelegramLogo size={23} color="#FFFFFF" />,
    title: "Telegram Us",
    subtitle: "@yourtelegram",
  },
  {
    icon: <TfiEmail size={23} color="#FFFFFF" />,
    title: "Email Us",
    subtitle: "@youremail",
  },
];

const ProfileSettingContainer = () => {
  return (
    <main className="w-[100vw] h-[100vh]">
      <h1 className="text-2xl text-left px-4 mt-5 text-[#FF9BE3] font-bold">
        Settings
      </h1>
      <div className="bg-[#100A20] text-white min-h-screen p-4 pb-24">
        <div className="mb-6">
          <h2
            className="text-left text-base font-semibold text-white"
            style={{
              fontFamily: "Instrument Sans, sans-serif",
              fontWeight: 600,
            }}
          >
            General
          </h2>
          {settings.map((item, index) => (
            <SettingItem key={index} {...item} />
          ))}
        </div>
        <div>
          <h2
            className="text-base text-left font-semibold text-white"
            style={{
              fontFamily: "Instrument Sans, sans-serif",
              fontWeight: 600,
            }}
          >
            Contact Hayati AI
          </h2>
          {contacts.map((item, index) => (
            <SettingItem key={index} {...item} />
          ))}
        </div>
      </div>
      <BottomNavigation activeTab="Profile" />
    </main>
  );
};

export default ProfileSettingContainer;
