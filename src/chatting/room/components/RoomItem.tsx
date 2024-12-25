import { IRoomItemProps } from "../chatting.interface";
import { replacePathParams } from "@/common/utils/common.utils";
import { PATH_MAIN } from "@/common/routes/path";
import { useNavigate } from "react-router-dom";

const RoomItem = ({
  id,
  message,
  name,
  time,
  unreadCount,
  avatarUrl,
}: IRoomItemProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(
          replacePathParams(PATH_MAIN.chatting.detailRoom, { roomId: `${id}` })
        )
      }
      className="w-full border-b px-4 border-[#2e2e2e] py-3 flex items-center"
    >
      <div className="w-[18%]">
        <div className="w-[65px] h-[65px] object-cover rounded-[100%] overflow-hidden">
          <img
            key={avatarUrl}
            src={avatarUrl}
            className="w-[100%] h-[100%] object-cover rounded-[100%] overflow-hidden"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 ml-3 items-start max-w-[260px] w-[72%]">
        <h5 className="text-xl font-[500]">{name}</h5>
        <p
          className="text-sm"
          style={{
            textAlign: "left",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {message}
        </p>
      </div>
      <div className="w-[10%] flex flex-col gap-1 items-center">
        <h5 className="text-sm font-[500]">{time}</h5>
        <div className="w-6 h-6 bg-[#FF6660] rounded-full text-center flex items-center justify-center">
          <p className="text-xs text-black font-bold text-center">
            {unreadCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
