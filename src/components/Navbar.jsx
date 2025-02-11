import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import CSS
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">FacilityBooking</Link>
      </div>
      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/facilities" onClick={() => setMenuOpen(false)}>Facilities</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li><Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
