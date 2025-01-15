// src/components/common/Navbar.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">My Portfolio</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Blog
          </Link>
          <Link
            to="/notebook"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Notebook
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700">
          <Link
            to="/"
            onClick={handleCloseMenu}
            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleCloseMenu}
            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-600 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/blog"
            onClick={handleCloseMenu}
            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-600 transition duration-300"
          >
            Blog
          </Link>
          <Link
            to="/notebook"
            onClick={handleCloseMenu}
            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-600 transition duration-300"
          >
            Notebook
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
