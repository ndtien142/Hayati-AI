import { IMAGE_PATH } from "@/common/constant/imagePath.constant";

interface Message {
  id: number;
  name: string;
  time: string;
  urlAvatar: string;
  unreadCount: number;
  message: string;
}

interface Meta {
  currentPage: number;
  totalPages: number;
  itemPerPages: number;
  totalCount: number;
}

interface MessageListResponse {
  messages: Message[];
  meta: Meta;
}

export const MESSAGE_ROOM: MessageListResponse = {
  messages: [
    {
      id: 1,
      name: "Daisy",
      time: "2h",
      unreadCount: 4,
      urlAvatar: IMAGE_PATH.onboarding.image_1,
      message:
        "I can’t help but smile when I remember how you told me about your day yesterday",
    },
    {
      id: 2,
      name: "Layla",
      time: "2h",
      unreadCount: 4,
      urlAvatar: IMAGE_PATH.onboarding.image_2,
      message:
        "I really love how we can talk about anything, no matter how big or small.",
    },
    {
      id: 3,
      name: "Naomi",
      time: "2h",
      unreadCount: 4,
      urlAvatar: IMAGE_PATH.onboarding.image_3,
      message: "Just wanted to remind you how special you are to me.",
    },
    {
      id: 4,
      name: "Naomi",
      time: "2h",
      unreadCount: 4,
      urlAvatar: IMAGE_PATH.onboarding.image_4,
      message:
        "I just wish I could wrap my arms around you right now, even if it’s just through words.",
    },
  ],
  meta: {
    currentPage: 1,
    totalPages: 1,
    itemPerPages: 4,
    totalCount: 4,
  },
};
