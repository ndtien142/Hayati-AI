import React from "react";
import { Outlet } from "react-router-dom";

const LayoutAuth = () => {
  return (
    <div className="w-[100vw] h-[100vh] no-scrollbar overflow-scroll">
      <Outlet />
    </div>
  );
};

export default LayoutAuth;
