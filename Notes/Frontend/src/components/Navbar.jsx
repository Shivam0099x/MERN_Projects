import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none 
     focus:ring-2 focus:ring-blue-400/50 ${
       isActive
         ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
         : 'text-slate-300 hover:bg-slate-700/60 hover:text-white'
     }`

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-700/60 bg-slate-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Brand / Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 
                          text-lg font-bold text-white shadow-md shadow-blue-500/30">
            N
          </div>
          <span className="text-lg font-semibold text-white">Notes</span>
        </NavLink>

        {/* Nav Links */}
        <div className="flex items-center gap-2">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/form" className={linkClass}>
            Form
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar