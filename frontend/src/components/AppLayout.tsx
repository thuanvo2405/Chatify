import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[1fr_4fr]">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
