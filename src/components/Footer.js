import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light text-center py-3">
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} Lupenox Systems | Built by Logan Lapierre</p>
        
        {/* Social Icons */}
        <div>
          <a href="https://github.com/lupenox" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/logan-lapierre-555348354" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:logan.lupenox@gmail.com" className="text-light mx-2">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
