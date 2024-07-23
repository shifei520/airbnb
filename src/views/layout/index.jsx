import { memo } from "react";
import { Outlet } from "react-router-dom";
import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";

const Layout = memo(() => {
  return (
    <div className="layout">
      <AppHeader />
      <div className="page">
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
});

export default Layout;
