import React, { useState } from "react";
import { FaUser, FaUserShield } from "react-icons/fa";
import Logo from "../../Components/shared/Logo/Logo";
import {
  MdFormatListBulleted,
  MdFormatListBulletedAdd,
  MdManageAccounts,
} from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { IoRestaurant } from "react-icons/io5";
import { TbReorder } from "react-icons/tb";
import { NavLink, Outlet } from "react-router";
import { Home, Menu, X } from "lucide-react";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static z-50 min-h-screen w-64 bg-white dark:bg-gray-800 shadow-xl flex flex-col transform transition-transform duration-300
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col items-center py-6 border-b border-gray-200 dark:border-gray-700">
          <Logo />
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-4">
            Dashboard
          </h2>
        </div>

        <div className="px-4 py-6 space-y-2">
          <SidebarItem
            to="/"
            icon={<Home size={22} />}
            text="Home"
            onClick={() => setSidebarOpen(false)}
          />
          <SidebarItem
            to="/dashboard/profile"
            icon={<FaUser size={22} />}
            text="Profile"
            onClick={() => setSidebarOpen(false)}
          />
          <SidebarItem
            to="/dashboard/add-menu"
            icon={<IoMdAddCircle size={22} />}
            text="Add Menu"
            onClick={() => setSidebarOpen(false)}
          />
          <SidebarItem
            to="/dashboard/my-menus"
            icon={<IoRestaurant size={22} />}
            text="Posted Menus"
            onClick={() => setSidebarOpen(false)}
          />
          <SidebarItem
            to="/dashboard/admin"
            icon={<FaUserShield size={22} />}
            text="Admin"
            onClick={() => setSidebarOpen(false)}
          />
          <SidebarItem
            to="/dashboard/users-management"
            icon={<MdManageAccounts size={22} />}
            text="Users Management"
            onClick={() => setSidebarOpen(false)}
          />
          <SidebarItem
            to="/dashboard/my-orders"
            icon={<MdFormatListBulleted size={22} />}
            text="My Orders"
            onClick={() => setSidebarOpen(false)}
          />
          <SidebarItem
            to="/all-menu"
            icon={<MdFormatListBulletedAdd size={22} />}
            text="Place Orders"
            onClick={() => setSidebarOpen(false)}
          />
          <SidebarItem
            to="/dashboard/manage-orders"
            icon={<TbReorder size={22} />}
            text="Manage Orders"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <div className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X /> : <Menu />}
          </button>
          <span className="font-semibold text-gray-800 dark:text-gray-100">
            Dashboard
          </span>
        </div>

        <main className="flex-1 p-4 lg:p-10 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, to, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-3 p-3 rounded-lg transition-all duration-200
      ${
        isActive
          ? "bg-primary/10 dark:bg-gray-900 text-primary font-semibold"
          : "text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary dark:hover:bg-gray-900"
      }`
    }
  >
    {icon}
    <span>{text}</span>
  </NavLink>
);

export default DashboardLayout;
