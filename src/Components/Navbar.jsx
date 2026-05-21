import React, { useState } from "react";
import { BiCategory, BiMenu, BiX } from "react-icons/bi";
import { NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const active = ({ isActive }) => isActive ? "cp" : "";
  const active = ({ isActive }) => isActive ? "text-green-900 " : "";

  return (
    <div className="border-y border-gray-200 py-2">
      <div className="flex items-center justify-between container mx-auto px-4 md:px-24">

        {/* All Category — hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 text-white bgp py-2 px-6">
          <BiCategory />
          <p>All Category</p>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-12">
          <NavLink className={active} to="/" end>Home</NavLink>
          <NavLink className={active} to="/shop">Shop now</NavLink>
          <NavLink className={active} to="/contacts">Contact</NavLink>
          <NavLink className={active} to="/about">About</NavLink>
          <NavLink className={active} to="/blog">Blog</NavLink>
        </div>

        {/* Shop Now — hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 text-white bgp py-2 px-6">
          <BiCategory />
          <p>Shop Now</p>
        </div>

        {/* Mobile: Header row */}
        <div className="flex md:hidden items-center justify-between w-full">
          <div className="flex items-center gap-2 text-white bgp py-2 px-4">
            <BiCategory />
            <p>All Category</p>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 text-2xl p-1">
            {menuOpen ? <BiX /> : <BiMenu />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-4 pb-3 gap-3 border-t border-gray-100 mt-2">
          <NavLink className={active} to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink className={active} to="/shop" onClick={() => setMenuOpen(false)}>Shop now</NavLink>
          <NavLink className={active} to="/contacts" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink className={active} to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink className={active} to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
          <div className="flex items-center gap-2 text-white bgp py-2 px-4 w-fit mt-1">
            <BiCategory />
            <p>Shop Now</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;