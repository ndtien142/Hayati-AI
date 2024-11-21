import { Outlet } from "react-router-dom";

export default function LogoOnlyLayout() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] no-scrollbar overflow-scroll">
        <Outlet />
      </div>
    </>
  );
}
