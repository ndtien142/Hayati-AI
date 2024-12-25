import BottomNavigation from "@/common/components/BottomNavigation";
import RoomItem from "./components/RoomItem";
import { MESSAGE_ROOM } from "@/_mock/chatting.mock";

const ChattingContainer = () => {
  return (
    <main className="w-[100vw] h-[100vh] relative">
      <div className="px-4 mt-12 text-start w-full">
        <h3
          className="text-2xl text-[#ECECEC] font-editorial_regular"
          style={{
            fontSize: "28px",
          }}
        >
          Message
        </h3>
      </div>
      <div className="w-full h-[calc(100vh-72px)] overflow-y-auto no-scrollbar mt-4">
        {MESSAGE_ROOM?.messages?.map((item) => {
          return (
            <RoomItem
              key={item.id}
              id={item.id}
              name={item.name}
              message={item.message}
              time={item.time}
              unreadCount={item.unreadCount}
              avatarUrl={item.urlAvatar}
            />
          );
        })}
      </div>
      <BottomNavigation activeTab="Chat" />
    </main>
  );
};

export default ChattingContainer;
