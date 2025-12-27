import React, { useState } from "react";
import useAuth from "../../../Context/useAuth/useAuth";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);

  const { user } = useAuth();

  return (
    <div className="relative inline-block text-left">
      {/* Profile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:shadow-lg transition"
      >
        <img
          src={user?.photoURL}
          alt="profile"
          className="w-10 h-10 rounded-full border-2 border-orange-500"
        />
        <span className="hidden md:block font-medium text-gray-700 dark:text-gray-200">
          {user?.name.split(" ")[0]}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
          <div className="flex items-center p-4 gap-3 border-b border-gray-200 dark:border-gray-700">
            <img
              src={user?.photoURL}
              alt="profile"
              className="w-14 h-14 rounded-full border-2 border-orange-500"
            />
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                {user?.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user?.email}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <button className="px-4 py-2 text-left hover:bg-orange-100 dark:hover:bg-gray-700 transition">
              My Profile
            </button>
            <button className="px-4 py-2 text-left hover:bg-orange-100 dark:hover:bg-gray-700 transition">
              Settings
            </button>
            <button className="px-4 py-2 text-left hover:bg-orange-100 dark:hover:bg-gray-700 transition text-red-500">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
