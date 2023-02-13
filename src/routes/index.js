import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import AuthLayout from "../layouts/auth";
// import Settings from "../pages/dashboard/Settings";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { element: <LoginPage />, path: "login" },
        { element: <RegisterPage />, path: "register" },
        { element: <ResetPage />, path: "reset-password" },
        { element: <NewPasswordPage />, path: "new-password" },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "settings", element: <Settings /> },
        { path: "group", element: <Groups /> },
        { path: "call", element: <Calls /> },
        { path: "profile", element: <Profile /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);

const Settings = Loadable(lazy(() => import("../pages/dashboard/Settings")));
const Groups = Loadable(lazy(() => import("../pages/dashboard/Group")));
const Calls = Loadable(lazy(() => import("../pages/dashboard/Call")));
const Profile = Loadable(lazy(() => import("../pages/dashboard/Profile")));
const LoginPage = Loadable(lazy(() => import("../pages/auth/Login")));
const RegisterPage = Loadable(lazy(() => import("../pages/auth/Register")));
const ResetPage = Loadable(lazy(() => import("../pages/auth/ResetPassword")));
const NewPasswordPage = Loadable(
  lazy(() => import("../pages/auth/NewPassword"))
);

const Page404 = Loadable(lazy(() => import("../pages/Page404")));
