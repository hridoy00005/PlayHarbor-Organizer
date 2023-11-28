import React from "react";
import image from "/auth-bg.jpg";
import { Link } from "react-router-dom";
import { Sidebar } from "../sidebar";
import { useDispatch } from "react-redux";
import { logoutreducer } from "../../store/reducers/authReducer";

const LayoutDashboard = ({ children }) => {
  const dispatch = useDispatch();

  const handlLogout = () => {
    dispatch(logoutreducer());
  };
  return (
    <div className="min-h-screen relative">
      {/* <img src={image} alt="bg img" className="h-full w-full fixed" /> */}
      <div
        className="w-full h-screen fixed inset-0 bg-black bg-opacity-70"
        style={{
          background: "url('/auth-bg.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-full h-screen fixed inset-0 bg-black bg-opacity-20"></div>

      <div className="relative">
        {/* Navbar Section */}
        <nav className="flex justify-between px-10 bg-gray-900 bg-opacity-30  text-white tracking-wider">
          <div className="py-3 cursor-pointer text-2xl font-bold">Logo</div>
          <ul className="flex font-semibold cursor-pointer">
            <li className="backdrop-blur-sm bg-black bg-opacity-20 hover:bg-gray-900 hover:bg-opacity-30 border-x-2 border-transparent hover:border-x-2 hover:border-gray-300 hover:text-sky-400 p-5">
              <Link to="/">Home</Link>
            </li>
            <li className="backdrop-blur-sm bg-black bg-opacity-20 hover:bg-gray-900 hover:bg-opacity-30 border-x-2 border-transparent hover:border-x-2 hover:border-gray-300 hover:text-sky-400 p-5">
              <Link to="/grounds">Grounds</Link>
            </li>
            <li className="backdrop-blur-sm bg-black bg-opacity-20 hover:bg-gray-900 hover:bg-opacity-30 border-x-2 border-transparent hover:border-x-2 hover:border-gray-300 hover:text-sky-400 p-5">
              <Link to="" onClick={handlLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>

        <div className="grid grid-cols-6">
          <Sidebar />
          <div className="col-span-5 py-3 p-3">
            <div className="bg-black bg-opacity-50 backdrop-blur-sm text-gray-300 min-h-[85vh] p-2 rounded-lg">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
