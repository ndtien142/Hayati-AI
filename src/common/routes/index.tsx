import { ElementType, lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import GuestGuard from "../components/guards/GuestGuard";
// import { useLocation } from "react-router-dom";

const Loadable = (Component: ElementType) => (props: any) => {
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
      path: "auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: "signup",
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
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        {
          path: "",
          element: <></>,
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