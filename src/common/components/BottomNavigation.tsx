import { useState } from "react";
import {
  PiChatTeardropFill,
  PiGenderFemaleFill,
  PiUserCircleBold,
} from "react-icons/pi";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState("Discover");

  const navItems = [
    {
      label: "Discover",
      icon: <PiGenderFemaleFill size={25} />,
      color: "#FF62A5",
      route: "/discover",
    },
    {
      label: "Chat",
      icon: <PiChatTeardropFill size={25} />,
      color: "#FFF",
      route: "/chat",
    },
    {
      label: "Profile",
      icon: <PiUserCircleBold size={25} />,
      color: "#FFF",
      route: "/profile",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full border-t border-gray-200 bg-[#000000] dark:border-gray-800 px-8 flex justify-between items-center z-50 h-[90px]">
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.route}
          className={`flex flex-col items-center gap-1 text-white hover:text-slate-300 dark:text-gray-400 dark:hover:text-gray-50 ${
            activeTab === item.label ? "text-pink-400" : "text-white"
          }`}
          onClick={() => setActiveTab(item.label)} // Set active tab on click
        >
          {item.icon}
          <span
            className={`text-[16px] font-[800] ${
              activeTab === item.label ? "text-pink-400" : "text-white"
            }`}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavigation;
