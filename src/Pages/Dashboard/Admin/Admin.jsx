import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";
import {
  LucideUser,
  LucideShoppingCart,
  LucideDollarSign,
  LucideSun,
  LucideMoon,
} from "lucide-react";

// Demo Data
const summaryData = {
  revenue: 12500,
  members: 150,
  orders: 320,
};

const chartData = [
  { name: "Jan", orders: 30, revenue: 400, members: 10 },
  { name: "Feb", orders: 45, revenue: 600, members: 20 },
  { name: "Mar", orders: 60, revenue: 800, members: 30 },
  { name: "Apr", orders: 80, revenue: 1000, members: 40 },
  { name: "May", orders: 90, revenue: 1200, members: 50 },
  { name: "Jun", orders: 100, revenue: 1400, members: 60 },
];

const AdminDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Admin Dashboard
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition"
          >
            {darkMode ? (
              <LucideSun className="w-5 h-5" />
            ) : (
              <LucideMoon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex items-center space-x-4">
            <LucideDollarSign className="w-10 h-10 text-green-500" />
            <div>
              <p className="text-gray-500 dark:text-gray-300">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                ${summaryData.revenue}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex items-center space-x-4">
            <LucideUser className="w-10 h-10 text-blue-500" />
            <div>
              <p className="text-gray-500 dark:text-gray-300">Total Members</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {summaryData.members}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex items-center space-x-4">
            <LucideShoppingCart className="w-10 h-10 text-purple-500" />
            <div>
              <p className="text-gray-500 dark:text-gray-300">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {summaryData.orders}
              </p>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Orders & Revenue Line Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Orders & Revenue Trend
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={darkMode ? "#444" : "#ccc"}
                />
                <XAxis dataKey="name" stroke={darkMode ? "#eee" : "#333"} />
                <YAxis stroke={darkMode ? "#eee" : "#333"} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? "#1f2937" : "#fff",
                    color: darkMode ? "#eee" : "#333",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#7c3aed"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10b981"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Members Growth Area Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Members Growth
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke={darkMode ? "#eee" : "#333"} />
                <YAxis stroke={darkMode ? "#eee" : "#333"} />
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={darkMode ? "#444" : "#ccc"}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? "#1f2937" : "#fff",
                    color: darkMode ? "#eee" : "#333",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="members"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorMembers)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Orders vs Revenue Bar Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow lg:col-span-2">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Orders vs Revenue
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={darkMode ? "#444" : "#ccc"}
                />
                <XAxis dataKey="name" stroke={darkMode ? "#eee" : "#333"} />
                <YAxis stroke={darkMode ? "#eee" : "#333"} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? "#1f2937" : "#fff",
                    color: darkMode ? "#eee" : "#333",
                  }}
                />
                <Bar dataKey="orders" fill="#7c3aed" />
                <Bar dataKey="revenue" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
