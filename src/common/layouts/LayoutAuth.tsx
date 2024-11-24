import { Outlet } from "react-router-dom";

const LayoutAuth = () => {
  return (
    <div className="no-scrollbar overflow-scroll">
      <Outlet />
    </div>
  );
};

export default LayoutAuth;
