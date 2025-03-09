import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOnion, setIsOnion] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showTorWarning, setShowTorWarning] = useState(false);

  useEffect(() => {
    const hostname = window.location.hostname;
    const isOnionSite = hostname.endsWith(".onion");
    setIsOnion(isOnionSite);

    // Display warning if not on Tor and trying to access .onion
    if (isOnionSite && !navigator.userAgent.includes("Tor")) {
      setShowTorWarning(true);
    }
  }, []);

  const toggleVersion = () => {
    const onionURL = "http://plfxe3vmvztzm2ngkiqzup3hlaqig25ln6wc2mdysdf3jcnhotvsanqd.onion";
    const clearnetURL = "https://your-clearnet-domain.com";

    window.location.href = isOnion ? clearnetURL : onionURL;
  };

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">Lupenox Systems</Link>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleNavbar}>
          ☰
        </div>

        <div className={`nav-links ${isNavOpen ? "active" : ""}`}>
          <Link className="nav-link" to="/" onClick={toggleNavbar}>Home</Link>
          <Link className="nav-link" to="/services" onClick={toggleNavbar}>Services</Link>
          <Link className="nav-link" to="/about" onClick={toggleNavbar}>About</Link>
          <Link className="nav-link" to="/portfolio" onClick={toggleNavbar}>Portfolio</Link>
          <Link className="nav-link" to="/contact" onClick={toggleNavbar}>Contact</Link>
          <Link className="nav-link" to="/blog" onClick={toggleNavbar}>Blog</Link>

          <button onClick={toggleDarkMode} className="btn btn-outline-light">
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>

          <button onClick={toggleVersion} className="btn btn-primary">
            {isOnion ? "🌐 Clearnet" : "🕵️ .onion"}
          </button>
        </div>

        {/* Tor Warning */}
        {showTorWarning && (
          <div className="tor-warning">
            ⚠️ You're not accessing this site via the Tor network. 
            <a href="https://www.torproject.org/" target="_blank" rel="noopener noreferrer">
              Download Tor Browser
            </a> for secure access.
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; fmgo0rfmg