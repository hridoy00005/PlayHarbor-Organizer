import {
  Account,
  CreateGround,
  ForgotPassword,
  Grounds,
  Home,
  Login,
  MyGrounds,
  Profile,
  Registration,
  ResetPassword,
} from "../pages";

export const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/grounds", element: <Grounds /> },
];

export const authRoutes = [
  {
    path: "login",
    element: <Login />,
  },
  { path: "/registration", element: <Registration /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
];

export const privateRoutes = [
  { path: "/account", element: <Account /> },
  { path: "/my-grounds", element: <MyGrounds /> },
  { path: "/create-ground", element: <CreateGround /> },
  { path: "/profile", element: <Profile /> },
];
