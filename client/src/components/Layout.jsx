import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <div
      className="bg-gradient-to-b
    from-gray-50 to-white
    dark:from-gray-950 dark:to-black
    min-h-screen
    flex flex-col
    transition-colors duration-300"
    >
      <Navbar />

      <main
        className="flex-1 max-w-6xl mx-auto w-full px-6 py-10 text-gray-900 dark:text-white
    transition-colors duration-300"
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
