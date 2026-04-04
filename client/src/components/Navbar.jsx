import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {
    const baseStyle = "px-4 py-2 rounded-md";
    const activeStyle = "bg-blue-500 text-white";
    const inactiveStyle = "text-gray-700 hover:bg-gray-200";
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
        <h2 className="text-xl font-bold">MyPortfolio</h2>

        <div className="flex gap-4">

      <NavLink to='/' 
      className={({isActive }) => `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
      >Home</NavLink>

      <NavLink to='/about' 
      className={({isActive }) => `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
      >About</NavLink>

      <NavLink to='/projects' 
      className={({isActive }) => `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}>Projects</NavLink>

      <NavLink to='/contact' 
      className={({isActive }) => `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}>Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
