import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const baseStyle = "px-4 py-2 rounded-md";
  const activeStyle = "bg-blue-500 text-white";
  const inactiveStyle = "text-gray-700 hover:bg-gray-200";
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h2 className="text-xl font-bold tracking-tight">Abhishek.dev</h2>

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
      </div>
    </nav>
  );
};

export default Navbar;
