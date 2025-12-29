import React, { useEffect, useState } from "react";
import { User } from "lucide-react";
import { motion } from "framer-motion";

const UsersManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [API_URL]);

  const handleRoleChange = async (id, newRole) => {
    try {
      const res = await fetch(`${API_URL}/users/${id}/role`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: newRole }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Backend error:", data);
        return;
      }

      setUsers((prev) =>
        prev.map((user) =>
          user._id === data.user._id ? { ...user, role: data.user.role } : user
        )
      );
    } catch (error) {
      console.error("Role update failed", error);
      alert("Failed to update role. Try again.");
    }
  };

  if (loading) {
    return <div className="text-center py-20">Loading users...</div>;
  }

  return (
    <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold mb-12"
      >
        User <span className="text-primary">Management</span>
      </motion.h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white dark:bg-gray-800 rounded-lg shadow">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-3 py-2 text-left text-sm sm:text-base">#</th>
              <th className="px-3 py-2 text-left text-sm sm:text-base">Name</th>
              <th className="px-3 py-2 text-left text-sm sm:text-base">Role</th>
              <th className="hidden md:table-cell px-3 py-2 text-left text-sm sm:text-base">
                Email
              </th>
              <th className="hidden lg:table-cell px-3 py-2 text-left text-sm sm:text-base">
                Number
              </th>
              <th className="hidden lg:table-cell px-3 py-2 text-left text-sm sm:text-base">
                Join Date
              </th>
              <th className="hidden xl:table-cell px-3 py-2 text-left text-sm sm:text-base">
                Total Orders
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="px-3 py-2">{index + 1}</td>

                <td className="px-3 py-2 flex items-center gap-2">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-5 h-5 text-gray-500" />
                  )}
                  <span className="text-gray-900 dark:text-gray-100 truncate">
                    {user.name || "Unknown"}
                  </span>
                </td>

                <td className="px-3 py-2">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="select select-bordered select-sm w-full max-w-xs"
                  >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                    <option value="Food Seller">Food Seller</option>
                  </select>
                </td>

                <td className="hidden md:table-cell px-3 py-2 truncate">
                  {user.email}
                </td>

                <td className="hidden lg:table-cell px-3 py-2 truncate">
                  {user.phone || "-"}
                </td>

                <td className="hidden lg:table-cell px-3 py-2">
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "-"}
                </td>

                <td className="hidden xl:table-cell px-3 py-2">
                  {user.totalOrders ?? 0}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
