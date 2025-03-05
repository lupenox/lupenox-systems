import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "./HomePage.css"; 
import homeBanner from "../assets/images/last_banner.webp"; // ✅ Import the image

const HomePage = () => {
  // 🛠 Scroll Animation for Sections
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll("section").forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.8) {
          section.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="homepage-container">
      <main>
        {/* 🔥 Hero Banner Section */}
        <section
  className="home-banner"
  style={{ backgroundImage: `url(${homeBanner})` }}
>
  <div className="typewriter-text-container">
    <h1 className="typewriter-text">
      <Typewriter
        options={{
          strings: [
            "Welcome to Lupenox Systems",
            "Cybersecurity & AI Innovation",
            "Building a Safer Digital World",
          ],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </h1>
  </div>
</section>


        {/* 🛡️ About Section */}
        <section className="about-section">
          <h2>About Lupenox Systems</h2>
          <p>
            At Lupenox Systems, we specialize in cutting-edge <strong>cybersecurity</strong> & <strong>AI solutions </strong> 
            to safeguard your data and optimize your digital presence. From penetration testing to AI-driven security automation, 
            we ensure that businesses and individuals stay protected in an evolving digital landscape.
          </p>
        </section>

        {/* ⚙️ Services Preview Section */}
        <section className="services-preview">
          <h2>Our Services</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>🔐 Cybersecurity Audits</h3>
              <p>We analyze and fortify your systems to prevent cyber threats.</p>
            </div>
            <div className="service-card">
              <h3>🤖 AI-Powered Automation</h3>
              <p>Enhance security and business operations with smart automation.</p>
            </div>
            <div className="service-card">
              <h3>💻 PC Performance Optimization</h3>
              <p>Speed up and secure your system for peak performance.</p>
            </div>
          </div>
        </section>

        {/* 🚀 Call to Action Section */}
        <section className="cta-section">
          <h2>Ready to Secure Your Digital World?</h2>
          <p>Contact us today for expert cybersecurity and AI-driven solutions.</p>
          <Link to="/contact" className="cta-button">Get in Touch</Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
