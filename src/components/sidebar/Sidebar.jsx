import React from "react";
import { sidebarMenu } from "./sidebarMenu";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="col-span-1 ml-2">
      {sidebarMenu.map((menu) => (
        <div key={menu.path} className={(location.pathname===menu.path)?"my-5 p-3 text-white bg-slate-400 bg-opacity-50 border-2 border-gray-200 rounded-lg":" my-5 p-3 text-white hover:text-sky-400 bg-slate-800 hover:bg-slate-900 bg-opacity-30 hover:bg-opacity-30 border-2 border-transparent hover:border-2 hover:border-gray-200 rounded-lg"}>
          <Link
            to={menu.path}
            className="flex items-center w-full text-sm font-bold"
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
