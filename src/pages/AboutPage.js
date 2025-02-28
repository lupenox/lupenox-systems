import React, { useEffect } from "react";
import "./AboutPage.css";
import bannerImg from "../assets/images/me_but_cyberpunk.jpg";
import portraitImg from "../assets/images/mirror-selfie.jpg";
import dolphinImg from "../assets/images/owl.jpg";

function AboutPage() {
  useEffect(() => {
    const typewriter = (element, text, i = 0) => {
      if (i < text.length) {
        element.innerHTML = text.substring(0, i + 1);
        setTimeout(() => typewriter(element, text, i + 1), 100);
      }
    };
    
    const heading = document.getElementById("animated-heading");
    if (heading) typewriter(heading, "About Lupenox Systems");
  }, []);

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${bannerImg})` }}>
        <h1 id="animated-heading"></h1>
        <p className="glitch">Secure. Develop. Innovate.</p>
      </div>

      {/* Personal Section */}
      <div className="about-content">
        <img src={portraitImg} alt="Logan Lapierre" className="portrait" />
        <p>
          Hi, I’m Logan! I founded Lupenox Systems to bring top-tier cybersecurity,
          web development, and IT solutions to businesses and individuals. My goal
          is to ensure that digital assets are safe, efficient, and optimized.
        </p>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2 className="neon-text">WHAT WE OFFER</h2>
        <ul className="glitch-box">
          <li>🔐 <strong>Cybersecurity</strong> – Protect your data & prevent threats</li>
          <li>💻 <strong>Web Development</strong> – Custom, high-performance websites</li>
          <li>🛠️ <strong>IT Consulting</strong> – Tailored solutions for business growth</li>
        </ul>
      </div>

      {/* Fun Section */}
      <div className="fun-section">
        <h2 className="neon-text">Beyond Tech</h2>
        <img src={dolphinImg} alt="Logan with a dolphin" className="fun-img" />
        <p>When I’m not coding, I love exploring, traveling, and meeting new creatures! 🐬</p>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Let's Work Together</h2>
        <p>Need secure and optimized IT solutions? Reach out today!</p>
        <a href="/contact" className="cta-btn glitch-hover">Get in Touch</a>
      </div>

      {/* Particle Animation */}
      <div id="particle-container"></div>
    </div>
  );
}

export default AboutPage;
