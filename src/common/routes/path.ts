function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOT_AUTH = "/auth";

export const PATH_AUTH = {
  root: ROOT_AUTH,
  login: path(ROOT_AUTH, "/login"),
  singup: path(ROOT_AUTH, "/signup"),
  verify: path(ROOT_AUTH, "/verify"),
  resetPassword: path(ROOT_AUTH, "/reset-password"),
  forgotPassword: path(ROOT_AUTH, "/forgot-password"),
};

export const PATH_PAGE = {
  page403: "/403",
  page404: "/404",
  page500: "/500",
};

export const PATH_MAIN = {
  root: "/",
  onboarding: {
    root: "/onboarding",
    swipe: "/onboarding/swipe",
    match: "/onboarding/match",
    chatting: "/onboarding/chatting",
    subscribe: "/onboarding/subscribe",
  },
  discover: {
    root: "/discover",
  },
  chatting: {
    root: "/chatting",
    room: "/chatting/room",
    detailRoom: "/chatting/room/:roomId",
    wallpaper: "/chatting/wallpaper",
    wallpaperPreview: "/chatting/wallpaper-preview",
  },
  profile: {
    root: "/profile",
    home: "/profile/home",
    settings: "/profile/settings",
    gallery: "/profile/gallery",
    photos: "/profile/gallery/photos",
    girlfriends: "/profile/gallery/girlfriends",
    outfits: "/profile/gallery/outfits",
  },
};
