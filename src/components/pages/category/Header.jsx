import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/logoBlack.png";

const Header2 = () => {
  const navItems = ["Category", "Price", "Contact"];
  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="logo" className="h-[64px] w-[85px]" />
          </Link>
          {/* Navigation */}
          <nav className="space-x-8 text-sm tracking-widest uppercase font-light">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-400 border-b border-gray-400 pb-1"
                    : "text-black hover:text-gray-500"
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header2;
