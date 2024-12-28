import { IMAGE_PATH } from "@/common/constant/imagePath.constant";
import { PATH_MAIN } from "@/common/routes/path";

export const GALLERY_ITEM = [
  {
    id: 1,
    label: "Girlfriends",
    image: IMAGE_PATH.wallpaper.image1,
    totalItems: 5,
    completedItem: 3,
    navigate: PATH_MAIN.profile.girlfriends,
  },
  {
    id: 2,
    label: "Photos",
    image: IMAGE_PATH.onboarding.image_2,
    totalItems: 5,
    completedItem: 2,
    navigate: PATH_MAIN.profile.photos,
  },
  {
    id: 3,
    label: "Outfits",
    image: IMAGE_PATH.wallpaper.image2,
    totalItems: 5,
    completedItem: 4,
    navigate: PATH_MAIN.profile.outfits,
  },
];

export const TROPHIES = [
  {
    id: 1,
    label: "Consistent Companion",
    description: "Chatting for 7 days straight",
    image: IMAGE_PATH.trophies.trophies1,
    totalItems: 7,
    completedItem: 2,
    isClaimed: false,
  },
  {
    id: 1,
    label: "Night Owl",
    description: "Chat with your girlfriend past midnight.",
    image: IMAGE_PATH.trophies.trophies2,
    totalItems: 5,
    completedItem: 2,
    isClaimed: false,
  },
  {
    id: 1,
    label: "Love Booster",
    description: "In-app purchases $50+",
    image: IMAGE_PATH.trophies.trophies3,
    totalItems: 7,
    completedItem: 7,
    isClaimed: false,
  },
];
