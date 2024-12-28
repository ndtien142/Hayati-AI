import { IoIosArrowForward } from "react-icons/io";

interface SettingItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  onClick?: () => void;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  title,
  subtitle,
  onClick,
}) => {
  return (
    <div
      className="flex items-center justify-between p-4 border-b border-[#808080] cursor-pointer hover:bg-gray-800"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <div className="text-xl text-gray-400">{icon}</div>
        <div>
          <p className="text-white font-medium">{title}</p>
          {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
        </div>
      </div>
      <div className="text-gray-400">
        <IoIosArrowForward size={20} color="#FFF" />
      </div>
    </div>
  );
};
export default SettingItem;
