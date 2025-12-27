import { User } from "lucide-react";
import React, { useState } from "react";

// Demo Users
const demoUsers = [
  {
    id: 1,
    name: "Sefu Da",
    role: "User",
    email: "shams@example.com",
    number: "+880123456789",
    joinDate: "2025-01-15",
    totalOrder: 0,
  },
  {
    id: 2,
    name: "Sheikh Hasina",
    role: "User",
    email: "ayesha@example.com",
    number: "+880987654321",
    joinDate: "2025-02-10",
    totalOrder: 0,
  },
  {
    id: 3,
    name: "Hero to Zero Alom",
    role: "Food Seller",
    email: "rafiq@example.com",
    number: "+8801122334455",
    joinDate: "2025-03-05",
    totalOrder: 0,
  },
];

const UsersManagement = () => {
  const [users, setUsers] = useState(demoUsers);

  const handleRoleChange = (id, newRole) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        User Management
      </h1>

      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
        <table className="table w-full">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="text-left dark:text-white">Name</th>
              <th className="text-left dark:text-white">Role</th>
              <th className="text-left dark:text-white">Email</th>
              <th className="text-left dark:text-white">Number</th>
              <th className="text-left dark:text-white">Join Date</th>
              <th className="text-left dark:text-white">Total Orders</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-900 dark:text-gray-100">
                    {user.name}
                  </span>
                </td>
                <td>
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                    className="select select-bordered select-sm w-full max-w-xs"
                  >
                    <option>User</option>
                    <option>Admin</option>
                    <option>Food Seller</option>
                  </select>
                </td>
                <td className="text-gray-900 dark:text-gray-100">
                  {user.email}
                </td>
                <td className="text-gray-900 dark:text-gray-100">
                  {user.number}
                </td>
                <td className="text-gray-900 dark:text-gray-100">
                  {user.joinDate}
                </td>
                <td className="text-gray-900 dark:text-gray-100">
                  {user.totalOrder}
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
