import React from "react";
import { FaUser, FaUserShield } from "react-icons/fa";
import Logo from "../../Components/shared/Logo/Logo";
import {
  MdFormatListBulleted,
  MdFormatListBulletedAdd,
  MdRestaurantMenu,
} from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { NavLink, Outlet } from "react-router";
import { Home } from "lucide-react";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-xl flex flex-col">
        {/* Logo */}
        <div className="flex flex-col items-center py-6 border-b border-gray-200 dark:border-gray-700">
          <Logo />
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-4">
            Dashboard
          </h2>
        </div>

        {/* Sidebar Section */}
        <div className="px-4 py-6 space-y-2">
          <SidebarItem to="/" icon={<Home size={22} />} text="Home" />
          <SidebarItem
            to="/dashboard/profile"
            icon={<FaUser size={22} />}
            text="Profile"
          />
          <SidebarItem
            to="/dashboard/admin"
            icon={<FaUserShield size={22} />}
            text="Admin"
          />
          <SidebarItem
            to="/dashboard/menu"
            icon={<IoRestaurant size={22} />}
            text="Menu"
          />
          <SidebarItem
            to="/dashboard/my-orders"
            icon={<MdFormatListBulleted size={22} />}
            text="My Orders"
          />
          <SidebarItem
            to="/all-menu"
            icon={<MdFormatListBulletedAdd size={22} />}
            text="Place Orders"
          />
          {/* Add more items here */}
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 lg:p-10 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

/* COMPONENT: Sidebar Item */
const SidebarItem = ({ icon, text, to }) => (
  <NavLink
    to={to}
    className="flex items-center gap-3 p-3 rounded-lg text-gray-100 hover:bg-blue-50 dark:hover:bg-gray-900 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-all duration-200 shadow-sm"
  >
    {icon}
    <span className="font-medium text-gray-800 dark:text-gray-100">{text}</span>
  </NavLink>
);

export default DashboardLayout;
