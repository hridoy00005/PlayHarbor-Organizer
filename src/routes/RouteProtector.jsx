import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ element }) => {
  const { isAuthenticate } = useSelector((state) => state.auth);

  if (isAuthenticate) {
    return <Navigate to={"/"} />;
  } else return element;
};

export const PrivateRoute = ({ element }) => {
  const { isAuthenticate, user } = useSelector((state) => state.auth);

  if (!isAuthenticate) {
    return <Navigate to={"/login"} />;
  } else if (user.verified) {
    return element;
  } else return <Navigate to={"/profile"} />;
};
