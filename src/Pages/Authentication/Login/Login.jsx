import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-tr from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <div
        className="w-full max-w-md bg-white/40 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20 dark:border-gray-700/40"
        data-aos="zoom-in"
        data-aos-duration="1200"
      >
        <h2
          className="text-3xl font-extrabold text-center mb-8 dark:text-white"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Welcome Back to <span className="text-red-600">TastyHaat</span>
        </h2>

        {/* Login Form */}
        <form
          className="flex flex-col gap-5"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <input
            type="email"
            placeholder="Email"
            className="p-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300 shadow-sm hover:shadow-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300 shadow-sm hover:shadow-md"
          />

          <button
            type="submit"
            className="py-4 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-lg hover:from-red-600 hover:to-orange-600 shadow-lg transform hover:scale-105 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Or divider */}
        <div
          className="flex items-center my-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
          <span className="mx-3 text-gray-500 dark:text-gray-400 font-semibold">
            OR
          </span>
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
        </div>

        {/* Social Login */}
        <div
          className="flex gap-4 justify-center"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
            <FaGoogle /> Google
          </button>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
            <FaFacebook /> Facebook
          </button>
        </div>

        <p
          className="text-center text-gray-500 dark:text-gray-400 mt-6 text-sm"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Don't have an account?{" "}
          <a
            href="#signup"
            className="text-red-600 hover:underline font-medium"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
