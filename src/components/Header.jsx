import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="absolute top-0 w-full bg-transparent text-white py-6 px-8 flex items-center justify-between z-20">
      {/* Mobile: show menu toggle + icons */}
      <div className="w-full flex justify-end md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop nav */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full md:static md:block md:w-auto md:top-auto md:right-auto md:ml-auto md:mr-8 bg-black bg-opacity-80 md:bg-transparent md:flex md:items-center md:space-x-4 z-30`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
          <li>
            <Link to="/category" className="block py-2 md:py-0 hover:underline">
              Category
              {/* Wedding, Prewed, Graduation, Daily, School */}
            </Link>
          </li>
          <li>
            <Link to="/price" className="block py-2 md:py-0 hover:underline">
              Price
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2 md:py-0 hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
