import { useEffect, useRef, useState } from "react";
import resumePdf from "../assets/Logan_Lapierre_AI_Engineering_Resume.pdf";
import "../styles/components/navbar.css";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#skills" },
  { label: "Flagship Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 801px)");
    const closeMenuAtDesktop = (event) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    desktopQuery.addEventListener("change", closeMenuAtDesktop);
    return () => desktopQuery.removeEventListener("change", closeMenuAtDesktop);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="navbar-inner">
        <a className="logo" href="#about">
          Logan Lapierre <span className="logo-badge">AI</span>
        </a>

        <div className="nav-links">
          {navigationItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <a
            className="resume-button"
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume ↗
          </a>
        </div>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={`${isMenuOpen ? "Close" : "Open"} navigation menu`}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className="menu-toggle-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className="mobile-navigation"
        hidden={!isMenuOpen}
      >
        <div className="mobile-navigation-inner">
          {navigationItems.map((item) => (
            <a
              className="nav-link"
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            className="resume-button mobile-resume-button"
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            View Resume ↗
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


