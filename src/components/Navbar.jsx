import "../styles/components/navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="logo">Logan</div>
                <div className="nav-links">
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