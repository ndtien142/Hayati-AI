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
