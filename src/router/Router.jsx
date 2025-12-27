import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import ErrorPage from "../Pages/Errorpage/Errorpage";
import Dashboard from "../DashboardLayout/Dashboard/Dashboard";
import Profile from "../DashboardLayout/UserDashboard/Profile";
import Menu from "../DashboardLayout/UserDashboard/Menu";
import MyOrders from "../DashboardLayout/UserDashboard/MyOrders";
import PlaceOrders from "../DashboardLayout/UserDashboard/PlaceOrders";

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
    ],
  },
  // Dashboard Layout

  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'profile',
        Component: Profile
      },
      {
        path: 'menu',
        Component: Menu
      },
      {
        path: 'my-orders',
        Component: MyOrders
      },
      {
        path: 'place-orders',
        Component: PlaceOrders
      }
    ]
  },
]);
