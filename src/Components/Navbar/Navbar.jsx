import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../shared/Logo/Logo";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Contact", href: "#contact" },
    { name: "dashboard", href: "/dashboard" },
  ];

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-md transition-colors">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <span href="#home" className="text-2xl font-bold">
            <Logo />
          </span>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  activeLink === link.name
                    ? "text-[#E63946] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#E63946]"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#E63946]"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Order Now Button */}
            <Link
              to={"/login"}
              href="#menu"
              className="rounded-lg bg-[#E63946] px-5 py-2 text-sm font-semibold text-white hover:bg-[#D62839] shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Login Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-4 flex flex-col gap-2 transition-all duration-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                  setActiveLink(link.name);
                }}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#menu"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg bg-[#E63946] px-3 py-2 text-center text-sm font-semibold text-white hover:bg-[#D62839] transition"
            >
              Order Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
