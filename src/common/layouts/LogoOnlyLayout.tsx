import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function LogoOnlyLayout() {
  const isLogin = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/auth/login", { replace: true });
    }
  }, []);
  return (
    <div className="no-scrollbar overflow-scroll">
      <Outlet />
    </div>
  );
}
