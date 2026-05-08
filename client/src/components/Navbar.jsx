import React from "react";
import { NavLink } from "react-router-dom";
// import { useTheme } from "../context/ThemeContext";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const baseStyle = "px-4 py-2 rounded-lg transition-all duration-300 font-medium";
  const activeStyle = "bg-blue-500 text-white";
  const inactiveStyle =
    "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800";
  return (
    <nav
      className="
    bg-white/80 dark:bg-gray-950/80
    backdrop-blur-xl
    border-b border-gray-200 dark:border-gray-800
    text-black dark:text-white
    sticky top-0 z-50
    transition-all duration-300
  "
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Abhishek.dev
        </h2>

        <div className="flex gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Login
          </NavLink>
        </div>

        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-800
  text-gray-700 dark:text-white p-3 rounded-full
hover:scale-110 hover:rotate-12 shadow-md transition duration-300"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
