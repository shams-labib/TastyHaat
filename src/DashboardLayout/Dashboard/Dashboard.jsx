import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../../Components/shared/Logo/Logo";

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
          <SidebarItem icon={<FaUserCircle size={22} />} text="Profile" />
          <SidebarItem icon={<FaUserCircle size={22} />} text="Admin" />
          {/* Add more items here */}
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 lg:p-10 overflow-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome to your profile section. You can add your content or
            functionality here. Use cards, tables, or charts to display your
            data elegantly.
          </p>
        </div>
      </main>
    </div>
  );
};

/* COMPONENT: Sidebar Item */
const SidebarItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-900 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-all duration-200 shadow-sm">
    {icon}
    <span className="font-medium text-gray-800 dark:text-gray-100">{text}</span>
  </div>
);

export default DashboardLayout;
