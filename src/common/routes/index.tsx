import { ElementType, lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import GuestGuard from "../components/guards/GuestGuard";
import { PATH_AUTH, PATH_MAIN } from "./path";
// import { useLocation } from "react-router-dom";

const Loadable =
  (Component: ElementType) => (props: JSX.IntrinsicAttributes) => {
    // const { pathname } = useLocation();

    // const isDashboard = pathname.includes('/dashboard');

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };

export default function Router() {
  return useRoutes([
    // Auth Routes
    {
      path: PATH_AUTH.root,
      element: <AuthLayout />,
      children: [
        {
          path: PATH_AUTH.login,
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: PATH_AUTH.singup,
          element: (
            <GuestGuard>
              <Signup />
            </GuestGuard>
          ),
        },
      ],
    },
    // Main Routes
    {
      path: "*",
      element: <span>Logo only layout</span>,
      children: [
        { path: "500", element: <span>error page 500</span> },
        { path: "404", element: <span>error page 404</span> },
        { path: "403", element: <span>error page 403</span> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: PATH_MAIN.root,
      element: <LogoOnlyLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to={PATH_MAIN.discover.root} replace />,
        },
        {
          path: PATH_MAIN.discover.root,
          element: <DiscoverContainer />,
        },
        {
          path: PATH_MAIN.onboarding.root,
          children: [
            {
              path: PATH_MAIN.onboarding.root,
              element: <Onboarding />,
            },
            {
              path: PATH_MAIN.onboarding.swipe,
              element: <OnboardingSwipe />,
            },
            {
              path: PATH_MAIN.onboarding.match,
              element: <OnboardingMatch />,
            },
            {
              path: PATH_MAIN.onboarding.chatting,
              element: <OnboardingChatting />,
            },
            {
              path: PATH_MAIN.onboarding.subscribe,
              element: <SubscribeContainer />,
            },
          ],
        },
        {
          path: PATH_MAIN.chatting.root,
          children: [
            {
              path: PATH_MAIN.chatting.root,
              element: <ChattingContainer />,
            },
            {
              path: PATH_MAIN.chatting.room,
              element: <ChattingContainer />,
            },
            {
              path: PATH_MAIN.chatting.detailRoom,
              element: <ChattingDetailRoom />,
            },
            {
              path: PATH_MAIN.chatting.wallpaper,
              element: <ChattingWallpaperContainer />,
            },
            {
              path: PATH_MAIN.chatting.wallpaperPreview,
              element: <ChattingWallpaperPreviewContainer />,
            },
          ],
        },
        {
          path: PATH_MAIN.profile.root,
          children: [
            {
              path: PATH_MAIN.profile.home,
              element: <ProfileContainer />,
            },
            {
              path: PATH_MAIN.profile.settings,
              element: <ProfileSettings />,
            },
            {
              path: PATH_MAIN.profile.photos,
              element: <GalleryPhotos />,
            },
            {
              path: PATH_MAIN.profile.girlfriends,
              element: <GalleryGirlfriends />,
            },
          ],
        },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// Layout
const LogoOnlyLayout = Loadable(
  lazy(() => import("../layouts/LogoOnlyLayout"))
);
const AuthLayout = Loadable(lazy(() => import("../layouts/LayoutAuth")));

// Authentication
const Login = Loadable(lazy(() => import("../../auth/login")));
const Signup = Loadable(lazy(() => import("../../auth/signup")));

// OnBoarding
const Onboarding = Loadable(lazy(() => import("../../onboarding")));
const OnboardingSwipe = Loadable(
  lazy(() => import("../../onboarding/swipe/OnboardingSwipe"))
);
const OnboardingMatch = Loadable(
  lazy(() => import("../../onboarding/swipe/MatchOnSwipe"))
);
const OnboardingChatting = Loadable(
  lazy(() => import("../../onboarding/chatting"))
);
const SubscribeContainer = Loadable(
  lazy(() => import("../../onboarding/subscribe"))
);

// Discover
const DiscoverContainer = Loadable(lazy(() => import("../../discover")));

// Chatting
const ChattingContainer = Loadable(lazy(() => import("../../chatting/room")));
const ChattingDetailRoom = Loadable(
  lazy(() => import("../../chatting/detail-room"))
);
const ChattingWallpaperContainer = Loadable(
  lazy(() => import("../../chatting/wallpaper"))
);
const ChattingWallpaperPreviewContainer = Loadable(
  lazy(() => import("../../chatting/wallpaper-preview"))
);

// Profile
const ProfileContainer = Loadable(lazy(() => import("../../profile/home")));
const GalleryPhotos = Loadable(lazy(() => import("../../profile/photos")));
const GalleryGirlfriends = Loadable(
  lazy(() => import("../../profile/girlfriends"))
);
const ProfileSettings = Loadable(lazy(() => import("../../profile/settings")));
