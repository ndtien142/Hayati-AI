import { Outlet } from "react-router-dom";
// components
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function LogoOnlyLayout() {
  return (
    <>
      <span>logo</span>
      <Outlet />
    </>
  );
}
