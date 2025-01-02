import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blur-sm backdrop-blur-lg text-white py-5 px-8 shadow-md -mb-24 z-50 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block md:hidden text-gray-300 text-xl focus:outline-none"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div
          className={`absolute top-16 left-0 w-full bg-black bg-opacity-90 z-10 md:static md:flex md:bg-transparent md:space-x-8 md:items-center transition-all ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <a
            href="#home"
            className="block py-2 px-6 text-sm font-medium hover:underline hover:text-gray-300 md:py-0 md:px-0"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 px-6 text-sm font-medium hover:underline hover:text-gray-300 md:py-0 md:px-0"
          >
            About Us
          </a>
          <a
            href="#agents"
            className="block py-2 px-6 text-sm font-medium hover:underline hover:text-gray-300 md:py-0 md:px-0"
          >
            Agents
          </a>
          <a
            href="#blog"
            className="block py-2 px-6 text-sm font-medium hover:underline hover:text-gray-300 md:py-0 md:px-0"
          >
            Blog
          </a>
        </div>

        <div className="flex items-center space-x-5">
          <button className="text-gray-300 text-xl focus:outline-none md:hidden">
            <i className="fas fa-search"></i>
          </button>
          <div className="hidden md:flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-b border-gray-400 text-sm text-gray-300 focus:outline-none focus:border-white"
            />
            <button>
              <i className="fas fa-search text-gray-300"></i>
            </button>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="#signin"
              className="text-sm font-medium hover:underline hover:text-gray-300 whitespace-nowrap"
            >
              Sign In
            </a>
            <span className="text-sm">|</span>
            <a
              href="#signup"
              className="text-sm font-medium hover:underline hover:text-gray-300 whitespace-nowrap"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;