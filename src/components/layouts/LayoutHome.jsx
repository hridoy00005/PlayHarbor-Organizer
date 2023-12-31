import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LayoutHome = ({ children }) => {
  const { isAuthenticate } = useSelector((state) => state.auth);
  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Navbar Section */}
      <nav className="flex justify-between px-10 bg-gray-800 text-white tracking-wider">
        <div className="py-3 cursor-pointer text-2xl font-bold">Logo</div>
        <div className="flex font-semibold cursor-pointer">
          <Link to="/" className="hover:bg-gray-700 hover:text-sky-400 p-5">
            Home
          </Link>
          <Link
            to="/grounds"
            className="hover:bg-gray-700 hover:text-sky-400 p-5"
          >
            Grounds
          </Link>

          <Link
            to="/account"
            className="hover:bg-gray-700 hover:text-sky-400 p-5"
          >
            {isAuthenticate ? "Account" : "Are You Buyer?"}
          </Link>
        </div>
      </nav>

      {/* Children Home */}
      <div className="min-h-[78.6vh] text-center">{children}</div>

      {/* Footer Section */}
      <footer className="text-white text-sm bg-gray-800 py-5 tracking-wide">
        <center>Copyright @ {new Date().getFullYear()}</center>
      </footer>
    </div>
  );
};

export default LayoutHome;
