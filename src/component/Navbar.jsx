import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/login" className="nav-link">Login</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
        <li><Link to="/products" className="nav-link">Products</Link></li>
      </ul>
    </nav>
  );
}
