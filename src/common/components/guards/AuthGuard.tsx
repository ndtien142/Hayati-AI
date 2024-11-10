import { loginSelector } from "@/auth/auth.slice";
import { ReactNode } from "react";
// import {  useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------

type AuthGuardProps = {
  children: ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const isAuthenticated = useSelector(loginSelector);
  if (!isAuthenticated) {
    return <div>Login Screen</div>;
  }
  return <>{children}</>;
}
