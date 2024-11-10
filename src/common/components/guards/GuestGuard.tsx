import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { PATH_MAIN } from "../../routes/path";
import useAuth from "../../hooks/useAuth";

type GuestGuardProps = {
  children: ReactNode;
};

export default function GuestGuard({ children }: GuestGuardProps) {
  const { isAuthenticated, isInitialized } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={PATH_MAIN.root} />;
  }

  if (!isInitialized) {
    return <div>Loading Screen...</div>;
  }

  return <>{children}</>;
}
