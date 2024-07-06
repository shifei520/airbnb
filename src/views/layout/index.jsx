import { memo } from "react";
import { Outlet } from "react-router-dom";

const Layout = memo(() => {
  return (
    <div className="layout">
      <div className="header">header</div>
      <div className="page">
        <Outlet />
      </div>
      <div className="footer">footer</div>
    </div>
  );
});

export default Layout;
