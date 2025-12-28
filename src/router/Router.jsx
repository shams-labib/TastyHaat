import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Errorpage/Errorpage";
import Dashboard from "../DashboardLayout/Dashboard/Dashboard";
import Profile from "../DashboardLayout/UserDashboard/Profile";
import Menu from "../DashboardLayout/UserDashboard/Menu";
import MyOrders from "../DashboardLayout/UserDashboard/MyOrders";

import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AllMenu from "../Pages/AllMenu/AllMenu";
import Register from "../Pages/Authentication/Register/Register";
import Login from "../Pages/Authentication/Login/Login";
import PrivateRoute from "./PrivateRoute";
import MenuDetails from "../Pages/MenuDetails/MenuDetails";
import AdminDashboard from "../Pages/Dashboard/Admin/Admin";
import UsersManagement from "../Pages/Dashboard/UsersManagement/UsersManagement";

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
        path: "/all-menu",
        Component: AllMenu,
      },
      {
        path: "/all-menu/:id",
        element: (
          <PrivateRoute>
            <MenuDetails></MenuDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/contact-us",
        Component: ContactUs,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  // Dashboard Layout

  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "menu",
        Component: Menu,
      },
      {
        path: "my-orders",
        Component: MyOrders,
      },
      {
        path: "admin",
        Component: AdminDashboard,
      },
      {
        path: "users-management",
        Component: UsersManagement,
      },
    ],
  },
]);
