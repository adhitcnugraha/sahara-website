import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Header = ({ inline, vertical }) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!inline) {
    return (
      <>
        {/* Mobile Menu Icon */}
        <div className="absolute top-6 right-6 z-20">
          {isOpen ? (
            <X
              className="w-6 h-6 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <Menu
              className="w-6 h-6 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 right-6 bg-black text-white p-4 rounded-md shadow-md z-20">
            <ul className="flex flex-col gap-4 text-base">
              <li>
                <Link to="/category" onClick={() => setIsOpen(false)}>
                  Category
                </Link>
              </li>
              <li>
                <Link to="/price" onClick={() => setIsOpen(false)}>
                  Price
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </>
    );
  }

  // Desktop (inline = true)
  return (
    <ul
      className={`text-white font-medium ${
        vertical ? "flex flex-col gap-4" : "flex gap-8"
      }`}
    >
      <li>
        <Link to="/category">Category</Link>
      </li>
      <li>
        <Link to="/price">Price</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Header;
