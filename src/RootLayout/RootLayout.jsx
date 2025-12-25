import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="dark:bg-gray-800">
      <Navbar></Navbar>
      <section className="min-h-screen">
        <Outlet></Outlet>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
