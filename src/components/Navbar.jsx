import { useEffect, useRef, useState } from "react";
import "../styles/components/navbar.css";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const RESUME_URL = ""; // TODO: Add the future résumé URL here when it is available.

function ResumeAction({ onNavigate }) {
  if (RESUME_URL) {
    return (
      <a className="resume-button" href={RESUME_URL} onClick={onNavigate}>
        Resume
      </a>
    );
  }

  return (
    <button
      className="resume-button"
      type="button"
      disabled
      aria-label="Resume (coming soon)"
      title="Resume link coming soon"
    >
      Resume
    </button>
  );
}

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
        <div className="logo">Logan</div>

        <div className="nav-links">
          {navigationItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <ResumeAction />
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
          <ResumeAction onNavigate={closeMenu} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
