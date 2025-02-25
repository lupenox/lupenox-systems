import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Lupenox Systems</Link>

        {/* Navbar Toggle Button for Mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
          </ul>

          {/* 🌙 Dark Mode Toggle Button (Always Visible) */}
          <button onClick={toggleDarkMode} className="btn btn-outline-light ms-3">
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
