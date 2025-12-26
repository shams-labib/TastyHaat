import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const RootLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="dark:bg-gray-800">
      <Navbar />
      <section className="min-h-screen">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default RootLayout;
