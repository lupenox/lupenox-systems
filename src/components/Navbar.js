import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOnion, setIsOnion] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detect if on .onion site
  useEffect(() => {
    setIsOnion(window.location.hostname.endsWith(".onion"));
  }, []);

  // Toggle mobile menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a link is clicked (for mobile)
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Toggle between clearnet and .onion
  const toggleVersion = () => {
    const onionURL = "http://plfxe3vmvztzm2ngkiqzup3hlaqig25ln6wc2mdysdf3jcnhotvsanqd.onion";
    const clearnetURL = "https://www.lupenoxsystems.com/";
    window.location.href = isOnion ? clearnetURL : onionURL;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          Lupenox Systems
        </Link>

        {/* Navbar Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav me-auto" onClick={closeMenu}>
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
          </ul>

          <div className="d-flex">
            {/* 🌙 Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="btn btn-outline-light me-2">
              {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>

            {/* 🕵️ Onion Toggle */}
            <button onClick={toggleVersion} className="btn btn-primary">
              {isOnion ? "🌐 Switch to Clearnet" : "🕵️ Switch to .onion"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
