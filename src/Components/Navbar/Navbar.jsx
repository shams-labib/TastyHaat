import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router";
import Logo from "../shared/Logo/Logo";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "All Menu", to: "/all-menu" },
  { name: "About", to: "/about-us" },
  { name: "Contact", to: "/contact-us" },
  { name: "Dashboard", to: "/dashboard" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-all duration-300 ${
      isActive
        ? "text-[#E63946] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#E63946]"
        : "text-gray-700 dark:text-gray-300 hover:text-[#E63946]"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-md transition-colors">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            <Logo />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.to} className={linkClass}>
                {link.name}
              </NavLink>
            ))}

            {/* Order Now Button */}
            <Link
              to="/login"
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
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg bg-[#E63946] px-3 py-2 text-center text-sm font-semibold text-white hover:bg-[#D62839] transition"
            >
              Login Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
