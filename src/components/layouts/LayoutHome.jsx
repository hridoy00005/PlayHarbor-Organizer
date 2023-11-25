import React from "react";
import { Link } from "react-router-dom";

const LayoutHome = ({ children }) => {
  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Navbar Section */}
      <nav className="flex justify-between px-10 bg-gray-800 text-white tracking-wider">
        <div className="py-3 cursor-pointer text-2xl font-bold">Logo</div>
        <ul className="flex font-semibold cursor-pointer">
          <li className="hover:bg-gray-700 hover:text-sky-400 p-5">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-gray-700 hover:text-sky-400 p-5">
            <Link to="/grounds">Grounds</Link>
          </li>
          <li className="hover:bg-gray-700 hover:text-sky-400 p-5">
            <Link to="/account">Are You Buyer?</Link>
          </li>
        </ul>
      </nav>

      {/* Children Home */}
      <div className="min-h-screen text-center">{children}</div>

      {/* Footer Section */}
      <footer className="text-white text-sm bg-gray-800 py-5 tracking-wide">
        <center>Copyright @ {new Date().getFullYear()}</center>
      </footer>
    </div>
  );
};

export default LayoutHome;
