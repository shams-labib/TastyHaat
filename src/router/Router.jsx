import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import ErrorPage from "../Pages/Errorpage/Errorpage";
import Dashboard from "../DashboardLayout/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
  // Dashboard Layout

  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
  },
]);
