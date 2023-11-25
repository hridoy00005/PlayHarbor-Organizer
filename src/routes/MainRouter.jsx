import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { authRoutes, privateRoutes, publicRoutes } from "./routes";
import { NotFound } from "../pages";
import { AuthRoute, PrivateRoute } from "./RouteProtector";
import LayoutHome from "../components/layouts/LayoutHome";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        {publicRoutes.map(({ path, element }, idx) => (
          <Route key={idx} path={path} element={<LayoutHome>{element}</LayoutHome>} />
        ))}

        {/* All Auth Routes */}
        {authRoutes.map(({ path, element }, idx) => (
          <Route
            key={idx}
            path={path}
            element={<AuthRoute element={element} />}
          />
        ))}

        {/* All Private Routes */}
        {privateRoutes.map(({ path, element }, idx) => (
          <Route
            key={idx}
            path={path}
            element={<PrivateRoute element={element} />}
          />
        ))}

        {/* Not Found Page*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
