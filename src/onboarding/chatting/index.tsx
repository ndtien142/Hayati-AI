import { useState } from "react";
import {
  MOCK_DATA_CHATTING,
  MOCK_DATA_INFO_CHATROOM,
} from "./chatting.constant";
import { IChatMessage, IChatroomInfo } from "./chatting.interface";
import { IoIosArrowBack } from "react-icons/io";
import { IoImageOutline } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PATH_MAIN } from "@/common/routes/path";

const ChattingContainer = () => {
  const navigate = useNavigate();
  const [chattingInfo] = useState<IChatroomInfo>(MOCK_DATA_INFO_CHATROOM);
  const [messages, setMessages] = useState<IChatMessage[]>([
    ...MOCK_DATA_CHATTING,
  ]);
  const [input, setInput] = useState("");

  return (
    <main className="w-[100vw] h-[100vh] relative">
      <div
        className="absolute inset-0 w-[100vw] h-[100vh]"
        style={{
          backgroundImage: "url(" + chattingInfo.imageBackground + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3.5px)",
          backdropFilter: "blur(6.800000190734863px)",
        }}
      ></div>
      <div className="flex items-center justify-between relative h-[10%]">
        <div className="flex items-center px-4 gap-3">
          <IoIosArrowBack size={20} />
          <img
            src={chattingInfo.image}
            alt="profile"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div>
            <h1 className="text-[20px] font-bold">{chattingInfo.title}</h1>
          </div>
        </div>
        <div className="flex items-center p-4 gap-3">
          <IoImageOutline size={30} />
        </div>
      </div>
      <div className="w-[100vw] h-[80%] relative overflow-y-auto p-4 no-scrollbar">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.isSender ? "justify-end" : "justify-start"
            } mb-2`}
          >
            <div
              className={`p-2 rounded-[20px] max-w-64 ${
                message.isSender
                  ? "bg-white text-black"
                  : "bg-[#D1C5FF] text-black"
              }`}
            >
              <p className="font-[Inter] text-left">{message.message}</p>
              {message.attachment && message.attachment.type === "image" && (
                <div className="relative mt-3 max-w-52">
                  <img
                    src={message.attachment.url}
                    alt="attachment"
                    className={`rounded-[16px] ${
                      message.attachment.isLocked ? "blur-[8px]" : ""
                    }`}
                  />
                  {message.attachment.isLocked && (
                    <Button
                      variant={"outline"}
                      className="w-full mt-2 bg-transparent hover:bg-transparent border-black hover:border-black outline-none bg-none rounded-[24px] min-h-11"
                      onClick={() => navigate(PATH_MAIN.onboarding.subscribe)}
                      style={{ fontWeight: 600, lineHeight: "50px" }}
                    >
                      <FaRegEyeSlash size={35} />
                      View image
                    </Button>
                  )}
                </div>
              )}
              {/* <span className="text-xs text-gray-500">{message.timestamp}</span> */}
            </div>
          </div>
        ))}
      </div>
      <div className="w-[100vw] h-[10%] px-4 flex items-center justify-between relative gap-3">
        <Input
          placeholder="Message"
          className="rounded-[86px] outline-none border-none bg-[#00000042] placeholder:text-white text-[16px] placeholder:text-[16px] px-3 py-2 focus-visible:outline-none focus-visible:border-none focus-visible:ring-0"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div
          className="w-8 h-8 bg-[#FF9BE3] flex items-center justify-center rounded-[12px] p-2"
          onClick={() => {
            if (input.trim()) {
              setMessages([
                ...messages,
                {
                  sender: "You",
                  timestamp: new Date().toLocaleTimeString(),
                  message: input,
                  isSender: true,
                },
              ]);
              setInput("");
            }
          }}
        >
          <FaPaperPlane size={18} />
        </div>
      </div>
    </main>
  );
};

export default ChattingContainer;
