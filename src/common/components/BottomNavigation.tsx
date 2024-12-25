import React from "react";
import {
  PiChatTeardropFill,
  PiGenderFemaleFill,
  PiUserCircleBold,
} from "react-icons/pi";
import { Link } from "react-router-dom";

interface BottomNavigationProps {
  activeTab: string;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab }) => {
  const navItems = [
    {
      label: "Discover",
      icon: <PiGenderFemaleFill size={25} />,
      color: "#FFF",
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
    <nav className="fixed bottom-0 left-0 w-full border-t border-none bg-[#000000] dark:border-gray-800 px-8 flex justify-between items-center z-50 h-[90px]">
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.route}
          className={`flex flex-col items-center gap-1 text-white hover:text-slate-300 dark:text-gray-400 dark:hover:text-gray-50 ${
            activeTab === item.label ? "text-[#FF9BE3]" : "text-white"
          }`}
        >
          {React.cloneElement(item.icon, {
            color: activeTab === item.label ? "#FF9BE3" : item.color,
          })}
          <span
            className={`text-[16px] font-[800]`}
            style={{ color: activeTab === item.label ? "#FF9BE3" : item.color }}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavigation;
