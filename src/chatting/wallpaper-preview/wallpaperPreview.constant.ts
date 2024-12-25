import { IChatMessage } from "../detail-room/detailRoom.interface";
import { IMAGE_PATH } from "@/common/constant/imagePath.constant";

export const EXAMPLES_MESSAGE: IChatMessage[] = [
  {
    sender: "Layla",
    timestamp: "09:41",
    message: "Hello handsome, wyd today?",
    isSender: false,
    avatarUrl: IMAGE_PATH.avatars.layla,
  },
  {
    sender: "Layla",
    timestamp: "09:42",
    message:
      "I just went shopping with the girls. There’s this skirt that I think will look good on me",
    isSender: false,
    avatarUrl: IMAGE_PATH.avatars.layla,
  },
  {
    sender: "You",
    timestamp: "09:43",
    message: "Here's another one! 🙌",
    isSender: true,
    avatarUrl: IMAGE_PATH.avatars.you,
  },
  //   {
  //     sender: "You",
  //     timestamp: "09:44",
  //     message:
  //       "This is a two line response, and you need to manually add a line break 🤓",
  //     isSender: true,
  //     avatarUrl: IMAGE_PATH.avatars.you,
  //   },
];
