import { Link } from 'react-router-dom';
import { useState } from 'react';
import './header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header shadow-md">
      <div className="header-container">
        <Link to="/" className="logo">
          Shop<span className="text-accent">Now</span>
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
        </nav>
      </div>
    </header>
  );
}
