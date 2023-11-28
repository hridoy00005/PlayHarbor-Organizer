import React, { useEffect } from "react";
import { sidebarMenu } from "./sidebarMenu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    // redirect to profile page for unverified users
    !user.verified && navigate("/profile");
  }, [location.path]);
  return (
    <div className="col-span-1 ml-2">
      {sidebarMenu.map((menu) => (
        <div
          key={menu.path}
          className={
            user.verified
              ? location?.pathname === menu.path
                ? "sidebar-option-active"
                : "sidebar-option"
              : menu.path === "/profile"
              ? "sidebar-option"
              : "sidebar-option-disable"
          }
        >
          <Link
            to={user.verified ? menu.path : "/profile"}
            className="flex items-center w-full p-3 text-sm font-bold"
          >
            <i className={menu.icon}></i>
            <div className="ml-2">{menu.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
