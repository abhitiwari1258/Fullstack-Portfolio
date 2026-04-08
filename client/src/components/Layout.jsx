import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
const Layout = () => {
  
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
