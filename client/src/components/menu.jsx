import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold tracking-wide hover:text-blue-200 transition duration-300">
          ShopNow
        </Link>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-lg hover:text-blue-200 font-medium transition duration-300">Home</Link>
          <Link to="/cart" className="text-lg hover:text-blue-200 font-medium transition duration-300">Cart</Link>
          <Link to="/login" className="text-lg hover:text-blue-200 font-medium transition duration-300">Login</Link>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-blue-200 focus:outline-none"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="bg-blue-600 md:hidden">
          <nav className="flex flex-col items-start space-y-2 p-4">
            <Link to="/" className="text-lg hover:text-blue-200 font-medium transition duration-300">Home</Link>
            <Link to="/cart" className="text-lg hover:text-blue-200 font-medium transition duration-300">Cart</Link>
            <Link to="/login" className="text-lg hover:text-blue-200 font-medium transition duration-300">Login</Link>
          </nav>
        </div>
      )}
    </header>
  );
}