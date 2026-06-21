import "../styles/components/navbar.css";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="navbar-inner">
        <a className="logo" href="#home" aria-label="Logan Lapierre home">
          Logan
        </a>

        <div className="nav-links" aria-label="Page sections">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
