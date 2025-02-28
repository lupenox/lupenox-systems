import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOnion, setIsOnion] = useState(false);

  // ✅ Check if the user is on a .onion site
  useEffect(() => {
    setIsOnion(window.location.hostname.endsWith(".onion"));
  }, []);

  const toggleVersion = () => {
    const onionURL = "http://plfxe3vmvztzm2ngkiqzup3hlaqig25ln6wc2mdysdf3jcnhotvsanqd.onion";
    const clearnetURL = "https://your-clearnet-domain.com";

    if (isOnion) {
      window.location.href = clearnetURL; // Switch to clearnet
    } else {
      window.location.href = onionURL; // Switch to Tor
    }
  };

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

          {/* 🌙 Dark Mode Toggle Button */}
          <button onClick={toggleDarkMode} className="btn btn-outline-light ms-3">
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>

          {/* 🕵️ .onion Toggle Button */}
          <button onClick={toggleVersion} className="btn btn-primary ms-3">
            {isOnion ? "🌐 Switch to Clearnet" : "🕵️ Switch to .onion"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
